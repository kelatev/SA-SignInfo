import { useState, useCallback } from "react";
import EndUserLibrary, { EndUserEventType, LibraryInfo } from "../EUSign/EndUserLibrary";
import Settings from "../EUSign/LIBRARY_SETTINGS.json";

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
    info: LibraryInfo | undefined;
    loading: boolean;
    error: string | undefined;
    Load: (callback?: any) => Promise<void>;
    Initialize: () => Promise<void>;
}

export default function useEndUserInstance(props: Props): EndUserInstance {
    const [info, setInfo] = useState<LibraryInfo>();
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
                    .then(libInfo => {
                        setLoading(false);
                        setInfo(libInfo);
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

    const Initialize = useCallback(() => {
        return new Promise<void>((resolve, reject) => {
            props.library
                .IsInitialized()
                .then(init => (init ? resolve() : props.library.Initialize(Settings as any)))
                .then(() => resolve())
                .catch(reject);
        });
    }, [props.library]);

    return { type: props.type, library: props.library, info, loading, error, Load, Initialize };
}
