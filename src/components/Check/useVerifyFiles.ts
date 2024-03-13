import { useState, useEffect, useCallback } from "react";
import { EndUserInstance } from "../../EUSign/useEndUserInstance";
import { FileToUint8 } from "../../utils/encode";
import { EndUserCertificateInfoEx, EndUserTimeInfo } from "../../EUSign/eusign.types";
import { EndUserSignContainerType } from "../../EUSign/EndUserConstants";
import {
    IsDigitalStamp,
    GetSignAlgo,
    GetSignFormat,
    GetSignContainerType,
} from "../../EUSign/EndUserUtil";

/* type EUVerifyErrorCode = {
    NoError: 0;
    NoFileWithData: 1;
    InvalidFileFormat: 2;
    FileTooBig: 3;
}; */

type EUVerifySignInfo = {
    signerInfo: EndUserCertificateInfoEx;
    signTimeInfo: EndUserTimeInfo;
    isDigitalStamp: boolean;
    signAlgo: string;
    signFormat: string;
    signContainerType: string;
};

export interface EUVerifyResult {
    signFile: Blob;
    signType: EndUserSignContainerType;
    signsInfos: Array<EUVerifySignInfo>;
}

interface Props {
    library: EndUserInstance;
    file: File | null;
}

export default function useVerifyFiles(props: Props) {
    const [file, setFile] = useState<Uint8Array>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [verifyResult, setVerifyResult] = useState<EUVerifyResult>();
    const [signedData, setSignedData] = useState<Uint8Array>();

    useEffect(() => {
        if (props.file) {
            FileToUint8(props.file).then(data => setFile(data));
        } else {
            setLoading(false);
            setError(undefined);
            setVerifyResult(undefined);
            setSignedData(undefined);
        }
    }, [props.file]);

    const VerifyFiles = useCallback(
        (file: Uint8Array) => {
            (async function () {
                try {
                    if (props.library.library && file) {
                        const signContainer = await props.library.library.GetSignContainerInfo(
                            file,
                        );
                        const signInfo = await props.library.library.VerifyDataInternal(file, 0);
                        const signerCert = await props.library.library.GetSigner(file, 0);

                        setLoading(false);
                        setVerifyResult({
                            signFile: new Blob([signerCert.data]),
                            signType: signContainer.type,
                            signsInfos: [
                                {
                                    signerInfo: signerCert.infoEx,
                                    signTimeInfo: signInfo.timeInfo,
                                    isDigitalStamp: IsDigitalStamp(signerCert),
                                    signAlgo: GetSignAlgo(signerCert.infoEx.publicKeyType),
                                    signFormat: GetSignFormat(
                                        signContainer.type,
                                        signInfo.signLevel,
                                    ),
                                    signContainerType: GetSignContainerType(
                                        signContainer.type,
                                        signContainer.subType,
                                    ),
                                },
                            ],
                        });
                        signInfo.data && setSignedData(signInfo.data);
                    }
                } catch (e: any) {
                    console.log(e);
                    setError(`${e.message} (${e.code})`);
                    setLoading(false);
                }
            })();
        },
        [props.library],
    );

    useEffect(() => {
        setError(undefined);
        setVerifyResult(undefined);
        setSignedData(undefined);
        if (props.library.info?.loaded && file) {
            setLoading(true);
            VerifyFiles(file);
        } else {
            setLoading(false);
        }
    }, [props.library.info?.loaded, file, VerifyFiles]);

    return { loading, error, verifyResult, signedData };
}
