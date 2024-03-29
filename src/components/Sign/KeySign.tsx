import { useEffect, useState } from "react";
import { Cursor, FileDashed } from "@phosphor-icons/react";
import { FileToUint8 } from "../../utils/encode";
import { useEndUserContext } from "../../EUSign/EndUserContext";
import { useKeyContext } from "./KeyContext";
import Timeline from "../Timeline/Timeline";
import { CheckPrivateKey, SignAlgoToPublicKeyType } from '../../EUSign/EndUserUtil'
import { EndUserKeyUsage, EndUserSignAlgo, EndUserSignType, EndUserCAdESType, EU_SIGN_TYPE_PARAMETER } from '../../EUSign/EndUserConstants'

export default function KeySign() {
    const { currentLibrary, Confirmation } = useEndUserContext();
    const { privateKey } = useKeyContext();

    const [fileToSign, setFileToSign] = useState<File | null>();
    const [signedData, setSignedData] = useState<Uint8Array>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (currentLibrary?.info.loaded && fileToSign) {
            (async function () {
                //OnSignFile
                try {
                    await CheckPrivateKey(
                        SignAlgoToPublicKeyType(privateKey?.settings?.signAlgo), [
                        EndUserKeyUsage.DigitalSignature |
                        EndUserKeyUsage.NonRepudation,
                    ], privateKey?.certificates);
                    await currentLibrary.library?.SetRuntimeParameter(EU_SIGN_TYPE_PARAMETER, privateKey?.settings?.signFormat ?? EndUserSignType.CAdES_BES);
                    const data = await FileToUint8(fileToSign);
                    const result = await currentLibrary.library?.SignDataEx(
                        privateKey?.settings?.signAlgo ?? EndUserSignAlgo.DSTU4145WithGOST34311,
                        data,
                        privateKey?.settings?.signType === EndUserCAdESType.Detached,
                        true,
                    );
                    setSignedData(result as Uint8Array);
                    Confirmation.StopTimer();
                } catch (e: any) {
                    console.log(e);
                    setError(`${e.message} (${e.code})`);
                    setSignedData(undefined);
                    Confirmation.StopTimer();
                }
            })();
        }
    }, [
        currentLibrary?.library,
        currentLibrary?.info.loaded,
        privateKey?.certificates,
        privateKey?.settings?.signType,
        privateKey?.settings?.signAlgo,
        privateKey?.settings?.signFormat,
        fileToSign,
        Confirmation
    ]);

    return (
        <>
            <Timeline.Item title='Файл для підпису' icon={<Cursor />}>
                <Timeline.FileSelect onFileChange={setFileToSign} />
            </Timeline.Item>
            {fileToSign && !signedData && (
                <Timeline.Spinner title='Підписування файлу' icon={<FileDashed />} error={error} />
            )}
            {signedData && (
                <Timeline.FileData title={"Результат"} data={signedData} fileName={"sign.p7s"} />
            )}
        </>
    );
}
