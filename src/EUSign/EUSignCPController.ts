export default class EUSignCPController {
    m_type: any;
    m_library: any;
    m_info: { supported: boolean, loaded: boolean } | null = null;
    m_loading = false;
    m_eventsRegistered = false;

    constructor(c: any) {
        this.m_type = c;
        //this.m_library = new r.EndUser(null, c);
    }

    GetType() {
        return this.m_type;
    }

    IsSupported = () => {
        return this.m_info && this.m_info.supported
    }

    IsLoaded = () => {
        return this.m_info && this.m_info.loaded
    }

    IsLoading = () => {
        return this.m_loading
    }

    IsEventsRegistered = () => {
        return this.m_eventsRegistered
    }

    SetEventsRegistered = () => {
        this.m_eventsRegistered = true
    }

    GetLibrary = () => {
        return this.m_library
    }

    GetInfo = () => {
        return this.m_info
    }

    Load = (c: any) => {
        this.m_loading = true;
        /*return new Promise<void>((resolve, reject) => {
            this.m_library.AddEventListener(r.EndUserConstants.EndUserEventType.All, c)
                .then(() => {
                    return this.m_library.GetLibraryInfo(LIBRARY_SETTINGS.downloadsURL)
                })
                .then((libInfo: any) => {
                    this.m_loading = false;
                    this.m_info = libInfo;
                    resolve();
                })
                .catch((error: any) => {
                    this.m_loading = false;
                    reject(error)
                })
        })*/
    }
}
