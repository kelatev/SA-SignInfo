import {EndUserCertificate as EndUserCertificateClass, EUSignCP, EndUserError} from "./eusw";
import EUSignCPCore from "./EUSignCPCore";
import {
    EndUserException, EndUserError as IEndUserError,
    EndUserCertificate, EndUserCertificateInfoEx,
    EndUserJKSPrivateKey, EndUserKeyMedia,
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

const enum EndUserHashAlgo {
    GOST34311,
    SHA160,
    SHA224,
    SHA256
}

export default class EUSignCPPromise extends EUSignCPCore {

    m_settings: { CAs: any[] };
    m_initialized: boolean = false;
    m_kmTypes: any = null;
    m_kmActiveOperation: boolean = false;
    m_context: any = null;
    m_pkContext: any = null;

    constructor(m_library: EUSignCP) {
        super(m_library);
        this.m_settings = {CAs: []};
    }

    /*MapError(error: EndUserException | IEndUserError) {
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
    }*/

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

    IsCMPCompatible(caSettings: any, e: any): boolean {
        return !!caSettings.cmpAddress && (void 0 === caSettings.cmpCompatibility || (caSettings.cmpCompatibility & e) == e)
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

    async GetJKSPrivateKeys(container: Uint8Array): Promise<EndUserJKSPrivateKey[]> {
        const keyList = await this.ListJKSPrivateKeys(container);

        return await Promise.all(keyList.map(async (alias) => {
            const privateKey = await this.GetJKSPrivateKey(container, alias);
            privateKey.info = {alias: alias, certificates: [], digitalStamp: false};

            for (let i = 0, len = privateKey.GetCertificates().length; i < len; i++) {
                const certificate = privateKey.GetCertificate(i);
                const certificateInfoEx = await this.ParseCertificateEx(certificate);

                if (certificateInfoEx.GetSubjType() === this.m_library.EU_SUBJECT_TYPE_END_USER) {
                    //console.log('certificateInfoEx', certificateInfoEx)
                    if (certificateInfoEx.GetPublicKeyType() === this.m_library.EU_CERT_KEY_TYPE_DSTU4145
                        && (certificateInfoEx.GetKeyUsageType() & this.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE) === this.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE
                    ) {
                        privateKey.info.digitalStamp = certificateInfoEx.GetExtKeyUsages().indexOf(this.m_library.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1
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

    async SaveCertificatesInternal(certificates: Uint8Array[] | Uint8Array): Promise<void> {
        if (Array.isArray(certificates)) {
            return Promise.all(certificates.map(async (cert) => {
                await this.SaveCertificate(cert)
            })).then(() => Promise.resolve());
        } else {
            await this.SaveCertificate(certificates)
        }
    }

    //todo: check
    async CtxReadPrivateKeyInternal(m_context: any, privateKey: Uint8Array, password: string, keyMedia: EndUserKeyMedia | null, certificates: Uint8Array[], issuerCN: string | null): Promise<void> {
        const context = m_context || this.m_context;
        await this.SaveCertificatesInternal(certificates);
        await this.SetIssuerSettings(issuerCN);
        let pkContext;
        try {
            if (privateKey !== null && password !== null) {
                pkContext = await this.ReadPrivateKeyBinary(privateKey, password);//CtxReadPrivateKeyBinary
            } else if (keyMedia) {
                pkContext = await this.ReadPrivateKeySilently(keyMedia);//CtxReadPrivateKey
            }
            const ownerInfo = await this.GetPrivateKeyOwnerInfo();//GetOwnerInfo
            if (issuerCN === null) {
                return this.SetIssuerSettings(ownerInfo.GetIssuerCN());
            }
            const settings = this.GetCASettings(ownerInfo.GetIssuerCN());
            if (!settings || -1 == settings.issuerCNs.indexOf(issuerCN))
                throw this.m_library.MakeError(EndUserError.ERROR_CERT_NOT_FOUND, "")
            return pkContext;
        } catch (e: any) {
            if (pkContext == null) {
                if(e.code != EndUserError.ERROR_CERT_NOT_FOUND || issuerCN) {
                    throw e;
                } else {
                    const keyCertificate = await this.SearchPrivateKeyCertificatesWithCMP(privateKey, password, keyMedia);
                    return this.CtxReadPrivateKeyInternal(m_context, privateKey, password, keyMedia, keyCertificate.certs, keyCertificate.CACommonName);
                }
            } else {
                this.CtxFreePrivateKey(pkContext);
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
            await this.m_library.CtxFreePrivateKey(this.m_pkContext);
            this.m_pkContext = null;
        }
    }

    async SearchPrivateKeyCertificatesWithCMP(privateKey: Uint8Array, password: string, keyMedia: EndUserKeyMedia | null, t) {
        if (null != privateKey && null != password) {
            await this.GetKeyInfoBinary(privateKey, password);
            return;
        }
        const keyInfo = await this.GetKeyInfo(keyMedia);
        /*const func = (i, u) => {
            if (i >= this.m_settings.CAs.length) {
                throw this.m_library.MakeError(u ? this.m_library.ERROR_CERT_NOT_FOUND : this.m_library.ERROR_TRANSMIT_REQUEST, "");
            } else {

            }
        };
        func(0, false);


        var n = this
            , b = this.m_library
            , f = this.m_settings.CAs;
        return new c((function(c, d) {
                b.GetKeyInfo(i)).then((function(e) {
                        var a = function(i, u) {

                                var s = t ? l.EndUserCMPCompatibility.DownloadEUCerts : l.EndUserCMPCompatibility.SearchEUCerts;
                                n.IsCMPCompatible(f[i], s) ? t && -1 == f[i].issuerCNs.indexOf(t) ? a(i + 1, u) : b.GetCertificatesByKeyInfo(e, [f[i].cmpAddress], ["80"]).then((function(e) {
                                        c({
                                            certs: e,
                                            CACommonName: f[i].issuerCNs[0]
                                        })
                                    }
                                )).catch((function(c) {
                                        var e = c.GetErrorCode();
                                        if (e == r.EU_ERROR_CERT_NOT_FOUND || e == r.EU_ERROR_TRANSMIT_REQUEST)
                                            return u = u || e == r.EU_ERROR_CERT_NOT_FOUND,
                                                void a(i + 1, u);
                                        d(n.MapError(c))
                                    }
                                )) : a(i + 1, u)
                        };
                        a(0, !1)
                    }
                ))
            }
        ))*/
    }

    /*GetUserCertificatesFromCertificates(e) {
        var a = this
            , r = a.m_library;
        return new c((function(c, i) {
                var t = new Array
                    , n = function(b) {
                    r.GetCertificateFromSignedData(b, e).then((function(e) {
                            if (null != e) {
                                var a = new f.EndUserCertificate;
                                return a.data = e,
                                    t.push(a),
                                    r.ParseCertificateEx(e)
                            }
                            for (var i = new Array, n = 0; n < t.length; n++)
                                t[n].infoEx.subjType == r.EU_SUBJECT_TYPE_END_USER && i.push(t[n]);
                            c(i)
                        }
                    )).then((function(c) {
                            t[b].infoEx = u.a.MapToEndUserCertificateInfoEx(c, new o.a),
                                n(b + 1)
                        }
                    )).catch((function(c) {
                            return i(a.MapError(c))
                        }
                    ))
                };
                n(0)
            }
        ))
    }*/

    GetHashAlgoBySignAlgo(type: EndUserSignAlgo) {
        switch (type) {
            case EndUserSignAlgo.DSTU4145WithGOST34311:
                return EndUserHashAlgo.GOST34311;
            case EndUserSignAlgo.RSAWithSHA:
            case EndUserSignAlgo.ECDSAWithSHA:
                return EndUserHashAlgo.SHA256;
            default:
            //throw e.MakeError(r.EU_ERROR_BAD_PARAMETER, "")
        }
    }

    GetHashAlgoForCertificate(info: EndUserCertificateInfoEx) {
        return (info.GetPublicKeyType() === this.m_library.EU_CTX_SIGN_DSTU4145_WITH_GOST34311) ?
            this.m_library.EU_CTX_HASH_ALGO_GOST34311 : this.m_library.EU_CTX_HASH_ALGO_SHA160;
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
