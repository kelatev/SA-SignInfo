import { useState, useEffect, useCallback } from "react";
import EndUserInstance, { EndUserLibraryType } from "../EUSign/EndUserInstance";
import EndUserWorker from "../EUSign/EndUserWorker";

enum KeyMediaType {
    File,
    Hardware,
}

export default function useEndUserController() {
    const [keyMediaType, setKeyMediaType] = useState<KeyMediaType>(KeyMediaType.File);
    const [libraries, setLibraries] = useState<EndUserInstance[]>([]);
    const [currentLibrary, setCurrentLibrary] = useState<EndUserInstance>();

    const m_isPKActionDone = false;
    const m_KM = null;
    const m_updateKM = false;
    const m_updatingKM = false;
    const m_readedPKey = null;
    const m_KMs = [];

    useEffect(() => {
        setLibraries([new EndUserInstance(EndUserLibraryType.SW, new EndUserWorker())]);
    }, []);

    const findLibrary = useCallback(
        (type: EndUserLibraryType) => libraries.find(item => item.GetType() === type),
        [libraries],
    );

    useEffect(() => {
        const typeToFind =
            keyMediaType === KeyMediaType.Hardware ? EndUserLibraryType.JS : EndUserLibraryType.SW;
        setCurrentLibrary(findLibrary(typeToFind));
    }, [keyMediaType, findLibrary]);

    return { keyMediaType, setKeyMediaType, libraries, findLibrary, currentLibrary };
}
