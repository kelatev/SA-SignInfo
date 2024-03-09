import { useState, useEffect, useCallback } from "react";
import { EndUserInstance } from "../hooks/useEndUserInstance";
import { FileToUint8 } from "../utils/encode";
import { EndUserCertificateInfoEx, EndUserTimeInfo } from "../EUSign/eusign.types";
import { SignContainerInfo } from "../EUSign/EndUserLibrary";

type EUVerifyErrorCode = {
    NoError: 0;
    NoFileWithData: 1;
    InvalidFileFormat: 2;
    FileTooBig: 3;
};

enum EUSignContainerType {
    Unknown = 0x0000,
    Detached = 0x0001,
    Enveloped = 0x0002,
    Enveloping = 0x0004,
    Multi = 0x0008,
    Base64 = 0x0010,
    ASiCS = 0x0020,
    ASiCE = 0x0040,
    CAdES = 0x0080,
    XAdES = 0x0100,
    PAdES = 0x0200,
}

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
    signType: EUSignContainerType;
    signsInfos: Array<EUVerifySignInfo>;
}

const UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";
function IsSignerDigitalTimeStamp(info: EndUserCertificateInfoEx) {
    return (
        info.extKeyUsages.indexOf(UA_OID_EXT_KEY_USAGE_STAMP) > -1 ||
        info.extKeyUsages.indexOf("Цифрова печатка") > -1
    );
}

function GetSignAlgo(info: EndUserCertificateInfoEx) {
    switch (info.publicKeyType) {
        case 1 /*CERT_KEY_TYPE_DSTU4145*/:
            return "ДСТУ-4145";
        case 2 /*CERT_KEY_TYPE_RSA*/:
            return "RSA";
        case 4 /*CERT_KEY_TYPE_ECDSA*/:
            return "ECDSA";
        default:
            return "";
    }
}

function GetSignContainerType(signContainerType: number) {
    if (signContainerType & EUSignContainerType.ASiCS) {
        return "Підпис та дані в архіві (ASiC-S)";
    } else if (signContainerType & EUSignContainerType.ASiCE) {
        return "Підпис та дані в архіві (розширений) (ASiC-E)";
    } else if (signContainerType & EUSignContainerType.PAdES) {
        return "Підписаний PDF-файл (PAdES)";
    } else if (signContainerType & EUSignContainerType.CAdES) {
        if (signContainerType & EUSignContainerType.Enveloped)
            return "Підпис та дані в одному файлі (CAdES enveloped)";
        else if (signContainerType & EUSignContainerType.Detached)
            return "Підпис та дані в окремих файлах (CAdES detached)";
        else return "Не визначено";
    } else if (signContainerType & EUSignContainerType.XAdES) {
        if (signContainerType & EUSignContainerType.Enveloped)
            return "Підпис та дані в одному файлі (XAdES enveloped)";
        else if (signContainerType & EUSignContainerType.Detached)
            return "Підпис та дані в окремих файлах (XAdES detached)";
        else if (signContainerType & EUSignContainerType.Enveloping)
            return "Підпис та дані в одному файлі (XAdES enveloping)";
        else return "Не визначено";
    } else return "Не визначено";
}

function GetCAdESSignLevel(signLevel: number) {
    switch (signLevel) {
        case 1 /*EU_SIGN_TYPE_CADES_BES*/:
            return "Базовий (CAdES-BES)";
        case 4 /*EU_SIGN_TYPE_CADES_T*/:
            return "З позначкою часу від ЕП (CAdES-T)";
        case 8 /*EU_SIGN_TYPE_CADES_C*/:
            return "З посиланнями на повні дані для перевірки (CAdES-C)";
        case 16 /*EU_SIGN_TYPE_CADES_X_LONG*/:
            return "З повними даними для перевірки (CAdES-X Long)";
        case 16 /*EU_SIGN_TYPE_CADES_X_LONG*/ | 128 /*EU_SIGN_TYPE_CADES_X_LONG_TRUSTED*/:
            return "З повними даними ЦСК для перевірки (CAdES-X Long)";
        default:
            return "CAdES (Не визначено)";
    }
}

function GetXAdESSignLevel(signLevel: number) {
    switch (signLevel) {
        case 1 /*EU_XADES_SIGN_LEVEL_B_B*/:
            return "Базовий (XAdES-B-B)";
        case 4 /*EU_XADES_SIGN_LEVEL_B_T*/:
            return "З позначкою часу від ЕП (XAdES-B-T)";
        case 16 /*EU_XADES_SIGN_LEVEL_B_LT*/:
            return "З повними даними для перевірки (XAdES-B-LT)";
        case 32 /*EU_XADES_SIGN_LEVEL_B_LTA*/:
            return "З повними даними для архівного зберігання (XAdES-B-LTA)";
        default:
            return "XAdES (Не визначено)";
    }
}

function GetPAdESSignLevel(signLevel: number) {
    switch (signLevel) {
        case 1 /*EU_PADES_SIGN_LEVEL_B_B*/:
            return "Базовий (PAdES-B-B)";
        case 4 /*EU_PADES_SIGN_LEVEL_B_T*/:
            return "З позначкою часу від ЕП (PAdES-B-T)";
        case 16 /*EU_PADES_SIGN_LEVEL_B_LT*/:
            return "З повними даними для перевірки (PAdES-B-LT)";
        case 32 /*EU_PADES_SIGN_LEVEL_B_LTA*/:
            return "З повними даними для архівного зберігання (PAdES-B-LTA)";
        default:
            return "PAdES (Не визначено)";
    }
}
interface Props {
    library: EndUserInstance;
    file: File | null;
}

function decodeSignContainerType(info: SignContainerInfo) {
    const EU_CADES_TYPE_DETACHED = 1;
    const EU_CADES_TYPE_ENVELOPED = 3;

    const EU_SIGN_CONTAINER_TYPE_CADES = 1;
    const EU_SIGN_CONTAINER_TYPE_XADES = 2;
    const EU_SIGN_CONTAINER_TYPE_PADES = 3;
    const EU_SIGN_CONTAINER_TYPE_ASIC = 4;

    let signContainerType = 0;
    switch (info.type) {
        case EU_SIGN_CONTAINER_TYPE_CADES:
            signContainerType = EUSignContainerType.CAdES;
            signContainerType |=
                info.subType === EU_CADES_TYPE_DETACHED
                    ? EUSignContainerType.Detached
                    : EUSignContainerType.Enveloped;
            break;
        case EU_SIGN_CONTAINER_TYPE_XADES:
            signContainerType = EUSignContainerType.XAdES;
            break;
        case EU_SIGN_CONTAINER_TYPE_PADES:
            signContainerType = EUSignContainerType.PAdES;
            break;
        case EU_SIGN_CONTAINER_TYPE_ASIC:
            signContainerType = EUSignContainerType.ASiCE;
            break;
    }
    return signContainerType;
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

                        const signContainerType = decodeSignContainerType(signContainer);
                        const signFormat = signInfo.signLevel || 0;

                        setLoading(false);
                        setVerifyResult({
                            signFile: new Blob([signerCert.data]),
                            signType: signContainer.type,
                            signsInfos: [
                                {
                                    signerInfo: signerCert.infoEx,
                                    signTimeInfo: signInfo.timeInfo,
                                    isDigitalStamp: IsSignerDigitalTimeStamp(signerCert.infoEx),
                                    signAlgo: GetSignAlgo(signerCert.infoEx),
                                    signFormat:
                                        signContainerType & EUSignContainerType.XAdES
                                            ? GetXAdESSignLevel(signFormat)
                                            : signContainerType & EUSignContainerType.PAdES
                                            ? GetPAdESSignLevel(signFormat)
                                            : GetCAdESSignLevel(signFormat),
                                    signContainerType: GetSignContainerType(signContainerType),
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
