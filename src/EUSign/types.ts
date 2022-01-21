export interface EndUserKeyMedia {
    GetTypeIndex(): number
    GetDevIndex(): number
    GetPassword(): string
}

export interface EndUserOwnerInfo {
    GetIssuer(): string,
    GetIssuerCN(): string,
    GetSerial(): string,
    GetSubject(): string,
    GetSubjCN(): string,
    GetSubjOrg(): string,
    GetSubjOrgUnit(): string,
    GetSubjTitle(): string,
    GetSubjState(): string,
    GetSubjLocality(): string,
    GetSubjFullName(): string,
    GetSubjAddress(): string,
    GetSubjPhone(): string,
    GetSubjEMail(): string,
    GetSubjDNS(): string,
    GetSubjEDRPOUCode(): string,
    GetSubjDRFOCode(): string
}

export interface EndUserTimeInfo {
    IsTimeAvail(): boolean,
    IsTimeStamp(): boolean,
    GetTime(): Date
}

export interface EndUserSignInfo {
    GetOwnerInfo(): EndUserOwnerInfo,
    GetTimeInfo(): EndUserTimeInfo,
    GetData(): Uint8Array
    GetDataString(): string
    GetDataString(charset: string): string
}

export interface EndUserSenderInfo {
    GetOwnerInfo(): EndUserOwnerInfo,
    GetTimeInfo(): EndUserTimeInfo,
    GetData(): Uint8Array
    GetDataString(): string
    GetDataString(charset: string): string
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

export interface EndUserKeyMediaSettings {
    GetSourceType(): number
    SetSourceType(sourceType: number): void
    GetShowErrors(): boolean
    SetShowErrors(showErrors: boolean): void
    GetKeyMedia(): EndUserKeyMedia
    SetKeyMedia(keyMedia: EndUserKeyMedia): void

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
    GetIssuer(): string
    GetIssuerCN(): string
    GetSerial(): string
    GetSubject(): string
    GetSubjCN(): string
    GetSubjOrg(): string
    GetSubjOrgUnit(): string
    GetSubjTitle(): string
    GetSubjState(): string
    GetSubjLocality(): string
    GetSubjFullName(): string
    GetSubjAddress(): string
    GetSubjPhone(): string
    GetSubjEMail(): string
    GetSubjDNS(): string
    GetSubjEDRPOUCode(): string
    GetSubjDRFOCode(): string
    GetSubjNBUCode(): string
    GetSubjSPFMCode(): string
    GetSubjOCode(): string
    GetSubjOUCode(): string
    GetSubjUserCode(): string
    GetCertBeginTime(): Date
    GetCertEndTime(): Date
    IsPrivKeyTimesAvail(): boolean
    GetPrivKeyBeginTime(): Date
    GetPrivKeyEndTime(): Date
    GetPublicKeyBits(): number
    GetPublicKey(): string
    GetPublicKeyID(): string
    GetIssuerPublicKeyID(): string
    GetKeyUsage(): string
    GetExtKeyUsages(): string
    GetPolicies(): string
    GetCrlDistribPoint1(): string
    GetCrlDistribPoint2(): string
    IsPowerCert(): boolean
    IsSubjTypeAvail(): boolean
    IsSubjCA(): boolean
}

export interface EndUserCertificateInfoEx {
    GetIssuer(): string
    GetIssuerCN(): string
    GetSerial(): string
    GetSubject(): string
    GetSubjCN(): string
    GetSubjOrg(): string
    GetSubjOrgUnit(): string
    GetSubjTitle(): string
    GetSubjState(): string
    GetSubjLocality(): string
    GetSubjFullName(): string
    GetSubjAddress(): string
    GetSubjPhone(): string
    GetSubjEMail(): string
    GetSubjDNS(): string
    GetSubjEDRPOUCode(): string
    GetSubjDRFOCode(): string
    GetSubjNBUCode(): string
    GetSubjSPFMCode(): string
    GetSubjOCode(): string
    GetSubjOUCode(): string
    GetSubjUserCode(): string
    GetCertBeginTime(): Date
    GetCertEndTime(): Date
    IsPrivKeyTimesAvail(): boolean
    GetPrivKeyBeginTime(): Date
    GetPrivKeyEndTime(): Date
    GetPublicKeyBits(): number
    GetPublicKey(): string
    GetPublicKeyID(): string
    GetIssuerPublicKeyID(): string
    GetKeyUsage(): string
    GetExtKeyUsages(): string
    GetPolicies(): string
    GetCrlDistribPoint1(): string
    GetCrlDistribPoint2(): string
    IsPowerCert(): boolean
    IsSubjTypeAvail(): boolean
    IsSubjCA(): boolean
    GetChainLength(): number
    GetUPN(): string
    GetPublicKeyType(): number
    GetKeyUsageType(): number
    GetRSAModul(): string
    GetRSAExponent(): string
    GetOCSPAccessInfo(): string
    GetIssuerAccessInfo(): string
    GetTSPAccessInfo(): string
    IsLimitValueAvail(): boolean
    GetLimitValue(): number
    GetLimitValueCurrency(): string
    GetSubjType(): number
    GetSubjSubType(): number
    GetSubjUNZR(): string
    GetSubjCountry(): string
    GetFingerpint(): string
}

export interface EndUserCertificate {
    GetInfoEx(): EndUserCertificateInfoEx
    SetInfoEx(infoEx: EndUserCertificateInfoEx): void
    GetData(): Uint8Array
    SetData(data: Uint8Array): void
}

export interface EndUserPrivateKeyInfo {
    GetPrivateKey(): Uint8Array
    SetPrivateKey(issuerCN: Uint8Array): void
    GetPrivateKeyInfo(): Uint8Array
    SetPrivateKeyInfo(address: Uint8Array): void
}

export interface EndUserJKSPrivateKey {
    GetCertificates(): Uint8Array[]
    GetPrivateKey(): Uint8Array
    GetCertificate(index: number): Uint8Array
    GetCertificatesCount(): number
    info: {
        alias: string,
        certificates: EndUserCertificate[]
    }
}
