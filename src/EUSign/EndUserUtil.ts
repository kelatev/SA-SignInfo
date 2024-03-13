import {
    EndUserSignAlgo,
    EndUserCertKeyType,
    EndUserKeyUsage,
    EndUserHashAlgo,
    EndUserKSP,
    EndUserSignContainerType,
    EndUserASiCSignType,
    EndUserSignType,
    EndUserXAdESSignLevel,
    EndUserPAdESSignLevel,
    EndUserCAdESType,
    EndUserXAdESType,
    EndUserASiCType,
} from "./EndUserConstants";
import { EndUserCertificate } from "./eusign.types";

const TEXT_KEY_TYPE_DSTU4145 = "ДСТУ 4145";
const TEXT_KEY_TYPE_RSA = "RSA";
const TEXT_KEY_TYPE_ECDSA = "ECDSA";
const TEXT_KEY_USAGE_SIGN = "ЕЦП";
const TEXT_KEY_NON_REPUDATION = "Неспростовність";
const TEXT_KEY_USAGE_ENVELOP = "Протоколи розподілу ключів";

const TEXT_SIGN_ALGO_DSTU4145 = "ДСТУ 4145";
const TEXT_SIGN_ALGO_RSA = "RSA";
const TEXT_SIGN_ALGO_ECDSA = "ECDSA";

export function IsDigitalStamp(certificates: EndUserCertificate) {
    const EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";

    var n = certificates.infoEx;
    if (
        n.publicKeyType === EndUserCertKeyType.DSTU4145 &&
        (n.keyUsageType & EndUserKeyUsage.DigitalSignature) === EndUserKeyUsage.DigitalSignature
    )
        return !(
            n.extKeyUsages.indexOf(EU_UA_OID_EXT_KEY_USAGE_STAMP) < 0 &&
            n.extKeyUsages.indexOf("Цифрова печатка") < 0
        );
    else return false;
}

export function GetSignAlgo(publicKeyType: EndUserCertKeyType) {
    switch (publicKeyType) {
        case EndUserCertKeyType.DSTU4145:
            return "ДСТУ-4145";
        case EndUserCertKeyType.RSA:
            return "RSA";
        case EndUserCertKeyType.ECDSA:
            return "ECDSA";
        default:
            return "";
    }
}

export function GetSignFileExt(fileName: string, signContainerType: EndUserSignContainerType) {
    switch (signContainerType) {
        case EndUserSignContainerType.CAdES:
            return ".p7s";
        /* case EndUserSignContainerType.ASiCS:
            return ".asics";
        case EndUserSignContainerType.ASiCE:
            return fileName.endsWith(".asice") || fileName.endsWith(".sce") ? "" : ".asice"; */
        case EndUserSignContainerType.PAdES:
            return "";
        case EndUserSignContainerType.XAdES:
            return fileName.endsWith(".xml") ? "" : ".xml";
        default:
            return "";
    }
}

export function GetSignContainerType(
    signContainerType: EndUserSignContainerType,
    subType: EndUserCAdESType | EndUserXAdESType | EndUserASiCType,
) {
    switch (signContainerType) {
        case EndUserSignContainerType.CAdES:
            switch (subType) {
                case EndUserCAdESType.Detached:
                    return "Підпис та дані в окремих файлах (CAdES detached)";
                case EndUserCAdESType.Enveloped:
                    return "Підпис та дані в одному файлі (CAdES enveloped)";
                default:
                    return "Не визначено";
            }
        case EndUserSignContainerType.XAdES:
            switch (subType) {
                case EndUserXAdESType.Detached:
                    return "Підпис та дані в окремих файлах (XAdES detached)";
                case EndUserXAdESType.Enveloping:
                    return "Підпис та дані в одному файлі (XAdES enveloping)";
                case EndUserXAdESType.Enveloped:
                    return "Підпис та дані в одному файлі (XAdES enveloped)";
                default:
                    return "Не визначено";
            }
        case EndUserSignContainerType.PAdES:
            return "Підписаний PDF-файл (PAdES)";
        case EndUserSignContainerType.ASiC:
            switch (subType) {
                case EndUserASiCType.S:
                    return "Підпис та дані в архіві (ASiC-S)";
                case EndUserASiCType.E:
                    return "Підпис та дані в архіві (розширений) (ASiC-E)";
                default:
                    return "Не визначено";
            }
        default:
            return "Не визначено";
    }
}

export function GetSignFormat(
    containerType: EndUserSignContainerType,
    signLevel?: number,
    aSiCSignType?: EndUserASiCSignType,
) {
    switch (containerType) {
        case EndUserSignContainerType.CAdES:
            return GetCAdESSignLevel(signLevel);
        case EndUserSignContainerType.XAdES:
            return GetXAdESSignLevel(signLevel);
        case EndUserSignContainerType.PAdES:
            return GetPAdESSignLevel(signLevel);
        case EndUserSignContainerType.ASiC:
            switch (aSiCSignType) {
                case EndUserASiCSignType.CAdES:
                    return GetCAdESSignLevel(signLevel);
                case EndUserASiCSignType.XAdES:
                    return GetXAdESSignLevel(signLevel);
                default:
                    return "Не визначено";
            }
        default:
            return "Не визначено";
    }
}

export function GetCAdESSignLevel(signLevel?: EndUserSignType) {
    switch (signLevel) {
        case EndUserSignType.CAdES_BES:
            return "Базовий (CAdES-BES)";
        case EndUserSignType.CAdES_T:
            return "З позначкою часу від ЕП (CAdES-T)";
        case EndUserSignType.CAdES_C:
            return "З посиланнями на повні дані для перевірки (CAdES-C)";
        case EndUserSignType.CAdES_X_Long:
            return "З повними даними для перевірки (CAdES-X Long)";
        case EndUserSignType.CAdES_X_Long | EndUserSignType.CAdES_X_Long_Trusted:
            return "З повними даними ЦСК для перевірки (CAdES-X Long)";
        default:
            return "CAdES (Не визначено)";
    }
}

export function GetXAdESSignLevel(signLevel?: EndUserXAdESSignLevel) {
    switch (signLevel) {
        case EndUserXAdESSignLevel.B_B:
            return "Базовий (XAdES-B-B)";
        case EndUserXAdESSignLevel.B_T:
            return "З позначкою часу від ЕП (XAdES-B-T)";
        case EndUserXAdESSignLevel.B_LT:
            return "З повними даними для перевірки (XAdES-B-LT)";
        case EndUserXAdESSignLevel.B_LTA:
            return "З повними даними для архівного зберігання (XAdES-B-LTA)";
        default:
            return "XAdES (Не визначено)";
    }
}

export function GetPAdESSignLevel(signLevel?: EndUserPAdESSignLevel) {
    switch (signLevel) {
        case EndUserPAdESSignLevel.B_B:
            return "Базовий (PAdES-B-B)";
        case EndUserPAdESSignLevel.B_T:
            return "З позначкою часу від ЕП (PAdES-B-T)";
        case EndUserPAdESSignLevel.B_LT:
            return "З повними даними для перевірки (PAdES-B-LT)";
        case EndUserPAdESSignLevel.B_LTA:
            return "З повними даними для архівного зберігання (PAdES-B-LTA)";
        default:
            return "PAdES (Не визначено)";
    }
}

export function SignAlgoToPublicKeyType(signAlgo?: EndUserSignAlgo) {
    switch (signAlgo) {
        case EndUserSignAlgo.DSTU4145WithGOST34311:
            return EndUserCertKeyType.DSTU4145;
        case EndUserSignAlgo.RSAWithSHA:
            return EndUserCertKeyType.RSA;
        case EndUserSignAlgo.ECDSAWithSHA:
            return EndUserCertKeyType.ECDSA;
        default:
            return EndUserCertKeyType.Unknown;
    }
}

export function SignAlgoToHashAlgo(signAlgo?: EndUserSignAlgo) {
    switch (signAlgo) {
        case EndUserSignAlgo.DSTU4145WithGOST34311:
            return EndUserHashAlgo.GOST34311;
        case EndUserSignAlgo.RSAWithSHA:
        case EndUserSignAlgo.ECDSAWithSHA:
            return EndUserHashAlgo.SHA256;
        default:
            return EndUserHashAlgo.Unknown;
    }
}

export function MakeKeyUsageWithPublicKeyType(
    keyUsageType: EndUserKeyUsage,
    publicKeyType: EndUserCertKeyType,
) {
    let name = "",
        result = [];
    switch (publicKeyType) {
        case EndUserCertKeyType.DSTU4145:
            name = TEXT_KEY_TYPE_DSTU4145;
            break;
        case EndUserCertKeyType.RSA:
            name = TEXT_KEY_TYPE_RSA;
            break;
        case EndUserCertKeyType.ECDSA:
            name = TEXT_KEY_TYPE_ECDSA;
    }

    name = "" !== name ? " (" + name + ")" : "";
    keyUsageType & EndUserKeyUsage.DigitalSignature && result.push(TEXT_KEY_USAGE_SIGN + name);
    keyUsageType & EndUserKeyUsage.NonRepudation && result.push(TEXT_KEY_NON_REPUDATION + name);
    keyUsageType & EndUserKeyUsage.KeyAgreement && result.push(TEXT_KEY_USAGE_ENVELOP + name);
    return result;
}

export function CheckPrivateKey(
    publicKeyType: EndUserCertKeyType,
    keyUsage: EndUserKeyUsage[],
    certificatesInfo?: EndUserCertificate[],
    skip?: boolean,
) {
    const ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO =
        "Зчитаний особистий ключ не підтримує {0}. Необхідно зчитати інший особистий ключ";
    return new Promise<void>((resolve, reject) => {
        if (skip) {
            resolve();
        } else {
            for (var l = certificatesInfo ?? [], c = EndUserKeyUsage.Unknown, f = 0; f < l.length; f++) {
                var _ = l[f].infoEx;
                (publicKeyType !== EndUserCertKeyType.Unknown &&
                    _.publicKeyType !== publicKeyType) ||
                    (c |= _.keyUsageType);
            }
            var keyUsageType = EndUserKeyUsage.Unknown;
            for (let i = 0; i < keyUsage.length; i++) {
                if (0 === (c & keyUsage[i])) {
                    keyUsageType |= keyUsage[f];
                }
            }
            if (keyUsageType === EndUserKeyUsage.Unknown) {
                resolve();
            } else {
                var h = MakeKeyUsageWithPublicKeyType(keyUsageType, publicKeyType);
                reject(ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO.replace("{0}", h.join(", ")));
            }
        }
    });
}

export function GetSupportedSignAlgosByKSP(ksp: EndUserKSP) {
    var result = [];
    switch (ksp) {
        case EndUserKSP.Kyivstar:
            result.push(
                {
                    value: EndUserSignAlgo.ECDSAWithSHA,
                    text: TEXT_SIGN_ALGO_ECDSA,
                },
                {
                    value: EndUserSignAlgo.RSAWithSHA,
                    text: TEXT_SIGN_ALGO_RSA,
                },
            );
            break;
        default:
            result.push({
                value: EndUserSignAlgo.DSTU4145WithGOST34311,
                text: TEXT_SIGN_ALGO_DSTU4145,
            });
    }
    return result;
}

export function GetSupportedSignAlgos(certificates: EndUserCertificate[]) {
    let result = [];
    for (let n = 0; n < certificates.length; n++) {
        const r = certificates[n].infoEx;
        if (
            (r.keyUsageType & EndUserKeyUsage.DigitalSignature) ===
                EndUserKeyUsage.DigitalSignature ||
            (r.keyUsageType & EndUserKeyUsage.NonRepudation) === EndUserKeyUsage.NonRepudation
        )
            switch (r.publicKeyType) {
                case EndUserCertKeyType.DSTU4145:
                    result.push({
                        value: EndUserSignAlgo.DSTU4145WithGOST34311,
                        text: TEXT_SIGN_ALGO_DSTU4145,
                    });
                    break;
                case EndUserCertKeyType.RSA:
                    result.push({
                        value: EndUserSignAlgo.RSAWithSHA,
                        text: TEXT_SIGN_ALGO_RSA,
                    });
                    break;
                case EndUserCertKeyType.ECDSA:
                    result.push({
                        value: EndUserSignAlgo.ECDSAWithSHA,
                        text: TEXT_SIGN_ALGO_ECDSA,
                    });
            }
    }
    return result;
}
