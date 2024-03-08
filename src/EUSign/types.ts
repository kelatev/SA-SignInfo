enum EndUserLanguage {
    EU_DEFAULT_LANG = 0,
    EU_UA_LANG = 1,
    EU_RU_LANG = 2,
    EU_EN_LANG = 3,
}

export interface EndUserSettings {
    settings: {
        language: EndUserLanguage;
        encoding: "utf-8";
        directAccess: boolean;
        CAs: string;
        CACertificates: string;
        signInfoTmpl?: string;
        httpProxyServiceURL: string;
        verifySettings: {
            ocspResponseExpireTime: number;
        };
        TSLAddress: string | null;
        mssServiceURL?: string;
        KSPs?: any[];
    };
}

export interface EndUserException {
    GetErrorCode(): number;
    GetMessage(): string;
    toString(): string;
}

export interface EndUserError {
    GetErrorCode(): number;
    GetMessage(): string;
    toString(): string;
}

export interface EndUserByteArray {
    GetData(): Uint8Array;
    SetData(data: Uint8Array): void;
}

export interface EndUserKeyMedia {
    GetTypeIndex(): number;

    SetTypeIndex(typeIndex: number): void;

    GetDevIndex(): number;

    SetDevIndex(devIndex: number): void;

    GetPassword(): string;

    SetPassword(password: string): void;
}

// Клас, що містить інформацію про параметри файлового сховища (див. табл. 3.1)
export interface EndUserFileStoreSettings {
    GetPath(): string;

    SetPath(path: string): void;

    GetCheckCRLs(): boolean;

    SetCheckCRLs(checkCRLs: boolean): void;

    GetAutoRefresh(): boolean;

    SetAutoRefresh(autoRefresh: boolean): void;

    GetOwnCRLsOnly(): boolean;

    SetOwnCRLsOnly(ownCRLsOnly: boolean): void;

    GetFullAndDeltaCRLs(): boolean;

    SetFullAndDeltaCRLs(fullAndDeltaCRLs: boolean): void;

    GetAutoDownloadCRLs(): boolean;

    SetAutoDownloadCRLs(autoDownloadCRLs: boolean): void;

    GetSaveLoadedCerts(): boolean;

    SetSaveLoadedCerts(saveLoadedCerts: boolean): void;

    GetExpireTime(): number;

    SetExpireTime(expireTime: number): void;
}

export interface EndUserProxySettings {
    GetUseProxy(): boolean;

    SetUseProxy(useProxy: boolean): void;

    GetAnonymous(): boolean;

    SetAnonymous(anonymous: boolean): void;

    GetAddress(): string;

    SetAddress(address: string): void;

    GetPort(): string;

    SetPort(port: string): void;

    GetUser(): string;

    SetUser(user: string): void;

    GetPassword(): string;

    SetPassword(password: string): void;

    GetSavePassword(): boolean;

    SetSavePassword(savePassword: boolean): void;
}

// Клас, що містить інформацію про параметри TSP-сервера (див. табл. 3.1)
export interface EndUserTSPSettings {
    GetGetStamps(): boolean;

    SetGetStamps(getStamps: boolean): void;

    GetAddress(): string;

    SetAddress(address: string): void;

    GetPort(): string;

    SetPort(port: string): void;
}

// Клас, що містить інформацію про параметри OCSP-сервера (див. табл. 3.1)
export interface EndUserOCSPSettings {
    GetUseOCSP(): boolean;

    SetUseOCSP(useOCSP: boolean): void;

    GetBeforeStore(): boolean;

    SetBeforeStore(beforeStore: boolean): void;

    GetAddress(): string;

    SetAddress(address: string): void;

    GetPort(): string;

    SetPort(port: string): void;
}

// Клас, що містить інформацію про параметри LDAP-сервера (див. табл. 3.1)
export interface EndUserLDAPSettings {
    GetUseLDAP(): boolean;

    SetUseLDAP(useCMP: boolean): void;

    GetAddress(): string;

    SetAddress(address: string): void;

    GetPort(): string;

    SetPort(port: string): void;

    GetAnonymous(): boolean;

    SetAnonymous(anonymous: boolean): void;

    GetUser(): string;

    SetUser(user: string): void;

    GetPassword(): string;

    SetPassword(password: string): void;
}

// Клас, що містить інформацію про параметри CMP-сервера (див. табл. 3.1)
export interface EndUserCMPSettings {
    GetUseCMP(): boolean;

    SetUseCMP(useCMP: boolean): void;

    GetAddress(): string;

    SetAddress(address: string): void;

    GetPort(): string;

    SetPort(port: string): void;

    GetCommonName(): string;

    SetCommonName(commonName: string): void;
}

// Клас, що містить інформацію про взаємодію з серверами ЦСК
export interface EndUserModeSettings {
    GetOfflineMode(): boolean;

    SetOfflineMode(offlineMode: boolean): void;
}

// Клас, що містить інформацію про параметри використання точок
// доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoModeSettings {
    GetEnabled(): boolean;

    SetEnabled(enabled: boolean): void;
}

// Клас, що містить інформацію про параметри точок доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoSettings {
    GetIssuerCN(): string;

    SetIssuerCN(issuerCN: string): void;

    GetAddress(): string;

    SetAddress(address: string): void;

    GetPort(): string;

    SetPort(port: string): void;
}

export interface EndUserKeyMediaSettings {
    GetSourceType(): number;

    SetSourceType(sourceType: number): void;

    GetShowErrors(): boolean;

    SetShowErrors(showErrors: boolean): void;

    GetKeyMedia(): EndUserKeyMedia;

    SetKeyMedia(keyMedia: EndUserKeyMedia): void;
}

export interface EndUserOwnerInfo {
    IsFilled(): boolean;

    GetIssuer(): string;

    GetIssuerCN(): string;

    GetSerial(): string;

    GetSubject(): string;

    GetSubjCN(): string;

    GetSubjOrg(): string;

    GetSubjOrgUnit(): string;

    GetSubjTitle(): string;

    GetSubjState(): string;

    GetSubjLocality(): string;

    GetSubjFullName(): string;

    GetSubjAddress(): string;

    GetSubjPhone(): string;

    GetSubjEMail(): string;

    GetSubjDNS(): string;

    GetSubjEDRPOUCode(): string;

    GetSubjDRFOCode(): string;
}

export interface EndUserTimeInfo {
    GetVersion(): number;

    IsTimeAvail(): boolean;

    IsTimeStamp(): boolean;

    GetTime(): Date;

    IsSignTimeStampAvail(): boolean;

    GetSignTimeStamp(): Date;
}

export interface EndUserSignInfo {
    GetOwnerInfo(): EndUserOwnerInfo;

    GetTimeInfo(): EndUserTimeInfo;

    GetData(): Uint8Array;

    GetDataString(charset?: string): string;
}

export interface EndUserSenderInfo {
    GetOwnerInfo(): EndUserOwnerInfo;

    GetTimeInfo(): EndUserTimeInfo;

    GetData(): Uint8Array;

    GetDataString(charset?: string): string;
}

export interface EndUserCertificateInfo {
    IsFilled(): boolean;

    GetVersion(): number;

    GetIssuer(): string;

    GetIssuerCN(): string;

    GetSerial(): string;

    GetSubject(): string;

    GetSubjCN(): string;

    GetSubjOrg(): string;

    GetSubjOrgUnit(): string;

    GetSubjTitle(): string;

    GetSubjState(): string;

    GetSubjLocality(): string;

    GetSubjFullName(): string;

    GetSubjAddress(): string;

    GetSubjPhone(): string;

    GetSubjEMail(): string;

    GetSubjDNS(): string;

    GetSubjEDRPOUCode(): string;

    GetSubjDRFOCode(): string;

    GetSubjNBUCode(): string;

    GetSubjSPFMCode(): string;

    GetSubjOCode(): string;

    GetSubjOUCode(): string;

    GetSubjUserCode(): string;

    GetCertBeginTime(): Date;

    GetCertEndTime(): Date;

    IsPrivKeyTimesAvail(): boolean;

    GetPrivKeyBeginTime(): Date;

    GetPrivKeyEndTime(): Date;

    GetPublicKeyBits(): number;

    GetPublicKey(): string;

    GetPublicKeyID(): string;

    IsECDHPublicKeyAvail(): boolean;

    GetECDHPublicKeyBits(): number;

    GetECDHPublicKey(): string;

    GetECDHPublicKeyID(): string;

    GetIssuerPublicKeyID(): string;

    GetKeyUsage(): string;

    GetExtKeyUsages(): string;

    GetPolicies(): string;

    GetCrlDistribPoint1(): string;

    GetCrlDistribPoint2(): string;

    IsPowerCert(): boolean;

    IsSubjTypeAvail(): boolean;

    IsSubjCA(): boolean;
}

export interface EndUserCertificateInfoEx {
    IsFilled(): boolean;

    GetVersion(): number;

    GetIssuer(): string;

    GetIssuerCN(): string;

    GetSerial(): string;

    GetSubject(): string;

    GetSubjCN(): string;

    GetSubjOrg(): string;

    GetSubjOrgUnit(): string;

    GetSubjTitle(): string;

    GetSubjState(): string;

    GetSubjLocality(): string;

    GetSubjFullName(): string;

    GetSubjAddress(): string;

    GetSubjPhone(): string;

    GetSubjEMail(): string;

    GetSubjDNS(): string;

    GetSubjEDRPOUCode(): string;

    GetSubjDRFOCode(): string;

    GetSubjNBUCode(): string;

    GetSubjSPFMCode(): string;

    GetSubjOCode(): string;

    GetSubjOUCode(): string;

    GetSubjUserCode(): string;

    GetCertBeginTime(): Date;

    GetCertEndTime(): Date;

    IsPrivKeyTimesAvail(): boolean;

    GetPrivKeyBeginTime(): Date;

    GetPrivKeyEndTime(): Date;

    GetPublicKeyBits(): number;

    GetPublicKey(): string;

    GetPublicKeyID(): string;

    GetIssuerPublicKeyID(): string;

    GetKeyUsage(): string;

    GetExtKeyUsages(): string;

    GetPolicies(): string;

    GetCrlDistribPoint1(): string;

    GetCrlDistribPoint2(): string;

    IsPowerCert(): boolean;

    IsSubjTypeAvail(): boolean;

    IsSubjCA(): boolean;

    GetChainLength(): number;

    GetUPN(): string;

    GetPublicKeyType(): number;

    GetKeyUsageType(): number;

    GetRSAModul(): string;

    GetRSAExponent(): string;

    GetOCSPAccessInfo(): string;

    GetIssuerAccessInfo(): string;

    GetTSPAccessInfo(): string;

    IsLimitValueAvail(): boolean;

    GetLimitValue(): number;

    GetLimitValueCurrency(): string;

    GetSubjType(): number;

    GetSubjSubType(): number;

    GetSubjUNZR(): string;

    GetSubjCountry(): string;

    GetFingerpint(): string;

    IsQSCD(): boolean;

    GetSubjUserID(): string;
}

export interface EndUserCertificate {
    GetInfoEx(): EndUserCertificateInfoEx;

    SetInfoEx(infoEx: EndUserCertificateInfoEx): void;

    GetData(): Uint8Array;

    SetData(data: Uint8Array): void;
}

export interface EndUserCRLInfo {
    IsFilled(): boolean;

    GetIssuer(): string;

    GetIssuerCN(): string;

    GetCRLNumber(): number;

    GetThisUpdate(): Date;

    GetNextUpdate(): Date;
}

export interface EndUserCRLDetailedInfo {
    IsFilled(): boolean;

    GetVersion(): number;

    GetIssuer(): string;

    GetIssuerCN(): string;

    GetIssuerPublicKeyID(): string;

    GetCRLNumber(): number;

    GetThisUpdate(): Date;

    GetNextUpdate(): Date;

    GetRevokedItemsCount(): number;
}

export interface EndUserPrivateKeyInfo {
    GetPrivateKey(): Uint8Array;

    SetPrivateKey(issuerCN: Uint8Array): void;

    GetPrivateKeyInfo(): Uint8Array;

    SetPrivateKeyInfo(address: Uint8Array): void;
}

export interface EndUserPrivateKey {
    alias: string;
    certificates: Uint8Array[] | null;
    privateKey: Uint8Array;
    digitalStamp: boolean;
}

export interface EndUserJKSPrivateKey extends EndUserPrivateKey {
    GetPrivateKey(): Uint8Array;

    GetCertificate(index: number): Uint8Array;

    GetCertificatesCount(): number;

    GetCertificates(): Uint8Array[];

    info: {
        alias: string;
        certificates: EndUserCertificate[];
        digitalStamp: boolean;
    };
}

export interface EndUserRequestInfo {
    GetRequest(): Uint8Array;

    GetRequestType(): number;

    GetDefaultRequestFileName(): string;

    IsSimple(): boolean;

    GetSubject(): string;

    GetSubjCN(): string;

    GetSubjOrg(): string;

    GetSubjOrgUnit(): string;

    GetSubjTitle(): string;

    GetSubjState(): string;

    GetSubjLocality(): string;

    GetSubjFullName(): string;

    GetSubjAddress(): string;

    GetSubjPhone(): string;

    GetSubjEMail(): string;

    GetSubjDNS(): string;

    GetSubjEDRPOUCode(): string;

    GetSubjDRFOCode(): string;

    GetSubjNBUCode(): string;

    GetSubjSPFMCode(): string;

    GetSubjOCode(): string;

    GetSubjOUCode(): string;

    GetSubjUserCode(): string;

    GetCertBeginTime(): Date;

    GetCertEndTime(): Date;

    IsPrivKeyTimesAvail(): boolean;

    GetPrivKeyBeginTime(): Date;

    GetPrivKeyEndTime(): Date;

    GetPublicKeyType(): number;

    GetPublicKeyBits(): number;

    GetRSAModul(): string;

    GetRSAExponent(): string;

    GetPublicKey(): string;

    GetPublicKeyID(): string;

    GetExtKeyUsages(): string;

    GetCRLDistribPoint1(): string;

    GetCRLDistribPoint2(): string;

    IsSubjTypeAvail(): boolean;

    GetSubjType(): number;

    GetSubjSubType(): number;

    IsSelfSigned(): boolean;

    GetSignIssuer(): string;

    GetSignSerial(): string;

    GetSubjUNZR(): string;

    GetSubjCountry(): string;

    IsQSCD(): boolean;
}

export interface EndUserInfo {}

export interface EndUserParams {
    SN: number;
    GetSN(): number;
    SetSN(value: string): void;
    commonName: string;
    GetCommonName(): string;
    SetCommonName(value: string): void;
    locality: string;
    GetLocality(): string;
    SetLocality(value: string): void;
    state: string;
    GetState(): string;
    SetState(value: string): void;
    organization: string;
    GetOrganization(): string;
    SetOrganization(value: string): void;
    orgUnit: string;
    GetOrgUnit(): string;
    SetOrgUnit(value: string): void;
    title: string;
    GetTitle(): string;
    SetTitle(value: string): void;
    street: string;
    GetStreet(): string;
    SetStreet(value: string): void;
    phone: string;
    GetPhone(): string;
    SetPhone(value: string): void;
    surname: string;
    GetSurname(): string;
    SetSurname(value: string): void;
    givenname: string;
    GetGivenname(): string;
    SetGivenname(value: string): void;
    EMail: string;
    GetEMail(): string;
    SetEMail(value: string): void;
    DNS: string;
    GetDNS(): string;
    SetDNS(value: string): void;
    EDRPOUCode: string;
    GetEDRPOUCode(): string;
    SetEDRPOUCode(value: string): void;
    DRFOCode: string;
    GetDRFOCode(): string;
    SetDRFOCode(value: string): void;
    NBUCode: string;
    GetNBUCode(): string;
    SetNBUCode(value: string): void;
    SPFMCode: string;
    GetSPFMCode(): string;
    SetSPFMCode(value: string): void;
    information: string;
    GetInformation(): string;
    SetInformation(value: string): void;
    passPhrase: string;
    GetPassPhrase(): string;
    SetPassPhrase(value: string): void;
    isPublishCertificate: boolean;
    IsPublishCertificate(): boolean;
    IsPublishCertificate(value: boolean): void;
    RAAdminSN: number;
    GetRAAdminSN(): number;
    SetRAAdminSN(value: string): void;
}

export interface EndUserOperationContext {
    GetHandle(): string;
}

export interface EndUserSession {
    GetHandle(): string;

    GetData(): Uint8Array;

    SetData(data: Uint8Array): void;
}

export interface EndUserSCClientStatistic {
    GetActiveSessions(): number;

    GetGatedSessions(): number;

    GetUnprotectedData(): number;

    GetProtectedData(): number;
}

export interface EndUserDeviceContext {
    GetHandle(): string;
}

export interface EndUserTransportHeader {
    GetReceiptNumber(): number;

    GetCryptoData(): Uint8Array;
}

export interface EndUserCryptoHeader {
    GetCAType(): string;

    GetHeaderType(): number;

    GetHeaderSize(): number;

    GetCryptoData(): Uint8Array;
}

export interface EndUserContext {
    GetHandle(): string;
}

export interface EndUserHashContext {
    GetHandle(): string;
}

export interface EndUserPrivateKeyContext {
    GetHandle(): string;
    GetOwnerInfo(): EndUserOwnerInfo;
}
