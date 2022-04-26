import {EndUserCertificate as EndUserCertificateClass, EndUserError, EU_SIGN_CP_ENCODING_UTF_8,} from "./eusw";
import EUSignCPCore from "./EUSignCPCore";
import {
    EndUserCertificate,
    EndUserCertificateInfoEx,
    EndUserError as IEndUserError,
    EndUserJKSPrivateKey,
    EndUserKeyMedia,
    EndUserPrivateKeyInfo,
} from "./types";

const enum EndUserLibraryType {
    JS,
    SW,
    MS
}

const enum EndUserKeysType {
    DSTUAndECDHWithGOST,
    RSAWithSHA
}

const enum EndUserSignType {
    CAdES_BES,
    CAdES_T,
    CAdES_C,
    CAdES_X_Long
}

const enum EndUserSignAlgo {
    DSTU4145WithGOST34311,
    RSAWithSHA,
    ECDSAWithSHA
}

const enum EndUserCMPCompatibility {
    None = 0,
    DownloadEUCerts = 1,
    SearchEUCerts = 2
}

const enum EndUserHashAlgo {
    GOST34311,
    SHA160,
    SHA224,
    SHA256
}

type CAList = Array<{
    issuerCNs: string[]
    address: string
    ocspAccessPointAddress: string
    ocspAccessPointPort: string
    cmpAddress: string
    tspAddress: string
    tspAddressPort: string
    directAccess?: boolean
    qscdSNInCert?: boolean
    certsInKey?: boolean
    cmpCompatibility?: number
}>

interface Settings {
    encoding: string
    language: number
    CAs: CAList | string
    CACertificates: string
    allowedKeyMediaTypes: string[]
}

export default class EUSignCPPromise {

    m_library: EUSignCPCore = new EUSignCPCore();
    m_settings!: Settings;
    m_initialized: boolean = false;
    m_kmTypes: any = null;
    m_kmActiveOperation: boolean = false;
    m_context: any = null;
    m_pkContext: any = null;


    MapError(error: any) {
        const endUserError = new EndUserError();

        if (undefined !== error.GetErrorCode && undefined !== error.GetMessage) {
            endUserError.errorCode = error.GetErrorCode();
            endUserError.message = error.GetMessage()
        } else if (undefined !== error.code && undefined !== error.message) {
            endUserError.errorCode = error.code;
            endUserError.message = error.message;
        } else {
            endUserError.errorCode = EndUserError.ERROR_UNKNOWN;
            endUserError.message = error.toString();
        }

        return endUserError
    }

    /*ProcessArray(e, a) {
        var r = this;
        return new Promise((resolve, reject) => {
                const array = any[];
                let n = 0;
                const b = function () {
                    n >= e.length ? resolve(array) : (a(e[n]).then((function (c) {
                            array.push(c),
                                b()
                        }
                    )).catch((function (c) {
                            return reject(r.MapError(c))
                        }
                    )),
                        n++)
                };
                b()
            }
        )
    }*/

    /*OnEvent(c) {
        try {
            var e = this.m_eventListeners[c.type] || this.m_eventListeners[l.EndUserEventType.All];
            e && e(c)
        } catch (c) {
        }
    }*/

    CheckInitialize() {
        return new Promise<void>((resolve, reject) => {
            if (this.m_initialized) {
                resolve()
            } else {
                this.m_library.Load()
                    .then(() => {
                        throw this.m_library.m_library.MakeError(EndUserError.ERROR_NOT_INITIALIZED, "")
                    })
                    .catch((c) => {
                        return reject(this.MapError(c))
                    })
            }
        })
    }

    BeginKMOperation() {
        return new Promise<void>((resolve) => {
            const run = () => {
                if (this.m_kmActiveOperation) {
                    setTimeout(run, 10)
                } else {
                    this.m_kmActiveOperation = true;
                    resolve();
                }
            };
            run();
        });
    }

    EndKMOperation() {
        this.m_kmActiveOperation = false;
    }

    GetCASettings(issuerCN: string | null): any {
        if (!issuerCN) return null;
        const CAs = this.m_settings.CAs as CAList;
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

    IsCMPCompatible(caSettings: any, e: any): boolean {
        return !!caSettings.cmpAddress && (void 0 === caSettings.cmpCompatibility || (caSettings.cmpCompatibility & e) == e)
    }

    async SetSettings(issuerCN: string | null): Promise<void> {
        const caSettings = this.GetCASettings(issuerCN);
        const defaultCASettings = this.m_settings.CAs && this.m_settings.CAs.length > 0 ? this.m_settings.CAs[0] : null;

        if (issuerCN && caSettings === null) {
            console.log('error')
            return;
        }

        const tsp = caSettings && caSettings.tspAddress ? caSettings : defaultCASettings;

        let settings1 = this.m_library.CreateTSPSettings();
        settings1.SetGetStamps(true);
        settings1.SetAddress(tsp ? tsp.tspAddress : '');
        settings1.SetPort(tsp ? tsp.tspAddressPort : '80');
        await this.m_library.SetTSPSettings(settings1);

        const useOCSP = !tsp || (tsp && tsp.ocspAccessPointAddress !== '');
        let settings2 = this.m_library.CreateOCSPSettings();
        settings2.SetUseOCSP(useOCSP);
        if (useOCSP) {
            settings2.SetBeforeStore(true);
            settings2.SetAddress(tsp ? tsp.ocspAccessPointAddress : "czo.gov.ua");
            settings2.SetPort(tsp ? tsp.ocspAccessPointPort : "80");
        }
        await this.m_library.SetOCSPSettings(settings2);

        const useCMP = tsp && tsp.cmpAddress !== '';
        let settings3 = this.m_library.CreateCMPSettings();
        settings3.SetUseCMP(useCMP);
        if (useCMP) {
            settings3.SetAddress(tsp.cmpAddress);
            settings3.SetPort("80");
        }
        await this.m_library.SetCMPSettings(settings3);
    }

    async ListJKSPrivateKeys(container: Uint8Array): Promise<string[]> {
        const _JKSPrivateKeysList = [];
        let i = 0;
        let alias = await this.m_library.EnumJKSPrivateKeys(container, i);
        while (alias) {
            _JKSPrivateKeysList.push(alias);
            i++;
            alias = await this.m_library.EnumJKSPrivateKeys(container, i);
        }
        return _JKSPrivateKeysList;
    }

    async GetJKSPrivateKeys(container: Uint8Array): Promise<EndUserJKSPrivateKey[]> {
        const keyList = await this.ListJKSPrivateKeys(container);

        return await Promise.all(keyList.map(async (alias) => {
            const privateKey = await this.m_library.GetJKSPrivateKey(container, alias);
            privateKey.info = {alias: alias, certificates: [], digitalStamp: false};

            for (let i = 0, len = privateKey.GetCertificates().length; i < len; i++) {
                const certificate = privateKey.GetCertificate(i);
                const certificateInfoEx = await this.m_library.ParseCertificateEx(certificate);

                if (certificateInfoEx.GetSubjType() === this.m_library.m_library.EU_SUBJECT_TYPE_END_USER) {
                    //console.log('certificateInfoEx', certificateInfoEx)
                    if (certificateInfoEx.GetPublicKeyType() === this.m_library.m_library.EU_CERT_KEY_TYPE_DSTU4145
                        && (certificateInfoEx.GetKeyUsageType() & this.m_library.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE) === this.m_library.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE
                    ) {
                        privateKey.info.digitalStamp = certificateInfoEx.GetExtKeyUsages().indexOf(this.m_library.m_library.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1
                    }

                    const userCertificate = new EndUserCertificateClass() as EndUserCertificate;
                    userCertificate.SetData(certificate);
                    userCertificate.SetInfoEx(certificateInfoEx);
                    privateKey.info.certificates.push(userCertificate);
                }
            }

            return privateKey;
        }))
    }

    async SaveCertificatesInternal(certificates: Uint8Array[] | Uint8Array | null): Promise<void> {
        if (Array.isArray(certificates)) {
            return Promise.all(certificates.map(async (cert) => {
                await this.m_library.SaveCertificate(cert)
            })).then(() => Promise.resolve());
        } else if (certificates) {
            return this.m_library.SaveCertificate(certificates)
        } else {
            return Promise.resolve();
        }
    }

    //todo: check
    async CtxReadPrivateKeyInternal(m_context: any, privateKey: Uint8Array, password: string, keyMedia: EndUserKeyMedia | null, certificates: Uint8Array[] | Uint8Array | null, issuerCN: string | null): Promise<void> {
        const context = m_context || this.m_context;
        await this.SaveCertificatesInternal(certificates);
        await this.SetSettings(issuerCN);
        let pkContext;
        try {
            if (privateKey !== null && password !== null) {
                pkContext = await this.m_library.ReadPrivateKeyBinary(privateKey, password);//CtxReadPrivateKeyBinary
            } else if (keyMedia) {
                pkContext = await this.m_library.ReadPrivateKeySilently(keyMedia);//CtxReadPrivateKey
            }
            const ownerInfo = await this.m_library.GetPrivateKeyOwnerInfo();//GetOwnerInfo
            if (issuerCN === null) {
                return this.SetSettings(ownerInfo.GetIssuerCN());
            }
            const settings = this.GetCASettings(ownerInfo.GetIssuerCN());
            if (!settings || -1 == settings.issuerCNs.indexOf(issuerCN))
                throw this.m_library.m_library.MakeError(EndUserError.ERROR_CERT_NOT_FOUND, "")
            return pkContext;
        } catch (e: any) {
            if (pkContext == null) {
                if (e.code != EndUserError.ERROR_CERT_NOT_FOUND || issuerCN) {
                    throw e;
                } else {
                    const keyCertificate = await this.SearchPrivateKeyCertificatesWithCMP(privateKey, password, keyMedia);
                    return this.CtxReadPrivateKeyInternal(m_context, privateKey, password, keyMedia, keyCertificate.certs, keyCertificate.CACommonName);
                }
            } else {
                this.m_library.CtxFreePrivateKey(pkContext).then();
                throw e;
            }
        }
    }

    async ReadPrivateKeyInternal(privateKey: Uint8Array, password: string, keyMedia: EndUserKeyMedia | null, certificates: Uint8Array[], issuerCN: string | null) {
        await this.ResetPrivateKeyInternal();
        this.m_pkContext = await this.CtxReadPrivateKeyInternal(this.m_context, privateKey, password, keyMedia, certificates, issuerCN);
        return this.m_pkContext.GetOwnerInfo();
    }

    async ResetPrivateKeyInternal() {
        if (this.m_pkContext) {
            await this.m_library.m_library.CtxFreePrivateKey(this.m_pkContext);
            this.m_pkContext = null;
        }
    }

    async SearchPrivateKeyCertificatesWithCMP(privateKey: Uint8Array, password: string, keyMedia: EndUserKeyMedia | null, issuerCN?: string): Promise<{ certs: Uint8Array | null, CACommonName: string | null }> {
        const CAs = this.m_settings.CAs as CAList;

        let keyInfo: EndUserPrivateKeyInfo;
        if (null != privateKey && null != password) {
            keyInfo = await this.m_library.GetKeyInfoBinary(privateKey, password);
        } else if (keyMedia) {
            keyInfo = await this.m_library.GetKeyInfo(keyMedia);
        } else {
            return {
                certs: null,
                CACommonName: null
            };
        }
        return new Promise((resolve, reject) => {
            const func = (index: number, errorCertNotFound: boolean) => {
                if (index >= CAs.length) {
                    throw this.m_library.m_library.MakeError(errorCertNotFound ? EndUserError.ERROR_CERT_NOT_FOUND : EndUserError.ERROR_TRANSMIT_REQUEST, "");
                } else {
                    const action = issuerCN ? EndUserCMPCompatibility.DownloadEUCerts : EndUserCMPCompatibility.SearchEUCerts;
                    if (this.IsCMPCompatible(CAs[index], action)) {
                        if (issuerCN && -1 === CAs[index].issuerCNs.indexOf(issuerCN)) {
                            func(index + 1, errorCertNotFound)
                        } else {
                            this.m_library.GetCertificatesByKeyInfo(keyInfo, [CAs[index].cmpAddress], ["80"])
                                .then((certificates) => {
                                    resolve({
                                        certs: certificates,
                                        CACommonName: CAs[index].issuerCNs[0]
                                    });
                                })
                                .catch((error) => {
                                    const code = (error as IEndUserError).GetErrorCode();
                                    if (code === EndUserError.ERROR_CERT_NOT_FOUND || code === EndUserError.ERROR_TRANSMIT_REQUEST) {
                                        return func(index + 1, errorCertNotFound || code === EndUserError.ERROR_CERT_NOT_FOUND);
                                    }
                                    reject(error);
                                })
                        }
                    } else {
                        func(index + 1, errorCertNotFound)
                    }
                }
            };
            func(0, false);
        });
    }

    async GetUserCertificatesFromCertificates(signedData: Uint8Array) {
        return new Promise(((resolve, reject) => {
                const certList: EndUserCertificate[] = [];
                const n = (index: number) => {
                    this.m_library.GetCertificateFromSignedData(index, signedData)
                        .then((certData) => {
                            if (certData != null) {
                                const userCert: EndUserCertificate = new EndUserCertificateClass();
                                userCert.SetData(certData);
                                certList.push(userCert)
                                return this.m_library.ParseCertificateEx(certData)
                            }

                            let i = [];
                            for (let n = 0; n < certList.length; n++) {
                                if (certList[n].GetInfoEx().GetSubjType() === this.m_library.m_library.SUBJECT_TYPE_END_USER) {
                                    i.push(certList[n]);
                                }
                            }
                            resolve(i)
                        })
                        .then((c) => {
                            certList[index].SetInfoEx(c as EndUserCertificateInfoEx);
                            n(index + 1);
                        })
                        .catch((c) => {
                            return reject(c)
                        })
                };
                n(0)
            }
        ))
    }

    GetHashAlgoBySignAlgo(type: EndUserSignAlgo) {
        switch (type) {
            case EndUserSignAlgo.DSTU4145WithGOST34311:
                return EndUserHashAlgo.GOST34311;
            case EndUserSignAlgo.RSAWithSHA:
            case EndUserSignAlgo.ECDSAWithSHA:
                return EndUserHashAlgo.SHA256;
            default:
                throw this.m_library.m_library.MakeError(EndUserError.ERROR_BAD_PARAMETER, "")
        }
    }

    //CtxSignHashInternal

    //CtxSignDataInternal

    //LoadTaxReportPKey

    //ProtectTaxReport

    //UnprotectTaxReceipt

    //AddEventListener

    //GetLibraryInfo

    async IsInitialized() {
        return new Promise(resolve => {
            resolve(this.m_initialized);
        })
    }

    async DownloadServers(serverFilePath: string) {
        if (!serverFilePath) {
            return;
        }

        const response = await fetch(serverFilePath);
        this.m_settings.CAs = await response.json();
    }

    DownloadCertificates(certsFilePaths: string) {
        if (!certsFilePaths) {
            return;
        }

        const path = certsFilePaths;
        fetch(path)
            .then((response) => response.blob())
            .then((blob) => blob.arrayBuffer())
            .then((arrayBuffer) => {
                if (path.includes('.p7b')) {
                    this.m_library.m_library.SaveCertificates(arrayBuffer);
                } else {
                    this.m_library.m_library.SaveCertificate(arrayBuffer);
                }
            })
    }

    Initialize(settings: Settings) {
        this.m_settings = {...settings};

        return new Promise<void>((resolve, reject) => {
                this.m_library.Load()
                    .then(() => this.m_library.SetRuntimeParameter(this.m_library.m_library.EU_SAVE_SETTINGS_PARAMETER, this.m_library.m_library.EU_SETTINGS_ID_PROXY))
                    .then(() => this.m_library.SetUIMode(false))
                    .then(() => this.m_library.Initialize())
                    .then(() => this.m_library.SetUIMode(false))
                    .then(() => this.m_library.SetCharset(this.m_settings?.encoding || EU_SIGN_CP_ENCODING_UTF_8))
                    .then(() => this.m_library.SetLanguage(this.m_settings?.language || this.m_library.m_library.EU_DEFAULT_LANG))
                    .then(() => this.m_library.InitializeMandatorySettings())
                    .then(() => {
                        const c = this.m_library.CreateFileStoreSettings();
                        c.SetPath("");
                        c.SetSaveLoadedCerts(true);
                        return this.m_library.SetFileStoreSettings(c)
                    })
                    .then(async () => {
                        if (this.m_settings.CAs != null && typeof this.m_settings.CAs == "string") {
                            return await this.DownloadServers(this.m_settings.CAs);
                        } else {
                            return this.m_settings.CAs
                        }
                    })
                    .then(() => {
                        const settings1 = this.m_library.CreateOCSPAccessInfoModeSettings();
                        settings1.SetEnabled(true);
                        return this.m_library.SetOCSPAccessInfoModeSettings(settings1);
                    })
                    .then(async () => {
                        const CAs = this.m_settings.CAs as CAList;
                        for (let i = 0; i < CAs.length; i++)
                            for (let t = 0; t < CAs[i].issuerCNs.length; t++) {
                                const settings1 = this.m_library.CreateOCSPAccessInfoSettings();
                                settings1.SetAddress(CAs[i].ocspAccessPointAddress);
                                settings1.SetPort(CAs[i].ocspAccessPointPort);
                                settings1.SetIssuerCN(CAs[i].issuerCNs[t]);
                                await this.m_library.SetOCSPAccessInfoSettings(settings1)
                            }
                    })
                    .then(() => {
                        const settings1 = this.m_library.CreateModeSettings();
                        return this.m_library.SetModeSettings(settings1)
                    })
                    .then(() => {
                        if (null != settings.CACertificates && "string" == typeof settings.CACertificates) {
                            return this.DownloadCertificates(settings.CACertificates);
                        }
                    })
                    /*.then(() => this.m_library.SetRuntimeParameter(this.m_library.m_library.EU_RESOLVE_OIDS_PARAMETER, 0))
                    .then(() => this.m_library.CtxCreate())
                    .then((context: any) => {
                        this.m_context = context;
                        return this.m_library.CtxSetParameter(context, this.m_library.m_library.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, String(false))
                    })*/
                    .then(() => {
                        this.m_initialized = true;
                        resolve()
                    })
                    .catch((c) => {
                        return reject(c)
                    })
            }
        )
    }


    GetHashAlgoForCertificate(info: EndUserCertificateInfoEx) {
        return (info.GetPublicKeyType() === this.m_library.m_library.EU_CTX_SIGN_DSTU4145_WITH_GOST34311) ?
            this.m_library.m_library.EU_CTX_HASH_ALGO_GOST34311 : this.m_library.m_library.EU_CTX_HASH_ALGO_SHA160;
    }

    /*async VerifyExternalData(data: string, sign: string): Promise<any[]> {
        const signsInfos = [];

        const signers = await this.GetSignsCount(sign);
        for (let i = 0; i < signers; i++) {
            const signerCert = await this.GetSignerInfo(i, sign);
            const hashAlgo = this.GetHashAlgoForCertificate(signerCert.GetInfoEx());
            var hashContext = this.HashDataBegin(hashAlgo, signerCert.GetData());
            var parts = Math.floor(data.length / Module.MAX_DATA_SIZE);
            var lastPart = data.length % Module.MAX_DATA_SIZE;
            for (var j = 0; j < parts; j++) {
                this.HashDataContinue(hashContext, new Uint8Array(
                    data.buffer, j * Module.MAX_DATA_SIZE, Module.MAX_DATA_SIZE));
            }
            if (lastPart) {
                this.HashDataContinue(hashContext, new Uint8Array(
                    data.buffer, parts * Module.MAX_DATA_SIZE, lastPart));
            }

            var hash = this.HashDataEnd(hashContext, false);
            var useCRL = this.IsUseCRLs(signerCert.GetInfoEx().GetIssuerCN());
            var signInfo = this.m_context.VerifyHashOnTimeEx(hash, i, sign, null, useCRL, !useCRL);
            var signFormat = this.GetSignType(i, sign);

            signsInfos.push(CreateSignInfoResult(
                signInfo, signerCert, signFormat,
                EUSignContainerType.CAdES | EUSignContainerType.Detached,
                true));
        }

        return signsInfos;
    }*/
}
