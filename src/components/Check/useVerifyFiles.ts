import { useState, useEffect } from "react";
import { EndUserInstance } from "../../EUSign/useEndUserInstance";
import { SignContainerInfo } from "../../EUSign/EndUserLibrary";
import { FileToUint8 } from "../../utils/encode";
import {
    EndUserCertificateInfoEx,
    EndUserTimeInfo,
    EndUserSignInfo,
    EndUserCertificate,
} from "../../EUSign/eusign.types";
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
    const [verifyResult, setVerifyResult] = useState<EUVerifyResult[]>();
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

    const VerifyFiles = (file: Uint8Array) => {
        (async function () {
            try {
                if (props.library.library && file) {
                    const signContainer = await props.library.library.GetSignContainerInfo(file);
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
                setLoading(false);
            }
        })();
    };

    useEffect(() => {
        setError(undefined);
        setVerifyResult(undefined);
        setSignedData(undefined);
        if (props.library.info.loaded && file) {
            setLoading(true);
            VerifyFiles(file);
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.library.info.loaded, file]);

    return { loading, error, verifyResult, signedData };
}
