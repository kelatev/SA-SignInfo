export const EU_SIGN_TYPE_PARAMETER = "SignType";

export enum EndUserCertKeyType {
    Unknown = 0,
    DSTU4145 = 1,
    RSA = 2,
    ECDSA = 4,
}

export enum EndUserKeyUsage {
    Unknown = 0,
    DigitalSignature = 1,
    NonRepudation = 2,
    KeyAgreement = 16,
}

export enum EndUserKeysType {
    None = 0,
    DSTUAndECDHWithGOST = 1,
    RSAWithSHA = 2,
}

export enum EndUserKSP {
    Kyivstar = 1,
    Vodafone = 2,
    Lifecell = 3,
    IIT = 4,
    UKey = 5,
    PB = 6,
    DIIA = 7,
}

export enum EndUserSignType {
    Unknown = 0,
    CAdES_BES = 1,
    CAdES_T = 4,
    CAdES_C = 8,
    CAdES_X_Long = 16,
    CAdES_X_Long_Trusted = 128,
}

export enum EndUserCAdESType {
    Unknown = 0,
    Detached = 1,
    Enveloped = 3,
}

export enum EndUserSignAlgo {
    Unknown = 0,
    DSTU4145WithGOST34311 = 1,
    RSAWithSHA = 2,
    ECDSAWithSHA = 3,
}

export enum EndUserHashAlgo {
    Unknown = 0,
    GOST34311 = 1,
    SHA160 = 2,
    SHA224 = 3,
    SHA256 = 4,
}

export enum EndUserASiCType {
    Unknown = 0,
    S = 1,
    E = 2,
}

export enum EndUserASiCSignType {
    Unknown = 0,
    CAdES = 1,
    XAdES = 2,
}

export enum EndUserXAdESType {
    Unknown = 0,
    Detached = 1,
    Enveloping = 2,
    Enveloped = 3,
}

export enum EndUserXAdESSignLevel {
    Unknown = 0,
    B_B = 1,
    B_T = 4,
    B_LT = 16,
    B_LTA = 32,
}

export enum EndUserPAdESSignLevel {
    Unknown = 0,
    B_B = 1,
    B_T = 4,
    B_LT = 16,
    B_LTA = 32,
}

export enum EndUserSignContainerType {
    Unknown = 0,
    CAdES = 1,
    XAdES = 2,
    PAdES = 3,
    ASiC = 4,
}
