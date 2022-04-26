import EUSignCPPromise from "./EUSignCPPromise";
import {EUSignCP, EndUserLibraryLoader} from "./eusw";
import {EndUserCertificateInfoEx} from "./types";

const EUSignContainerType = {
    Unknown: 0x0000,
    Detached: 0x0001,
    Enveloped: 0x0002,
    Enveloping: 0x0004,
    Multi: 0x0008,
    Base64: 0x0010,
    ASiCS: 0x0020,
    ASiCE: 0x0040,
    CAdES: 0x0080,
    XAdES: 0x0100,
    PAdES: 0x0200
};
const EU_ASIC_SIGN_LEVEL_BES = 1;
const EU_ASIC_SIGN_LEVEL_T = 4;

export default class EUSignCPFrontend extends EUSignCPPromise {
    static async loadLibrary(): Promise<EUSignCPFrontend> {
        const self = new EUSignCPFrontend();
        await self.m_library.Load();
        return self;
    }

    IsSignerDigitalTimeStamp(info: EndUserCertificateInfoEx) {
        return info.GetExtKeyUsages().indexOf(this.m_library.m_library.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1;
    }

    GetSignAlgo(info: EndUserCertificateInfoEx) {
        const EU_CERT_KEY_TYPE_DSTU4145 = 0x01;
        const EU_CERT_KEY_TYPE_RSA = 0x02;
        const EU_CERT_KEY_TYPE_ECDSA = 0x04;

        switch (info.GetPublicKeyType()) {
            case EU_CERT_KEY_TYPE_DSTU4145:
                return "ДСТУ-4145";
            case EU_CERT_KEY_TYPE_RSA:
                return "RSA";
            case EU_CERT_KEY_TYPE_ECDSA:
                return "ECDSA";
            default:
                return '';
        }
    }

    GetSignContainerType(signContainerType: number) {
        if (signContainerType & EUSignContainerType.ASiCS) {
            return 'Підпис та дані в архіві (ASiC-S)';
        } else if (signContainerType & EUSignContainerType.ASiCE) {
            return 'Підпис та дані в архіві (розширений) (ASiC-E)';
        } else if (signContainerType & EUSignContainerType.PAdES) {
            return 'Підписаний PDF-файл (PAdES)';
        } else if (signContainerType & EUSignContainerType.CAdES) {
            if (signContainerType & EUSignContainerType.Enveloped)
                return 'Підпис та дані в одному файлі (CAdES enveloped)';
            else if (signContainerType & EUSignContainerType.Detached)
                return 'Підпис та дані в окремих файлах (CAdES detached)';
            else
                return 'Не визначено';
        } else if (signContainerType & EUSignContainerType.XAdES) {
            if (signContainerType & EUSignContainerType.Enveloped)
                return 'Підпис та дані в одному файлі (XAdES enveloped)';
            else if (signContainerType & EUSignContainerType.Detached)
                return 'Підпис та дані в окремих файлах (XAdES detached)';
            else if (signContainerType & EUSignContainerType.Enveloping)
                return 'Підпис та дані в одному файлі (XAdES enveloping)';
            else
                return 'Не визначено';
        }
    }

    GetCAdESFormat(signFormat: number) {
        switch (signFormat) {
            case this.m_library.m_library.EU_SIGN_TYPE_CADES_BES:
                return "Базовий (CAdES-BES)";
            case this.m_library.m_library.EU_SIGN_TYPE_CADES_T:
                return "З позначкою часу від ЕП (CAdES-T)";
            case this.m_library.m_library.EU_SIGN_TYPE_CADES_C:
                return "З посиланнями на повні дані для перевірки (CAdES-C)";
            case this.m_library.m_library.EU_SIGN_TYPE_CADES_X_LONG:
                return "З повними даними для перевірки (CAdES-X Long)";
            case this.m_library.m_library.EU_SIGN_TYPE_CADES_X_LONG |
            this.m_library.m_library.EU_SIGN_TYPE_CADES_X_LONG_TRUSTED:
                return "З повними даними ЦСК для перевірки (CAdES-X Long)";
            default:
                return 'CAdES';//'Не визначено';!!!!
        }
    }

    GetXAdESFormat(signFormat: number) {
        switch (signFormat) {
            case EU_ASIC_SIGN_LEVEL_BES:
                return "Базовий (XAdES-BES)";
            case EU_ASIC_SIGN_LEVEL_T:
                return "З позначкою часу від ЕП (XAdES-T)";
            default:
                return 'XAdES';//'Не визначено';!!!!
        }
    }

    /*IsUseCRLs(issuerCN) {
        if (!s_settings.CRLs)
            return false;

        var CRLs = s_settings.CRLs;

        for (var i = 0; i < CRLs.length; i++) {
            if (CRLs[i].issuerCNs.indexOf(issuerCN) > -1) {
                if (!CRLs[i].downloaded) {
                    for (var j = 0; j < CRLs[i].CRLs.length; j++) {
                        var crl = DowloadData(CRLs[i].CRLs[j], 'binary');
                        euSign.SaveCRL(true, crl);
                    }

                    CRLs[i].downloaded = true;
                }

                return true;
            }
        }

        return false;
    }*/

    IsQSCDSNInCert(issuerCN: string) {
        const CAs: any = this.m_settings?.CAs || [];
        for (let i = 0; i < CAs.length; i++) {
            const CA = CAs[i];
            if (CA.qscdSNInCert &&
                CA.issuerCNs.indexOf(issuerCN) > -1) {
                return true;
            }
        }

        return false;
    }

    /*async GetQSCD(cert: Uint8Array) {
        const qscd: any = {
            use: false,
            name: null,
            sn: null
        };

        try {
            const infoEx = await this.ParseCertificateEx(cert);
            qscd.use = infoEx.IsQSCD();

            if (qscd.use) {
                var extKeyUsages = infoEx.GetExtKeyUsages().split(',');
                for (var i = 0; i < extKeyUsages.length; i++) {
                    if (extKeyUsages[i].indexOf("ЗНКІ") > -1) {
                        qscd.name = extKeyUsages[i];
                        break;
                    }
                }

                if (qscd.name && IsQSCDSNInCert(infoEx.GetIssuerCN())) {
                    qscd.sn = infoEx.GetSubjUserCode();
                }
            } else if ((infoEx.GetPublicKeyType() ==
                    EU_CERT_KEY_TYPE_ECDSA ||
                    infoEx.GetPublicKeyType() ==
                    EU_CERT_KEY_TYPE_RSA) &&
                IsQSCDSNInCert(infoEx.GetIssuerCN()) &&
                infoEx.GetSubjUserID() &&
                (infoEx.GetSubjUserID().length == 20)) {
                qscd.use = true;
                qscd.name = "ЗНКІ SIM-карта Київстар (MobileID)";
                qscd.sn = infoEx.GetSubjUserID().substr(0, 19);
            }

            if (qscd.use) {
                qscd.name = 'Захищений' +
                    (qscd.name ? ' (' + qscd.name + ')' : '');
                qscd.sn = qscd.sn ?
                    qscd.sn : 'Не визначено';
            } else {
                qscd.name = 'Незахищений';
                qscd.sn = '';
            }

            return qscd;
        } catch (e) {
            qscd.use = false;
        }

        return qscd;
    }*/

    /*CreateSignInfoResult(signInfo, signerCert, signFormat,
                         signContainerType, isAllContentCovered) {
        return new EUVerifySignInfo(
            signerCert.GetInfoEx().GetTransferableObject(),
            signInfo.GetTimeInfo().GetTransferableObject(),
            IsSignerDigitalTimeStamp(signerCert.GetInfoEx()),
            GetQSCD(signerCert.GetData()),
            GetSignAlgo(signerCert.GetInfoEx()),
            (signContainerType & EUSignContainerType.XAdES) ?
                GetXAdESFormat(signFormat) :
                GetCAdESFormat(signFormat),
            GetSignContainerType(signContainerType),
            isAllContentCovered);
    }*/

}
