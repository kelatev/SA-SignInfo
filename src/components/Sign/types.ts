export enum SignType {
    Int = 1,
    Ext = 2,
}

export enum SignAlgo {
    DSTU4145 = 1,
    RSA = 2,
    ECDSA = 4,
}

export enum SignFormat {
    CADES_BES = 1,
    CADES_T = 4,
    CADES_C = 8,
    CADES_X_LONG = 16,
    CADES_X_LONG_TRUSTED = 128,
}

export interface SettingsType {
    signType: SignType;
    signAlgo: SignAlgo;
    signFormat: SignFormat;
}
