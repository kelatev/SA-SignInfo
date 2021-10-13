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
