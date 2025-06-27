export interface EndUserErrorClass {
    GetErrorCode(): number;

    GetMessage(): string;
    toString(): string;
}

export interface EndUserByteArrayClass {
    GetData(): Uint8Array;
    SetData(data: Uint8Array): void;
}

export interface EndUserKeyMediaClass {
    GetTypeIndex(): number;
    SetTypeIndex(typeIndex: number): void;

    GetDevIndex(): number;
    SetDevIndex(devIndex: number): void;

    GetPassword(): string;
    SetPassword(password: string | null): void;
}

export interface EndUserFileStoreSettingsClass {
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

export interface EndUserProxySettingsClass {
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

export interface EndUserTSPSettingsClass {
    GetGetStamps(): boolean;
    SetGetStamps(getStamps: boolean): void;

    GetAddress(): string;
    SetAddress(address: string): void;

    GetPort(): string;
    SetPort(port: string): void;
}

export interface EndUserOCSPSettingsClass {
    GetUseOCSP(): boolean;
    SetUseOCSP(useOCSP: boolean): void;

    GetBeforeStore(): boolean;
    SetBeforeStore(beforeStore: boolean): void;

    GetAddress(): string;
    SetAddress(address: string): void;

    GetPort(): string;
    SetPort(port: string): void;
}

export interface EndUserLDAPSettingsClass {
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

export interface EndUserCMPSettingsClass {
    GetUseCMP(): boolean;
    SetUseCMP(useCMP: boolean): void;

    GetAddress(): string;
    SetAddress(address: string): void;

    GetPort(): string;
    SetPort(port: string): void;

    GetCommonName(): string;
    SetCommonName(commonName: string): void;
}

export interface EndUserTSLSettingsClass {
    GetUseTSL(): boolean;
    SetUseTSL(useTSL: boolean): void;

    GetAutoDownloadTSL(): boolean;
    SetAutoDownloadTSL(autoDownloadTSL: boolean): void;

    GetTSLAddress(): string;
    SetTSLAddress(tslAddress: string): void;
}

export interface EndUserModeSettingsClass {
    GetOfflineMode(): boolean;
    SetOfflineMode(offlineMode: boolean): void;
}

// Клас, що містить інформацію про параметри використання точок
// доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoModeSettingsClass {
    GetEnabled(): boolean;
    SetEnabled(enabled: boolean): void;
}

// Клас, що містить інформацію про параметри точок доступу до OCSP-серверів
export interface EndUserOCSPAccessInfoSettingsClass {
    GetIssuerCN(): string;
    SetIssuerCN(issuerCN: string): void;

    GetAddress(): string;
    SetAddress(address: string): void;

    GetPort(): string;
    SetPort(port: string): void;
}

export interface EndUserKeyMediaSettingsClass {
    GetSourceType(): number;
    SetSourceType(sourceType: number): void;

    GetShowErrors(): boolean;
    SetShowErrors(showErrors: boolean): void;

    GetKeyMedia(): EndUserKeyMediaClass;
    SetKeyMedia(keyMedia: EndUserKeyMediaClass): void;
}

export interface EndUserOwnerInfoClass {
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

export interface EndUserTimeInfoClass {
    GetVersion(): number;
    IsTimeAvail(): boolean;
    IsTimeStamp(): boolean;
    GetTime(): Date;
    IsSignTimeStampAvail(): boolean;
    GetSignTimeStamp(): Date;
}

export interface EndUserSignInfoClass {
    GetOwnerInfo(): EndUserOwnerInfoClass;
    GetTimeInfo(): EndUserTimeInfoClass;
    GetData(): Uint8Array;
    GetDataString(charset?: string): string;
}

export interface EndUserSenderInfoClass {
    GetOwnerInfo(): EndUserOwnerInfoClass;
    GetTimeInfo(): EndUserTimeInfoClass;
    GetData(): Uint8Array;
    GetDataString(charset?: string): string;
}

export interface EndUserCertificateInfoClass {
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
    GetCRLDistribPoint1(): string;
    GetCRLDistribPoint2(): string;
    IsPowerCert(): boolean;
    IsSubjTypeAvail(): boolean;
    IsSubjCA(): boolean;
}

export interface EndUserCertificateInfoExClass extends EndUserCertificateInfoClass {
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

export interface EndUserCertificateClass {
    GetInfoEx(): EndUserCertificateInfoExClass;
    SetInfoEx(infoEx: EndUserCertificateInfoExClass): void;

    GetData(): Uint8Array;
    SetData(data: Uint8Array): void;
}

export interface EndUserCRLInfoClass {
    IsFilled(): boolean;
    GetIssuer(): string;
    GetIssuerCN(): string;
    GetCRLNumber(): number;
    GetThisUpdate(): Date;
    GetNextUpdate(): Date;
}

export interface EndUserCRLDetailedInfoClass extends EndUserCRLInfoClass {
    GetVersion(): number;
    GetIssuerPublicKeyID(): string;
    GetRevokedItemsCount(): number;
}

export interface EndUserPrivateKeyInfoClass {
    GetPrivateKey(): Uint8Array;
    SetPrivateKey(privateKey: Uint8Array): void;

    GetPrivateKeyInfo(): Uint8Array;
    SetPrivateKeyInfo(privateKeyInfo: Uint8Array): void;
}

export interface EndUserJKSPrivateKeyClass {
    GetPrivateKey(): Uint8Array;

    GetCertificate(index: number): Uint8Array;
    GetCertificatesCount(): number;
    GetCertificates(): Uint8Array[];
}

export interface EndUserRequestInfoClass {
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

export interface EndUserInfoClass {
    GetCommonName(): string;
    SetCommonName(value: string): void;
    GetLocality(): string;
    SetLocality(value: string): void;
    GetState(): string;
    SetState(value: string): void;
    GetOrganization(): string;
    SetOrganization(value: string): void;
    GetOrgUnit(): string;
    SetOrgUnit(value: string): void;
    GetTitle(): string;
    SetTitle(value: string): void;
    GetStreet(): string;
    SetStreet(value: string): void;
    GetPhone(): string;
    SetPhone(value: string): void;
    GetSurname(): string;
    SetSurname(value: string): void;
    GetGivenname(): string;
    SetGivenname(value: string): void;
    GetEMail(): string;
    SetEMail(value: string): void;
    GetDNS(): string;
    SetDNS(value: string): void;
    GetEDRPOUCode(): string;
    SetEDRPOUCode(value: string): void;
    GetDRFOCode(): string;
    SetDRFOCode(value: string): void;
    GetNBUCode(): string;
    SetNBUCode(value: string): void;
    GetSPFMCode(): string;
    SetSPFMCode(value: string): void;
    GetOCode(): string;
    SetOCode(value: string): void;
    GetOUCode(): string;
    SetOUCode(value: string): void;
    GetUserCode(): string;
    SetUserCode(value: string): void;
    GetUPN(): string;
    SetUPN(value: string): void;
    GetUNZR(): string;
    SetUNZR(value: string): void;
    GetCountry(): string;
    SetCountry(value: string): void;
}

export interface EndUserParamsClass {
    GetSN(): number;
    SetSN(value: string): void;

    GetCommonName(): string;
    SetCommonName(value: string): void;

    GetLocality(): string;
    SetLocality(value: string): void;

    GetState(): string;
    SetState(value: string): void;

    GetOrganization(): string;
    SetOrganization(value: string): void;

    GetOrgUnit(): string;
    SetOrgUnit(value: string): void;

    GetTitle(): string;
    SetTitle(value: string): void;

    GetStreet(): string;
    SetStreet(value: string): void;

    GetPhone(): string;
    SetPhone(value: string): void;

    GetSurname(): string;
    SetSurname(value: string): void;

    GetGivenname(): string;
    SetGivenname(value: string): void;

    GetEMail(): string;
    SetEMail(value: string): void;

    GetDNS(): string;
    SetDNS(value: string): void;

    GetEDRPOUCode(): string;
    SetEDRPOUCode(value: string): void;

    GetDRFOCode(): string;
    SetDRFOCode(value: string): void;

    GetNBUCode(): string;
    SetNBUCode(value: string): void;

    GetSPFMCode(): string;
    SetSPFMCode(value: string): void;

    GetInformation(): string;
    SetInformation(value: string): void;

    GetPassPhrase(): string;
    SetPassPhrase(passPhrase: string): void;

    GetIsPublishCertificate(): boolean;
    SetIsPublishCertificate(isPublishCertificate: boolean): void;

    GetRAAdminSN(): number;
    SetRAAdminSN(RAAdminSN: string): void;
}

export interface EndUserOperationContextClass {
    GetHandle(): string;
}

export interface EndUserSessionClass {
    GetHandle(): string;

    GetData(): Uint8Array;
    SetData(data: Uint8Array): void;
}

export interface EndUserSCClientStatisticClass {
    GetActiveSessions(): number;
    GetGatedSessions(): number;
    GetUnprotectedData(): number;
    GetProtectedData(): number;
}

export interface EndUserDeviceContextClass extends EndUserContextClass {}

export interface EndUserTransportHeaderClass {
    GetReceiptNumber(): number;
    GetCryptoData(): Uint8Array;
}

export interface EndUserCryptoHeaderClass {
    GetCAType(): string;
    GetHeaderType(): number;
    GetHeaderSize(): number;
    GetCryptoData(): Uint8Array;
}

export interface EndUserContextClass {
    handle: string;
    GetHandle(): string;
}

export interface EndUserHashContextClass extends EndUserContextClass {}

export interface EndUserPrivateKeyContextClass extends EndUserContextClass {
    GetOwnerInfo(): EndUserOwnerInfoClass;
}

export interface EndUserReferenceClass {
    GetName(): string;
    SetName(name: string): void;
    GetData(): Uint8Array;
    SetData(data: Uint8Array): void;
}
