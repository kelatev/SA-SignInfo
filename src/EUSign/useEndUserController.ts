'use client'

import { useState, useMemo, useEffect, useCallback } from "react";
import useEndUserInstance, { EndUserLibraryType } from "./useEndUserInstance";
import EndUserLibrary from "./EndUserLibrary";
import useEndUserWorker from "./useEndUserWorker";
import EndUserAgent from "./EndUserAgent";
import { EndUserEventType } from "./EndUserConstants";
import useEndUserConfirmation from "./useEndUserConfirmation";

export enum SignContainerType {
    XAdES = 1,
    PAdES = 2,
    CAdES = 3,
    ASiCS = 4,
    ASiCE = 5,
}

export enum SignType {
    Detached = 1,
    Enveloped = 2,
}

export enum KeyMediaType {
    File = 1,
    Hardware = 2,
    KSP = 4,
    DIIA_UA = 5,
    DIIA_EU = 6,
}

export default function useEndUserController() {
    const [keyMediaType, setKeyMediaType] = useState<KeyMediaType>(KeyMediaType.File);

    // Memoize worker URL to prevent unnecessary re-renders
    const workerUrl = useMemo(() => "/eusign/euscp.worker.js?maxDataSize=25", []);
    
    // Initialize libraries
    const librarySW = useEndUserWorker(workerUrl);
    const libraryJS = useMemo<EndUserLibrary>(() => new EndUserAgent(), []);
    
    // Create instances
    const instanceSW = useEndUserInstance({ type: EndUserLibraryType.SW, library: librarySW });
    const instanceJS = useEndUserInstance({ type: EndUserLibraryType.JS, library: libraryJS });
    
    // Memoize current library selection
    const currentLibrary = useMemo(() => {
        return keyMediaType === KeyMediaType.Hardware ? instanceJS : instanceSW;
    }, [keyMediaType, instanceJS, instanceSW]);

    const Confirmation = useEndUserConfirmation();
    
    // Memoize event handler to prevent unnecessary re-renders
    const OnEvent = useCallback((event: any) => {
        switch (event.type) {
            case EndUserEventType.ConfirmKSPOperation:
                Confirmation.BeginOperation(
                    event.url,
                    event.qrCode,
                    event.mobileAppName,
                    event.expireDate,
                );
                break;
            default:
                // Handle other events if needed
                break;
        }
    }, [Confirmation]);

    // Load library when needed
    useEffect(() => {
        if (
            currentLibrary &&
            !currentLibrary.info?.loaded &&
            !currentLibrary.loading &&
            !currentLibrary.error
        ) {
            currentLibrary.Load(OnEvent);
        }
    }, [currentLibrary, OnEvent]);

    // Memoize return object to prevent unnecessary re-renders
    return useMemo(() => ({
        keyMediaType,
        setKeyMediaType,
        librarySW: instanceSW,
        currentLibrary,
        Confirmation,
    }), [keyMediaType, instanceSW, currentLibrary, Confirmation]);
}
