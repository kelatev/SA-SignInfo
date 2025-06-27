'use client';

import { useCallback, useRef } from 'react';
import {
    EndUserProxySettings,
    EndUserPrivateKey,
    EndUserOwnerInfo,
    EndUserKeyMedia,
    EndUserParams,
    EndUserCertificate,
    EndUserSignInfo,
    EndUserContext,
} from "./EndUserTypes";
import { EndUserContextClass } from "./EndUserClass";
import useEUSignCPWorker from "./useEUSignCPWorker";
import EndUserLibrary, {
    LibraryInfo,
    ClientRegistrationTokenKSP,
    SignContainerInfo,
    EndUserSettings,
    EndUserSettingsCA,
} from "./EndUserLibrary";
import { EndUserEventType, EndUserSignAlgo } from "./EndUserConstants";

export default function useEndUserWorker(workerUrl: string): EndUserLibrary {
    const listenersRef = useRef<Array<((event: any) => void) | undefined>>([]);

    const { postMessage } = useEUSignCPWorker(workerUrl, result => {
        try {
            const callback =
                listenersRef.current[result.type] ||
                listenersRef.current[EndUserEventType.All];
            callback?.(result);
        } catch (e) {
            console.error('Worker event error:', e);
        }
    });

    const command = useCallback(
        async <T>(cmd: string, ...params: any[]): Promise<T> => {
            return await postMessage(cmd, params);
        },
        [postMessage]
    );

    const addEventListener = useCallback(
        (eventType: EndUserEventType, callback: (event: any) => void) => {
            if (eventType === EndUserEventType.None) {
                listenersRef.current = [];
            } else if (eventType === EndUserEventType.All) {
                listenersRef.current = [];
                listenersRef.current[eventType] = callback;
            } else {
                listenersRef.current[eventType] = callback;
            }

            return command<void>('AddEventListener', eventType);
        },
        [command]
    );

    return {
        AddEventListener: addEventListener,
        GetLibraryInfo: (downloadsURL?: string) => command<LibraryInfo>('GetLibraryInfo', downloadsURL),
        IsInitialized: () => command<boolean>('IsInitialized'),
        Initialize: (settings: EndUserSettings) => command<void>('Initialize', settings),
        SetRuntimeParameter: (name: string, value: number) => command<void>("SetRuntimeParameter", name, value),
        GetStorageParameter: (name: string, protectedItem: boolean) => command<number>("GetStorageParameter", name, protectedItem),
        SetStorageParameter: (name: string, value: number, protectedItem: boolean) => command<void>("SetStorageParameter", name, value, protectedItem),
        GetCAs: () => command<string | EndUserSettingsCA[]>("GetCAs"),
        GetProxySettings: () => command<EndUserProxySettings>("GetProxySettings"),
        SetProxySettings: (settings: EndUserProxySettings) => command<void>("SetProxySettings", settings),
        GetKeyMedias: () => command<any>("GetKeyMedias"),
        GetJKSPrivateKeys: (jks: Uint8Array) => command<EndUserPrivateKey[]>("GetJKSPrivateKeys", jks),
        IsPrivateKeyReaded: () => command<boolean>("IsPrivateKeyReaded"),
        ResetPrivateKey: () => command<void>("ResetPrivateKey"),
        ResetOperationKSP: () => command<void>("ResetOperationKSP"),
        ReadPrivateKey: (
            keyMedia: EndUserKeyMedia,
            certs: Uint8Array[] | Uint8Array | null,
            CACommonName: string | null,
        ) => command<EndUserOwnerInfo>("ReadPrivateKey", keyMedia, certs, CACommonName),
        ReadPrivateKeyBinary: (
            privateKey: Uint8Array,
            password: string,
            certs: Uint8Array[] | Uint8Array | null,
            CACommonName: string | null,
        ) => command<EndUserOwnerInfo>(
            "ReadPrivateKeyBinary",
            privateKey,
            password,
            certs,
            CACommonName,
        ),
        ReadPrivateKeySIM: (msisdn: string, operator: string | number, getCerts: boolean, keyId: number) => command<EndUserOwnerInfo>(
            "ReadPrivateKeySIM",
            msisdn,
            operator,
            getCerts,
            keyId,
        ),
        ReadPrivateKeyKSP: (userId: string, ksp: string | number, getCerts: boolean, keyId: number) => command<EndUserOwnerInfo>("ReadPrivateKeyKSP", userId, ksp, getCerts, keyId),
        GetOwnCertificates: () => command<EndUserCertificate[]>("GetOwnCertificates"),
        GetOwnEUserParams: () => command<EndUserParams>("GetOwnEUserParams"),
        ChangeOwnCertificatesStatus: (requestType: number, revocationReason: number) => command<void>("ChangeOwnCertificatesStatus", requestType, revocationReason),
        //MakeNewCertificate
        //MakeDeviceCertificate
        //ChangePrivateKeyPassword
        //ChangePrivateKeyPasswordBinary
        //GeneratePrivateKey
        //GeneratePrivateKeyBinary
        GetKeyInfo: (keyMedia: EndUserKeyMedia) => command<Uint8Array>("GetKeyInfo", keyMedia),
        GetKeyInfoBinary: (privateKey: Uint8Array, password: string) => command<Uint8Array>("GetKeyInfoBinary", privateKey, password),
        GetClientRegistrationTokenKSP: (ksp: string | number) => command<ClientRegistrationTokenKSP>("GetClientRegistrationTokenKSP", ksp),
        HashData: (hashAlgo: number, data: Uint8Array, asBase64String?: boolean) => command<Uint8Array | string>(
            "HashData",
            hashAlgo,
            data,
            Number(asBase64String),
        ),
        GetSigner: (sign: Uint8Array, signIndex?: number, resolveOIDs?: boolean) => command<EndUserCertificate | EndUserCertificate[]>(
            "GetSigner",
            sign,
            signIndex,
            resolveOIDs,
        ),
        SignData: (data: Uint8Array | string, asBase64String?: boolean) => command<Uint8Array>("SignData", data, Number(asBase64String)),
        SignDataInternal: (appendCert: boolean, data: Uint8Array | string, asBase64String?: boolean) => command<Uint8Array>(
            "SignDataInternal",
            Number(appendCert),
            data,
            Number(asBase64String),
        ),
        SignHash: (
            signAlgo: EndUserSignAlgo,
            hash: Uint8Array | string,
            appendCert: boolean,
            asBase64String?: boolean,
        ) => command<Uint8Array | string>(
            "SignHash",
            signAlgo,
            hash,
            Number(appendCert),
            Number(asBase64String),
        ),
        SignDataEx: (
            signAlgo: EndUserSignAlgo,
            data: Uint8Array | string,
            external: boolean,
            appendCert: boolean,
            asBase64String?: boolean,
        ) => command<Uint8Array | string>(
            "SignDataEx",
            signAlgo,
            data,
            Number(external),
            Number(appendCert),
            Number(asBase64String),
        ),
        AppendSign: (
            signAlgo: EndUserSignAlgo,
            data: Uint8Array | string,
            previousSign: Uint8Array | string,
            appendCert: boolean,
            asBase64String?: boolean,
        ) => command<Uint8Array | string>(
            "AppendSign",
            signAlgo,
            data,
            previousSign,
            Number(appendCert),
            Number(asBase64String),
        ),
        AppendSignHash: (
            signAlgo: EndUserSignAlgo,
            hash: Uint8Array | string,
            previousSign: Uint8Array | string,
            appendCert: boolean,
            asBase64String?: boolean,
        ) => command<Uint8Array | string>(
            "AppendSignHash",
            signAlgo,
            hash,
            previousSign,
            Number(appendCert),
            Number(asBase64String),
        ),
        VerifyHash: (hash: Uint8Array, sign: Uint8Array, signIndex: number) => command<EndUserSignInfo | EndUserSignInfo[]>(
            "VerifyHash",
            hash,
            sign,
            signIndex,
        ),
        VerifyData: (data: Uint8Array, sign: Uint8Array, signIndex: number) => command<EndUserSignInfo | EndUserSignInfo[]>(
            "VerifyData",
            data,
            sign,
            signIndex,
        ),
        VerifyDataInternal: (sign: Uint8Array, signIndex?: number) => command<EndUserSignInfo | EndUserSignInfo[]>(
            "VerifyDataInternal",
            sign,
            signIndex,
        ),
        //EnvelopData
        //DevelopData
        //ProtectDataByPassword
        //UnprotectDataByPassword
        //CreateAuthData
        //GetTSPByAccessInfo
        //CheckTSP
        CtxCreate: () => command<EndUserContext>("CtxCreate"),
        CtxFree: (context: EndUserContext | EndUserContextClass) => command<void>("CtxFree", context),
        CtxSetParameter: (context: EndUserContext | EndUserContextClass, name: string, value: boolean) => command<void>("CtxSetParameter", context, name, value),
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
        GetSignContainerInfo: (signature: Uint8Array | string, certs?: Uint8Array[] | Uint8Array | null) => command<SignContainerInfo>("GetSignContainerInfo", signature, certs)
    };
}
