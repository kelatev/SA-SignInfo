import { useState, useEffect } from "react";
import { EndUserInstance } from "../../EUSign/useEndUserInstance";
import { SignContainerInfo } from "../../EUSign/EndUserLibrary";
import { IFile } from "../../utils/types";
import {
    EndUserCertificateInfoEx,
    EndUserTimeInfo,
    EndUserSignInfo,
    EndUserCertificate,
} from "../../EUSign/EndUserTypes";
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
    file: IFile | null;
    cert: IFile | null;
}

export default function useVerifyFiles(props: Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [errorCode, setErrorCode] = useState<number>();
    const [verifyResult, setVerifyResult] = useState<EUVerifyResult[]>();
    const [signedData, setSignedData] = useState<Uint8Array>();

    const CreateSignInfoResult = (
        signContainer: SignContainerInfo,
        signInfo: EndUserSignInfo,
        signerCert: EndUserCertificate,
    ): EUVerifyResult => {
        return {
            signFile: new Blob([signerCert.data]),
            signType: signContainer.type,
            signsInfos: [
                {
                    signerInfo: signerCert.infoEx,
                    signTimeInfo: signInfo.timeInfo,
                    isDigitalStamp: IsDigitalStamp(signerCert),
                    signAlgo: GetSignAlgo(signerCert.infoEx.publicKeyType),
                    signFormat: GetSignFormat(signContainer.type, signInfo.signLevel),
                    signContainerType: GetSignContainerType(
                        signContainer.type,
                        signContainer.subType,
                    ),
                },
            ],
        };
    };

    const VerifyFiles = (file: Uint8Array, fileCert: Uint8Array | undefined) => {
        (async function () {
            try {
                if (props.library.library && file) {
                    const signContainer = await props.library.library.GetSignContainerInfo(file, fileCert);
                    const signInfo = await props.library.library.VerifyDataInternal(file, 0);
                    const signerCert = await props.library.library.GetSigner(file, 0);

                    const results: EUVerifyResult[] = [];
                    if (!Array.isArray(signInfo) && !Array.isArray(signerCert)) {
                        results.push(CreateSignInfoResult(signContainer, signInfo, signerCert));
                    }
                    setVerifyResult(results);
                    setLoading(false);

                    let data: Uint8Array | undefined;
                    if (!Array.isArray(signInfo)) {
                        data = signInfo.data;
                    }
                    data && setSignedData(data);
                }
            } catch (e: any) {
                console.log(e);
                setError(`${e.message} (${e.code})`);
                setErrorCode(e.code);
                setLoading(false);
            }
        })();
    };

    useEffect(() => {
        setError(undefined);
        setErrorCode(undefined);
        setVerifyResult(undefined);
        setSignedData(undefined);
        if (props.library.info.loaded && props.file?.content) {
            setLoading(true);
            VerifyFiles(props.file?.content, props.cert?.content);
        } else {
            setLoading(false);
        }
    }, [props.library.info.loaded, props.file, props.cert]);

    return { loading, error, errorCode, verifyResult, signedData };
}
