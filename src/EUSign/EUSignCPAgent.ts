import { EUSignCP, EndUserArrayList, EndUserLibraryLoader } from "./eusw";
import {
    EndUserModeSettings,
    EndUserKeyMediaSettings,
    EndUserFileStoreSettings,
    EndUserProxySettings,
    EndUserOCSPSettings,
    EndUserOCSPAccessInfoModeSettings,
    EndUserOCSPAccessInfoSettings,
    EndUserTSPSettings,
    EndUserLDAPSettings,
    EndUserCMPSettings,
    EndUserTSLSettings,
    EndUserOwnerInfo,
    EndUserCertificateInfo,
    EndUserCertificateInfoEx,
    EndUserPrivateKeyInfo,
    EndUserCertificate,
    EndUserKeyMedia,
    EndUserJKSPrivateKey,
    EndUserContext,
} from "./eusign.types";
import { EndUserError } from "./EndUserObject";

export default class EUSignCPAgent {
    m_language = 0;
    m_library?: EUSignCP;

    EU_SAVE_SETTINGS_PARAMETER = "SaveSettings";
    EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs";
    EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER = "MakePKeyPFXContainer";
    EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER = "SignIncludeContentTimeStamp";
    EU_SIGN_TYPE_PARAMETER = "SignType";
    EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER = "SignIncludeCACertificates";
    EU_FS_CALCULATE_FINGERPRINT = "FSCalculateFingerprint";
    EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER = "CheckCertChainOnSignTime";
    EU_CONNECTIONS_TIMEOUT_PARAMETER = "ConnectionsTimeout";
    EU_LOG_EVENTS_THRESHOLD_PARAMETER = "LogEventsThreshold";

    EU_SETTINGS_ID_PROXY = 2;
    EU_SUBJECT_TYPE_END_USER = 4;
    EU_CERT_KEY_TYPE_DSTU4145 = 1;
    EU_KEY_USAGE_DIGITAL_SIGNATURE = 1;
    EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";

    MakeURL(url: string) {
        var t = window.location.origin,
            n = window.location.pathname;
        return 0 === url.indexOf("http://") || 0 === url.indexOf("https://")
            ? url
            : 0 === url.indexOf("/") && t
            ? t + url
            : t && n
            ? t + n.substr(0, n.lastIndexOf("/")) + "/" + url
            : url;
    }

    MakeError(errorCode: number, message: string) {
        return this.m_library?.MakeError(errorCode, message);
    }

    IsLibraryLoadError(errorCode: number) {
        return errorCode === EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED;
    }

    IsLibraryVersionNotSupportedError(errorCode: number) {
        return errorCode === EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED;
    }

    Load() {
        return new Promise<void>((resolve, reject) => {
            if (this.m_library === undefined) {
                var loader = new EndUserLibraryLoader(
                    EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT,
                    "euSign",
                    this.m_language,
                    true,
                    true,
                );
                loader.onload = library => {
                    this.m_library = library;
                    resolve();
                };
                loader.onerror = (_msg, errorCode, libraryOrNull) => {
                    if (null == libraryOrNull) {
                        libraryOrNull = new EUSignCP("", "");
                    }
                    reject(libraryOrNull.MakeError(errorCode, ""));
                };
                loader.load();
            } else {
                resolve();
            }
        });
    }

    IsSupported() {
        return (
            EndUserLibraryLoader.isWebExtensionSupported() ||
            EndUserLibraryLoader.isSignAgentSupported() ||
            EndUserLibraryLoader.isNPAPISupported() ||
            EndUserLibraryLoader.isActiveXSupported()
        );
    }

    IsSignAgentSupported() {
        return EndUserLibraryLoader.isSignAgentSupported();
    }

    IsWebExtensionSupported() {
        return EndUserLibraryLoader.isWebExtensionSupported();
    }

    IsNPAPISupported() {
        return EndUserLibraryLoader.isNPAPISupported();
    }

    IsActiveXSupported() {
        return EndUserLibraryLoader.isActiveXSupported();
    }

    IsWebExtensionInstalled() {
        return EndUserLibraryLoader.isWebExtensionInstalled();
    }

    GetInstallURL(all: boolean, baseURL?: string): string | null {
        return new EUSignCP("", "").GetInstallURL(all, baseURL);
    }

    GetUpdateURL(all: boolean, baseURL?: string): string | null {
        return new EUSignCP("", "").GetUpdateURL(all, baseURL);
    }

    GetHelpURL(baseURL?: string): string | null {
        return new EUSignCP("", "").GetHelpURL(baseURL);
    }

    GetWebExtensionInstallURL(): string | null {
        return new EUSignCP("", "").GetWebExtensionInstallURL();
    }

    GetVersion(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetVersion(resolve, reject);
        });
    }

    IsInitialized(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library?.IsInitialized(resolve, reject);
        });
    }

    Initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.Initialize(resolve, reject);
        });
    }

    Finalize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.Finalize(resolve, reject);
        });
    }

    ResetOperation(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ResetOperation(resolve, reject);
        });
    }

    SetUIMode(uiMode: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetUIMode(uiMode, resolve, reject);
        });
    }

    SetLanguage(language: string | number): Promise<void> {
        return new Promise((resolve, reject) => {
            if ("string" == typeof language)
                switch ((language = language.toLocaleLowerCase())) {
                    case "en":
                        language = 3;
                        break;
                    case "ru":
                        language = 2;
                        break;
                    case "uk":
                    case "ua":
                    default:
                        language = 1;
                }
            this.m_library?.SetLanguage(language, resolve, reject);
        });
    }

    SetCharset(charset: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetCharset(charset, resolve, reject);
        });
    }

    SetRuntimeParameter(name: string, value: number | boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetRuntimeParameter(name, value, resolve, reject);
        });
    }

    GetStorageParameter(protect: boolean, name: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetStorageParameter(protect, name, resolve, reject);
        });
    }

    SetStorageParameter(protect: boolean, name: string, value: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetStorageParameter(protect, name, value, resolve, reject);
        });
    }

    BASE64Encode(data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library?.BASE64Encode(data, resolve, reject);
        });
    }

    BASE64Decode(data: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.BASE64Decode(data, resolve, reject);
        });
    }

    StringToBytes(data: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.StringToBytes(data, resolve, reject);
        });
    }

    BytesToString(data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library?.BytesToString(data, resolve, reject);
        });
    }

    DoesNeedSetSettings(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library?.DoesNeedSetSettings(resolve, reject);
        });
    }

    InitializeMandatorySettings(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.InitializeMandatorySettings(resolve, reject);
        });
    }

    CreateModeSettings(): EndUserModeSettings {
        return this.m_library?.CreateModeSettings() as unknown as EndUserModeSettings;
    }

    GetModeSettings(): Promise<EndUserModeSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetModeSettings(resolve, reject);
        });
    }

    SetModeSettings(settings: EndUserModeSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetModeSettings(settings, resolve, reject);
        });
    }

    CreateKeyMediaSettings(): EndUserKeyMediaSettings {
        return this.m_library?.CreateKeyMediaSettings() as unknown as EndUserKeyMediaSettings;
    }

    GetKeyMediaSettings(): Promise<EndUserKeyMediaSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetKeyMediaSettings(resolve, reject);
        });
    }

    SetKeyMediaSettings(settings: EndUserKeyMediaSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetKeyMediaSettings(settings, resolve, reject);
        });
    }

    CreateFileStoreSettings(): EndUserFileStoreSettings {
        return this.m_library?.CreateFileStoreSettings() as unknown as EndUserFileStoreSettings;
    }

    GetFileStoreSettings(): Promise<EndUserFileStoreSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetFileStoreSettings(resolve, reject);
        });
    }

    SetFileStoreSettings(settings: EndUserFileStoreSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetFileStoreSettings(settings, resolve, reject);
        });
    }

    CreateProxySettings(): EndUserProxySettings {
        return this.m_library?.CreateProxySettings() as unknown as EndUserProxySettings;
    }

    GetProxySettings(): Promise<EndUserProxySettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetProxySettings(resolve, reject);
        });
    }

    SetProxySettings(settings: EndUserProxySettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetProxySettings(settings, resolve, reject);
        });
    }

    GetSystemProxySettings(): Promise<EndUserProxySettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetSystemProxySettings(resolve, reject);
        });
    }

    CreateOCSPSettings(): EndUserOCSPSettings {
        return this.m_library?.CreateOCSPSettings() as unknown as EndUserOCSPSettings;
    }

    GetOCSPSettings(): Promise<EndUserOCSPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOCSPSettings(resolve, reject);
        });
    }

    SetOCSPSettings(settings: EndUserOCSPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetOCSPSettings(settings, resolve, reject);
        });
    }

    CreateOCSPAccessInfoModeSettings(): EndUserOCSPAccessInfoModeSettings {
        return this.m_library?.CreateOCSPAccessInfoModeSettings() as unknown as EndUserOCSPAccessInfoModeSettings;
    }

    GetOCSPAccessInfoModeSettings(): Promise<EndUserOCSPAccessInfoModeSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOCSPAccessInfoModeSettings(resolve, reject);
        });
    }

    SetOCSPAccessInfoModeSettings(settings: EndUserOCSPAccessInfoModeSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetOCSPAccessInfoModeSettings(settings, resolve, reject);
        });
    }

    CreateOCSPAccessInfoSettings(): EndUserOCSPAccessInfoSettings {
        return this.m_library?.CreateOCSPAccessInfoSettings() as unknown as EndUserOCSPAccessInfoSettings;
    }

    DeleteOCSPAccessInfoSettings(issuerCN: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.DeleteOCSPAccessInfoSettings(issuerCN, resolve, reject);
        });
    }

    GetOCSPAccessInfoSettings(issuerCN: string): Promise<EndUserOCSPAccessInfoSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOCSPAccessInfoSettings(issuerCN, resolve, reject);
        });
    }

    SetOCSPAccessInfoSettings(
        settings: EndUserOCSPAccessInfoSettings | EndUserOCSPAccessInfoSettings[],
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetOCSPAccessInfoSettings(settings, resolve, reject);
        });
    }

    EnumOCSPAccessInfoSettings(index: number): Promise<EndUserOCSPAccessInfoSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumOCSPAccessInfoSettings(index, resolve, reject);
        });
    }

    CreateTSPSettings(): EndUserTSPSettings {
        return this.m_library?.CreateTSPSettings() as unknown as EndUserTSPSettings;
    }

    GetTSPSettings(): Promise<EndUserTSPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetTSPSettings(resolve, reject);
        });
    }

    SetTSPSettings(settings: EndUserTSPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetTSPSettings(settings, resolve, reject);
        });
    }

    CreateLDAPSettings(): EndUserLDAPSettings {
        return this.m_library?.CreateLDAPSettings() as unknown as EndUserLDAPSettings;
    }

    GetLDAPSettings(): Promise<EndUserLDAPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetLDAPSettings(resolve, reject);
        });
    }

    SetLDAPSettings(settings: EndUserLDAPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetLDAPSettings(settings, resolve, reject);
        });
    }

    CreateCMPSettings(): EndUserCMPSettings {
        return this.m_library?.CreateCMPSettings() as unknown as EndUserCMPSettings;
    }

    GetCMPSettings(): Promise<EndUserCMPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCMPSettings(resolve, reject);
        });
    }

    SetCMPSettings(settings: EndUserCMPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetCMPSettings(settings, resolve, reject);
        });
    }

    CreateTSLSettings(): EndUserTSLSettings {
        return this.m_library?.CreateTSLSettings() as unknown as EndUserTSLSettings;
    }

    GetTSLSettings(): Promise<EndUserTSLSettings> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetTSLSettings(resolve, reject);
        });
    }

    SetTSLSettings(settings: EndUserTSLSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetTSLSettings(settings, resolve, reject);
        });
    }

    SetOCSPResponseExpireTime(expireTime: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SetOCSPResponseExpireTime(expireTime, resolve, reject);
        });
    }

    //GetTSPByAccessInfo
    //CheckTSP

    RefreshFileStore(reload: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.RefreshFileStore(reload, resolve, reject);
        });
    }

    SelectCertificateInfo(): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.SelectCertificateInfo(resolve, reject);
        });
    }

    GetCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificatesCount(resolve, reject);
        });
    }

    GetCertificatesCount2(subjectType: number, SubjectSubType: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificatesCount(subjectType, SubjectSubType, resolve, reject);
        });
    }

    EnumCertificates(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumCertificates(certificateIndex, resolve, reject);
        });
    }

    EnumCertificates2(
        subjectType: number,
        SubjectSubType: number,
        certificateIndex: number,
    ): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumCertificates(
                subjectType,
                SubjectSubType,
                certificateIndex,
                resolve,
                reject,
            );
        });
    }

    GetCertificateInfo(issuer: string, serial: string): Promise<EndUserCertificateInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificateInfo(issuer, serial, resolve, reject);
        });
    }

    GetCertificateInfoEx(issuer: string, serial: string): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificateInfoEx(issuer, serial, resolve, reject);
        });
    }

    GetCertificate(issuer: string, serial: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificate(issuer, serial, resolve, reject);
        });
    }

    CheckCertificate(certificate: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.CheckCertificate(certificate, resolve, reject);
        });
    }

    CheckCertificateByIssuerAndSerial(issuer: string, serial: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.CheckCertificateByIssuerAndSerial(issuer, serial, resolve, reject);
        });
    }

    ParseCertificate(certificate: Uint8Array): Promise<EndUserCertificateInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.ParseCertificate(certificate, resolve, reject);
        });
    }

    ParseCertificateEx(certificate: Uint8Array): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library?.ParseCertificateEx(certificate, resolve, reject);
        });
    }

    SaveCertificate(certificate: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SaveCertificate(certificate, resolve, reject);
        });
    }

    // Збереження списку сертифікатів в форматі P7B до файлового сховища
    SaveCertificates(certificate: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.SaveCertificates(certificate, resolve, reject);
        });
    }

    ShowOwnCertificate(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ShowOwnCertificate(resolve, reject);
        });
    }

    EnumOwnCertificates(index: number): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumOwnCertificates(index, resolve, reject);
        });
    }

    GetOwnCertificate(): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOwnCertificate(resolve, reject);
        });
    }

    GetOwnCertificate2(certKeyType: number, keyUsage: number): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOwnCertificate(certKeyType, keyUsage, resolve, reject);
        });
    }

    GetCertificateByKeyInfo(keyInfo: Uint8Array): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificateByKeyInfo(keyInfo, resolve, reject);
        });
    }

    GetCertificatesByKeyInfo(
        keyInfo: EndUserPrivateKeyInfo,
        cmpServers: string[],
        cmpServersPorts: string[],
    ): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificatesByKeyInfo(
                keyInfo,
                cmpServers,
                cmpServersPorts,
                resolve,
                reject,
            );
        });
    }

    GetCertificatesFromLDAPByEDRPOUCode(
        edrpouCode: string,
        certKeyType: number,
        certKeyUsage: number,
        ldapServers: string[],
    ): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificatesFromLDAPByEDRPOUCode(
                edrpouCode,
                certKeyType,
                certKeyUsage,
                ldapServers,
                resolve,
                reject,
            );
        });
    }

    GetCertificates(subjectType: number, subjectSubType: number): Promise<EndUserCertificate[]> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificates(subjectType, subjectSubType, resolve, reject);
        });
    }

    GetCertificateByFingerprint(fingerprint: string): Promise<EndUserCertificate> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificateByFingerprint(fingerprint, resolve, reject);
        });
    }

    GetCertificatesByEDRPOUAndDRFOCode(
        edrpouCode: string,
        drfoCode: string,
    ): Promise<EndUserCertificate[]> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCertificatesByEDRPOUAndDRFOCode(
                edrpouCode,
                drfoCode,
                resolve,
                reject,
            );
        });
    }

    GetCACertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCACertificatesCount(resolve, reject);
        });
    }

    GetCAServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCAServerCertificatesCount(resolve, reject);
        });
    }

    GetCMPServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetCMPServerCertificatesCount(resolve, reject);
        });
    }

    GetOCSPServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOCSPServerCertificatesCount(resolve, reject);
        });
    }

    GetTSPServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetTSPServerCertificatesCount(resolve, reject);
        });
    }

    GetRAAdministratorCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetRAAdministratorCertificatesCount(resolve, reject);
        });
    }

    GetEndUserCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetEndUserCertificatesCount(resolve, reject);
        });
    }

    EnumCACertificates(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumCACertificates(certificateIndex, resolve, reject);
        });
    }

    EnumCAServerCertificates(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumCAServerCertificates(certificateIndex, resolve, reject);
        });
    }

    EnumCMPServerCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumCMPServerCertificatesCount(certificateIndex, resolve, reject);
        });
    }

    EnumOCSPServerCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumOCSPServerCertificatesCount(certificateIndex, resolve, reject);
        });
    }

    EnumTSPServerCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumTSPServerCertificatesCount(certificateIndex, resolve, reject);
        });
    }

    EnumRAAdministratorCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumRAAdministratorCertificatesCount(certificateIndex, resolve, reject);
        });
    }

    EnumEndUserCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumEndUserCertificatesCount(certificateIndex, resolve, reject);
        });
    }

    DownloadData<T = string>(url: string, dataType: string) {
        return new Promise<T>((resolve, reject) => {
            try {
                const xmlHttp = new XMLHttpRequest();

                xmlHttp.onload = () => {
                    if (xmlHttp.readyState === 4) {
                        let result;
                        try {
                            if (xmlHttp.status !== 200) {
                                throw Error(
                                    "Download data error. URL - " +
                                        url +
                                        ", status - " +
                                        xmlHttp.status,
                                );
                            }

                            switch (dataType) {
                                case "binary":
                                    result = new Uint8Array(xmlHttp.response);
                                    break;
                                case "json":
                                    result = JSON.parse(xmlHttp.responseText.replace(/\\'/g, "'"));
                                    break;
                                default:
                                    result = xmlHttp.responseText;
                            }
                        } catch (e) {
                            reject(this.MakeError(EndUserError.ERROR_DOWNLOAD_FILE, ""));
                        }

                        resolve(result);
                    }
                };
                xmlHttp.onerror = () =>
                    reject(this.MakeError(EndUserError.ERROR_DOWNLOAD_FILE, ""));

                url = this.MakeURL(url);
                xmlHttp.open("GET", url, false);
                if (dataType === "binary") {
                    xmlHttp.responseType = "arraybuffer";
                }
                xmlHttp.send();
            } catch (e) {
                console.log("EndUser.DowloadData error: " + e);
                reject(this.MakeError(EndUserError.ERROR_DOWNLOAD_FILE, ""));
            }
        });
    }

    CreateKeyMedia() {
        return this.m_library?.CreateKeyMedia();
    }

    GetPrivateKeyMedia(caption: string): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetPrivateKeyMedia(caption, resolve, reject);
        });
    }

    EnumKeyMediaTypes(typeIndex: number): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumKeyMediaTypes(typeIndex, resolve, reject);
        });
    }

    EnumKeyMediaDevices(typeIndex: number, deviceIndex: number): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumKeyMediaDevices(typeIndex, deviceIndex, resolve, reject);
        });
    }

    GetKeyMediaTypes(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetKeyMediaTypes(resolve, reject);
        });
    }

    GetKeyMediaDevices(typeIndexes: number[]): Promise<string[][]> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetKeyMediaDevices(typeIndexes, resolve, reject);
        });
    }

    IsPrivateKeyReaded(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library?.IsPrivateKeyReaded(resolve, reject);
        });
    }

    ReadPrivateKey(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ReadPrivateKey(resolve, reject);
        });
    }

    ReadPrivateKeySilently(keyMedia: EndUserKeyMedia): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ReadPrivateKeySilently(keyMedia, resolve, reject);
        });
    }

    ReadPrivateKeySilently2(typeIndex: number, devIndex: number, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ReadPrivateKeySilently(typeIndex, devIndex, password, resolve, reject);
        });
    }

    ReadPrivateKeyBinary(privateKey: Uint8Array, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ReadPrivateKeyBinary(privateKey, password, resolve, reject);
        });
    }

    ReadPrivateKeyFile(fileName: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ReadPrivateKeyFile(fileName, password, resolve, reject);
        });
    }

    ResetPrivateKey(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.ResetPrivateKey(resolve, reject);
        });
    }

    CtxReadPrivateKey(
        context: EndUserContext,
        typeIndexOrPass: string | number,
        devIndex?: number,
        password?: string,
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            typeof typeIndexOrPass == "number"
                ? this.m_library?.CtxReadPrivateKey(
                      context,
                      typeIndexOrPass,
                      devIndex,
                      password,
                      resolve,
                      reject,
                  )
                : this.m_library?.CtxReadPrivateKey(context, typeIndexOrPass, resolve, reject);
        });
    }

    CtxReadPrivateKeyBinary(
        context: EndUserContext,
        privateKey: Uint8Array,
        password: string,
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxReadPrivateKeyBinary(context, privateKey, password, resolve, reject);
        });
    }

    CtxFreePrivateKey(context: EndUserContext): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxFreePrivateKey(context, resolve, reject);
        });
    }

    GetOwnEUserParams() {
        return new Promise((resolve, reject) => {
            this.m_library?.GetOwnEUserParams(resolve, reject);
        });
    }

    CtxGetOwnEUserParams(context: EndUserContext) {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxGetOwnEUserParams(context, resolve, reject);
        });
    }

    ModifyOwnEUserParams(phone: string, email: string) {
        return new Promise((resolve, reject) => {
            this.m_library?.ModifyOwnEUserParams(phone, email, resolve, reject);
        });
    }

    CtxModifyOwnEUserParams(context: EndUserContext, phone: string, email: string) {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxModifyOwnEUserParams(context, phone, email, resolve, reject);
        });
    }

    GetPrivateKeyOwnerInfo() {
        return new Promise((resolve, reject) => {
            this.m_library?.GetPrivateKeyOwnerInfo(resolve, reject);
        });
    }

    CtxEnumOwnCertificates(context: EndUserContext, index: number) {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxEnumOwnCertificates(context, index, resolve, reject);
        });
    }

    CtxGetOwnCertificate(context: EndUserContext, certKeyType: number, keyUsage: number) {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxGetOwnCertificate(context, certKeyType, keyUsage, resolve, reject);
        });
    }

    GetKeyInfo(keyMedia: EndUserKeyMedia): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetKeyInfo(keyMedia, resolve, reject);
        });
    }

    GetKeyInfoBinary(privateKey: Uint8Array, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetKeyInfoBinary(privateKey, password, resolve, reject);
        });
    }

    GetKeyInfoFile(privateKeyFileName: string, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetKeyInfoFile(privateKeyFileName, password, resolve, reject);
        });
    }

    EnumJKSPrivateKeys(container: Uint8Array, index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumJKSPrivateKeys(container, index, resolve, reject);
        });
    }

    EnumJKSPrivateKeysFile(fileName: string, index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library?.EnumJKSPrivateKeysFile(fileName, index, resolve, reject);
        });
    }

    GetJKSPrivateKey(container: Uint8Array, keyAlias: string): Promise<EndUserJKSPrivateKey> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetJKSPrivateKey(container, keyAlias, resolve, reject);
        });
    }

    GetJKSPrivateKeyFile(fileName: string, keyAlias: string): Promise<EndUserJKSPrivateKey> {
        return new Promise((resolve, reject) => {
            this.m_library?.GetJKSPrivateKeyFile(fileName, keyAlias, resolve, reject);
        });
    }

    CreatePrivateKeyInfo() {
        return this.m_library?.CreatePrivateKeyInfo();
    }

    CreateEndUserInfo() {
        return this.m_library?.CreateEndUserInfo();
    }

    CtxCreate(): Promise<EndUserContext> {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxCreate(resolve, reject);
        });
    }

    CtxFree(context: EndUserContext): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxFree(context, resolve, reject);
        });
    }

    CtxSetParameter(context: EndUserContext, name: string, value: number | boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library?.CtxSetParameter(context, name, value, resolve, reject);
        });
    }
}
