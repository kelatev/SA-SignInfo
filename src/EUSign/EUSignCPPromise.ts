import {EndUserCertificate as EndUserCertificateClass, EUSignCP} from "./eusw";
import EUSignCPCore from "./EUSignCPCore";
import {
    EndUserCertificate,
    EndUserJKSPrivateKey, EndUserKeyMedia,
} from "./types";

export default class EUSignCPPromise extends EUSignCPCore {

    m_settings: { CAs: any[] };
    m_context: any;

    EU_SUBJECT_TYPE_CA = 1;
    EU_SUBJECT_TYPE_CA_SERVER = 2;
    EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3;
    EU_SUBJECT_TYPE_END_USER = 4;
    EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0;
    EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1;
    EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2;
    EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3;
    EU_CERT_KEY_TYPE_UNKNOWN = 0;
    EU_CERT_KEY_TYPE_DSTU4145 = 1;
    EU_CERT_KEY_TYPE_RSA = 2;
    EU_CERT_KEY_TYPE_ECDSA = 4;

    constructor(m_library: EUSignCP) {
        super(m_library);
        this.m_settings = {CAs: []};
    }

    GetCASettings(issuerCN: string | null): any {
        if (!issuerCN) return null;
        const CAs = this.m_settings.CAs;
        for (let i = 0; i < CAs.length; i++) {
            const currentIssuerCNs = CAs[i].issuerCNs;
            for (let j = 0; j < currentIssuerCNs.length; j++) {
                if (currentIssuerCNs[j] === issuerCN) {
                    return CAs[i];
                }
            }
        }
        return null;
    }

    async SetIssuerSettings(issuerCN: string | null): Promise<void> {
        const caSettings = this.GetCASettings(issuerCN);
        const defaultCASettings = this.m_settings.CAs && this.m_settings.CAs.length > 0 ? this.m_settings.CAs[0] : null;

        if (issuerCN && caSettings === null) {
            console.log('error')
            return;
        }

        const tsp = caSettings && caSettings.tspAddress ? caSettings : defaultCASettings;

        let settings1 = this.CreateTSPSettings();
        settings1.SetGetStamps(true);
        settings1.SetAddress(tsp ? tsp.tspAddress : '');
        settings1.SetPort(tsp ? tsp.tspAddressPort : '80');
        await this.SetTSPSettings(settings1);

        const useOCSP = !tsp || (tsp && tsp.ocspAccessPointAddress !== '');
        let settings2 = this.CreateOCSPSettings();
        settings2.SetUseOCSP(useOCSP);
        if (useOCSP) {
            settings2.SetBeforeStore(true);
            settings2.SetAddress(tsp ? tsp.ocspAccessPointAddress : "czo.gov.ua");
            settings2.SetPort(tsp ? tsp.ocspAccessPointPort : "80");
        }
        await this.SetOCSPSettings(settings2);

        const useCMP = tsp && tsp.cmpAddress !== '';
        let settings3 = this.CreateCMPSettings();
        settings3.SetUseCMP(useCMP);
        if (useCMP) {
            settings3.SetAddress(tsp.cmpAddress);
            settings3.SetPort("80");
        }
        await this.SetCMPSettings(settings3);
    }

    async SaveCertificatesInternal(certificates: Uint8Array[]): Promise<void> {
        return Promise.all(certificates.map(async (cert) => {
            await this.SaveCertificate(cert)
        })).then(() => Promise.resolve());
    }

    async CtxReadPrivateKeyInternal(privateKey: Uint8Array, password: string, keyMedia: EndUserKeyMedia | null, certificates: Uint8Array[], issuerCN: string | null): Promise<void> {
        await this.SaveCertificatesInternal(certificates);
        await this.SetIssuerSettings(issuerCN);
        (privateKey !== null && password !== null) ? await this.ReadPrivateKeyBinary(privateKey, password) : (keyMedia && await this.ReadPrivateKeySilently(keyMedia));
        const ownerInfo = await this.GetPrivateKeyOwnerInfo();
        if (issuerCN === null) {
            return this.SetIssuerSettings(ownerInfo.GetIssuerCN());
        }
    }

    async ListJKSPrivateKeys(container: Uint8Array): Promise<string[]> {
        const _JKSPrivateKeysList = [];
        let i = 0;
        let alias = await this.EnumJKSPrivateKeys(container, i);
        while (alias) {
            _JKSPrivateKeysList.push(alias);
            i++;
            alias = await this.EnumJKSPrivateKeys(container, i);
        }
        return _JKSPrivateKeysList;
    }

    // Перелічення особистих ключів в контейнері JKS.
    async GetJKSPrivateKeys(container: Uint8Array): Promise<EndUserJKSPrivateKey[]> {
        const keyList = await this.ListJKSPrivateKeys(container);

        return await Promise.all(keyList.map(async (alias) => {
            const privateKey = await this.GetJKSPrivateKey(container, alias);
            privateKey.info = {alias: alias, certificates: []};

            for (let i = 0, len = privateKey.GetCertificates().length; i < len; i++) {
                const certificate = privateKey.GetCertificate(i);
                const certificateInfoEx = await this.ParseCertificateEx(certificate);

                if (certificateInfoEx.GetSubjType() === this.EU_SUBJECT_TYPE_END_USER) {
                    //console.log('certificateInfoEx', certificateInfoEx)
                    //t.GetPublicKeyType() == i.EU_CERT_KEY_TYPE_DSTU4145
                    // && (t.GetKeyUsageType() & i.EU_KEY_USAGE_DIGITAL_SIGNATURE) == i.EU_KEY_USAGE_DIGITAL_SIGNATURE
                    // && (a.digitalStamp = t.GetExtKeyUsages().indexOf(i.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1);

                    const userCertificate = new EndUserCertificateClass() as unknown as EndUserCertificate;
                    userCertificate.SetData(certificate);
                    userCertificate.SetInfoEx(certificateInfoEx);
                    privateKey.info.certificates.push(userCertificate);
                }
            }

            return privateKey;
        }))
    }
}
