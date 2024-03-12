import { useState, useCallback } from "react";
import EndUserLibrary, { EndUserEventType, LibraryInfo } from "./EndUserLibrary";
import Settings from "./LIBRARY_SETTINGS.json";

export enum EndUserLibraryType {
    SW,
    JS,
}

interface Props {
    type: EndUserLibraryType;
    library: EndUserLibrary;
}

export interface EndUserInstance {
    type: EndUserLibraryType;
    library: EndUserLibrary | undefined;
    info: LibraryInfo;
    loading: boolean;
    error: string | undefined;
    Load: (callback?: any) => Promise<void>;
}

export default function useEndUserInstance(props: Props): EndUserInstance {
    const [info, setInfo] = useState<LibraryInfo>({
        version: "",
        supported: false,
        loaded: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    const Load = useCallback(
        (callback?: any) => {
            setLoading(true);
            setError(undefined);

            return new Promise<void>((resolve, reject) => {
                props.library
                    .AddEventListener(EndUserEventType.All, callback)
                    .then(() => {
                        return props.library.GetLibraryInfo(/* LIBRARY_SETTINGS.downloadsURL */);
                    })
                    .then(libInfo => setInfo(libInfo))
                    .then(() => props.library.Initialize(Settings as any))
                    .then(() => {
                        setLoading(false);
                        resolve();
                    })
                    .catch(error => {
                        setLoading(false);
                        setError(error);
                        reject(error);
                    });
            });
        },
        [props.library],
    );

    return { type: props.type, library: props.library, info, loading, error, Load };
}
