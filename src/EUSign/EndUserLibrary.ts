import {
    EndUserSettings,
    EndUserProxySettings,
    EndUserPrivateKey,
    EndUserOwnerInfo,
    EndUserPrivateKeyContext,
    EndUserKeyMedia,
    EndUserParams,
    EndUserCertificate,
    EndUserSignInfo,
} from "./eusign.types";
import { EndUserSignAlgo } from "./EndUserConstants";

export enum EndUserEventType {
    "None" = 0,
    "All" = 1,
    "ConfirmKSPOperation" = 2,
}

export interface LibraryInfo {
    version: string;
    supported: boolean;
    loaded: boolean;
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
    AddEventListener: (eventType: EndUserEventType, callback: any) => Promise<void>;
    GetLibraryInfo: (downloadsURL?: string) => Promise<LibraryInfo>;
    IsInitialized: () => Promise<boolean>;
    Initialize: (settings: EndUserSettings) => Promise<void>;
    SetRuntimeParameter: (name: string, value: number) => Promise<void>;
    GetStorageParameter: (name: string, protectedItem: boolean) => Promise<number>;
    SetStorageParameter: (name: string, value: number, protectedItem: boolean) => Promise<void>;
    GetCAs: () => Promise<any[]>;
    GetProxySettings: () => Promise<EndUserProxySettings>;
    SetProxySettings: (settings: EndUserProxySettings) => Promise<void>;
    GetKeyMedias: () => Promise<any>;
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
    ) => Promise<EndUserPrivateKeyContext>;
    ReadPrivateKeyKSP: (
        userId: string,
        ksp: string | number,
        getCerts: boolean,
        keyId: number,
    ) => Promise<EndUserPrivateKeyContext>;
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
    HashData: (hashAlgo: number, data: Uint8Array, asBase64String?: boolean) => Promise<Uint8Array>;
    GetSigner: (
        sign: Uint8Array,
        signIndex: number,
        resolveOIDs?: boolean,
    ) => Promise<EndUserCertificate>;
    SignData: (data: Uint8Array | string, asBase64String?: boolean) => Promise<Uint8Array>;
    SignDataInternal: (
        appendCert: boolean,
        data: Uint8Array | string,
        asBase64String?: boolean,
    ) => Promise<Uint8Array>;
    SignHash: (
        signAlgo: EndUserSignAlgo,
        hash: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array>;
    SignDataEx: (
        signAlgo: EndUserSignAlgo,
        data: Uint8Array,
        external: boolean,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array>;
    AppendSign: (
        signAlgo: EndUserSignAlgo,
        data: Uint8Array,
        previousSign: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array>;
    AppendSignHash: (
        signAlgo: EndUserSignAlgo,
        hash: Uint8Array,
        previousSign: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) => Promise<Uint8Array>;
    VerifyHash: (hash: Uint8Array, sign: Uint8Array, signIndex: number) => Promise<EndUserSignInfo>;
    VerifyData: (data: Uint8Array, sign: Uint8Array, signIndex: number) => Promise<EndUserSignInfo>;
    VerifyDataInternal: (sign: Uint8Array, signIndex: number) => Promise<EndUserSignInfo>;
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
    GetSignContainerInfo: (signature: Uint8Array) => Promise<SignContainerInfo>;
}
