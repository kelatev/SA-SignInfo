import EUSignCPPromise from "./EUSignCPPromise";
import {EndUserLibraryLoader, EUSignCP} from "./eusw";

export default class EUSignCPFrontend extends EUSignCPPromise {
    static loadLibrary(withLog: boolean = false): Promise<EUSignCPFrontend> {
        return new Promise((resolve, reject) => {
            if (withLog) console.log("Load library...");

            const loader = new EndUserLibraryLoader(EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT, "euSign");

            loader.onload = function (library: EUSignCP) {
                if (withLog) console.log("Library loaded");
                resolve(new EUSignCPFrontend(library));
            };
            loader.onerror = function (msg) {
                if (withLog) console.log("Library load failed. Error - " + msg);
                reject(msg);
            };

            loader.load();
        });
    }

    initializeLibrary(serverUrl: string, certificateUrl: string[], withLog: boolean = false): Promise<EUSignCPFrontend> {
        return new Promise((resolve, reject) => {
            if (withLog) console.log("Initialize library...");

            this
                .SetUIMode(false)
                .then(() => this.Initialize())
                .then(() => this.SetUIMode(false))
                .then(() => this.InitializeMandatorySettings())
                .then(() => this.loadServers(serverUrl))
                .then(() => this.setSettings())
                .then(() => this.loadCertificates(certificateUrl))
                .then(() => {
                    if (withLog) console.log("Library initialized");
                    resolve(this);
                })
                .catch((e: any) => {
                    if (withLog) console.log("Initialize library failed. Error - " + e);
                    reject(e);
                })
        });
    }

    loadServers(serverFilePath: string) {
        if (!serverFilePath) {
            return;
        }

        fetch(serverFilePath)
            .then((response) => response.json())
            .then((json) => {
                this.m_settings.CAs = json;
            })
    }

    loadCertificates(certsFilePathes: string[]) {
        if (!certsFilePathes) {
            return;
        }

        for (let i = 0; i < certsFilePathes.length; i++) {
            const path = certsFilePathes[i];
            fetch(path)
                .then((response) => response.blob())
                .then((blob) => blob.arrayBuffer())
                .then((arrayBuffer) => {
                    if (path.substring(path.length - 3) === 'p7b') {
                        this.m_library.SaveCertificates(arrayBuffer);
                    } else {
                        this.m_library.SaveCertificate(arrayBuffer);
                    }
                })
        }
    }

    setSettings(): void {
        this.SetRuntimeParameter(this.m_library.EU_SAVE_SETTINGS_PARAMETER, this.m_library.EU_SETTINGS_ID_NONE).then(r => {
        });

        let settings1 = this.CreateFileStoreSettings();
        settings1.SetPath("");
        settings1.SetSaveLoadedCerts(true);
        this.SetFileStoreSettings(settings1).then(r => {
        });

        let settings2 = this.CreateModeSettings();
        settings2.SetOfflineMode(false);
        this.SetModeSettings(settings2).then(r => {
        });

        let settings6 = this.CreateOCSPAccessInfoModeSettings();
        settings6.SetEnabled(true);
        this.SetOCSPAccessInfoModeSettings(settings6).then(r => {
        });

        if (this.m_settings.CAs) {
            let settings7 = this.CreateOCSPAccessInfoSettings();
            for (let i = 0; i < this.m_settings.CAs.length; i++) {
                settings7.SetAddress(this.m_settings.CAs[i].ocspAccessPointAddress);
                settings7.SetPort(this.m_settings.CAs[i].ocspAccessPointPort);

                for (let j = 0; j < this.m_settings.CAs[i].issuerCNs.length; j++) {
                    settings7.SetIssuerCN(this.m_settings.CAs[i].issuerCNs[j]);
                    this.SetOCSPAccessInfoSettings(settings7).then(r => {
                    });
                }
            }
        }

        let settings9 = this.CreateLDAPSettings();
        this.SetLDAPSettings(settings9).then(r => {});

        this.SetRuntimeParameter(this.m_library.EU_RESOLVE_OIDS_PARAMETER, 0).then(r => {});
    }
}
