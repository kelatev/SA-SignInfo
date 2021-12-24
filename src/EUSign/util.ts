import {EndUserLibraryLoader, EUSignCP} from "./eusw";

/* Налаштування серверів АЦСК */
import CAs from './data/CAs.json';

/* Масив з шляхом до кореневих сертификатів ЦЗО та ЦСК */
const CACerts = [
    require('./data/CACertificates.p7b')
];

interface CASettingsInterface {
    address: string
    ocspAccessPointAddress: string
    cmpAddress: string
    tspAddress: string
    tspAddressPort: string
}

const CADefaultSettings: CASettingsInterface | null = null;

/* Ініціалізація налаштувань криптографічної бібліотеки */
function SetSettings(euSign: EUSignCP, CAs: any[], CASettings: CASettingsInterface | null) {
    let offline = false;
    let useOCSP = false;
    let useCMP = false;

    offline = CASettings == null || CASettings.address === '';
    useOCSP = (!offline && (CASettings && CASettings.ocspAccessPointAddress !== '')) || false;
    useCMP = (!offline && (CASettings && CASettings.cmpAddress !== '')) || false;

    // @ts-ignore
    euSign.SetJavaStringCompliant(true);

    let settings1 = euSign.CreateFileStoreSettings();
    // @ts-ignore
    settings1.SetPath('');
    // @ts-ignore
    settings1.SetSaveLoadedCerts(false);
    euSign.SetFileStoreSettings(settings1);

    let settings2 = euSign.CreateModeSettings();
    // @ts-ignore
    settings2.SetOfflineMode(offline);
    euSign.SetModeSettings(settings2);

    let settings3 = euSign.CreateProxySettings();
    euSign.SetProxySettings(settings3);

    let settings4 = euSign.CreateTSPSettings();
    // @ts-ignore
    settings4.SetGetStamps(!offline);
    if (!offline) {
        if (CASettings && CASettings.tspAddress !== '') {
            // @ts-ignore
            settings4.SetAddress(CASettings.tspAddress);
            // @ts-ignore
            settings4.SetPort(CASettings.tspAddressPort);
        } else if (CADefaultSettings) {
            // @ts-ignore
            settings4.SetAddress(CADefaultSettings.tspAddress);
            // @ts-ignore
            settings4.SetPort(CADefaultSettings.tspAddressPort);
        }
    }
    euSign.SetTSPSettings(settings4);

    let settings5 = euSign.CreateOCSPSettings();
    if (useOCSP) {
        // @ts-ignore
        settings5.SetUseOCSP(true);
        // @ts-ignore
        settings5.SetBeforeStore(true);
        // @ts-ignore
        if(CASettings) settings5.SetAddress(CASettings.ocspAccessPointAddress);
        // @ts-ignore
        if(CASettings) settings5.SetPort(CASettings.ocspAccessPointPort);
    }
    euSign.SetOCSPSettings(settings5);

    let settings6 = euSign.CreateOCSPAccessInfoModeSettings();
    // @ts-ignore
    settings6.SetEnabled(true);
    euSign.SetOCSPAccessInfoModeSettings(settings6);
    let settings7 = euSign.CreateOCSPAccessInfoSettings();
    for (let i = 0; i < CAs.length; i++) {
        // @ts-ignore
        settings7.SetAddress(CAs[i].ocspAccessPointAddress);
        // @ts-ignore
        settings7.SetPort(CAs[i].ocspAccessPointPort);

        for (let j = 0; j < CAs[i].issuerCNs.length; j++) {
            // @ts-ignore
            settings7.SetIssuerCN(CAs[i].issuerCNs[j]);
            euSign.SetOCSPAccessInfoSettings(settings7);
        }
    }

    let settings8 = euSign.CreateCMPSettings();
    // @ts-ignore
    settings8.SetUseCMP(useCMP);
    if (useCMP) {
        // @ts-ignore
        if (CASettings) settings8.SetAddress(CASettings.cmpAddress);
        // @ts-ignore
        settings8.SetPort('80');
    }
    euSign.SetCMPSettings(settings8);

    let settings9 = euSign.CreateLDAPSettings();
    euSign.SetLDAPSettings(settings9);
}

/* Імпорт сертифікатів до сховища криптографічної бібліотеки */
function LoadCertificates(euSign: EUSignCP, certsFiles: any[]) {
    if (!certsFiles) {
        return;
    }

    for (let i = 0; i < certsFiles.length; i++) {
        const data = new Uint8Array(certsFiles[i]);
        //if (path.substr(path.length - 3) == 'p7b') {
        euSign.SaveCertificates(data);
        /*} else {
            euSign.SaveCertificate(data);
        }*/
    }
}

function DoesNeedSetSettings(euSign: EUSignCP): void {
    if (euSign.DoesNeedSetSettings()) {

        /* Отримання налаштувань АЦСК для ос. ключа */
        const CASettings = null;

        /* Встановлення параметрів за замовчанням */
        SetSettings(euSign, CAs, CASettings);

        /* Завантаження сертифікатів ЦСК */
        LoadCertificates(euSign, CACerts);
    }
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
