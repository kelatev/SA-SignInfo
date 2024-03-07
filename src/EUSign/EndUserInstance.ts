import EndUserLibrary, { EndUserEventType, LibraryInfo } from "./EndUserLibrary";

export enum EndUserLibraryType {
    SW,
    JS,
}

export default class EndUserInstance {
    m_type: EndUserLibraryType;
    m_library: EndUserLibrary;
    m_info: LibraryInfo | null = null;
    m_loading = false;
    m_eventsRegistered = false;

    constructor(type: EndUserLibraryType, library: EndUserLibrary) {
        this.m_type = type;
        this.m_library = library;
    }

    GetType() {
        return this.m_type;
    }

    IsSupported = () => {
        return this.m_info && this.m_info.supported;
    };

    IsLoaded = () => {
        return this.m_info && this.m_info.loaded;
    };

    IsLoading = () => {
        return this.m_loading;
    };

    IsEventsRegistered = () => {
        return this.m_eventsRegistered;
    };

    SetEventsRegistered = () => {
        this.m_eventsRegistered = true;
    };

    GetLibrary = () => {
        return this.m_library;
    };

    GetInfo = () => {
        return this.m_info;
    };

    Load = (callback: any) => {
        this.m_loading = true;
        return new Promise<void>((resolve, reject) => {
            this.m_library
                .AddEventListener(EndUserEventType.All, callback)
                .then(() => {
                    return this.m_library.GetLibraryInfo(/* LIBRARY_SETTINGS.downloadsURL */);
                })
                .then(libInfo => {
                    this.m_loading = false;
                    this.m_info = libInfo;
                    resolve();
                })
                .catch(error => {
                    this.m_loading = false;
                    reject(error);
                });
        });
    };
}
