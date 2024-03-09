import { useState, useEffect, useCallback, useMemo } from "react";
import useEndUserInstance, { EndUserLibraryType, EndUserInstance } from "./useEndUserInstance";
import EndUserLibrary from "./EndUserLibrary";
import EndUserWorker from "./EndUserWorker";

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
    const instanceSW = useEndUserInstance({ type: EndUserLibraryType.SW, library: librarySW });
    const [libraries] = useState<EndUserInstance[]>([instanceSW]);
    const [currentLibrary, setCurrentLibrary] = useState<EndUserInstance | undefined>(instanceSW);

    /* const m_isPKActionDone = false;
    const m_KM = null;
    const m_updateKM = false;
    const m_updatingKM = false;
    const m_readedPKey = null;
    const m_KMs = []; */

    const findLibrary = useCallback(
        (type: EndUserLibraryType) => libraries.find(item => item.type === type),
        [libraries],
    );

    useEffect(() => {
        const typeToFind =
            keyMediaType === KeyMediaType.Hardware ? EndUserLibraryType.JS : EndUserLibraryType.SW;
        setCurrentLibrary(findLibrary(typeToFind));
    }, [keyMediaType, findLibrary, libraries]);

    return { keyMediaType, setKeyMediaType, librarySW: instanceSW, currentLibrary };
}
