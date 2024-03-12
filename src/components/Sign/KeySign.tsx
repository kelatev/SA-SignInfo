import { useEffect, useState } from "react";
import { Cursor, FileDashed } from "@phosphor-icons/react";
import { FileToUint8 } from "../../utils/encode";
import { useEUSignContext } from "../../EUSign/EUSignContext";
import { useKeyContext } from "./KeyContext";
import Timeline from "../Timeline/Timeline";
import { SignType } from './types'

export default function KeySign() {
    const { currentLibrary } = useEUSignContext();
    const { privateKey } = useKeyContext();

    const [fileToSign, setFileToSign] = useState<File | null>();
    const [signedData, setSignedData] = useState<Uint8Array>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (currentLibrary?.info.loaded && fileToSign) {
            (async function () {
                try {
                    const data = await FileToUint8(fileToSign);
                    const result = await currentLibrary.library?.SignDataEx(
                        privateKey?.settings?.signAlgo as number,
                        data,
                        privateKey?.settings?.signType === SignType.Ext,
                        true,
                    );
                    setSignedData(result);
                } catch (e: any) {
                    console.log(e);
                    setError(`${e.message} (${e.code})`);
                    setSignedData(undefined);
                }
            })();
        }
    }, [
        currentLibrary?.library,
        privateKey?.settings?.signAlgo,
        currentLibrary?.info.loaded,
        privateKey?.settings?.signType,
        fileToSign,
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
