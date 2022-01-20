import exp from "constants";

export interface EndUserOwnerInfo {
    isFilled: boolean,
    issuer: string,
    issuerCN: string,
    serial: string,
    subject: string,
    subjCN: string,
    subjOrg: string,
    subjOrgUnit: string,
    subjTitle: string,
    subjState: string,
    subjLocality: string,
    subjFullName: string,
    subjAddress: string,
    subjPhone: string,
    subjEMail: string,
    subjDNS: string,
    subjEDRPOUCode: string,
    subjDRFOCode: string
}

export interface EndUserTimeInfo {
    isTimeAvail: boolean,
    isTimeStamp: boolean,
    time: Date
}

export interface EndUserSignInfo {
    ownerInfo: EndUserOwnerInfo,
    timeInfo: EndUserTimeInfo,
    data: any
}

export interface EndUserSenderInfo {
    ownerInfo: EndUserOwnerInfo,
    timeInfo: EndUserTimeInfo,
    data: any
}

// Клас, що містить інформацію про параметри файлового сховища (див. табл. 3.1)
export interface EndUserFileStoreSettings {
    GetPath(): string
    SetPath(path: string): void
    GetCheckCRLs(): boolean
    SetCheckCRLs(checkCRLs: boolean): void
    GetAutoRefresh(): boolean
    SetAutoRefresh(autoRefresh: boolean): void
    GetOwnCRLsOnly(): boolean
    SetOwnCRLsOnly(ownCRLsOnly: boolean): void
    GetFullAndDeltaCRLs(): boolean
    SetFullAndDeltaCRLs(fullAndDeltaCRLs: boolean): void
    GetAutoDownloadCRLs(): boolean
    SetAutoDownloadCRLs(autoDownloadCRLs: boolean): void
    GetSaveLoadedCerts(): boolean
    SetSaveLoadedCerts(saveLoadedCerts: boolean): void
    GetExpireTime(): number
    SetExpireTime(expireTime: number): void
}

// Клас, що містить інформацію про параметри OCSP-сервера (див. табл. 3.1)
export interface EndUserOCSPSettings {
    GetUseOCSP(): boolean
    SetUseOCSP(useOCSP: boolean): void
    GetBeforeStore(): boolean
    SetBeforeStore(beforeStore: boolean): void
    GetAddress(): string
    SetAddress(address: string): void
    GetPort(): string
    SetPort(port: string): void
}

// Клас, що містить інформацію про параметри TSP-сервера (див. табл. 3.1)
export interface EndUserTSPSettings {
    GetGetStamps(): boolean
    SetGetStamps(getStamps: boolean): void
    GetAddress(): string
    SetAddress(address: string): void
    GetPort(): string
    SetPort(port: string): void
}

// Клас, що містить інформацію про параметри LDAP-сервера (див. табл. 3.1)
export interface EndUserLDAPSettings {
    GetUseLDAP(): boolean
    SetUseLDAP(useCMP: boolean): void
    GetAddress(): string
    SetAddress(address: string): void
    GetPort(): string
    SetPort(port: string): void
    GetAnonymous(): boolean
    SetAnonymous(anonymous: boolean): void
    GetUser(): string
    SetUser(user: string): void
    GetPassword(): string
    SetPassword(password: string): void
}

// Клас, що містить інформацію про параметри CMP-сервера (див. табл. 3.1)
export interface EndUserCMPSettings {
    GetUseCMP(): boolean
    SetUseCMP(useCMP: boolean): void
    GetAddress(): string
    SetAddress(address: string): void
    GetPort(): string
    SetPort(port: string): void
    GetCommonName(): string
    SetCommonName(commonName: string): void
}

// Клас, що містить інформацію про взаємодію з серверами ЦСК
export interface EndUserModeSettings {
    GetOfflineMode(): boolean
    SetOfflineMode(offlineMode: boolean): void
}

// Клас, що містить інформацію про параметри використання точок
// доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoModeSettings {
    GetEnabled(): boolean
    SetEnabled(enabled: boolean): void
}

// Клас, що містить інформацію про параметри точок доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoSettings {
    GetIssuerCN(): boolean
    SetIssuerCN(issuerCN: boolean): void
    GetAddress(): string
    SetAddress(address: string): void
    GetPort(): string
    SetPort(port: string): void
}

export interface EndUserCertificateInfo {

}

export interface EndUserCertificateInfoEx {
    isFilled: boolean,

    version: number,

    issuer: string,
    issuerCN: string,
    serial: string,

    'subject': string,
    'subjCN': string,
    'subjOrg': string,
    'subjOrgUnit': string,
    'subjTitle': string,
    'subjState': string,
    'subjLocality': string,
    'subjFullName': string,
    'subjAddress': string,
    'subjPhone': string,
    'subjEMail': string,
    'subjDNS': string,
    'subjEDRPOUCode': string,
    'subjDRFOCode': string,

    'subjNBUCode': string,
    'subjSPFMCode': string,
    'subjOCode': string,
    'subjOUCode': string,
    'subjUserCode': string,

    'certBeginTime': Date,
    'certEndTime': Date,
    'isPrivKeyTimesAvail': boolean,
    'privKeyBeginTime': Date,
    'privKeyEndTime': Date,

    'publicKeyBits': number,
    'publicKey': string,
    'publicKeyID': string,

    'issuerPublicKeyID': string,

    'keyUsage': string,
    'extKeyUsages': string,
    'policies': string,

    'crlDistribPoint1': string,
    'crlDistribPoint2': string,

    'isPowerCert': boolean,

    'isSubjTypeAvail': boolean,
    'isSubjCA': boolean,
    'chainLength': number,

    'UPN': string,

    'publicKeyType': number,
    'keyUsageType': number,

    'RSAModul': string,
    'RSAExponent': string,

    'OCSPAccessInfo': string,
    'issuerAccessInfo': string,
    'TSPAccessInfo': string,

    'isLimitValueAvailable': boolean,
    'limitValue': number,
    'limitValueCurrency': string,

    'subjType': number,
    'subjSubType': number,

    'subjUNZR': string,
    'subjCountry': string,

    'fingerprint': string
}

export interface EndUserCertificate {
    infoEx: EndUserCertificateInfoEx,
    data: any
}
