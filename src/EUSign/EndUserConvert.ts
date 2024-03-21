import {
    EndUserKeyMediaClass,
    EndUserProxySettingsClass,
    EndUserOwnerInfoClass,
    EndUserCertificateInfoExClass,
    EndUserParamsClass,
    EndUserTimeInfoClass,
    EndUserSignInfoClass,
    EndUserSenderInfoClass,
    EndUserCertificateClass,
    EndUserInfoClass,
    EndUserRequestInfoClass,
    EndUserReferenceClass,
} from "./EndUserClass";
import {
    EndUserKeyMedia,
    EndUserProxySettings,
    EndUserOwnerInfo,
    EndUserCertificateInfoEx,
    EndUserParams,
    EndUserTimeInfo,
    EndUserSignInfo,
    EndUserSenderInfo,
    EndUserCertificate,
    EndUserInfo,
    EndUserRequestInfo,
    EndUserReference,
} from "./EndUserTypes";

export function MapFromKeyMedia(map: EndUserKeyMedia, c: EndUserKeyMediaClass) {
    c.SetTypeIndex(map.typeIndex);
    c.SetDevIndex(map.devIndex);
    c.SetPassword(map.user ? "##" + map.user + "##" + map.password : map.password);
    return c;
}

export function MapToProxySettings(e: EndUserProxySettingsClass) {
    const map: EndUserProxySettings = {} as any;
    map.useProxy = e.GetUseProxy();
    map.address = e.GetAddress();
    map.port = e.GetPort();
    map.anonymous = e.GetAnonymous();
    map.user = e.GetUser();
    map.password = e.GetPassword();
    map.savePassword = e.GetSavePassword();
    return map;
}

export function MapFromProxySettings(map: EndUserProxySettings, t: EndUserProxySettingsClass) {
    t.SetUseProxy(map.useProxy);
    t.SetAddress(map.address);
    t.SetPort(map.port);
    t.SetAnonymous(map.anonymous);
    t.SetUser(map.user);
    t.SetPassword(map.password);
    t.SetSavePassword(map.savePassword);
    return t;
}

export function MapEndUserOwnerInfo(c: EndUserOwnerInfoClass) {
    const map: EndUserOwnerInfo = {} as any;
    map.isFilled = c.IsFilled();
    map.issuer = c.GetIssuer();
    map.issuerCN = c.GetIssuerCN();
    map.serial = c.GetSerial();
    map.subject = c.GetSubject();
    map.subjCN = c.GetSubjCN();
    map.subjOrg = c.GetSubjOrg();
    map.subjOrgUnit = c.GetSubjOrgUnit();
    map.subjTitle = c.GetSubjTitle();
    map.subjState = c.GetSubjState();
    map.subjLocality = c.GetSubjLocality();
    map.subjFullName = c.GetSubjFullName();
    map.subjAddress = c.GetSubjAddress();
    map.subjPhone = c.GetSubjPhone();
    map.subjEMail = c.GetSubjEMail();
    map.subjDNS = c.GetSubjDNS();
    map.subjEDRPOUCode = c.GetSubjEDRPOUCode();
    map.subjDRFOCode = c.GetSubjDRFOCode();
    return map;
}

export function MapToEndUserCertificateInfoEx(c: EndUserCertificateInfoExClass) {
    const map: EndUserCertificateInfoEx = {} as any;
    map.isFilled = c.IsFilled();
    map.version = c.GetVersion();
    map.issuer = c.GetIssuer();
    map.issuerCN = c.GetIssuerCN();
    map.serial = c.GetSerial();
    map.subject = c.GetSubject();
    map.subjCN = c.GetSubjCN();
    map.subjOrg = c.GetSubjOrg();
    map.subjOrgUnit = c.GetSubjOrgUnit();
    map.subjTitle = c.GetSubjTitle();
    map.subjState = c.GetSubjState();
    map.subjLocality = c.GetSubjLocality();
    map.subjFullName = c.GetSubjFullName();
    map.subjAddress = c.GetSubjAddress();
    map.subjPhone = c.GetSubjPhone();
    map.subjEMail = c.GetSubjEMail();
    map.subjDNS = c.GetSubjDNS();
    map.subjEDRPOUCode = c.GetSubjEDRPOUCode();
    map.subjDRFOCode = c.GetSubjDRFOCode();
    map.subjNBUCode = c.GetSubjNBUCode();
    map.subjSPFMCode = c.GetSubjSPFMCode();
    map.subjOCode = c.GetSubjOCode();
    map.subjOUCode = c.GetSubjOUCode();
    map.subjUserCode = c.GetSubjUserCode();
    map.certBeginTime = c.GetCertBeginTime();
    map.certEndTime = c.GetCertEndTime();
    map.isPrivKeyTimesAvail = c.IsPrivKeyTimesAvail();
    map.privKeyBeginTime = c.GetPrivKeyBeginTime();
    map.privKeyEndTime = c.GetPrivKeyEndTime();
    map.publicKeyBits = c.GetPublicKeyBits();
    map.publicKey = c.GetPublicKey();
    map.publicKeyID = c.GetPublicKeyID();
    map.issuerPublicKeyID = c.GetIssuerPublicKeyID();
    map.keyUsage = c.GetKeyUsage();
    map.extKeyUsages = c.GetExtKeyUsages();
    map.policies = c.GetPolicies();
    map.crlDistribPoint1 = c.GetCRLDistribPoint1();
    map.crlDistribPoint2 = c.GetCRLDistribPoint2();
    map.isPowerCert = c.IsPowerCert();
    map.isSubjTypeAvail = c.IsSubjTypeAvail();
    map.isSubjCA = c.IsSubjCA();
    map.chainLength = c.GetChainLength();
    map.UPN = c.GetUPN();
    map.publicKeyType = c.GetPublicKeyType();
    map.keyUsageType = c.GetKeyUsageType();
    map.RSAModul = c.GetRSAModul();
    map.RSAExponent = c.GetRSAExponent();
    map.OCSPAccessInfo = c.GetOCSPAccessInfo();
    map.issuerAccessInfo = c.GetIssuerAccessInfo();
    map.TSPAccessInfo = c.GetTSPAccessInfo();
    map.isLimitValueAvailable = c.IsLimitValueAvail();
    map.limitValue = c.GetLimitValue();
    map.limitValueCurrency = c.GetLimitValueCurrency();
    map.subjType = c.GetSubjType();
    map.subjSubType = c.GetSubjSubType();
    map.subjUNZR = c.GetSubjUNZR();
    map.subjCountry = c.GetSubjCountry();
    map.isQSCD = c.IsQSCD();
    map.subjUserID = c.GetSubjUserID();
    return map;
}

export function MapToEndUserParams(c: EndUserParamsClass) {
    const map: EndUserParams = {} as any;
    map.SN = c.GetSN();
    map.commonName = c.GetCommonName();
    map.locality = c.GetLocality();
    map.state = c.GetState();
    map.organization = c.GetOrganization();
    map.orgUnit = c.GetOrgUnit();
    map.title = c.GetTitle();
    map.street = c.GetStreet();
    map.phone = c.GetPhone();
    map.surname = c.GetSurname();
    map.givenname = c.GetGivenname();
    map.EMail = c.GetEMail();
    map.DNS = c.GetDNS();
    map.EDRPOUCode = c.GetEDRPOUCode();
    map.DRFOCode = c.GetDRFOCode();
    map.NBUCode = c.GetNBUCode();
    map.SPFMCode = c.GetSPFMCode();
    map.information = c.GetInformation();
    map.passPhrase = c.GetPassPhrase();
    map.isPublishCertificate = c.GetIsPublishCertificate();
    map.RAAdminSN = c.GetRAAdminSN();
    return map;
}

export function MapToEndUserTimeInfo(c: EndUserTimeInfoClass) {
    const map: EndUserTimeInfo = {} as any;
    map.version = c.GetVersion();
    map.isTimeAvail = c.IsTimeAvail();
    map.isTimeStamp = c.IsTimeStamp();
    map.time = c.GetTime();
    map.isSignTimeStampAvail = c.IsSignTimeStampAvail();
    map.signTimeStamp = c.GetSignTimeStamp();
    return map;
}

export function MapToEndUserSignInfo(c: EndUserSignInfoClass) {
    const map: EndUserSignInfo = {} as any;
    map.ownerInfo = MapEndUserOwnerInfo(c.GetOwnerInfo());
    map.timeInfo = MapToEndUserTimeInfo(c.GetTimeInfo());
    map.data = c.GetData();
    map.signLevel = 0;
    return map;
}

export function MapToEndUserSenderInfo(c: EndUserSenderInfoClass) {
    const map: EndUserSenderInfo = {} as any;
    map.ownerInfo = MapEndUserOwnerInfo(c.GetOwnerInfo());
    map.timeInfo = MapToEndUserTimeInfo(c.GetTimeInfo());
    map.data = c.GetData();
    return map;
}

export function MapToEndUserCertificate(c: EndUserCertificateClass) {
    const map: EndUserCertificate = {} as any;
    map.data = c.GetData();
    map.infoEx = MapToEndUserCertificateInfoEx(c.GetInfoEx());
    return map;
}

export function MapFromEndUserInfo(map: EndUserInfo, c: EndUserInfoClass) {
    c.SetCommonName(map.commonName);
    c.SetLocality(map.locality);
    c.SetState(map.state);
    c.SetOrganization(map.organization);
    c.SetOrgUnit(map.orgUnit);
    c.SetTitle(map.title);
    c.SetStreet(map.street);
    c.SetPhone(map.phone);
    c.SetSurname(map.surname);
    c.SetGivenname(map.givenname);
    c.SetEMail(map.EMail);
    c.SetDNS(map.DNS);
    c.SetEDRPOUCode(map.EDRPOUCode);
    c.SetDRFOCode(map.DRFOCode);
    c.SetNBUCode(map.NBUCode);
    c.SetSPFMCode(map.SPFMCode);
    c.SetOCode(map.OCode);
    c.SetOUCode(map.OUCode);
    c.SetUserCode(map.userCode);
    c.SetUPN(map.UPN);
    c.SetUNZR(map.UNZR);
    c.SetCountry(map.country);
    return c;
}

export function MapToEndUserRequestInfo(e: EndUserRequestInfoClass) {
    const map: EndUserRequestInfo = {} as any;
    map.isFilled = true;
    map.request = e.GetRequest();
    map.requestType = e.GetRequestType();
    map.defaultRequestFileName = e.GetDefaultRequestFileName();
    map.isSimple = e.IsSimple();
    map.subject = e.GetSubject();
    map.subjCN = e.GetSubjCN();
    map.subjOrg = e.GetSubjOrg();
    map.subjOrgUnit = e.GetSubjOrgUnit();
    map.subjTitle = e.GetSubjTitle();
    map.subjState = e.GetSubjState();
    map.subjLocality = e.GetSubjLocality();
    map.subjFullName = e.GetSubjFullName();
    map.subjAddress = e.GetSubjAddress();
    map.subjPhone = e.GetSubjPhone();
    map.subjEMail = e.GetSubjEMail();
    map.subjDNS = e.GetSubjDNS();
    map.subjEDRPOUCode = e.GetSubjEDRPOUCode();
    map.subjDRFOCode = e.GetSubjDRFOCode();
    map.subjNBUCode = e.GetSubjNBUCode();
    map.subjSPFMCode = e.GetSubjSPFMCode();
    map.subjOCode = e.GetSubjOCode();
    map.subjOUCode = e.GetSubjOUCode();
    map.subjUserCode = e.GetSubjUserCode();
    map.certBeginTime = e.GetCertBeginTime();
    map.certEndTime = e.GetCertEndTime();
    map.isPrivKeyTimesAvail = e.IsPrivKeyTimesAvail();
    map.privKeyBeginTime = e.GetPrivKeyBeginTime();
    map.privKeyEndTime = e.GetPrivKeyEndTime();
    map.publicKeyType = e.GetPublicKeyType();
    map.publicKeyBits = e.GetPublicKeyBits();
    map.RSAModul = e.GetRSAModul();
    map.RSAExponent = e.GetRSAExponent();
    map.publicKey = e.GetPublicKey();
    map.publicKeyID = e.GetPublicKeyID();
    map.extKeyUsages = e.GetExtKeyUsages();
    map.crlDistribPoint1 = e.GetCRLDistribPoint1();
    map.crlDistribPoint2 = e.GetCRLDistribPoint2();
    map.isSubjTypeAvail = e.IsSubjTypeAvail();
    map.subjType = e.GetSubjType();
    map.subjSubType = e.GetSubjSubType();
    map.isSelfSigned = e.IsSelfSigned();
    map.signIssuer = e.GetSignIssuer();
    map.signSerial = e.GetSignSerial();
    map.subjUNZR = e.GetSubjUNZR();
    map.subjCountry = e.GetSubjCountry();
    map.isQSCD = e.IsQSCD();

    return map;
}

export function MapToEndUserReference(c: EndUserReferenceClass) {
    const map: EndUserReference = {} as any;
    map.name = c.GetName();
    map.data = c.GetData();
    return map;
}

export function MapFromEndUserReference(map: EndUserReference, t: EndUserReferenceClass) {
    t.SetName(map.name);
    t.SetData(map.data);
    return t;
}
