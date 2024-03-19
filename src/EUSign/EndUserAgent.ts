import {
    EndUserSettings,
    EndUserSettingsCA,
    EndUserPrivateKey,
    EndUserCertificate,
    EndUserCertificateInfoEx,
    EndUserContext,
} from "./eusign.types";
import { MapToEndUserCertificateInfoEx } from "./EndUserConvert";
import EUSignCPAgent from "./EUSignCPAgent";
import EndUserLibrary, {
    EndUserEventType,
    LibraryInfo,
    ClientRegistrationTokenKSP,
    SignContainerInfo,
} from "./EndUserLibrary";
import { EndUserSignAlgo } from "./EndUserConstants";
import { EndUserError } from "./EndUserObject";

export default class EndUserAgent implements EndUserLibrary {
    m_library;
    m_settings: EndUserSettings = {} as any;
    m_initialized = false;
    m_kmTypes = null;
    m_kmActiveOperation = false;
    m_context: EndUserContext | null = null;
    m_pkContext = null;
    m_eventListeners: any[];
    m_resolveOIDs = false;

    constructor() {
        this.m_library = new EUSignCPAgent();
        this.m_eventListeners = [];
    }

    MapError(error: any): EndUserError {
        const endUserError = new EndUserError();

        if (undefined !== error.GetErrorCode && undefined !== error.GetMessage) {
            endUserError.errorCode = error.GetErrorCode();
            endUserError.message = error.GetMessage();
        } else if (undefined !== error.code && undefined !== error.message) {
            endUserError.errorCode = error.code;
            endUserError.message = error.message;
        } else {
            endUserError.errorCode = EndUserError.ERROR_UNKNOWN;
            endUserError.message = error.toString();
        }

        return endUserError;
    }

    ProcessArray<T>(items: any[], callback: (item: any) => Promise<T>) {
        return new Promise<T[]>((resolve, reject) => {
            const result: T[] = [];
            let index = 0;
            const run = () => {
                if (index >= items.length) {
                    resolve(result);
                } else {
                    callback(items[index])
                        .then(data => {
                            result.push(data);
                            run();
                        })
                        .catch((err: any) => reject(this.MapError(err)));
                    index++;
                }
            };
            run();
        });
    }

    DataToNamedDataArray(data: any[] | any) {
        data = null != data ? data : [];
        data = Array.isArray(data) ? data : [data];
        let namesData = [];
        for (let i = 0; i < data.length; i++) {
            const exist = data[i].name !== undefined && data[i].val !== undefined;
            namesData.push({
                name: exist ? data[i].name : "Ім'я відсутнє",
                val: exist ? data[i].val : data[i],
            });
        }
        return namesData;
    }

    DataToResult(data: any[] | any, value: any) {
        const isArray = !Array.isArray(data);
        data = Array.isArray(data) ? data : [data];
        const result = [];
        for (let i = 0; i < data.length; i++) {
            var item =
                data[i].name !== undefined && data[i].val !== undefined
                    ? { name: data[i].name, val: value[i] }
                    : value[i];
            result.push(item);
        }
        return isArray ? result[0] : result;
    }

    OnEvent(event: any) {
        try {
            var callback =
                this.m_eventListeners[event.type] || this.m_eventListeners[EndUserEventType.All];
            callback && callback(event);
        } catch (e) {}
    }

    AddEventListener(eventType: EndUserEventType, callback: any) {
        return new Promise<void>((resolve, reject) => {
            if (
                [
                    EndUserEventType.None,
                    EndUserEventType.All,
                    EndUserEventType.ConfirmKSPOperation,
                ].indexOf(eventType) < 0
            ) {
                reject(
                    this.MapError(
                        this.m_library.MakeError(EndUserError.EU_ERROR_BAD_PARAMETER, ""),
                    ),
                );
            } else {
                switch (eventType) {
                    case EndUserEventType.None:
                        this.m_eventListeners = [];
                        break;
                    case EndUserEventType.All:
                        this.m_eventListeners = [];
                        this.m_eventListeners[eventType] = callback;
                        break;
                    default:
                        this.m_eventListeners[eventType] = callback;
                }
                resolve();
            }
        });
    }

    CheckInitialize() {
        return new Promise<void>((resolve, reject) => {
            if (this.m_initialized) {
                resolve();
            } else {
                this.m_library
                    .Load()
                    .then(() => {
                        throw this.m_library.MakeError(EndUserError.ERROR_NOT_INITIALIZED, "");
                    })
                    .catch((error: any) => reject(this.MapError(error)));
            }
        });
    }

    BeginKMOperation() {
        return new Promise<void>(resolve => {
            const run = () => {
                if (this.m_kmActiveOperation) {
                    setTimeout(run, 10);
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

    GetCASettings(issuerCN: string | null): EndUserSettingsCA | null {
        if (!issuerCN) return null;
        const CAs = this.m_settings.CAs as EndUserSettingsCA[];
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

    IsCMPCompatible(caSettings: EndUserSettingsCA, e: any): boolean {
        return (
            !!caSettings.cmpAddress &&
            (caSettings.cmpCompatibility === undefined || (caSettings.cmpCompatibility & e) === e)
        );
    }

    async SetSettings(issuerCN: string | null): Promise<void> {
        const caSettings = this.GetCASettings(issuerCN);
        const defaultCASettings =
            this.m_settings.CAs && this.m_settings.CAs.length > 0
                ? (this.m_settings.CAs.at(0) as EndUserSettingsCA)
                : null;

        if (issuerCN && caSettings === null) {
            throw this.m_library.MakeError(EndUserError.EU_ERROR_WRITE_SETTINGS, "");
        }

        const tsp = caSettings && caSettings.tspAddress ? caSettings : defaultCASettings;

        let settings1 = this.m_library.CreateTSPSettings();
        settings1.SetGetStamps(true);
        settings1.SetAddress(tsp ? tsp.tspAddress : "");
        settings1.SetPort(tsp ? tsp.tspAddressPort : "80");
        await this.m_library.SetTSPSettings(settings1);

        const useOCSP = !tsp || (tsp && tsp.ocspAccessPointAddress !== "");
        let settings2 = this.m_library.CreateOCSPSettings();
        settings2.SetUseOCSP(useOCSP);
        if (useOCSP) {
            settings2.SetBeforeStore(true);
            settings2.SetAddress(tsp ? tsp.ocspAccessPointAddress : "czo.gov.ua");
            settings2.SetPort(tsp ? tsp.ocspAccessPointPort : "80");
        }
        await this.m_library.SetOCSPSettings(settings2);

        const useCMP = tsp && tsp.cmpAddress !== "";
        let settings3 = this.m_library.CreateCMPSettings();
        settings3.SetUseCMP(useCMP ?? false);
        if (useCMP) {
            settings3.SetAddress(tsp.cmpAddress);
            settings3.SetPort("80");
        }
        await this.m_library.SetCMPSettings(settings3);
    }
    GetJKSPrivateKey(container: Uint8Array, index: number) {
        return new Promise<EndUserPrivateKey | null>((resolve, reject) => {
            var privateKey: any = { alias: null, info: null };
            this.m_library
                .EnumJKSPrivateKeys(container, index)
                .then(alias => {
                    if (alias != null) {
                        privateKey.alias = alias;
                        return this.m_library.GetJKSPrivateKey(container, alias);
                    }
                    resolve(null);
                })
                .then(info => {
                    privateKey.info = info;
                    let result: Uint8Array[] = [];
                    if (info)
                        for (let i = 0; i < info.GetCertificatesCount(); i++)
                            result.push(info.GetCertificate(i));
                    return this.ProcessArray<EndUserCertificateInfoEx>(result, item =>
                        this.m_library.ParseCertificateEx(item),
                    );
                })
                .then(infoExArr => {
                    var n = new EndUserPrivateKey();
                    n.alias = privateKey.alias;
                    n.privateKey = privateKey.info.GetPrivateKey();
                    n.certificates = [];
                    n.digitalStamp = false;
                    for (var r = 0; r < infoExArr.length; r++) {
                        var o = infoExArr[r];
                        if (o.GetSubjType() === this.m_library.EU_SUBJECT_TYPE_END_USER) {
                            o.GetPublicKeyType() === this.m_library.EU_CERT_KEY_TYPE_DSTU4145 &&
                                (o.GetKeyUsageType() &
                                    this.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE) ===
                                    this.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE &&
                                (n.digitalStamp =
                                    o
                                        .GetExtKeyUsages()
                                        .indexOf(this.m_library.EU_UA_OID_EXT_KEY_USAGE_STAMP) >
                                    -1);
                            var l = new EndUserCertificate();
                            l.data = privateKey.info.GetCertificate(r);
                            l.infoEx = MapToEndUserCertificateInfoEx(o, new p.a());
                            n.certificates.push(l);
                        }
                    }
                    n.digitalStamp = false;
                    resolve(n);
                })
                .catch(e => reject(this.MapError(e)));
        });
    }
    GetJKSPrivateKeys(jks: Uint8Array) {
        return new Promise<EndUserPrivateKey[]>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => {
                    const result: EndUserPrivateKey[] = [];
                    const run = (index: number) => {
                        this.GetJKSPrivateKey(jks, index)
                            .then(privateKey => {
                                if (privateKey) {
                                    result.push(privateKey);
                                    run(index + 1);
                                } else {
                                    resolve(result);
                                }
                            })
                            .catch(e => reject(this.MapError(e)));
                    };
                    run(0);
                })
                .catch(e => reject(this.MapError(e)));
        });
    }

    //SaveCertificatesInternal
    //CtxReadPrivateKeyInternal
    //ReadPrivateKeyInternal
    //ResetPrivateKeyInternal
    //SearchPrivateKeyCertificatesWithCMP
    //GetUserCertificatesFromCertificates
    //GeneratePrivateKeyInternal
    //GetHashAlgoBySignAlgo
    //CtxSignHashInternal
    //CtxSignDataInternal
    //LoadTaxReportPKey
    //ProtectTaxReport
    //UnprotectTaxReceipt
    GetLibraryInfo(downloadsURL?: string) {
        return new Promise<LibraryInfo>((resolve, reject) => {
            var libraryInfo: LibraryInfo = {} as any;

            libraryInfo.supported = this.m_library.IsSupported();
            libraryInfo.isSignAgentSupported = this.m_library.IsSignAgentSupported();
            libraryInfo.isWebExtensionSupported = this.m_library.IsWebExtensionSupported();
            libraryInfo.isNPAPISupported = this.m_library.IsNPAPISupported();
            libraryInfo.isActiveXSupported = this.m_library.IsActiveXSupported();
            libraryInfo.isWebExtensionInstalled = this.m_library.IsWebExtensionInstalled();
            libraryInfo.nativeLibraryInstallURLs = this.m_library.GetInstallURL(true, downloadsURL);
            libraryInfo.nativeLibraryInstallURL = libraryInfo.nativeLibraryInstallURLs
                ? libraryInfo.nativeLibraryInstallURLs[0]
                : null;
            libraryInfo.nativeLibraryUpdateURLs = this.m_library.GetUpdateURL(true, downloadsURL);
            libraryInfo.nativeLibraryUpdateURL = libraryInfo.nativeLibraryUpdateURLs
                ? libraryInfo.nativeLibraryUpdateURLs[0]
                : null;
            libraryInfo.webExtensionInstallURL = this.m_library.GetWebExtensionInstallURL();
            libraryInfo.helpURL = this.m_library.GetHelpURL(downloadsURL);
            libraryInfo.supported
                ? this.m_library
                      .Load()
                      .then(() => {
                          libraryInfo.loaded = true;
                          this.m_library
                              .GetVersion()
                              .then(t => {
                                  libraryInfo.version = t;
                                  resolve(libraryInfo);
                              })
                              .catch(e => {
                                  return reject(this.MapError(e));
                              });
                      })
                      .catch(t => {
                          var i = this.MapError(t);
                          libraryInfo.loaded = false;
                          libraryInfo.isNativeLibraryNeedUpdate =
                              this.m_library.IsLibraryVersionNotSupportedError(i.errorCode);
                          resolve(libraryInfo);
                      })
                : resolve(libraryInfo);
        });
    }
    IsInitialized() {
        return new Promise<boolean>(resolve => resolve(this.m_initialized));
    }
    Initialize(settings: EndUserSettings) {
        this.m_settings = settings;
        return new Promise<void>((resolve, reject) => {
            this.m_library
                .Load()
                .then(() => {
                    return this.m_library.SetRuntimeParameter(
                        this.m_library.EU_SAVE_SETTINGS_PARAMETER,
                        this.m_library.EU_SETTINGS_ID_PROXY,
                    );
                })
                .then(() => this.m_library.SetUIMode(false))
                .then(() => this.m_library.Initialize())
                .then(() => this.m_library.SetUIMode(false))
                .then(() => this.m_library.SetCharset(this.m_settings.encoding))
                .then(() => this.m_library.SetLanguage(this.m_settings.language))
                .then(() => this.m_library.InitializeMandatorySettings())
                .then(() => {
                    const settings = this.m_library.CreateFileStoreSettings();
                    settings.SetPath("");
                    settings.SetSaveLoadedCerts(true);
                    return this.m_library.SetFileStoreSettings(settings);
                })
                .then(() => {
                    return this.m_settings.CAs != null && "string" == typeof this.m_settings.CAs
                        ? this.m_library.DownloadData<EndUserSettingsCA[]>(
                              this.m_settings.CAs,
                              "json",
                          )
                        : this.m_settings.CAs;
                })
                .then(e => {
                    this.m_settings.CAs = e;
                    const settings = this.m_library.CreateOCSPAccessInfoModeSettings();
                    settings.SetEnabled(!0);
                    return this.m_library.SetOCSPAccessInfoModeSettings(settings);
                })
                .then(() => {
                    let result = [];
                    const CAs = this.m_settings.CAs as EndUserSettingsCA[];
                    for (let i = 0; i < CAs.length; i++)
                        for (var o = 0; o < CAs[i].issuerCNs.length; o++) {
                            var a = this.m_library.CreateOCSPAccessInfoSettings();
                            a.SetAddress(CAs[i].ocspAccessPointAddress);
                            a.SetPort(CAs[i].ocspAccessPointPort);
                            a.SetIssuerCN(CAs[i].issuerCNs[o]);
                            result.push(a);
                        }
                    return this.m_library.SetOCSPAccessInfoSettings(result);
                })
                .then(() => {
                    var e = this.m_library.CreateModeSettings();
                    return this.m_library.SetModeSettings(e);
                })
                .then(() => {
                    return null != settings.CACertificates &&
                        "string" == typeof settings.CACertificates
                        ? this.m_library.DownloadData<Uint8Array>(settings.CACertificates, "binary")
                        : settings.CACertificates;
                })
                .then(data => {
                    if (null != settings.CACertificates)
                        return this.m_library.SaveCertificates(data);
                })
                .then(() => {
                    const useTLS = !!settings.TSLAddress;
                    const item = this.m_library.CreateTSLSettings();
                    item.SetUseTSL(useTLS);
                    item.SetAutoDownloadTSL(!!useTLS);
                    item.SetTSLAddress(useTLS ? settings.TSLAddress ?? "" : "");
                    return this.m_library.SetTSLSettings(item);
                })
                .then(() => {
                    return this.m_library.SetRuntimeParameter(
                        this.m_library.EU_RESOLVE_OIDS_PARAMETER,
                        this.m_resolveOIDs,
                    );
                })
                .then(() => {
                    if ("number" == typeof this.m_settings.connectionTimeout)
                        return this.m_library.SetRuntimeParameter(
                            this.m_library.EU_CONNECTIONS_TIMEOUT_PARAMETER,
                            this.m_settings.connectionTimeout,
                        );
                })
                .then(() => {
                    if ("number" == typeof settings.ocspResponseExpireTime)
                        return this.m_library.SetOCSPResponseExpireTime(
                            this.m_settings.ocspResponseExpireTime,
                        );
                })
                .then(() => this.m_library.CtxCreate())
                .then(context => {
                    this.m_context = context;
                    return this.m_library.CtxSetParameter(
                        context,
                        this.m_library.EU_RESOLVE_OIDS_PARAMETER,
                        this.m_resolveOIDs,
                    );
                })
                .then(() =>
                    this.m_library.SetRuntimeParameter(
                        this.m_library.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER,
                        true,
                    ),
                )
                .then(() => {
                    return this.m_settings.signInfoTmpl != null &&
                        "string" == typeof this.m_settings.signInfoTmpl
                        ? this.m_library.DownloadData(this.m_settings.signInfoTmpl, "")
                        : this.m_settings.signInfoTmpl;
                })
                .then(data => {
                    this.m_settings.signInfoTmpl = data;
                    this.m_initialized = true;
                    resolve();
                })
                .catch(e => reject(this.MapError(e)));
        });
    }
    SetRuntimeParameter(name: string, value: number | boolean) {
        return new Promise<void>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.m_library.SetRuntimeParameter(name, value))
                .then(resolve)
                .catch(e => reject(this.MapError(e)));
        });
    }
    GetStorageParameter(name: string, protect: boolean) {
        return new Promise<number>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.m_library.GetStorageParameter(protect, name))
                .then(resolve)
                .catch(e => reject(this.MapError(e)));
        });
    }
    SetStorageParameter(name: string, value: number, protect: boolean) {
        return new Promise<void>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.m_library.SetStorageParameter(protect, name, value))
                .then(resolve)
                .catch(e => reject(this.MapError(e)));
        });
    }
    GetCAs() {
        return new Promise<string | EndUserSettingsCA[]>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => resolve(this.m_settings.CAs))
                .catch(e => reject(this.MapError(e)));
        });
    }
    //GetProxySettings
    //SetProxySettings
    //GetKeyMedias
    //GetJKSPrivateKeys
    //IsPrivateKeyReaded
    //ResetPrivateKey
    //ResetOperationKSP
    //ReadPrivateKey
    //ReadPrivateKeyBinary
    //ReadPrivateKeySIM
    //ReadPrivateKeyKSP
    //GetOwnCertificates
    //GetOwnEUserParams
    //ChangeOwnCertificatesStatus
    //MakeNewCertificate
    //MakeDeviceCertificate
    //ChangePrivateKeyPassword
    //ChangePrivateKeyPasswordBinary
    //GeneratePrivateKey
    //GeneratePrivateKeyBinary
    //GetKeyInfo
    //GetKeyInfoBinary
    //GetClientRegistrationTokenKSP
    //HashData
    //GetSigner
    //SignData
    //SignDataInternal
    //SignHash
    //SignDataEx
    //AppendSign
    //AppendSignHash
    //VerifyHash
    //VerifyData
    //VerifyDataInternal
    //EnvelopData
    //DevelopData
    //ProtectDataByPassword
    //UnprotectDataByPassword
    //CreateAuthData
    //GetTSPByAccessInfo
    //CheckTSP
    //CtxCreate
    //CtxFree
    //CtxSetParameter
    //CtxReadPrivateKey
    //CtxReadPrivateKeyBinary
    //CtxFreePrivateKey
    //CtxGetOwnCertificates
    //CtxSignHash
    //CtxSignData
    //CtxAppendSignHash
    //CtxAppendSign
    //CtxEnvelopData
    //CtxDevelopData
    //ProtectTaxReports
    //UnprotectTaxReceipts
    //ASiCGetSigner
    //ASiCSignData
    //ASiCAppendSign
    //ASiCVerifyData
    //PDFGetSigner
    //PDFSignData
    //PDFVerifyData
    //XAdESGetSigner
    //XAdESSignData
    //XAdESVerifyData
    //GetSignContainerInfo
}
