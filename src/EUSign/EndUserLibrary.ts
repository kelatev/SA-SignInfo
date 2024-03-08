import {
    EndUserSettings,
    EndUserProxySettings,
    EndUserPrivateKey,
    EndUserPrivateKeyContext,
    EndUserKeyMedia,
    EndUserParams,
} from "./types";

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
    ) => Promise<EndUserPrivateKeyContext>;
    ReadPrivateKeyBinary: (
        privateKey: Uint8Array,
        password: string,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) => Promise<EndUserPrivateKeyContext>;
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
    GetOwnCertificates: () => Promise<Uint8Array[]>;
    GetOwnEUserParams: () => Promise<EndUserParams>;
    ChangeOwnCertificatesStatus: (requestType: number, revocationReason: number) => Promise<void>;
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
