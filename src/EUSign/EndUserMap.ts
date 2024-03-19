export interface ByteArray {
    data: Uint8Array;
}

export interface KeyMedia {
    typeIndex: number;
    devIndex: number;
    password: string;
    user?: string;
}

export interface FileStoreSettings {
    path: string;
    checkCRLs: boolean;
    autoRefresh: boolean;
    ownCRLsOnly: boolean;
    fullAndDeltaCRLs: boolean;
    autoDownloadCRLs: boolean;
    saveLoadedCerts: boolean;
    expireTime: number;
}

export interface ProxySettings {
    useProxy: boolean;
    anonymous: boolean;
    address: string;
    port: string;
    user: string;
    password: string;
    savePassword: boolean;
}

export interface TSPSettings {
    getStamps: boolean;
    address: string;
    port: string;
}

export interface OCSPSettings {
    useOCSP: boolean;
    beforeStore: boolean;
    address: string;
    port: string;
}

export interface LDAPSettings {
    useCMP: boolean;
    address: string;
    port: string;
    anonymous: boolean;
    user: string;
    password: string;
}

export interface CMPSettings {
    seCMP: boolean;
    address: string;
    port: string;
    commonName: string;
}

export interface TSLSettings {
    useTSL: boolean;
    autoDownloadTSL: boolean;
    tslAddress: string;
}

export interface ModeSettings {
    offlineMode: boolean;
}

export interface OCSPAccessInfoModeSettings {
    enabled: boolean;
}

export interface OCSPAccessInfoSettings {
    issuerCN: string;
    address: string;
    port: string;
}

export interface KeyMediaSettings {
    sourceType: number;
    showErrors: boolean;
    keyMedia: KeyMedia;
}

export interface OwnerInfo {
    isFilled: boolean;
    issuer: string;
    issuerCN: string;
    serial: string;
    subject: string;
    subjCN: string;
    subjOrg: string;
    subjOrgUnit: string;
    subjTitle: string;
    subjState: string;
    subjLocality: string;
    subjFullName: string;
    subjAddress: string;
    subjPhone: string;
    subjEMail: string;
    subjDNS: string;
    subjEDRPOUCode: string;
    subjDRFOCode: string;
}

export interface TimeInfo {
    version: number;
    isTimeAvail: boolean;
    isTimeStamp: boolean;
    time: Date;
    isSignTimeStampAvail: boolean;
    signTimeStamp: Date;
}

export interface SignInfo {
    ownerInfo: OwnerInfo;
    timeInfo: TimeInfo;
    data: Uint8Array;
    signLevel?: number;
}

export interface SenderInfo {
    ownerInfo: OwnerInfo;
    timeInfo: TimeInfo;
    data: Uint8Array;
}

export interface CertificateInfo {
    isFilled: boolean;
    version: number;
    issuer: string;
    issuerCN: string;
    serial: string;
    subject: string;
    subjCN: string;
    subjOrg: string;
    subjOrgUnit: string;
    subjTitle: string;
    subjState: string;
    subjLocality: string;
    subjFullName: string;
    subjAddress: string;
    subjPhone: string;
    subjEMail: string;
    subjDNS: string;
    subjEDRPOUCode: string;
    subjDRFOCode: string;
    subjNBUCode: string;
    subjSPFMCode: string;
    subjOCode: string;
    subjOUCode: string;
    subjUserCode: string;
    certBeginTime: Date;
    certEndTime: Date;
    isPrivKeyTimesAvail: boolean;
    privKeyBeginTime: Date;
    privKeyEndTime: Date;
    publicKeyBits: number;
    publicKey: string;
    publicKeyID: string;
    isECDHPublicKeyAvail: boolean;
    ecdhPublicKeyBits: number;
    ecdhPublicKey: string;
    ecdhPublicKeyID: string;
    issuerPublicKeyID: string;
    keyUsage: string;
    extKeyUsages: string;
    policies: string;
    crlDistribPoint1: string;
    crlDistribPoint2: string;
    isPowerCert: boolean;
    isSubjTypeAvail: boolean;
    isSubjCA: boolean;
}

export interface CertificateInfoEx extends CertificateInfo {
    chainLength: number;
    UPN: string;
    publicKeyType: number;
    keyUsageType: number;
    RSAModul: string;
    RSAExponent: string;
    OCSPAccessInfo: string;
    issuerAccessInfo: string;
    TSPAccessInfo: string;
    isLimitValueAvailable: boolean;
    limitValue: number;
    limitValueCurrency: string;
    subjType: number;
    subjSubType: number;
    subjUNZR: string;
    subjCountry: string;
    fingerpint: string;
    isQSCD: boolean;
    subjUserID: string;
}

export interface Certificate {
    infoEx: CertificateInfoEx;
    data: Uint8Array;
}
