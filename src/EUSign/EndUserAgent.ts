import { EndUserError } from "./eusw";
import EUSignCPAgent from "./EUSignCPAgent";
import {
    EndUserPrivateKey,
    EndUserCertificate,
    EndUserCertificateInfoEx,
    EndUserContext,
    EndUserProxySettings,
    EndUserError as EndUserErrorType,
    EndUserKeyMedia,
    EndUserOwnerInfo,
    EndUserPrivateKeyContext,
    EndUserParams,
} from "./EndUserTypes";
import {
    EndUserContextClass,
    EndUserKeyMediaClass,
    EndUserPrivateKeyContextClass,
    EndUserPrivateKeyInfoClass,
} from "./EndUserClass";
import {
    MapToEndUserCertificateInfoEx,
    MapToProxySettings,
    MapFromProxySettings,
    MapFromKeyMedia,
    MapEndUserOwnerInfo,
    MapToEndUserParams,
    MapToEndUserCertificate,
} from "./EndUserConvert";
import EndUserLibrary, {
    EndUserEventType,
    LibraryInfo,
    ClientRegistrationTokenKSP,
    SignContainerInfo,
    EndUserSettings,
    EndUserSettingsCA,
} from "./EndUserLibrary";
import { EndUserSignAlgo, EndUserCMPCompatibility } from "./EndUserConstants";

export default class EndUserAgent implements EndUserLibrary {
    m_library;
    m_settings: EndUserSettings = {} as any;
    m_initialized = false;
    m_kmTypes: string[] | null = null;
    m_kmActiveOperation = false;
    m_context: EndUserContextClass | null = null;
    m_pkContext: EndUserPrivateKeyContextClass | null = null;
    m_eventListeners: any[];
    m_resolveOIDs = false;

    constructor() {
        this.m_library = new EUSignCPAgent();
        this.m_eventListeners = [];
    }

    MapError(error: any): EndUserErrorType {
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
                    this.MapError(this.m_library.MakeError(EndUserError.ERROR_BAD_PARAMETER, "")),
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
            throw this.m_library.MakeError(EndUserError.ERROR_WRITE_SETTINGS, "");
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
                    return this.ProcessArray(result, item =>
                        this.m_library.ParseCertificateEx(item),
                    );
                })
                .then(infoExArr => {
                    var n: EndUserPrivateKey = {} as any;
                    n.alias = privateKey.alias;
                    n.privateKey = privateKey.info.GetPrivateKey();
                    n.certificates = [];
                    n.digitalStamp = false;
                    for (var r = 0; r < infoExArr.length; r++) {
                        var infoEx = infoExArr[r];
                        if (infoEx.GetSubjType() === this.m_library.EU_SUBJECT_TYPE_END_USER) {
                            infoEx.GetPublicKeyType() ===
                                this.m_library.EU_CERT_KEY_TYPE_DSTU4145 &&
                                (infoEx.GetKeyUsageType() &
                                    this.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE) ===
                                    this.m_library.EU_KEY_USAGE_DIGITAL_SIGNATURE &&
                                (n.digitalStamp =
                                    infoEx
                                        .GetExtKeyUsages()
                                        .indexOf(this.m_library.EU_UA_OID_EXT_KEY_USAGE_STAMP) >
                                    -1);
                            var l: EndUserCertificate = {} as any;
                            l.data = privateKey.info.GetCertificate(r);
                            l.infoEx = MapToEndUserCertificateInfoEx(infoEx);
                            n.certificates.push(l);
                        }
                    }
                    n.digitalStamp = false;
                    resolve(n);
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
    GetProxySettings() {
        return new Promise<EndUserProxySettings>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.m_library.GetProxySettings())
                .then(data => {
                    resolve(MapToProxySettings(data));
                })
                .catch(e => reject(this.MapError(e)));
        });
    }
    SetProxySettings(settings: EndUserProxySettings) {
        return new Promise<void>((resolve, reject) => {
            this.CheckInitialize()
                .then(() =>
                    this.m_library.SetProxySettings(
                        MapFromProxySettings(settings, this.m_library.CreateProxySettings()),
                    ),
                )
                .then(resolve)
                .catch(e => reject(this.MapError(e)));
        });
    }
    GetKeyMedias() {
        let allowedKeyMediaDevices: any = null;
        if (this.m_settings.allowedKeyMediaDevices) {
            allowedKeyMediaDevices = {};
            this.m_settings.allowedKeyMediaDevices.forEach(e => {
                allowedKeyMediaDevices[e.type] = e.devices;
            });
        }
        let allowedKeyMediaTypes: number[] = [];

        return new Promise((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.BeginKMOperation())
                .then(() => (this.m_kmTypes ? this.m_kmTypes : this.m_library.GetKeyMediaTypes()))
                .then(kmTypes => {
                    this.m_kmTypes = kmTypes;
                    allowedKeyMediaTypes = [];
                    for (let i = 0; i < kmTypes.length; i++) {
                        (!this.m_settings.allowedKeyMediaTypes ||
                            this.m_settings.allowedKeyMediaTypes.indexOf(kmTypes[i]) >= 0) &&
                            allowedKeyMediaTypes.push(i);
                    }
                    return this.m_library.GetKeyMediaDevices(allowedKeyMediaTypes);
                })
                .then(keyMediaDevices => {
                    let result = [];
                    for (let i = 0; i < keyMediaDevices.length; i++)
                        for (
                            var allowedType = allowedKeyMediaTypes[i],
                                type = this.m_kmTypes?.at(allowedType),
                                allowedDevice = keyMediaDevices[i],
                                device =
                                    type &&
                                    allowedKeyMediaDevices &&
                                    allowedKeyMediaDevices.at(type)
                                        ? allowedKeyMediaDevices.at(type)
                                        : null,
                                index = 0;
                            index < allowedDevice.length;
                            index++
                        )
                            if (!device || -1 != device.indexOf(allowedDevice[index])) {
                                var map: EndUserKeyMedia = {} as any;
                                map.typeIndex = allowedType;
                                map.devIndex = index;
                                map.password = null;
                                map.type = type;
                                map.device = allowedDevice[index];
                                map.visibleName = map.device + "(" + map.type + ")";
                                result.push(map);
                            }
                    this.EndKMOperation();
                    resolve(result);
                })
                .catch(e => {
                    this.EndKMOperation();
                    reject(this.MapError(e));
                });
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
    IsPrivateKeyReaded() {
        return new Promise<boolean>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => resolve(this.m_pkContext != null))
                .catch(e => reject(this.MapError(e)));
        });
    }
    ResetPrivateKeyInternal() {
        return new Promise<void>((resolve, reject) => {
            if (this.m_pkContext != null) {
                this.m_library
                    .CtxFreePrivateKey(this.m_pkContext)
                    .then(() => {
                        this.m_pkContext = null;
                        resolve();
                    })
                    .catch(e => reject(this.MapError(e)));
            } else {
                resolve();
            }
        });
    }
    async ResetPrivateKey() {
        try {
            await this.CheckInitialize();
            await this.ResetPrivateKeyInternal();
        } catch (e) {
            throw this.MapError(e);
        }
    }
    async ResetOperationKSP() {
        try {
            await this.CheckInitialize();
            throw this.m_library.MakeError(EndUserError.ERROR_NOT_SUPPORTED, "");
        } catch (e) {
            throw this.MapError(e);
        }
    }
    async SaveCertificatesInternal(
        certificates: Uint8Array[] | Uint8Array | null | undefined,
    ): Promise<void> {
        if (Array.isArray(certificates)) {
            return Promise.all(
                certificates.map(async cert => {
                    await this.m_library.SaveCertificate(cert);
                }),
            ).then(() => Promise.resolve());
        } else if (certificates) {
            return this.m_library.SaveCertificate(certificates);
        } else {
            return Promise.resolve();
        }
    }
    async CtxReadPrivateKeyInternal(
        context: EndUserContextClass | null,
        privateKey: Uint8Array | null,
        password: string | null,
        keyMedia: EndUserKeyMediaClass | null,
        certificates: Uint8Array[] | Uint8Array | null | undefined,
        issuerCN: string | null,
    ): Promise<EndUserPrivateKeyContextClass> {
        context = context || this.m_context;
        let pkContext: EndUserPrivateKeyContextClass | null = null;
        try {
            await this.SaveCertificatesInternal(certificates);
            await this.SetSettings(issuerCN);
            if (privateKey !== null && password !== null) {
                pkContext = await this.m_library.CtxReadPrivateKeyBinary(
                    context,
                    privateKey,
                    password,
                );
            } else if (keyMedia) {
                pkContext = await this.m_library.CtxReadPrivateKey(context, keyMedia);
            } else {
                throw this.m_library.MakeError(EndUserError.ERROR_BAD_PRIVATE_KEY, "");
            }
            const ownerInfo = pkContext.GetOwnerInfo();
            if (issuerCN === null) {
                ownerInfo && (await this.SetSettings(ownerInfo.GetIssuerCN()));
                return pkContext;
            }
            const settings = ownerInfo && this.GetCASettings(ownerInfo.GetIssuerCN());
            if (!settings || settings.issuerCNs.indexOf(issuerCN) === -1)
                throw this.m_library.MakeError(EndUserError.ERROR_CERT_NOT_FOUND, "");
            return pkContext;
        } catch (e: any) {
            if (pkContext == null) {
                if (this.MapError(e).errorCode !== EndUserError.ERROR_CERT_NOT_FOUND || issuerCN) {
                    throw this.MapError(e);
                } else {
                    try {
                        const keyCertificate = await this.SearchPrivateKeyCertificatesWithCMP(
                            privateKey,
                            password,
                            keyMedia,
                        );
                        return this.CtxReadPrivateKeyInternal(
                            context,
                            privateKey,
                            password,
                            keyMedia,
                            keyCertificate.certs,
                            keyCertificate.CACommonName,
                        );
                    } catch (e) {
                        throw this.MapError(e);
                    }
                }
            } else {
                try {
                    await this.m_library.CtxFreePrivateKey(pkContext);
                    throw this.MapError(e);
                } catch (e) {
                    throw this.MapError(e);
                }
            }
        }
    }
    async SearchPrivateKeyCertificatesWithCMP(
        privateKey: Uint8Array | null,
        password: string | null,
        keyMedia: EndUserKeyMediaClass | null,
        issuerCN?: string,
    ): Promise<{
        certs: Uint8Array | null;
        CACommonName: string | null;
    }> {
        const CAs = this.m_settings.CAs as EndUserSettingsCA[];
        try {
            let keyInfo: EndUserPrivateKeyInfoClass;
            if (null != privateKey && null != password) {
                keyInfo = await this.m_library.GetKeyInfoBinary(privateKey, password);
            } else if (keyMedia) {
                keyInfo = await this.m_library.GetKeyInfo(keyMedia);
            } else {
                return {
                    certs: null,
                    CACommonName: null,
                };
            }

            return new Promise((resolve, reject) => {
                const func = (index: number, errorCertNotFound: boolean) => {
                    if (index >= CAs.length) {
                        throw this.m_library.m_library.MakeError(
                            errorCertNotFound
                                ? EndUserError.ERROR_CERT_NOT_FOUND
                                : EndUserError.ERROR_TRANSMIT_REQUEST,
                            "",
                        );
                    } else {
                        const action = issuerCN
                            ? EndUserCMPCompatibility.DownloadEUCerts
                            : EndUserCMPCompatibility.SearchEUCerts;
                        if (this.IsCMPCompatible(CAs[index], action)) {
                            if (issuerCN && CAs[index].issuerCNs.indexOf(issuerCN) === -1) {
                                func(index + 1, errorCertNotFound);
                            } else {
                                this.m_library
                                    .GetCertificatesByKeyInfo(
                                        keyInfo,
                                        [CAs[index].cmpAddress],
                                        ["80"],
                                    )
                                    .then(certificates => {
                                        resolve({
                                            certs: certificates,
                                            CACommonName: CAs[index].issuerCNs[0],
                                        });
                                    })
                                    .catch(error => {
                                        const code = error.GetErrorCode();
                                        if (
                                            code === EndUserError.ERROR_CERT_NOT_FOUND ||
                                            code === EndUserError.ERROR_TRANSMIT_REQUEST
                                        ) {
                                            return func(
                                                index + 1,
                                                errorCertNotFound ||
                                                    code === EndUserError.ERROR_CERT_NOT_FOUND,
                                            );
                                        }
                                        reject(this.MapError(error));
                                    });
                            }
                        } else {
                            func(index + 1, errorCertNotFound);
                        }
                    }
                };
                func(0, false);
            });
        } catch (e) {
            throw this.MapError(e);
        }
    }
    ReadPrivateKeyInternal(
        privateKey: Uint8Array | null,
        password: string | null,
        keyMedia: EndUserKeyMediaClass | null,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) {
        return new Promise<EndUserOwnerInfo>((resolve, reject) => {
            this.ResetPrivateKeyInternal()
                .then(() =>
                    this.CtxReadPrivateKeyInternal(
                        this.m_context,
                        privateKey,
                        password,
                        keyMedia,
                        certs,
                        CACommonName,
                    ),
                )
                .then(context => {
                    this.m_pkContext = context;
                    resolve(MapEndUserOwnerInfo(context?.GetOwnerInfo()));
                })
                .catch(e => reject(this.MapError(e)));
        });
    }
    ReadPrivateKey(
        keyMedia: EndUserKeyMedia,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) {
        return new Promise<EndUserOwnerInfo>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.BeginKMOperation())
                .then(() => {
                    const keyMediaMap = MapFromKeyMedia(keyMedia, this.m_library.CreateKeyMedia());
                    return this.ReadPrivateKeyInternal(
                        null,
                        null,
                        keyMediaMap,
                        certs,
                        CACommonName,
                    );
                })
                .then(ownerInfo => {
                    this.EndKMOperation();
                    resolve(ownerInfo);
                })
                .catch(e => {
                    this.EndKMOperation();
                    reject(this.MapError(e));
                });
        });
    }
    ReadPrivateKeyBinary(
        privateKey: Uint8Array,
        password: string,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) {
        return new Promise<EndUserOwnerInfo>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.BeginKMOperation())
                .then(() =>
                    this.ReadPrivateKeyInternal(privateKey, password, null, certs, CACommonName),
                )
                .then(ownerInfo => {
                    this.EndKMOperation();
                    resolve(ownerInfo);
                })
                .catch(e => {
                    this.EndKMOperation();
                    reject(this.MapError(e));
                });
        });
    }
    ReadPrivateKeySIM(msisdn: string, operator: string | number, getCerts: boolean, keyId: number) {
        return new Promise<EndUserPrivateKeyContext>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.m_library.MakeError(EndUserError.ERROR_NOT_SUPPORTED, ""))
                .catch(e => reject(this.MapError(e)));
        });
    }
    ReadPrivateKeyKSP(userId: string, ksp: string | number, getCerts: boolean, keyId: number) {
        return new Promise<EndUserPrivateKeyContext>((resolve, reject) => {
            this.CheckInitialize()
                .then(() => this.m_library.MakeError(EndUserError.ERROR_NOT_SUPPORTED, ""))
                .catch(e => reject(this.MapError(e)));
        });
    }
    async CtxGetOwnCertificates(context: EndUserPrivateKeyContextClass | null) {
        try {
            await this.CheckInitialize();
            if (context == null) throw this.m_library.MakeError(EndUserError.ERROR_BAD_CERT, "");
            const result: EndUserCertificate[] = [];
            const func = async (index: number): Promise<EndUserCertificate[]> => {
                const cert = await this.m_library.CtxEnumOwnCertificates(context, index);
                if (cert) {
                    result.push(MapToEndUserCertificate(cert));
                    return await func(index + 1);
                } else {
                    return result;
                }
            };
            return await func(0);
        } catch (e) {
            throw this.MapError(e);
        }
    }
    GetOwnCertificates() {
        return this.CtxGetOwnCertificates(this.m_pkContext);
    }
    async GetOwnEUserParams(): Promise<EndUserParams> {
        try {
            await this.CheckInitialize();
            if (this.m_pkContext == null)
                throw this.m_library.MakeError(EndUserError.ERROR_BAD_CERT, "");
            const result = await this.m_library.CtxGetOwnEUserParams(this.m_pkContext);
            return MapToEndUserParams(result);
        } catch (e) {
            throw this.MapError(e);
        }
    }
    async ChangeOwnCertificatesStatus(requestType: number, revocationReason: number) {
        try {
            await this.CheckInitialize();
            if (this.m_pkContext == null)
                throw this.m_library.MakeError(EndUserError.ERROR_BAD_CERT, "");
            await this.m_library.CtxChangeOwnCertificatesStatus(
                this.m_pkContext,
                requestType,
                revocationReason,
            );
        } catch (e) {
            throw this.MapError(e);
        }
    }
    //MakeNewCertificate
    //MakeDeviceCertificate
    //ChangePrivateKeyPassword
    //ChangePrivateKeyPasswordBinary
    //GeneratePrivateKey
    //GeneratePrivateKeyBinary
    async GetKeyInfo(keyMedia: EndUserKeyMedia) {
        try {
            await this.CheckInitialize();
            await this.BeginKMOperation();
            const result = await this.m_library.GetKeyInfo(
                MapFromKeyMedia(keyMedia, this.m_library.CreateKeyMedia()),
            );
            this.EndKMOperation();
            return result.GetPrivateKeyInfo();
        } catch (e) {
            this.EndKMOperation();
            throw this.MapError(e);
        }
    }
    async GetKeyInfoBinary(privateKey: Uint8Array, password: string) {
        try {
            await this.CheckInitialize();
            const result = await this.m_library.GetKeyInfoBinary(privateKey, password);
            return result.GetPrivateKeyInfo();
        } catch (e) {
            throw this.MapError(e);
        }
    }
    async GetClientRegistrationTokenKSP(ksp: string | number): Promise<ClientRegistrationTokenKSP> {
        try {
            await this.CheckInitialize();
            throw this.m_library.MakeError(EndUserError.ERROR_NOT_SUPPORTED, "");
        } catch (e) {
            throw this.MapError(e);
        }
    }
    async HashData(hashAlgo: number, data: Uint8Array, asBase64String?: boolean) {
        try {
            await this.CheckInitialize();
            const hash = await this.m_library.CtxHash(this.m_context, hashAlgo, null, data);
            return asBase64String ? hash : this.m_library.BASE64Decode(hash);
        } catch (e) {
            throw this.MapError(e);
        }
    }
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
