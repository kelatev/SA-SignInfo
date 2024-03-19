import { useState, useMemo } from "react";
import useEndUserInstance, { EndUserLibraryType } from "./useEndUserInstance";
import EndUserLibrary from "./EndUserLibrary";
import EndUserWorker from "./EndUserWorker";
import EndUserAgent from "./EndUserAgent";

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

    const librarySW = useMemo<EndUserLibrary>(() => new EndUserWorker(), []);
    const libraryJS = useMemo<EndUserLibrary>(() => new EndUserAgent(), []);
    const instanceSW = useEndUserInstance({ type: EndUserLibraryType.SW, library: librarySW });
    const instanceJS = useEndUserInstance({ type: EndUserLibraryType.JS, library: libraryJS });
    const currentLibrary = useMemo(() => {
        return keyMediaType === KeyMediaType.Hardware ? instanceJS : instanceSW;
    }, [keyMediaType, instanceJS, instanceSW]);

    /* const m_isPKActionDone = false;
    const m_KM = null;
    const m_updateKM = false;
    const m_updatingKM = false;
    const m_readedPKey = null;
    const m_KMs = []; */

    return { keyMediaType, setKeyMediaType, librarySW: instanceSW, currentLibrary };
}
