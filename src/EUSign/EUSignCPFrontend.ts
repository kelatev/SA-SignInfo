import EUSignCPPromise from "./EUSignCPPromise";
import {EndUserLibraryLoader, EUSignCP} from "./eusw";

export default class EUSignCPFrontend extends EUSignCPPromise {
    CAs: any[] | undefined;
    m_context: any;

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
                this.CAs = json;
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
                        this.euSign.SaveCertificates(arrayBuffer);
                    } else {
                        this.euSign.SaveCertificate(arrayBuffer);
                    }
                })
        }
    }

    setSettings(): void {
        this.SetRuntimeParameter(this.euSign.EU_SAVE_SETTINGS_PARAMETER, this.euSign.EU_SETTINGS_ID_NONE).then(r => {
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

        if (this.CAs) {
            let settings7 = this.CreateOCSPAccessInfoSettings();
            for (let i = 0; i < this.CAs.length; i++) {
                settings7.SetAddress(this.CAs[i].ocspAccessPointAddress);
                settings7.SetPort(this.CAs[i].ocspAccessPointPort);

                for (let j = 0; j < this.CAs[i].issuerCNs.length; j++) {
                    settings7.SetIssuerCN(this.CAs[i].issuerCNs[j]);
                    this.SetOCSPAccessInfoSettings(settings7).then(r => {
                    });
                }
            }
        }

        let settings9 = this.CreateLDAPSettings();
        this.SetLDAPSettings(settings9).then(r => {});

        this.SetRuntimeParameter(this.euSign.EU_RESOLVE_OIDS_PARAMETER, 0).then(r => {});
    }
}
