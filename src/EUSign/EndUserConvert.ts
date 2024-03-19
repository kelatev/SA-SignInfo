import { KeyMedia, ProxySettings, OwnerInfo, CertificateInfoEx } from "./EndUserMap";
import {
    EndUserKeyMedia,
    EndUserProxySettings,
    EndUserOwnerInfo,
    EndUserCertificateInfoEx,
} from "./eusign.types";

export function MapFromKeyMedia(map: KeyMedia, c: EndUserKeyMedia) {
    c.SetTypeIndex(map.typeIndex);
    c.SetDevIndex(map.devIndex);
    c.SetPassword(map.user ? "##" + map.user + "##" + map.password : map.password);
    return c;
}

export function MapToProxySettings(e: EndUserProxySettings, map: ProxySettings) {
    map.useProxy = e.GetUseProxy();
    map.address = e.GetAddress();
    map.port = e.GetPort();
    map.anonymous = e.GetAnonymous();
    map.user = e.GetUser();
    map.password = e.GetPassword();
    map.savePassword = e.GetSavePassword();
    return map;
}

export function MapFromProxySettings(map: ProxySettings, t: EndUserProxySettings) {
    t.SetUseProxy(map.useProxy);
    t.SetAddress(map.address);
    t.SetPort(map.port);
    t.SetAnonymous(map.anonymous);
    t.SetUser(map.user);
    t.SetPassword(map.password);
    t.SetSavePassword(map.savePassword);
    return t;
}

export function MapEndUserOwnerInfo(c: EndUserOwnerInfo, map: OwnerInfo) {
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

export function MapToEndUserCertificateInfoEx(e: EndUserCertificateInfoEx, map: CertificateInfoEx) {
    map.isFilled = e.IsFilled();
    map.version = e.GetVersion();
    map.issuer = e.GetIssuer();
    map.issuerCN = e.GetIssuerCN();
    map.serial = e.GetSerial();
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
    map.publicKeyBits = e.GetPublicKeyBits();
    map.publicKey = e.GetPublicKey();
    map.publicKeyID = e.GetPublicKeyID();
    map.issuerPublicKeyID = e.GetIssuerPublicKeyID();
    map.keyUsage = e.GetKeyUsage();
    map.extKeyUsages = e.GetExtKeyUsages();
    map.policies = e.GetPolicies();
    map.crlDistribPoint1 = e.GetCRLDistribPoint1();
    map.crlDistribPoint2 = e.GetCRLDistribPoint2();
    map.isPowerCert = e.IsPowerCert();
    map.isSubjTypeAvail = e.IsSubjTypeAvail();
    map.isSubjCA = e.IsSubjCA();
    map.chainLength = e.GetChainLength();
    map.UPN = e.GetUPN();
    map.publicKeyType = e.GetPublicKeyType();
    map.keyUsageType = e.GetKeyUsageType();
    map.RSAModul = e.GetRSAModul();
    map.RSAExponent = e.GetRSAExponent();
    map.OCSPAccessInfo = e.GetOCSPAccessInfo();
    map.issuerAccessInfo = e.GetIssuerAccessInfo();
    map.TSPAccessInfo = e.GetTSPAccessInfo();
    map.isLimitValueAvailable = e.IsLimitValueAvail();
    map.limitValue = e.GetLimitValue();
    map.limitValueCurrency = e.GetLimitValueCurrency();
    map.subjType = e.GetSubjType();
    map.subjSubType = e.GetSubjSubType();
    map.subjUNZR = e.GetSubjUNZR();
    map.subjCountry = e.GetSubjCountry();
    map.isQSCD = e.IsQSCD();
    map.subjUserID = e.GetSubjUserID();
    return map;
}

export function MapToEndUserParams(e, t) {
    return (
        (t.SN = e.GetSN()),
        (t.commonName = e.GetCommonName()),
        (t.locality = e.GetLocality()),
        (t.state = e.GetState()),
        (t.organization = e.GetOrganization()),
        (t.orgUnit = e.GetOrgUnit()),
        (t.title = e.GetTitle()),
        (t.street = e.GetStreet()),
        (t.phone = e.GetPhone()),
        (t.surname = e.GetSurname()),
        (t.givenname = e.GetGivenname()),
        (t.EMail = e.GetEMail()),
        (t.DNS = e.GetDNS()),
        (t.EDRPOUCode = e.GetEDRPOUCode()),
        (t.DRFOCode = e.GetDRFOCode()),
        (t.NBUCode = e.GetNBUCode()),
        (t.SPFMCode = e.GetSPFMCode()),
        (t.information = e.GetInformation()),
        (t.passPhrase = e.GetPassPhrase()),
        (t.isPublishCertificate = e.GetIsPublishCertificate()),
        (t.RAAdminSN = e.GetRAAdminSN()),
        t
    );
}

export function MapToEndUserTimeInfo(e, t) {
    return (
        (t.version = e.GetVersion()),
        (t.isTimeAvail = e.IsTimeAvail()),
        (t.isTimeStamp = e.IsTimeStamp()),
        (t.time = e.GetTime()),
        (t.isSignTimeStampAvail = e.IsSignTimeStampAvail()),
        (t.signTimeStamp = e.GetSignTimeStamp()),
        t
    );
}

export function MapToEndUserSignInfo(t, n) {
    return (
        (n.ownerInfo = MapEndUserOwnerInfo(t.GetOwnerInfo(), new i.a())),
        (n.timeInfo = MapToEndUserTimeInfo(t.GetTimeInfo(), new o.EndUserTimeInfo())),
        (n.data = t.GetData()),
        (n.signLevel = 0),
        n
    );
}

export function MapToEndUserSenderInfo(t, n) {
    return (
        (n.ownerInfo = MapEndUserOwnerInfo(t.GetOwnerInfo(), new i.a())),
        (n.timeInfo = MapToEndUserTimeInfo(t.GetTimeInfo(), new o.EndUserTimeInfo())),
        (n.data = t.GetData()),
        n
    );
}

export function MapToEndUserCertificate(t, n) {
    n.data = t.GetData();
    n.infoEx = MapToEndUserCertificateInfoEx(t.GetInfoEx(), new r.a());
    return n;
}

export function MapFromEndUserInfo(e, t) {
    return (
        t.SetCommonName(e.commonName),
        t.SetLocality(e.locality),
        t.SetState(e.state),
        t.SetOrganization(e.organization),
        t.SetOrgUnit(e.orgUnit),
        t.SetTitle(e.title),
        t.SetStreet(e.street),
        t.SetPhone(e.phone),
        t.SetSurname(e.surname),
        t.SetGivenname(e.givenname),
        t.SetEMail(e.EMail),
        t.SetDNS(e.DNS),
        t.SetEDRPOUCode(e.EDRPOUCode),
        t.SetDRFOCode(e.DRFOCode),
        t.SetNBUCode(e.NBUCode),
        t.SetSPFMCode(e.SPFMCode),
        t.SetOCode(e.OCode),
        t.SetOUCode(e.OUCode),
        t.SetUserCode(e.userCode),
        t.SetUPN(e.UPN),
        t.SetUNZR(e.UNZR),
        t.SetCountry(e.country),
        t
    );
}

export function MapToEndUserRequestInfo(e, t) {
    return (
        (t.isFilled = !0),
        (t.data = e.GetRequest()),
        (t.type = e.GetRequestType()),
        (t.fileName = e.GetDefaultRequestFileName()),
        (t.isSimple = e.IsSimple()),
        (t.subject = e.GetSubject()),
        (t.subjCN = e.GetSubjCN()),
        (t.subjOrg = e.GetSubjOrg()),
        (t.subjOrgUnit = e.GetSubjOrgUnit()),
        (t.subjTitle = e.GetSubjTitle()),
        (t.subjState = e.GetSubjState()),
        (t.subjLocality = e.GetSubjLocality()),
        (t.subjFullName = e.GetSubjFullName()),
        (t.subjAddress = e.GetSubjAddress()),
        (t.subjPhone = e.GetSubjPhone()),
        (t.subjEMail = e.GetSubjEMail()),
        (t.subjDNS = e.GetSubjDNS()),
        (t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
        (t.subjDRFOCode = e.GetSubjDRFOCode()),
        (t.subjNBUCode = e.GetSubjNBUCode()),
        (t.subjSPFMCode = e.GetSubjSPFMCode()),
        (t.subjOCode = e.GetSubjOCode()),
        (t.subjOUCode = e.GetSubjOUCode()),
        (t.subjUserCode = e.GetSubjUserCode()),
        (t.certBeginTime = e.GetCertBeginTime()),
        (t.certEndTime = e.GetCertEndTime()),
        (t.isPrivKeyTimesAvail = e.IsPrivKeyTimesAvail()),
        (t.privKeyBeginTime = e.GetPrivKeyBeginTime()),
        (t.privKeyEndTime = e.GetPrivKeyEndTime()),
        (t.publicKeyType = e.GetPublicKeyType()),
        (t.publicKeyBits = e.GetPublicKeyBits()),
        (t.RSAModul = e.GetRSAModul()),
        (t.RSAExponent = e.GetRSAExponent()),
        (t.publicKey = e.GetPublicKey()),
        (t.publicKeyID = e.GetPublicKeyID()),
        (t.extKeyUsages = e.GetExtKeyUsages()),
        (t.crlDistribPoint1 = e.GetCRLDistribPoint1()),
        (t.crlDistribPoint2 = e.GetCRLDistribPoint2()),
        (t.isSubjTypeAvail = e.IsSubjTypeAvail()),
        (t.subjType = e.GetSubjType()),
        (t.subjSubType = e.GetSubjSubType()),
        (t.isSelfSigned = e.IsSelfSigned()),
        (t.signIssuer = e.GetSignIssuer()),
        (t.signSerial = e.GetSignSerial()),
        (t.subjUNZR = e.GetSubjUNZR()),
        (t.subjCountry = e.GetSubjCountry()),
        (t.isQSCD = e.IsQSCD()),
        t
    );
}

export function MapToEndUserReference(e, t) {
    t.name = e.GetName();
    t.val = e.GetData();
    return t;
}

export function MapFromEndUserReference(e, t) {
    t.SetName(e.name);
    t.SetData(e.val);
    return t;
}
