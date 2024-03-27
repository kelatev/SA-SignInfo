import { useState, useCallback } from "react";
import EndUserLibrary, { LibraryInfo } from "./EndUserLibrary";
import { EndUserEventType } from './EndUserConstants';
import { EndUserError } from "./EndUserTypes";
import Settings from "./LIBRARY_SETTINGS.json";
import { Repeat } from "@phosphor-icons/react";

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
    error: EndUserError | undefined;
    Load: (callback: (event: any) => void) => Promise<void>;
}

export default function useEndUserInstance(props: Props): EndUserInstance {
    const [info, setInfo] = useState<LibraryInfo>({
        version: "",
        supported: false,
        loaded: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<EndUserError>();

    const Load = useCallback(
        (callback: (event: any) => void) => {
            setLoading(true);
            setError(undefined);

            return new Promise<void>((resolve, reject) => {
                props.library
                    .AddEventListener(EndUserEventType.All, callback)
                    .then(() => {
                        return props.library.GetLibraryInfo(/*Settings.downloadsURL */);
                    })
                    .then(libInfo => setInfo(libInfo))
                    .then(() => props.library.Initialize(Settings))
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

export function errorLoadDescription(instance: EndUserInstance) {
    if (instance.error?.errorCode !== 4097 && instance.error?.errorCode !== 4098) {
        return instance.error?.toString();
    }

    const TEXT_LIBRARY_NEED_INSTALL =
        'Веб-розширення для роботи бібліотеки web-підпису не запущено або не інстальовано в браузері. Для продовження необхідно запустити або інсталювати веб-розширення.';
    const TEXT_LIBRARY_NEED_UPDATE =
        'Інстальована версія web-бібліотеки підпису більше не підтримується. Для продовження необхідно інсталювати оновлену версію web-бібліотеки підпису.';

    const label = instance.info.isNativeLibraryNeedUpdate
        ? TEXT_LIBRARY_NEED_UPDATE
        : TEXT_LIBRARY_NEED_INSTALL;
    let urlText = instance.info.isNativeLibraryNeedUpdate ? 'Оновлення web-бібліотеки підпису' : 'Інсталяційний пакет web-бібліотеки підпису';
    let urlLink = instance.info.nativeLibraryInstallURL;

    if (instance.info.isWebExtensionSupported && !instance.info.isWebExtensionInstalled && !instance.info.isNativeLibraryNeedUpdate) {
        urlText = 'Інсталяційний пакет бібліотеки підпису (web-розширення)';
        urlLink = instance.info.webExtensionInstallURL;
    }

    return (<>
        {label}
        <div><a href={urlLink ?? ''}>{urlText}</a></div>
        <div><a href={instance.info.helpURL ?? ''}>Настанова користувача</a></div>
        <button type="button" className="btn btn-sm btn-light mt-3" onClick={() => {
            instance.Load(e => { }).catch(e => { })
        }}><Repeat className="me-2" />Повторити</button>
    </>);
}
