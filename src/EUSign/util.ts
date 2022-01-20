import {EndUserLibraryLoader, EUSignCP} from "./eusw";
import {
    EndUserCMPSettings,
    EndUserFileStoreSettings, EndUserLDAPSettings,
    EndUserModeSettings,
    EndUserOCSPAccessInfoModeSettings, EndUserOCSPAccessInfoSettings,
    EndUserOCSPSettings,
    EndUserTSPSettings
} from "./types";

/* Налаштування серверів АЦСК */
import CAs from './data/CAs.json';

/* Масив з шляхом до кореневих сертификатів ЦЗО та ЦСК */
const CACerts = [
    require('./data/CACertificates.p7b')
];

interface CASettingsInterface {
    address: string
    ocspAccessPointAddress: string
    ocspAccessPointPort: string
    cmpAddress: string
    tspAddress: string
    tspAddressPort: string
}

const CADefaultSettings: CASettingsInterface | null = null;

/* Ініціалізація налаштувань криптографічної бібліотеки */
function SetSettings(euSign: EUSignCP, CAs: any[], CASettings: CASettingsInterface | null) {
    let offline = true;
    let useOCSP = false;
    let useCMP = false;

    offline = CASettings == null || CASettings.address === '';
    useOCSP = (!offline && (CASettings && CASettings.ocspAccessPointAddress !== '')) || false;
    useCMP = (!offline && (CASettings && CASettings.cmpAddress !== '')) || false;

    //euSign.SetJavaStringCompliant(true);
    euSign.SetRuntimeParameter(euSign.EU_SAVE_SETTINGS_PARAMETER, euSign.EU_SETTINGS_ID_NONE);

    // @ts-ignore
    let settings1: EndUserFileStoreSettings = euSign.CreateFileStoreSettings();
    //settings1.SetPath('');
    //settings1.SetSaveLoadedCerts(false);
    /*if (!settings1.GetPath()) {
        settings1.SetPath('C:\\MasterD\\MD-Declaration\\EC_EXCHANGE\\Certificates');
    }*/
    settings1.SetPath("");
    settings1.SetAutoRefresh(true);
    settings1.SetSaveLoadedCerts(true);
    settings1.SetExpireTime(3600);
    settings1.SetCheckCRLs(false);
    settings1.SetOwnCRLsOnly(false);
    settings1.SetAutoDownloadCRLs(false);
    settings1.SetFullAndDeltaCRLs(false);
    euSign.SetFileStoreSettings(settings1);

    // @ts-ignore
    let settings2: EndUserModeSettings = euSign.CreateModeSettings();
    settings2.SetOfflineMode(offline);
    euSign.SetModeSettings(settings2);

    let settings3 = euSign.CreateProxySettings();
    euSign.SetProxySettings(settings3);

    // @ts-ignore
    let settings4: EndUserTSPSettings = euSign.CreateTSPSettings();
    settings4.SetGetStamps(!offline);
    if (!offline) {
        if (CASettings && CASettings.tspAddress !== '') {
            settings4.SetAddress(CASettings.tspAddress);
            settings4.SetPort(CASettings.tspAddressPort);
        } else if (CADefaultSettings) {
            settings4.SetAddress(CADefaultSettings.tspAddress);
            settings4.SetPort(CADefaultSettings.tspAddressPort);
        }
    }
    euSign.SetTSPSettings(settings4);

    // @ts-ignore
    let settings5: EndUserOCSPSettings = euSign.CreateOCSPSettings();
    if (useOCSP) {
        settings5.SetUseOCSP(true);
        settings5.SetBeforeStore(true);
        if (CASettings) settings5.SetAddress(CASettings.ocspAccessPointAddress);
        if (CASettings) settings5.SetPort(CASettings.ocspAccessPointPort);
    }
    euSign.SetOCSPSettings(settings5);

    // @ts-ignore
    let settings6: EndUserOCSPAccessInfoModeSettings = euSign.CreateOCSPAccessInfoModeSettings();
    settings6.SetEnabled(true);
    euSign.SetOCSPAccessInfoModeSettings(settings6);

    // @ts-ignore
    let settings7: EndUserOCSPAccessInfoSettings = euSign.CreateOCSPAccessInfoSettings();
    for (let i = 0; i < CAs.length; i++) {
        settings7.SetAddress(CAs[i].ocspAccessPointAddress);
        settings7.SetPort(CAs[i].ocspAccessPointPort);

        for (let j = 0; j < CAs[i].issuerCNs.length; j++) {
            settings7.SetIssuerCN(CAs[i].issuerCNs[j]);
            euSign.SetOCSPAccessInfoSettings(settings7);
        }
    }

    // @ts-ignore
    let settings8: EndUserCMPSettings = euSign.CreateCMPSettings();
    settings8.SetUseCMP(useCMP);
    if (useCMP) {
        if (CASettings) settings8.SetAddress(CASettings.cmpAddress);
        settings8.SetPort('80');
    }
    euSign.SetCMPSettings(settings8);

    // @ts-ignore
    let settings9: EndUserLDAPSettings = euSign.CreateLDAPSettings();
    euSign.SetLDAPSettings(settings9);
}

/* Імпорт сертифікатів до сховища криптографічної бібліотеки */
function LoadCertificates(euSign: EUSignCP, certsFilePathes: any[]) {
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
                    euSign.SaveCertificates(arrayBuffer);
                } else {
                    euSign.SaveCertificate(arrayBuffer);
                }
            })
    }
}

function DoesNeedSetSettings(euSign: EUSignCP): void {
    //if (euSign.DoesNeedSetSettings()) {

    /* Отримання налаштувань АЦСК для ос. ключа */
    const CASettings = null;

    /* Встановлення параметрів за замовчанням */
    SetSettings(euSign, CAs, CASettings);

    /* Завантаження сертифікатів ЦСК */
    LoadCertificates(euSign, CACerts);
    //}
}

export function loadCryptoLibrary(): Promise<EUSignCP> {
    return new Promise((resolve, reject) => {
        //console.log("Load library...");

        const loader = new EndUserLibraryLoader(EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT, "euSign");

        loader.onload = function (library: EUSignCP) {
            //console.log("Libary loaded");
            resolve(library);
        };
        loader.onerror = function (msg, errorCode, libraryOrNull) {
            //console.log("Libary load failed. Error - " + msg);
            reject(msg);
        };

        loader.load();
    });
}

export function initializeCryptoLibrary(euSign: EUSignCP): Promise<EUSignCP> {
    return new Promise((resolve, reject) => {
        //console.log("Initialize library...");

        new Promise((resolve1) => {
            euSign.SetUIMode(false, resolve1, reject);
        })
            .then(() => new Promise((resolve1) => {
                euSign.Initialize(resolve1, reject);
            }))
            .then(() => new Promise((resolve1) => {
                euSign.SetUIMode(false, resolve1, reject);
            }))
            .then(() => {
                //console.log("Library initialized");
                DoesNeedSetSettings(euSign);
                resolve(euSign);
            })
            .catch((e) => {
                //console.log("Initialize library failed. Error - " + e);

                reject(e);
            })
    });
}
