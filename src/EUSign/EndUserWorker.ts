import {
    EndUserSettings,
    EndUserProxySettings,
    EndUserPrivateKey,
    EndUserOwnerInfo,
    EndUserPrivateKeyContext,
    EndUserKeyMedia,
    EndUserParams,
    EndUserCertificate,
    EndUserSignInfo,
    EndUserContext,
    EndUserSettingsCA,
} from "./eusign.types";
import EUSignCPWorker from "./EUSignCPWorker";
import EndUserLibrary, {
    EndUserEventType,
    LibraryInfo,
    ClientRegistrationTokenKSP,
    SignContainerInfo,
} from "./EndUserLibrary";
import { EndUserSignAlgo } from "./EndUserConstants";

export default class EndUserWorker implements EndUserLibrary {
    m_worker;
    m_eventListeners: any[];

    constructor() {
        this.m_worker = new EUSignCPWorker();
        this.m_eventListeners = [];
    }

    command<T>(cmd: string, ...params: any[]): Promise<T> {
        return new Promise<any>((resolve, reject) => {
            this.m_worker.postMessage(cmd, params).then(resolve).catch(reject);
        });
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
        return this.command<void>("AddEventListener", eventType);
    }
    GetLibraryInfo(downloadsURL?: string) {
        return this.command<LibraryInfo>("GetLibraryInfo", downloadsURL);
    }
    IsInitialized() {
        return this.command<boolean>("IsInitialized");
    }
    Initialize(settings: EndUserSettings) {
        return this.command<void>("Initialize", settings);
    }
    SetRuntimeParameter(name: string, value: number) {
        return this.command<void>("SetRuntimeParameter", name, value);
    }
    GetStorageParameter(name: string, protectedItem: boolean) {
        return this.command<number>("GetStorageParameter", name, protectedItem);
    }
    SetStorageParameter(name: string, value: number, protectedItem: boolean) {
        return this.command<void>("SetStorageParameter", name, value, protectedItem);
    }
    GetCAs() {
        return this.command<string | EndUserSettingsCA[]>("GetCAs");
    }
    GetProxySettings() {
        return this.command<EndUserProxySettings>("GetProxySettings");
    }
    SetProxySettings(settings: EndUserProxySettings) {
        return this.command<void>("SetProxySettings", settings);
    }
    GetKeyMedias() {
        return this.command<any>("GetKeyMedias");
    }
    GetJKSPrivateKeys(jks: Uint8Array) {
        return this.command<EndUserPrivateKey[]>("GetJKSPrivateKeys", jks);
    }
    IsPrivateKeyReaded() {
        return this.command<boolean>("IsPrivateKeyReaded");
    }
    ResetPrivateKey() {
        return this.command<void>("ResetPrivateKey");
    }
    ResetOperationKSP() {
        return this.command<void>("ResetOperationKSP");
    }
    ReadPrivateKey(
        keyMedia: EndUserKeyMedia,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) {
        return this.command<EndUserOwnerInfo>("ReadPrivateKey", keyMedia, certs, CACommonName);
    }
    ReadPrivateKeyBinary(
        privateKey: Uint8Array,
        password: string,
        certs: Uint8Array[] | Uint8Array | null,
        CACommonName: string | null,
    ) {
        return this.command<EndUserOwnerInfo>(
            "ReadPrivateKeyBinary",
            privateKey,
            password,
            certs,
            CACommonName,
        );
    }
    ReadPrivateKeySIM(msisdn: string, operator: string | number, getCerts: boolean, keyId: number) {
        return this.command<EndUserPrivateKeyContext>(
            "ReadPrivateKeySIM",
            msisdn,
            operator,
            getCerts,
            keyId,
        );
    }
    ReadPrivateKeyKSP(userId: string, ksp: string | number, getCerts: boolean, keyId: number) {
        return this.command<EndUserPrivateKeyContext>(
            "ReadPrivateKeyKSP",
            userId,
            ksp,
            getCerts,
            keyId,
        );
    }
    GetOwnCertificates() {
        return this.command<EndUserCertificate[]>("GetOwnCertificates");
    }
    GetOwnEUserParams() {
        return this.command<EndUserParams>("GetOwnEUserParams");
    }
    ChangeOwnCertificatesStatus(requestType: number, revocationReason: number) {
        return this.command<void>("ChangeOwnCertificatesStatus", requestType, revocationReason);
    }
    //MakeNewCertificate
    //MakeDeviceCertificate
    //ChangePrivateKeyPassword
    //ChangePrivateKeyPasswordBinary
    //GeneratePrivateKey
    //GeneratePrivateKeyBinary
    GetKeyInfo(keyMedia: EndUserKeyMedia) {
        return this.command<Uint8Array>("GetKeyInfo", keyMedia);
    }
    GetKeyInfoBinary(privateKey: Uint8Array, password: string) {
        return this.command<Uint8Array>("GetKeyInfoBinary", privateKey, password);
    }
    GetClientRegistrationTokenKSP(ksp: string | number) {
        return this.command<ClientRegistrationTokenKSP>("GetClientRegistrationTokenKSP", ksp);
    }
    HashData(hashAlgo: number, data: Uint8Array, asBase64String?: boolean) {
        return this.command<Uint8Array>("HashData", hashAlgo, data, Number(asBase64String));
    }
    GetSigner(sign: Uint8Array, signIndex?: number, resolveOIDs?: boolean) {
        return this.command<EndUserCertificate | EndUserCertificate[]>(
            "GetSigner",
            sign,
            signIndex,
            resolveOIDs,
        );
    }
    SignData(data: Uint8Array | string, asBase64String?: boolean) {
        return this.command<Uint8Array>("SignData", data, Number(asBase64String));
    }
    SignDataInternal(appendCert: boolean, data: Uint8Array | string, asBase64String?: boolean) {
        return this.command<Uint8Array>(
            "SignDataInternal",
            Number(appendCert),
            data,
            Number(asBase64String),
        );
    }
    SignHash(
        signAlgo: EndUserSignAlgo,
        hash: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) {
        return this.command<Uint8Array>(
            "SignHash",
            signAlgo,
            hash,
            Number(appendCert),
            Number(asBase64String),
        );
    }
    SignDataEx(
        signAlgo: EndUserSignAlgo,
        data: Uint8Array,
        external: boolean,
        appendCert: boolean,
        asBase64String?: boolean,
    ) {
        return this.command<Uint8Array>(
            "SignDataEx",
            signAlgo,
            data,
            Number(external),
            Number(appendCert),
            Number(asBase64String),
        );
    }
    AppendSign(
        signAlgo: EndUserSignAlgo,
        data: Uint8Array,
        previousSign: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) {
        return this.command<Uint8Array>(
            "AppendSign",
            signAlgo,
            data,
            previousSign,
            Number(appendCert),
            Number(asBase64String),
        );
    }
    AppendSignHash(
        signAlgo: EndUserSignAlgo,
        hash: Uint8Array,
        previousSign: Uint8Array,
        appendCert: boolean,
        asBase64String?: boolean,
    ) {
        return this.command<Uint8Array>(
            "AppendSignHash",
            signAlgo,
            hash,
            previousSign,
            Number(appendCert),
            Number(asBase64String),
        );
    }
    VerifyHash(hash: Uint8Array, sign: Uint8Array, signIndex: number) {
        return this.command<EndUserSignInfo>("VerifyHash", hash, sign, signIndex);
    }
    VerifyData(data: Uint8Array, sign: Uint8Array, signIndex: number) {
        return this.command<EndUserSignInfo>("VerifyData", data, sign, signIndex);
    }
    VerifyDataInternal(sign: Uint8Array, signIndex?: number) {
        return this.command<EndUserSignInfo | EndUserSignInfo[]>(
            "VerifyDataInternal",
            sign,
            signIndex,
        );
    }
    //EnvelopData
    //DevelopData
    //ProtectDataByPassword
    //UnprotectDataByPassword
    //CreateAuthData
    //GetTSPByAccessInfo
    //CheckTSP
    CtxCreate() {
        return this.command<EndUserContext>("CtxCreate");
    }
    CtxFree(context: EndUserContext) {
        return this.command<void>("CtxFree", context);
    }
    CtxSetParameter(context: EndUserContext, name: string, value: boolean) {
        return this.command<void>("CtxSetParameter", context, name, value);
    }
    //CtxReadPrivateKey
    //CtxReadPrivateKeyBinary
    //CtxFreePrivateKey
    //CtxGetOwnCertificates
    //CtxSignHash
    //CtxSignData
    //CtxAppendSignHash
    //CtxAppendSign
    //CtxEnvelopData
    //CtxDevelopData
    //ProtectTaxReports
    //UnprotectTaxReceipts
    //ASiCGetSigner
    //ASiCSignData
    //ASiCAppendSign
    //ASiCVerifyData
    //PDFGetSigner
    //PDFSignData
    //PDFVerifyData
    //XAdESGetSigner
    //XAdESSignData
    //XAdESVerifyData
    GetSignContainerInfo(signature: Uint8Array) {
        return this.command<SignContainerInfo>("GetSignContainerInfo", signature);
    }
}
