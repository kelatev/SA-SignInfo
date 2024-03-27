import { useState, useMemo, useEffect } from "react";
import useEndUserInstance, { EndUserLibraryType } from "./useEndUserInstance";
import EndUserLibrary from "./EndUserLibrary";
import EndUserWorker from "./EndUserWorker";
import EndUserAgent from "./EndUserAgent";
import { EndUserEventType } from "./EndUserConstants";
import useEndUserConfirmationTimer from "./useEndUserConfirmationTimer";

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

    const workerUrl = process.env.PUBLIC_URL + "/eusign/euscp.worker.js?maxDataSize=25";
    const librarySW = useMemo<EndUserLibrary>(() => new EndUserWorker(workerUrl), [workerUrl]);
    const libraryJS = useMemo<EndUserLibrary>(() => new EndUserAgent(), []);
    const instanceSW = useEndUserInstance({ type: EndUserLibraryType.SW, library: librarySW });
    const instanceJS = useEndUserInstance({ type: EndUserLibraryType.JS, library: libraryJS });
    const currentLibrary = useMemo(() => {
        return keyMediaType === KeyMediaType.Hardware ? instanceJS : instanceSW;
    }, [keyMediaType, instanceJS, instanceSW]);

    const Confirmation = useEndUserConfirmationTimer();
    const OnEvent = (event: any) => {
        switch (event.type) {
            case EndUserEventType.ConfirmKSPOperation:
                Confirmation.BeginOperation(
                    event.url,
                    event.qrCode,
                    event.mobileAppName,
                    event.expireDate,
                );
        }
    };

    useEffect(() => {
        if (
            currentLibrary &&
            !currentLibrary.info?.loaded &&
            !currentLibrary.loading &&
            !currentLibrary.error
        ) {
            console.log("useEndUserController.Load");

            currentLibrary.Load(event => OnEvent(event)).catch(e => {});
        }
    }, [currentLibrary]);

    return {
        keyMediaType,
        setKeyMediaType,
        librarySW: instanceSW,
        currentLibrary,
        Confirmation,
    };
}
