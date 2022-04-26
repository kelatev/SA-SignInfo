import {EUSignCP, EndUserArrayList, EndUserLibraryLoader, EndUserError} from "./eusw";

import {
    EndUserCertificate,
    EndUserCertificateInfo,
    EndUserCertificateInfoEx,
    EndUserCMPSettings,
    EndUserFileStoreSettings,
    EndUserJKSPrivateKey,
    EndUserKeyMedia,
    EndUserKeyMediaSettings,
    EndUserLDAPSettings,
    EndUserModeSettings,
    EndUserOCSPAccessInfoModeSettings,
    EndUserOCSPAccessInfoSettings,
    EndUserOCSPSettings, EndUserOwnerInfo,
    EndUserPrivateKeyInfo,
    EndUserTimeInfo,
    EndUserTSPSettings
} from "./types";

export default class EUSignCPCore {
    m_library!: EUSignCP;
    m_language = 0;

    Load(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this.m_library == null) {
                const loader = new EndUserLibraryLoader(EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT, "euSign", this.m_language, true, true);
                loader.onload = (library) => {
                    this.m_library = library;
                    resolve()
                };
                loader.onerror = (msg, errorCode, libraryOrNull) => {
                    if (null == libraryOrNull) {
                        libraryOrNull = new EUSignCP("", "")
                    }
                    reject(libraryOrNull.MakeError(errorCode, ""))
                };
                loader.load()
            } else {
                resolve()
            }
        })
    }

    GetVersion(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.GetVersion(resolve, reject);
        })
    }

    // Перевірка стану бібліотеки. Повертається інформація про стан бібліотеки
    IsInitialized(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsInitialized(resolve, reject);
        })
    }

    // Ініціалізація бібліотеки
    Initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.Initialize(resolve, reject);
        })
    }

    // Завершення роботи з бібліотекою
    Finalize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.Finalize(resolve, reject);
        })
    }

    // Передчасне завершення процедур ітеративного формування або перевірки
    // зовнішнього ЕЦП. Функція повинна викликатися у разі виникнення помилок під
    // час виконання процедур ітеративного формування або перевірки зовнішнього
    // ЕЦП
    ResetOperation(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ResetOperation(resolve, reject);
        })
    }

    //А.5.1.3 Функції отримання та встановлення параметрів роботи бібліотеки

    /*Встановлення режиму використання графічного інтерфейсу у разі виникнення помилок*/
    SetUIMode(uiMode: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetUIMode(uiMode, resolve, reject);
        })
    }

    // Встановлює мову, якою повертаються локалізовані повідомлення про помилки.
    // За замовчуванням опис помилок повертається українською мовою
    SetLanguage(language: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetLanguage(language, resolve, reject);
        })
    }

    // Встановлення, в якому вигляді подаються строкові дані для операцій підпису,
    // шифрування, гешування і т.д. Можливі значення "UTF-16LE", "UTF-8". За
    // замовчуванням використовується "UTF-8"
    SetCharset(charset: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetCharset(charset, resolve, reject);
        })
    }

    // Функція конфігурації параметрів роботи криптографічної бібліотеки
    SetRuntimeParameter(name: string, value: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetRuntimeParameter(name, value, resolve, reject);
        })
    }

    // Отримання параметру з сховища параметрів
    GetStorageParameter(protect: boolean, name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.GetStorageParameter(protect, name, resolve, reject);
        })
    }

    // Запис параметру до сховища параметрів
    SetStorageParameter(protect: boolean, name: string, value: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetStorageParameter(protect, name, value, resolve, reject);
        })
    }

    BASE64Encode(data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.BASE64Encode(data, resolve, reject);
        })
    }

    BASE64Decode(data: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.BASE64Decode(data, resolve, reject);
        })
    }

    StringToBytes(data: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.StringToBytes(data, resolve, reject);
        })
    }

    BytesToString(data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.BytesToString(data, resolve, reject);
        })
    }

    // Отримання признаку необхідності встановлення параметрів роботи бібліотеки.
    // Повертається признак необхідності встановлення параметрів роботи бібліотеки
    DoesNeedSetSettings(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.DoesNeedSetSettings(resolve, reject);
        })
    }

    InitializeMandatorySettings(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.InitializeMandatorySettings(resolve, reject);
        })
    }

    // Створення інформації про параметри взаємодії з ЦСК. Повертається інформація
    // про параметри взаємодії з ЦСК з встановленими за замовчанням значеннями
    CreateModeSettings(): EndUserModeSettings {
        return this.m_library.CreateModeSettings() as unknown as EndUserModeSettings;
    }

    // Отримання параметрів взаємодії з серверами ЦСК. Повертається інформація про
    // параметри взаємодії з ЦСК
    GetModeSettings(): Promise<EndUserModeSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetModeSettings(resolve, reject);
        })
    }

    // Встановлення параметрів взаємодії з серверами ЦСК
    SetModeSettings(settings: EndUserModeSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetModeSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами НКІ. Повертається інформація про
    // параметри НКІ з встановленими за замовчанням значеннями
    CreateKeyMediaSettings(): EndUserKeyMediaSettings {
        return this.m_library.CreateKeyMediaSettings() as unknown as EndUserKeyMediaSettings;
    }

    // Отримання параметрів НКІ без допомоги графічного інтерфейсу. Повертається
    // інформацію про параметри НКІ
    GetKeyMediaSettings(): Promise<EndUserKeyMediaSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyMediaSettings(resolve, reject);
        })
    }

    // Встановлення параметрів НКІ без допомоги графічного інтерфейсу
    SetKeyMediaSettings(settings: EndUserKeyMediaSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetKeyMediaSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами файлового сховища (див.
    // табл. 3.1). Повертається інформацію про параметри файлового сховища з
    // встановленими за замовчанням значеннями
    CreateFileStoreSettings(): EndUserFileStoreSettings {
        return this.m_library.CreateFileStoreSettings() as unknown as EndUserFileStoreSettings;
    }

    // Отримання параметрів файлового сховища (див. табл. 3.1). Повертається
    // інформація про параметри файлового сховища
    GetFileStoreSettings(): Promise<EndUserFileStoreSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetFileStoreSettings(resolve, reject);
        })
    }

    // Встановлення параметрів файлового сховища
    SetFileStoreSettings(settings: EndUserFileStoreSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetFileStoreSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами OCSP-сервера (див. табл. 3.1).
    // Повертається інформація про параметри OCSP-сервера з встановленими за
    // замовчанням значеннями
    CreateOCSPSettings(): EndUserOCSPSettings {
        return this.m_library.CreateOCSPSettings() as unknown as EndUserOCSPSettings;
    }

    // Отримання параметрів OCSP-сервера (див. табл. 3.1). Повертається інформація
    // про параметри OCSP-сервера
    GetOCSPSettings(): Promise<EndUserOCSPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetOCSPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів OCSP-сервера
    SetOCSPSettings(settings: EndUserOCSPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetOCSPSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами використання точок доступу до
    // OCSP-серверів (див. табл. 3.3). Повертається інформація про параметрами
    // використання точок доступу до OCSP-серверів з встановленими за замовчанням
    // значеннями
    CreateOCSPAccessInfoModeSettings(): EndUserOCSPAccessInfoModeSettings {
        return this.m_library.CreateOCSPAccessInfoModeSettings() as unknown as EndUserOCSPAccessInfoModeSettings;
    }

    // Отримання інформації, щодо використання точок доступу до OCSP-серверів
    // (див. табл. 3.3). Повертається інформація про параметрами використання
    // точок доступу до OCSP-серверів
    GetOCSPAccessInfoModeSettings(): Promise<EndUserOCSPAccessInfoModeSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetOCSPAccessInfoModeSettings(resolve, reject);
        })
    }

    // Встановлення інформації, щодо використання точок доступу до OCSP-серверів
    SetOCSPAccessInfoModeSettings(settings: EndUserOCSPAccessInfoModeSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetOCSPAccessInfoModeSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами точки доступу до OCSP-серверу
    // (див. табл. 3.3). Повертається інформація про параметри точки доступу до
    // OCSP-серверу з встановленими за замовчанням значеннями
    CreateOCSPAccessInfoSettings(): EndUserOCSPAccessInfoSettings {
        return this.m_library.CreateOCSPAccessInfoSettings() as unknown as EndUserOCSPAccessInfoSettings;
    }

    // Видалення параметрів доступу до серверу OCSP за ім’ям ЦСК
    DeleteOCSPAccessInfoSettings(issuerCN: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.DeleteOCSPAccessInfoSettings(issuerCN, resolve, reject);
        })
    }

    // Отримання інформації, щодо точки доступу до OCSP-серверу (див. табл. 3.3) за
    // ім’ям ЦСК. Повертається інформація про точку доступу до OCSP-серверу
    GetOCSPAccessInfoSettings(issuerCN: string): Promise<EndUserOCSPAccessInfoSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetOCSPAccessInfoSettings(issuerCN, resolve, reject);
        })
    }

    // Встановлення інформації, щодо використання точки доступу до OCSP-серверу
    SetOCSPAccessInfoSettings(settings: EndUserOCSPAccessInfoSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetOCSPAccessInfoSettings(settings, resolve, reject);
        })
    }

    // Перелічення точок доступу до OCSP-серверів ЦСК. Повертається інформація про
    // параметри точки доступу до OCSP-серверу або null, якщо перелік
    // закінчено
    EnumOCSPAccessInfoSettings(index: number): Promise<EndUserOCSPAccessInfoSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumOCSPAccessInfoSettings(index, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами TSP-сервера (див. табл. 3.1).
    // Повертається інформацію про параметри TSP-сервера з встановленими за
    // замовчанням значеннями
    CreateTSPSettings(): EndUserTSPSettings {
        return this.m_library.CreateTSPSettings() as unknown as EndUserTSPSettings;
    }

    // Отримання параметрів TSP-сервера (див. табл. 3.1). Повертається інформація
    // про параметри TSP-сервера
    GetTSPSettings(): Promise<EndUserTSPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetTSPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів TSP-сервера
    SetTSPSettings(settings: EndUserTSPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetTSPSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами LDAP-сервера (див. табл. 3.1).
    // Повертається інформація про параметри LDAP-сервера з встановленими за
    // замовчанням значеннями
    CreateLDAPSettings(): EndUserLDAPSettings {
        return this.m_library.CreateLDAPSettings() as unknown as EndUserLDAPSettings;
    }

    // Отримання параметрів LDAP-сервера (див. табл. 3.1). Повертається інформація
    // про параметри LDAP-сервера
    GetLDAPSettings(): Promise<EndUserLDAPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetLDAPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів LDAP-сервера
    SetLDAPSettings(settings: EndUserLDAPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetLDAPSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами CMP-сервера (див. табл. 3.1).
    // Повертається інформацію про параметри CMP-сервера з встановленими за
    // замовчанням значеннями
    CreateCMPSettings(): EndUserCMPSettings {
        return this.m_library.CreateCMPSettings() as unknown as EndUserCMPSettings;
    }

    // Отримання параметрів CMP-сервера (див. табл. 3.1). Повертаєтьяс інформацію
    // про параметри CMP-сервера
    GetCMPSettings(): Promise<EndUserCMPSettings> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCMPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів CMP-сервера
    SetCMPSettings(settings: EndUserCMPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetCMPSettings(settings, resolve, reject);
        })
    }

    // Встановлення параметрів роботи з бібліотекою (див. дод. Е.1)
    SetSettings(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SetSettings(resolve, reject);
        })
    }

    // Відображення сертифікатів з файлового сховища (див. дод. Е.2)
    ShowCertificates(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ShowCertificates(resolve, reject);
        })
    }


    //А.5.1.4 Функції роботи з сховищем сертифікатів та СВС

    RefreshFileStore(reload: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.RefreshFileStore(reload, resolve, reject);
        })
    }

    SelectCertificateInfo(): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.SelectCertificateInfo(resolve, reject);
        })
    }

    GetCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificatesCount(resolve, reject);
        })
    }

    GetCertificatesCount2(subjectType: number, SubjectSubType: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificatesCount(subjectType, SubjectSubType, resolve, reject);
        })
    }

    EnumCertificates(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumCertificates(certificateIndex, resolve, reject);
        })
    }

    EnumCertificates2(subjectType: number, SubjectSubType: number, certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumCertificates(subjectType, SubjectSubType, certificateIndex, resolve, reject);
        })
    }

    GetCertificateInfo(issuer: string, serial: string): Promise<EndUserCertificateInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificateInfo(issuer, serial, resolve, reject);
        })
    }

    GetCertificateInfoEx(issuer: string, serial: string): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificateInfoEx(issuer, serial, resolve, reject);
        })
    }

    /*Отримання сертифікату з файлового сховища. Повертається сертифікат у вигляді масиву байт*/
    GetCertificate(issuer: string, serial: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificate(issuer, serial, resolve, reject);
        })
    }

    /* Визначення статусу сертифіката. */
    CheckCertificate(certificate: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.CheckCertificate(certificate, resolve, reject);
        })
    }

    /* Перевірка та отримання сертифіката за інформацією про ЦСК та серійним номером */
    CheckCertificateByIssuerAndSerial(issuer: string, serial: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.CheckCertificateByIssuerAndSerial(issuer, serial, resolve, reject);
        })
    }

    // Отримання розширеної детальної інформації про сертифікат.
    ParseCertificate(certificate: Uint8Array): Promise<EndUserCertificateInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.ParseCertificate(certificate, resolve, reject);
        })
    }

    // Отримання розширеної детальної інформації про сертифікат.
    ParseCertificateEx(certificate: Uint8Array): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library.ParseCertificateEx(certificate, resolve, reject);
        })
    }

    // Збереження сертифікату до файлового сховища
    SaveCertificate(certificate: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SaveCertificate(certificate, resolve, reject);
        })
    }

    // Збереження списку сертифікатів в форматі P7B до файлового сховища
    SaveCertificates(certificate: Uint8Array): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.SaveCertificates(certificate, resolve, reject);
        })
    }

    ShowOwnCertificate(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ShowOwnCertificate(resolve, reject);
        })
    }

    EnumOwnCertificates(index: number): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumOwnCertificates(index, resolve, reject);
        })
    }

    /*Отримання сертифікату особистого ключа. Повертається сертифікат у  вигляді масиву байт*/
    GetOwnCertificate(): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetOwnCertificate(resolve, reject);
        })
    }

    /*Отримання сертифікату особистого ключа. Повертається сертифікат у  вигляді масиву байт*/
    GetOwnCertificate2(certKeyType: number, keyUsage: number): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetOwnCertificate(certKeyType, keyUsage, resolve, reject);
        })
    }

    // Отримання ланцюжку сертифікатів з CMP-серверу за інформацією про відкритий
    // ключ(і) користувача. Налаштування proxy-серверу беруться з налаштувань
    // бібліотеки. Завантажений ланцюжок не додається в файлове сховище.
    // Повертається ланцюжок сертифікатів у вигляді масиву байт
    GetCertificateByKeyInfo(keyInfo: Uint8Array): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificateByKeyInfo(keyInfo, resolve, reject);
        })
    }

    // Отримання ланцюжку сертифікатів з CMP-серверів за інформацією про відкритий
    // ключ(і) користувача. Налаштування proxy-серверу беруться з налаштувань
    // бібліотеки. Завантажений ланцюжок не додається в файлове сховище.
    // Повертається ланцюжок сертифікатів у вигляді масиву байт
    GetCertificatesByKeyInfo(keyInfo: EndUserPrivateKeyInfo, cmpServers: string[], cmpServersPorts: string[]): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificatesByKeyInfo(keyInfo, cmpServers, cmpServersPorts, resolve, reject);
        })
    }

    GetCertificatesFromLDAPByEDRPOUCode(edrpouCode: string, certKeyType: number, certKeyUsage: number, ldapServers: string[]): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificatesFromLDAPByEDRPOUCode(edrpouCode, certKeyType, certKeyUsage, ldapServers, resolve, reject);
        })
    }

    GetCertificates(subjectType: number, subjectSubType: number): Promise<EndUserCertificate[]> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificates(subjectType, subjectSubType, resolve, reject);
        })
    }

    GetCertificateByFingerprint(fingerprint: string): Promise<EndUserCertificate> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificateByFingerprint(fingerprint, resolve, reject);
        })
    }

    GetCertificatesByEDRPOUAndDRFOCode(edrpouCode: string, drfoCode: string): Promise<EndUserCertificate[]> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificatesByEDRPOUAndDRFOCode(edrpouCode, drfoCode, resolve, reject);
        })
    }

    GetCACertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCACertificatesCount(resolve, reject);
        })
    }

    GetCAServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCAServerCertificatesCount(resolve, reject);
        })
    }

    GetCMPServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCMPServerCertificatesCount(resolve, reject);
        })
    }

    GetOCSPServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetOCSPServerCertificatesCount(resolve, reject);
        })
    }

    GetTSPServerCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetTSPServerCertificatesCount(resolve, reject);
        })
    }

    GetRAAdministratorCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetRAAdministratorCertificatesCount(resolve, reject);
        })
    }

    GetEndUserCertificatesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetEndUserCertificatesCount(resolve, reject);
        })
    }

    EnumCACertificates(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumCACertificates(certificateIndex, resolve, reject);
        })
    }

    EnumCAServerCertificates(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumCAServerCertificates(certificateIndex, resolve, reject);
        })
    }

    EnumCMPServerCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumCMPServerCertificatesCount(certificateIndex, resolve, reject);
        })
    }

    EnumOCSPServerCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumOCSPServerCertificatesCount(certificateIndex, resolve, reject);
        })
    }

    EnumTSPServerCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumTSPServerCertificatesCount(certificateIndex, resolve, reject);
        })
    }

    EnumRAAdministratorCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumRAAdministratorCertificatesCount(certificateIndex, resolve, reject);
        })
    }

    EnumEndUserCertificatesCount(certificateIndex: number): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumEndUserCertificatesCount(certificateIndex, resolve, reject);
        })
    }

    //А.5.1.5 Функції роботи з особистим ключем та носієм ключової інформації

    /*Створення порожнього об`єкту з інформацією про НКІ. Повертається інформація
    * про НКІ з встановленими за замовчанням значеннями
    */
    CreateKeyMedia(): EndUserKeyMedia {
        return this.m_library.CreateKeyMedia() as unknown as EndUserKeyMedia;
    }

    // Зчитування параметрів особистого ключа. Повертається
    // інформація з параметрами особистого ключа
    GetPrivateKeyMedia(caption: string): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.m_library.GetPrivateKeyMedia(caption, resolve, reject);
        })
    }

    // Перелічення доступних типів НКІ. Повертається опис типу НКІ або порожня
    // строка у разі, якщо більше немає доступних типів
    EnumKeyMediaTypes(typeIndex: number): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumKeyMediaTypes(typeIndex, resolve, reject);
        })
    }

    // Перелічення доступних НКІ заданого типу. Повертається опис НКІ або порожня
    // строка у разі, якщо більше немає доступних НКІ
    EnumKeyMediaDevices(typeIndex: number, deviceIndex: number): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumKeyMediaDevices(typeIndex, deviceIndex, resolve, reject);
        })
    }

    // Отримання списку доступних типів НКІ. Повертається масив, що містить опис
    // типів НКІ
    GetKeyMediaTypes(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyMediaTypes(resolve, reject);
        })
    }

    // Отримання доступних НКІ для заданих типів. Повертається масив з масивів з
    // описами НКІ
    GetKeyMediaDevices(typeIndexes: number[]): Promise<string[][]> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyMediaDevices(typeIndexes, resolve, reject);
        })
    }

    // Отримання інформації чи зчитаний особистий ключ. Повертається true, якщо
    // особистий ключ зчитаний
    IsPrivateKeyReaded(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsPrivateKeyReaded(resolve, reject);
        })
    }

    // Зчитування особистого ключа (див. дод. Е.3)
    ReadPrivateKey(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ReadPrivateKey(resolve, reject);
        })
    }

    // Зчитування особистого ключа за параметрами особистого ключа без використання
    // графічного інтерфейсу
    ReadPrivateKeySilently(keyMedia: EndUserKeyMedia): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ReadPrivateKeySilently(keyMedia, resolve, reject);
        })
    }

    // Зчитування особистого ключа за параметрами особистого ключа без використання
    // графічного інтерфейсу
    ReadPrivateKeySilently2(typeIndex: number, devIndex: number, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ReadPrivateKeySilently(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Зчитування особистого ключа у вигляді масиву байт
    ReadPrivateKeyBinary(privateKey: Uint8Array, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ReadPrivateKeyBinary(privateKey, password, resolve, reject);
        })
    }

    // Зчитування особистого ключа з файлу
    ReadPrivateKeyFile(fileName: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ReadPrivateKeyFile(fileName, password, resolve, reject);
        })
    }

    // Зтирання особистого ключа в пам’яті
    ResetPrivateKey(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.ResetPrivateKey(resolve, reject);
        })
    }

    // Визначає чи є носій з особистим ключем апаратним модулем без допомоги
    // графічного інтерфейсу
    IsHardwareKeyMedia(typeIndex: number, devIndex: number, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsHardwareKeyMedia(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Визначає чи є носій з особистим ключем апаратним модулем за допомогою
    // графічного інтерфейсу
    IsHardwareKeyMedia2(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsHardwareKeyMedia(resolve, reject);
        })
    }

    // Визначає наявність особистого ключа на носії без допомоги графічного
    // інтерфейсу
    IsPrivateKeyExists(typeIndex: number, devIndex: number, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsPrivateKeyExists(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Визначає наявність особистого ключа на носії за допомогою графічного
    // інтерфейсу
    IsPrivateKeyExists2(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsPrivateKeyExists(resolve, reject);
        })
    }


    // Отримання інформації про власника особистого ключа. Повертається інформація
    // про власника особистого ключа
    GetPrivateKeyOwnerInfo(): Promise<EndUserOwnerInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetPrivateKeyOwnerInfo(resolve, reject);
        })
    }

    // Отримання інформації про відкритий ключ(і) користувача. Інформація може бути
    // використана для отримання сертифіката(ів) користувача з CMP-сервера
    // або файлового сховища. Повертається інформація про відкритий ключ(і)
    GetKeyInfoSilently(typeIndex: number, devIndex: number, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyInfoSilently(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Отримання інформації про відкритий ключ(і) користувача. Інформація може бути
    // використана для отримання сертифіката(ів) користувача з CMP-сервера
    // або файлового сховища. Повертається інформація про відкритий ключ(і)
    GetKeyInfo(keyMedia: EndUserKeyMedia): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyInfo(keyMedia, resolve, reject);
        })
    }

    // Отримання інформації про відкритий ключ(і) користувача. Інформація може бути
    // використана для отримання сертифіката(ів) користувача з CMP-сервера
    // або файлового сховища. Повертається інформація про відкритий ключ(і)
    GetKeyInfoBinary(privateKey: Uint8Array, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyInfoBinary(privateKey, password, resolve, reject);
        })
    }

    // Отримання відкритої інформації про особистий ключ, може бути використана для
    // отримання сертифіката користувача, з сервера CMP або файлового сховища
    GetKeyInfoFile(privateKeyFileName: string, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetKeyInfoFile(privateKeyFileName, password, resolve, reject);
        })
    }

    // Отримання особистого ключа з контейнера JKS
    EnumJKSPrivateKeys(container: Uint8Array, index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumJKSPrivateKeys(container, index, resolve, reject);
        })
    }

    // Перелічення особистих ключів в контейнері JKS.
    EnumJKSPrivateKeysFile(fileName: string, index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.EnumJKSPrivateKeysFile(fileName, index, resolve, reject);
        })
    }

    // Перелічення особистих ключів в контейнері JKS.
    GetJKSPrivateKey(container: Uint8Array, keyAlias: string): Promise<EndUserJKSPrivateKey> {
        return new Promise((resolve, reject) => {
            this.m_library.GetJKSPrivateKey(container, keyAlias, resolve, reject);
        })
    }

    // Перелічення особистих ключів в контейнері JKS.
    GetJKSPrivateKeyFile(fileName: string, keyAlias: string): Promise<EndUserJKSPrivateKey> {
        return new Promise((resolve, reject) => {
            this.m_library.GetJKSPrivateKeyFile(fileName, keyAlias, resolve, reject);
        })
    }

    //  А.5.1.6 Функції гешування

    //  А.5.1.7 Функції ЕЦП

    /*Отримання кількості ЕЦП, що містяться в підписаних даних*/
    GetSignsCount(signature: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.m_library.GetSignsCount(signature, resolve, reject);
        })
    }

    // Отримання розширеної інформації про підписувача
    GetSignerInfo(signIndex: number, signature: string): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.m_library.GetSignerInfo(signIndex, signature, resolve, reject);
        })
    }

    /*Отримання інформації про наявність даних в підписаних даних*/
    IsDataInSignedDataAvailable(signedData: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsDataInSignedDataAvailable(signedData, resolve, reject);
        })
    }

    // Отримання інформації про наявність даних в підписаному файлі (Примітка:
    // Розмір файла не обмежений)
    IsDataInSignedFileAvailable(fileNameWithSignedData: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.m_library.IsDataInSignedFileAvailable(fileNameWithSignedData, resolve, reject);
        })
    }

    // Отримання даних, що містяться в підписаних даних
    GetDataFromSignedData(signedData: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.GetDataFromSignedData(signedData, resolve, reject);
        })
    }

    // Отримання даних, що містяться в підписаних даних
    GetDataFromSignedFile(fileNameWithSignedData: string, fileNameWithData: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.GetDataFromSignedFile(fileNameWithSignedData, fileNameWithData, resolve, reject);
        })
    }

    // Отримання сертифікату з підпису, підписаних даних або контейнера з
    // сертифікатами p7b
    GetCertificateFromSignedData(index: number, signedData: Uint8Array): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificateFromSignedData(index, signedData, resolve, reject);
        })
    }

    // Отримання сертифікату з підпису, підписаних даних або контейнера з
    // сертифікатами p7b
    GetCertificateFromSignedFile(index: number, fileNameWithSignedData: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.m_library.GetCertificateFromSignedFile(index, fileNameWithSignedData, resolve, reject);
        })
    }

    // Отримання інформації про час підпису
    GetSignTimeInfo(index: number, signature: string): Promise<EndUserTimeInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetSignTimeInfo(index, signature, resolve, reject);
        })
    }

    // Отримання інформації про час підпису
    GetFileSignTimeInfo(index: number, fileNameWithSignedData: string): Promise<EndUserTimeInfo> {
        return new Promise((resolve, reject) => {
            this.m_library.GetFileSignTimeInfo(index, fileNameWithSignedData, resolve, reject);
        })
    }

    // Формування зовнішнього (підпис знаходиться окремо від даних) електронного
    // цифрового підпису (ЕЦП). Повертається підпис у вигляді BASE64-строки
    Sign(data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.Sign(data, resolve, reject);
        })
    }

    // Формування внутрішнього (підпис знаходиться разом з даними) електронного
    // цифрового підпису (ЕЦП). Повертається підпис у вигляді BASE64-строки
    SignInternal(appendCertificate: boolean, data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.SignInternal(appendCertificate, data, resolve, reject);
        })
    }

    // Формування підпису геша за алгоритмом RSA
    SignRSA(data: Uint8Array, appendCert: boolean, externalSign: boolean): Promise<string> {
        return new Promise((resolve, reject) => {
            this.m_library.SignRSA(data, appendCert, externalSign, resolve, reject);
        })
    }

    CtxCreate(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.m_library.CtxCreate(resolve, reject);
        })
    }

    CtxFree(context: any): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.CtxFree(context, resolve, reject);
        })
    }

    CtxSetParameter(context: any, name: string, value: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.CtxSetParameter(context, name, value, resolve, reject);
        })
    }

    CtxFreePrivateKey(pkContext: any): Promise<void> {
        return new Promise((resolve, reject) => {
            this.m_library.CtxFreePrivateKey(pkContext, resolve, reject);
        })
    }
}
