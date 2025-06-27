export interface EndUserError {
    errorCode: number;
    message: string;
    toString(): string;
    GetErrorCode(): number;
    GetMessage(): string;
}

export interface EndUserByteArray {
    data: Uint8Array;
}

export interface EndUserKeyMedia {
    typeIndex: number;
    devIndex: number;
    password: string | null;
    user?: string;
    type?: string;
    device?: string;
    visibleName?: string;
}

export interface EndUserFileStoreSettings {
    path: string;
    checkCRLs: boolean;
    autoRefresh: boolean;
    ownCRLsOnly: boolean;
    fullAndDeltaCRLs: boolean;
    autoDownloadCRLs: boolean;
    saveLoadedCerts: boolean;
    expireTime: number;
}

export interface EndUserProxySettings {
    useProxy: boolean;
    anonymous: boolean;
    address: string;
    port: string;
    user: string;
    password: string;
    savePassword: boolean;
}

export interface EndUserTSPSettings {
    getStamps: boolean;
    address: string;
    port: string;
}

export interface EndUserOCSPSettings {
    useOCSP: boolean;
    beforeStore: boolean;
    address: string;
    port: string;
}

export interface EndUserLDAPSettings {
    useCMP: boolean;
    address: string;
    port: string;
    anonymous: boolean;
    user: string;
    password: string;
}

export interface EndUserCMPSettings {
    useCMP: boolean;
    address: string;
    port: string;
    commonName: string;
}

export interface EndUserTSLSettings {
    useTSL: boolean;
    autoDownloadTSL: boolean;
    tslAddress: string;
}

// Клас, що містить інформацію про взаємодію з серверами ЦСК
export interface EndUserModeSettings {
    offlineMode: boolean;
}

// Клас, що містить інформацію про параметри використання точок
// доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoModeSettings {
    enabled: boolean;
}

// Клас, що містить інформацію про параметри точок доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoSettings {
    issuerCN: string;
    address: string;
    port: string;
}

export interface EndUserKeyMediaSettings {
    sourceType: number;
    showErrors: boolean;
    keyMedia: EndUserKeyMedia;
}

export interface EndUserOwnerInfo {
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

export interface EndUserTimeInfo {
    version: number;
    isTimeAvail: boolean;
    isTimeStamp: boolean;
    time: Date;
    isSignTimeStampAvail: boolean;
    signTimeStamp: Date;
}

export interface EndUserSignInfo {
    ownerInfo: EndUserOwnerInfo;
    timeInfo: EndUserTimeInfo;
    data: Uint8Array;
    signLevel?: number;
}

export interface EndUserSenderInfo {
    ownerInfo: EndUserOwnerInfo;
    timeInfo: EndUserTimeInfo;
    data: Uint8Array;
}

export interface EndUserCertificateInfo {
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

export interface EndUserCertificateInfoEx extends EndUserCertificateInfo {
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

export interface EndUserCertificate {
    infoEx: EndUserCertificateInfoEx;
    data: Uint8Array;
}

export interface EndUserCRLInfo {
    isFilled: boolean;
    issuer: string;
    issuerCN: string;
    crlNumber: number;
    thisUpdate: Date;
    nextUpdate: Date;
}

export interface EndUserCRLDetailedInfo extends EndUserCRLInfo {
    version: number;
    issuerPublicKeyID: string;
    revokedItemsCount: number;
}

export interface EndUserPrivateKeyInfo {
    privateKey: Uint8Array;
    privateKeyInfo: Uint8Array;
}

export interface EndUserPrivateKey {
    alias: string;
    certificates: EndUserCertificate[];
    privateKey: Uint8Array;
    digitalStamp: boolean;
}

export interface EndUserJKSPrivateKey {
    privateKey: Uint8Array;
    certificates: Uint8Array[];
    info: {
        alias: string;
        certificates: EndUserCertificate[];
        digitalStamp: boolean;
    };
}

export interface EndUserRequestInfo {
    isFilled?: boolean;
    request: Uint8Array;
    requestType: number;
    defaultRequestFileName: string;
    isSimple: boolean;
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
    publicKeyType: number;
    publicKeyBits: number;
    RSAModul: string;
    RSAExponent: string;
    publicKey: string;
    publicKeyID: string;
    extKeyUsages: string;
    crlDistribPoint1: string;
    crlDistribPoint2: string;
    isSubjTypeAvail: boolean;
    subjType: number;
    subjSubType: number;
    isSelfSigned: boolean;
    signIssuer: string;
    signSerial: string;
    subjUNZR: string;
    subjCountry: string;
    isQSCD: boolean;
}

export interface EndUserInfo {
    commonName: string;
    locality: string;
    state: string;
    organization: string;
    orgUnit: string;
    title: string;
    street: string;
    phone: string;
    surname: string;
    givenname: string;
    EMail: string;
    DNS: string;
    EDRPOUCode: string;
    DRFOCode: string;
    NBUCode: string;
    SPFMCode: string;
    OCode: string;
    OUCode: string;
    userCode: string;
    UPN: string;
    UNZR: string;
    country: string;
}

export interface EndUserParams {
    SN: number;
    commonName: string;
    locality: string;
    state: string;
    organization: string;
    orgUnit: string;
    title: string;
    street: string;
    phone: string;
    surname: string;
    givenname: string;
    EMail: string;
    DNS: string;
    EDRPOUCode: string;
    DRFOCode: string;
    NBUCode: string;
    SPFMCode: string;
    information: string;
    passPhrase: string;
    isPublishCertificate: boolean;
    RAAdminSN: number;
}

export interface EndUserOperationContext {
    handle: string;
}

export interface EndUserSession {
    handle: string;
    data: Uint8Array;
}

export interface EndUserSCClientStatistic {
    activeSessions: number;
    gatedSessions: number;
    unprotectedData: number;
    protectedData: number;
}

export interface EndUserDeviceContext extends EndUserContext {}

export interface EndUserTransportHeader {
    receiptNumber: number;
    cryptoData: Uint8Array;
}

export interface EndUserCryptoHeader {
    caType: string;
    headerType: number;
    headerSize: number;
    cryptoData: Uint8Array;
}

export interface EndUserContext {
    context: string;
}

export interface EndUserHashContext extends EndUserContext {}

export interface EndUserPrivateKeyContext {
    ownerInfo: EndUserOwnerInfo;
}

export interface EndUserReference {
    name: string;
    data: Uint8Array;
}
