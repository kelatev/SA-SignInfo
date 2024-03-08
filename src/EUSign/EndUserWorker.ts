import { EndUserSettings } from "./types";
import EUSignCPWorker from "./EUSignCPWorker";
import EndUserLibrary, { EndUserEventType, LibraryInfo } from "./EndUserLibrary";

type EUSignContainerType = {
    Unknown: 0x0000;
    Detached: 0x0001;
    Enveloped: 0x0002;
    Enveloping: 0x0004;
    Multi: 0x0008;
    Base64: 0x0010;
    ASiCS: 0x0020;
    ASiCE: 0x0040;
    CAdES: 0x0080;
    XAdES: 0x0100;
    PAdES: 0x0200;
};

type EUVerifyErrorCode = {
    NoError: 0;
    NoFileWithData: 1;
    InvalidFileFormat: 2;
    FileTooBig: 3;
};

//EndUserCertificateInfoEx
type EUVerifySignInfo = {
    signerInfo: {
        OCSPAccessInfo: string;
        RSAExponent: string;
        RSAModul: string;
        TSPAccessInfo: string;
        UPN: string;
        certBeginTime: Date;
        certEndTime: Date;
        certHashType: number;
        chainLength: number;
        crlDistribPoint1: string;
        crlDistribPoint2: string;
        extKeyUsages: string;
        fingerprint: string;
        isFilled: boolean;
        isLimitValueAvailable: boolean;
        isPowerCert: boolean;
        isPrivKeyTimesAvail: boolean;
        isQSCD: boolean;
        isSubjCA: boolean;
        isSubjTypeAvail: boolean;
        issuer: string;
        issuerAccessInfo: string;
        issuerCN: string;
        issuerPublicKeyID: string;
        keyUsage: string;
        keyUsageType: number;
        limitValue: number;
        limitValueCurrency: string;
        policies: string;
        privKeyBeginTime: Date;
        privKeyEndTime: Date;
        publicKey: string;
        publicKeyBits: number;
        publicKeyID: string;
        publicKeyType: number;
        serial: string;
        subjAddress: string;
        subjCN: string;
        subjCountry: string;
        subjDNS: string;
        subjDRFOCode: string;
        subjEDRPOUCode: string;
        subjEMail: string;
        subjFullName: string;
        subjLocality: string;
        subjNBUCode: string;
        subjOCode: string;
        subjOUCode: string;
        subjOrg: string;
        subjOrgUnit: string;
        subjPhone: string;
        subjSPFMCode: string;
        subjState: string;
        subjSubType: number;
        subjTitle: string;
        subjType: number;
        subjUNZR: string;
        subjUserCode: string;
        subjUserID: string;
        subject: string;
        version: number;
    };
    signTimeInfo: {
        isSignTimeStampAvail: boolean;
        isTimeAvail: boolean;
        isTimeStamp: boolean;
        signTimeStamp: Date;
        time: Date;
        version: number;
    };
    isDigitalStamp: boolean;
    qscd: {
        name: string;
        sn: string;
        use: boolean;
    };
    signAlgo: string;
    signFormat: string;
    signContainerType: string;
    isAllContentCovered: boolean;
};

export interface EUVerifyResult {
    resultCode: EUVerifyErrorCode;
    signFile: File;
    dataFile: File | null;
    signType: EUSignContainerType;
    signsInfos: EUVerifySignInfo[][];
    data: Uint8Array | null;
}

export default class EndUserWorker implements EndUserLibrary {
    m_worker;
    m_eventListeners: any[];

    constructor() {
        this.m_worker = new EUSignCPWorker();
        this.m_eventListeners = [];
    }

    command<T>(cmd: string, params?: any[]): Promise<T> {
        return new Promise<any>((resolve, reject) => {
            this.m_worker.postMessage(cmd, params).then(resolve).catch(reject);
        });
    }

    VerifyFiles(files: File[]) {
        return this.command<EUVerifyResult>("VerifyFiles", [files]);
    }

    OnEvent(event: any) {
        try {
            var callback =
                this.m_eventListeners[event.type] || this.m_eventListeners[EndUserEventType.All];
            callback && callback(event);
        } catch (e) {}
    }
    AddEventListener(eventType: EndUserEventType, callback: any) {
        switch (eventType) {
            case EndUserEventType.None:
                this.m_eventListeners = [];
                break;
            case EndUserEventType.All:
                this.m_eventListeners = [];
                this.m_eventListeners[eventType] = callback;
                break;
            default:
                this.m_eventListeners[eventType] = callback;
        }
        return this.command<void>("AddEventListener", [eventType]);
    }
    GetLibraryInfo(downloadsURL?: string) {
        return this.command<LibraryInfo>("GetLibraryInfo", [downloadsURL]);
    }
    IsInitialized() {
        return this.command<boolean>("IsInitialized");
    }
    Initialize(settings: EndUserSettings) {
        return this.command<void>("Initialize", [settings]);
    }
}
