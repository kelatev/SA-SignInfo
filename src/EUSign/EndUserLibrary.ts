import {
    EndUserProxySettings,
    EndUserPrivateKey,
    EndUserOwnerInfo,
    EndUserKeyMedia,
    EndUserParams,
    EndUserCertificate,
    EndUserSignInfo,
    EndUserContext,
} from "./EndUserTypes";
import { EndUserContextClass } from "./EndUserClass";
import { EndUserEventType, EndUserSignAlgo } from "./EndUserConstants";

enum EndUserLanguage {
    EU_DEFAULT_LANG = 0,
    EU_UA_LANG = 1,
    EU_RU_LANG = 2,
    EU_EN_LANG = 3,
}

export interface EndUserSettingsCA {
    issuerCNs: string[];
    address: string;
    ocspAccessPointAddress: string;
    ocspAccessPointPort: string;
    cmpAddress: string;
    tspAddress: string;
    tspAddressPort: string;
    directAccess?: boolean;
    qscdSNInCert?: boolean;
    certsInKey?: boolean;
    cmpCompatibility?: number;
}

export interface EndUserSettingsKSP {
    name: string;
    ksp: number;
    address: string;
    port: string;
    directAccess: boolean;
    clientIdPrefix?: string;
    confirmationURL?: string;
    mobileAppName?: string;
    systemId?: string;
}

export interface EndUserSettings {
    downloadsURL?: string;
    language: EndUserLanguage | string;
    encoding: string;
    directAccess: boolean;
    httpProxyServiceURL: string;
    CAs: string | EndUserSettingsCA[];
    CACertificates: string | Uint8Array;
    allowedKeyMediaTypes?: string[];
    allowedKeyMediaDevices?: Array<{ type: string; devices: string }>;
    passwordRequirements?: null;
    KSPs?: EndUserSettingsKSP[];
    allowMakeNewCertOnNewKeyMedia: boolean;
    allowMakeNewCertOnFileKeyMedia: boolean;
    signInfoTmpl?: string;
    connectionTimeout: number;
    ocspResponseExpireTime: number;
    TSLAddress?: string;
}

export interface LibraryInfo {
    version: string;
    supported: boolean;
    loaded: boolean;
    isSignAgentSupported?: boolean;
    isWebExtensionSupported?: boolean;
    isNPAPISupported?: boolean;
    isActiveXSupported?: boolean;
    isWebExtensionInstalled?: boolean;
    isNativeLibraryNeedUpdate?: boolean;
    nativeLibraryInstallURLs?: string | null;
    nativeLibraryInstallURL?: string | null;
    nativeLibraryUpdateURLs?: string | null;
    nativeLibraryUpdateURL?: string | null;
    webExtensionInstallURL?: string | null;
    helpURL?: string | null;
}

export interface ClientRegistrationTokenKSP {
    version: string;
    type: string;
    serverId: string;
    serverName: string;
    clientType: string;
    clientName: string;
    rawSign: string;
    expiration: Date;
    token: string;
    qrCode: string;
}

export interface SignContainerInfo {
    type: number;
    subType: number;
    asicSignType: number;
}

export default interface EndUserLibrary {
    AddEventListener: (eventType: EndUserEventType, callback: (event: any) => void) => Promise<void>;
    GetLibraryInfo: (downloadsURL?: string) => Promise<LibraryInfo>;
    IsInitialized: () => Promise<boolean>;
    Initialize: (settings: EndUserSettings) => Promise<void>;
    SetRuntimeParameter: (name: string, value: number) => Promise<void>;
    GetStorageParameter: (name: string, protectedItem: boolean) => Promise<number>;
    SetStorageParameter: (name: string, value: number, protectedItem: boolean) => Promise<void>;
    GetCAs: () => Promise<string | EndUserSettingsCA[]>;
    GetProxySettings: () => Promise<EndUserProxySettings>;
    SetProxySettings: (settings: EndUserProxySettings) => Promise<void>;
    GetKeyMedias: () => Promise<EndUserKeyMedia[]>;
    GetJKSPrivateKeys: (jks: Uint8Array) => Promise<EndUserPrivateKey[]>;
    IsPrivateKeyReaded: () => Promise<boolean>;
    ResetPrivateKey: () => Promise<void>;
    ResetOperationKSP: () => Promise<void>;
    ReadPrivateKey: (
        keyMedia: EndUserKeyMedia,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) => Promise<EndUserOwnerInfo>;
    ReadPrivateKeyBinary: (
        privateKey: Uint8Array,
        password: string,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) => Promise<EndUserOwnerInfo>;
    ReadPrivateKeySIM: (
        msisdn: string,
        operator: string | number,
        getCerts: boolean,
        keyId: number,
    ) => Promise<EndUserOwnerInfo>;
    ReadPrivateKeyKSP: (
        userId: string,
        ksp: string | number,
        getCerts: boolean,
        keyId: number,
    ) => Promise<EndUserOwnerInfo>;
    GetOwnCertificates: () => Promise<EndUserCertificate[]>;
    GetOwnEUserParams: () => Promise<EndUserParams>;
    ChangeOwnCertificatesStatus: (requestType: number, revocationReason: number) => Promise<void>;
    //MakeNewCertificate
    //MakeDeviceCertificate
    //ChangePrivateKeyPassword
    //ChangePrivateKeyPasswordBinary
    //GeneratePrivateKey
    //GeneratePrivateKeyBinary
    GetKeyInfo: (keyMedia: EndUserKeyMedia) => Promise<Uint8Array>;
    GetKeyInfoBinary: (privateKey: Uint8Array, password: string) => Promise<Uint8Array>;
    GetClientRegistrationTokenKSP: (ksp: string | number) => Promise<ClientRegistrationTokenKSP>;
    HashData: (
        hashAlgo: number,
        data: Uint8Array,
        asBase64String?: boolean,
    ) => Promise<Uint8Array | string>;
    GetSigner: (
        sign: Uint8Array,
        signIndex?: number,
        resolveOIDs?: boolean,
    ) => Promise<EndUserCertificate | EndUserCertificate[]>;
    SignData: (data: Uint8Array | string, asBase64String?: boolean) => Promise<Uint8Array | string>;
    SignDataInternal: (
        appendCert: boolean,
        data: Uint8Array | string,
        asBase64String?: boolean,
    ) => Promise<Uint8Array | string>;
    SignHash: (
        signAlgo: EndUserSignAlgo,
        hash: Uint8Array | string,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array | string>;
    SignDataEx: (
        signAlgo: EndUserSignAlgo,
        data: Uint8Array | string,
        external: boolean,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array | string>;
    AppendSign: (
        signAlgo: EndUserSignAlgo,
        data: Uint8Array | string,
        previousSign: Uint8Array | string,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array | string>;
    AppendSignHash: (
        signAlgo: EndUserSignAlgo,
        hash: Uint8Array | string,
        previousSign: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array | string>;
    VerifyHash: (
        hash: Uint8Array,
        sign: Uint8Array,
        signIndex: number,
    ) => Promise<EndUserSignInfo | EndUserSignInfo[]>;
    VerifyData: (
        data: Uint8Array,
        sign: Uint8Array,
        signIndex: number,
    ) => Promise<EndUserSignInfo | EndUserSignInfo[]>;
    VerifyDataInternal: (
        sign: Uint8Array,
        signIndex?: number,
    ) => Promise<EndUserSignInfo | EndUserSignInfo[]>;
    //EnvelopData
    //DevelopData
    //ProtectDataByPassword
    //UnprotectDataByPassword
    //CreateAuthData
    //GetTSPByAccessInfo
    //CheckTSP
    CtxCreate: () => Promise<EndUserContext | EndUserContextClass>;
    CtxFree: (context: EndUserContext | EndUserContextClass) => Promise<void>;
    CtxSetParameter: (
        context: EndUserContext | EndUserContextClass,
        name: string,
        value: boolean,
    ) => Promise<void>;
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
    GetSignContainerInfo: (signature: Uint8Array | string) => Promise<SignContainerInfo>;
}
