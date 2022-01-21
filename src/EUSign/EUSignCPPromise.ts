import {EUSignCP} from "./eusw";
import {
    EndUserCertificateInfoEx,
    EndUserCMPSettings,
    EndUserFileStoreSettings, EndUserJKSPrivateKey, EndUserKeyMedia,
    EndUserKeyMediaSettings, EndUserLDAPSettings,
    EndUserModeSettings,
    EndUserOCSPAccessInfoModeSettings,
    EndUserOCSPAccessInfoSettings,
    EndUserOCSPSettings, EndUserPrivateKeyInfo, EndUserTimeInfo, EndUserTSPSettings
} from "./types";

export default class EUSignCPPromise {
    constructor(public euSign: EUSignCP) {
    }

    // Перевірка стану бібліотеки. Повертається інформація про стан бібліотеки
    IsInitialized(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsInitialized(resolve, reject);
        })
    }

    // Ініціалізація бібліотеки
    Initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.Initialize(resolve, reject);
        })
    }

    // Завершення роботи з бібліотекою
    Finalize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.Finalize(resolve, reject);
        })
    }

    // Передчасне завершення процедур ітеративного формування або перевірки
    // зовнішнього ЕЦП. Функція повинна викликатися у разі виникнення помилок під
    // час виконання процедур ітеративного формування або перевірки зовнішнього
    // ЕЦП
    ResetOperation(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ResetOperation(resolve, reject);
        })
    }

    BASE64Encode(data: Uint8Array): Promise<string> {
        return new Promise((resolve, reject) => {
            this.euSign.BASE64Encode(data, resolve, reject);
        })
    }

    BASE64Decode(data: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.euSign.BASE64Decode(data, resolve, reject);
        })
    }

    //А.5.1.3 Функції отримання та встановлення параметрів роботи бібліотеки

    /*Встановлення режиму використання графічного інтерфейсу у разі виникнення помилок*/
    SetUIMode(uiMode: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetUIMode(uiMode, resolve, reject);
        })
    }

    // Встановлює мову, якою повертаються локалізовані повідомлення про помилки.
    // За замовчуванням опис помилок повертається українською мовою
    SetLanguage(language: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetLanguage(language, resolve, reject);
        })
    }

    // Встановлення, в якому вигляді подаються строкові дані для операцій підпису,
    // шифрування, гешування і т.д. Можливі значення "UTF-16LE", "UTF-8". За
    // замовчуванням використовується "UTF-8"
    SetCharset(charset: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetCharset(charset, resolve, reject);
        })
    }

    // Функція конфігурації параметрів роботи криптографічної бібліотеки
    SetRuntimeParameter(name: string, value: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetRuntimeParameter(name, value, resolve, reject);
        })
    }

    // Встановлення параметрів роботи з бібліотекою (див. дод. Е.1)
    SetSettings(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetSettings(resolve, reject);
        })
    }

    // Відображення сертифікатів з файлового сховища (див. дод. Е.2)
    ShowCertificates(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ShowCertificates(resolve, reject);
        })
    }

    // Отримання признаку необхідності встановлення параметрів роботи бібліотеки.
    // Повертається признак необхідності встановлення параметрів роботи бібліотеки
    DoesNeedSetSettings(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.DoesNeedSetSettings(resolve, reject);
        })
    }

    InitializeMandatorySettings(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.InitializeMandatorySettings(resolve, reject);
        })
    }

    // Створення інформації про параметри взаємодії з ЦСК. Повертається інформація
    // про параметри взаємодії з ЦСК з встановленими за замовчанням значеннями
    CreateModeSettings(): EndUserModeSettings {
        return this.euSign.CreateModeSettings() as unknown as EndUserModeSettings;
    }

    // Отримання параметрів взаємодії з серверами ЦСК. Повертається інформація про
    // параметри взаємодії з ЦСК
    GetModeSettings(): Promise<EndUserModeSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetModeSettings(resolve, reject);
        })
    }

    // Встановлення параметрів взаємодії з серверами ЦСК
    SetModeSettings(settings: EndUserModeSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetModeSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами НКІ. Повертається інформація про
    // параметри НКІ з встановленими за замовчанням значеннями
    CreateKeyMediaSettings(): EndUserKeyMediaSettings {
        return this.euSign.CreateKeyMediaSettings() as unknown as EndUserKeyMediaSettings;
    }

    // Отримання параметрів НКІ без допомоги графічного інтерфейсу. Повертається
    // інформацію про параметри НКІ
    GetKeyMediaSettings(): Promise<EndUserKeyMediaSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetKeyMediaSettings(resolve, reject);
        })
    }

    // Встановлення параметрів НКІ без допомоги графічного інтерфейсу
    SetKeyMediaSettings(settings: EndUserKeyMediaSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetKeyMediaSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами файлового сховища (див.
    // табл. 3.1). Повертається інформацію про параметри файлового сховища з
    // встановленими за замовчанням значеннями
    CreateFileStoreSettings(): EndUserFileStoreSettings {
        return this.euSign.CreateFileStoreSettings() as unknown as EndUserFileStoreSettings;
    }

    // Отримання параметрів файлового сховища (див. табл. 3.1). Повертається
    // інформація про параметри файлового сховища
    GetFileStoreSettings(): Promise<EndUserFileStoreSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetFileStoreSettings(resolve, reject);
        })
    }

    // Встановлення параметрів файлового сховища
    SetFileStoreSettings(settings: EndUserFileStoreSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetFileStoreSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами OCSP-сервера (див. табл. 3.1).
    // Повертається інформація про параметри OCSP-сервера з встановленими за
    // замовчанням значеннями
    CreateOCSPSettings(): EndUserOCSPSettings {
        return this.euSign.CreateOCSPSettings() as unknown as EndUserOCSPSettings;
    }

    // Отримання параметрів OCSP-сервера (див. табл. 3.1). Повертається інформація
    // про параметри OCSP-сервера
    GetOCSPSettings(): Promise<EndUserOCSPSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetOCSPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів OCSP-сервера
    SetOCSPSettings(settings: EndUserOCSPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetOCSPSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами використання точок доступу до
    // OCSP-серверів (див. табл. 3.3). Повертається інформація про параметрами
    // використання точок доступу до OCSP-серверів з встановленими за замовчанням
    // значеннями
    CreateOCSPAccessInfoModeSettings(): EndUserOCSPAccessInfoModeSettings {
        return this.euSign.CreateOCSPAccessInfoModeSettings() as unknown as EndUserOCSPAccessInfoModeSettings;
    }

    // Отримання інформації, щодо використання точок доступу до OCSP-серверів
    // (див. табл. 3.3). Повертається інформація про параметрами використання
    // точок доступу до OCSP-серверів
    GetOCSPAccessInfoModeSettings(): Promise<EndUserOCSPAccessInfoModeSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetOCSPAccessInfoModeSettings(resolve, reject);
        })
    }

    // Встановлення інформації, щодо використання точок доступу до OCSP-серверів
    SetOCSPAccessInfoModeSettings (settings: EndUserOCSPAccessInfoModeSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetOCSPAccessInfoModeSettings (settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами точки доступу до OCSP-серверу
    // (див. табл. 3.3). Повертається інформація про параметри точки доступу до
    // OCSP-серверу з встановленими за замовчанням значеннями
    CreateOCSPAccessInfoSettings(): EndUserOCSPAccessInfoSettings {
        return this.euSign.CreateOCSPAccessInfoSettings() as unknown as EndUserOCSPAccessInfoSettings;
    }

    // Видалення параметрів доступу до серверу OCSP за ім’ям ЦСК
    DeleteOCSPAccessInfoSettings(issuerCN: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.DeleteOCSPAccessInfoSettings(issuerCN, resolve, reject);
        })
    }

    // Отримання інформації, щодо точки доступу до OCSP-серверу (див. табл. 3.3) за
    // ім’ям ЦСК. Повертається інформація про точку доступу до OCSP-серверу
    GetOCSPAccessInfoSettings(issuerCN: string): Promise<EndUserOCSPAccessInfoSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetOCSPAccessInfoSettings(issuerCN, resolve, reject);
        })
    }

    // Встановлення інформації, щодо використання точки доступу до OCSP-серверу
    SetOCSPAccessInfoSettings  (settings: EndUserOCSPAccessInfoSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetOCSPAccessInfoSettings  (settings, resolve, reject);
        })
    }

    // Перелічення точок доступу до OCSP-серверів ЦСК. Повертається інформація про
    // параметри точки доступу до OCSP-серверу або null, якщо перелік
    // закінчено
    EnumOCSPAccessInfoSettings (index: number): Promise<EndUserOCSPAccessInfoSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.EnumOCSPAccessInfoSettings (index, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами TSP-сервера (див. табл. 3.1).
    // Повертається інформацію про параметри TSP-сервера з встановленими за
    // замовчанням значеннями
    CreateTSPSettings(): EndUserTSPSettings {
        return this.euSign.CreateTSPSettings() as unknown as EndUserTSPSettings;
    }

    // Отримання параметрів TSP-сервера (див. табл. 3.1). Повертається інформація
    // про параметри TSP-сервера
    GetTSPSettings(): Promise<EndUserTSPSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetTSPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів TSP-сервера
    SetTSPSettings(settings: EndUserTSPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetTSPSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами LDAP-сервера (див. табл. 3.1).
    // Повертається інформація про параметри LDAP-сервера з встановленими за
    // замовчанням значеннями
    CreateLDAPSettings(): EndUserLDAPSettings {
        return this.euSign.CreateLDAPSettings() as unknown as EndUserLDAPSettings;
    }

    // Отримання параметрів LDAP-сервера (див. табл. 3.1). Повертається інформація
    // про параметри LDAP-сервера
    GetLDAPSettings(): Promise<EndUserLDAPSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetLDAPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів LDAP-сервера
    SetLDAPSettings(settings: EndUserLDAPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetLDAPSettings(settings, resolve, reject);
        })
    }

    // Створення порожнього об`єкту з параметрами CMP-сервера (див. табл. 3.1).
    // Повертається інформацію про параметри CMP-сервера з встановленими за
    // замовчанням значеннями
    CreateCMPSettings(): EndUserCMPSettings {
        return this.euSign.CreateCMPSettings() as unknown as EndUserCMPSettings;
    }

    // Отримання параметрів CMP-сервера (див. табл. 3.1). Повертаєтьяс інформацію
    // про параметри CMP-сервера
    GetCMPSettings(): Promise<EndUserCMPSettings> {
        return new Promise((resolve, reject) => {
            this.euSign.GetCMPSettings(resolve, reject);
        })
    }

    // Встановлення параметрів CMP-сервера
    SetCMPSettings(settings: EndUserCMPSettings): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetCMPSettings(settings, resolve, reject);
        })
    }

    // Отримання параметру з сховища параметрів
    GetStorageParameter(protect: boolean, name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.GetStorageParameter(protect, name, resolve, reject);
        })
    }

    // Запис параметру до сховища параметрів
    SetStorageParameter(protect: boolean, name: string, value: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.SetStorageParameter(protect, name, value, resolve, reject);
        })
    }

    //А.5.1.4 Функції роботи з сховищем сертифікатів та СВС

    //А.5.1.5 Функції роботи з особистим ключем та носієм ключової інформації

    /*Створення порожнього об`єкту з інформацією про НКІ. Повертається інформація
    * про НКІ з встановленими за замовчанням значеннями
    */
    CreateKeyMedia(): EndUserKeyMedia {
        return this.euSign.CreateKeyMedia() as unknown as EndUserKeyMedia;
    }

    // Зчитування параметрів особистого ключа. Повертається
    // інформація з параметрами особистого ключа
    GetPrivateKeyMedia(caption: string): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.euSign.GetPrivateKeyMedia(caption, resolve, reject);
        })
    }

    // Перелічення доступних типів НКІ. Повертається опис типу НКІ або порожня
    // строка у разі, якщо більше немає доступних типів
    EnumKeyMediaTypes(typeIndex: number): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.euSign.EnumKeyMediaTypes(typeIndex, resolve, reject);
        })
    }

    // Перелічення доступних НКІ заданого типу. Повертається опис НКІ або порожня
    // строка у разі, якщо більше немає доступних НКІ
    EnumKeyMediaDevices(typeIndex: number, deviceIndex: number): Promise<EndUserKeyMedia> {
        return new Promise((resolve, reject) => {
            this.euSign.EnumKeyMediaDevices(typeIndex, deviceIndex, resolve, reject);
        })
    }

    // Отримання списку доступних типів НКІ. Повертається масив, що містить опис
    // типів НКІ
    GetKeyMediaTypes(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.euSign.GetKeyMediaTypes(resolve, reject);
        })
    }

    // Отримання доступних НКІ для заданих типів. Повертається масив з масивів з
    // описами НКІ
    GetKeyMediaDevices(typeIndexes: number[]): Promise<string[][]> {
        return new Promise((resolve, reject) => {
            this.euSign.GetKeyMediaDevices(typeIndexes, resolve, reject);
        })
    }

    // Отримання інформації чи зчитаний особистий ключ. Повертається true, якщо
    // особистий ключ зчитаний
    IsPrivateKeyReaded(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsPrivateKeyReaded(resolve, reject);
        })
    }

    // Зчитування особистого ключа (див. дод. Е.3)
    ReadPrivateKey(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ReadPrivateKey(resolve, reject);
        })
    }

    // Зчитування особистого ключа за параметрами особистого ключа без використання
    // графічного інтерфейсу
    ReadPrivateKeySilently(keyMedia: EndUserKeyMedia): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ReadPrivateKeySilently(keyMedia, resolve, reject);
        })
    }

    // Зчитування особистого ключа за параметрами особистого ключа без використання
    // графічного інтерфейсу
    ReadPrivateKeySilently2(typeIndex: number, devIndex: number, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ReadPrivateKeySilently(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Зчитування особистого ключа у вигляді масиву байт
    ReadPrivateKeyBinary(privateKey: Uint8Array, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ReadPrivateKeyBinary(privateKey, password, resolve, reject);
        })
    }

    // Зчитування особистого ключа з файлу
    ReadPrivateKeyFile(fileName: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ReadPrivateKeyFile(fileName, password, resolve, reject);
        })
    }

    // Зтирання особистого ключа в пам’яті
    ResetPrivateKey(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.euSign.ResetPrivateKey(resolve, reject);
        })
    }

    // Визначає чи є носій з особистим ключем апаратним модулем без допомоги
    // графічного інтерфейсу
    IsHardwareKeyMedia(typeIndex: number, devIndex: number, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsHardwareKeyMedia(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Визначає чи є носій з особистим ключем апаратним модулем за допомогою
    // графічного інтерфейсу
    IsHardwareKeyMedia2(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsHardwareKeyMedia(resolve, reject);
        })
    }

    // Визначає наявність особистого ключа на носії без допомоги графічного
    // інтерфейсу
    IsPrivateKeyExists(typeIndex: number, devIndex: number, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsPrivateKeyExists(typeIndex, devIndex, password, resolve, reject);
        })
    }

    // Визначає наявність особистого ключа на носії за допомогою графічного
    // інтерфейсу
    IsPrivateKeyExists2(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsPrivateKeyExists(resolve, reject);
        })
    }



    // Отримання інформації про відкритий ключ(і) користувача. Інформація може бути
    // використана для отримання сертифіката(ів) користувача з CMP-сервера
    // або файлового сховища. Повертається інформація про відкритий ключ(і)
    GetKeyInfoBinary(privateKey: Uint8Array, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.euSign.GetKeyInfoBinary(privateKey, password, resolve, reject);
        })
    }

    // Отримання відкритої інформації про особистий ключ, може бути використана для
    // отримання сертифіката користувача, з сервера CMP або файлового сховища
    GetKeyInfoFile(privateKeyFileName: string, password: string): Promise<EndUserPrivateKeyInfo> {
        return new Promise((resolve, reject) => {
            this.euSign.GetKeyInfoFile(privateKeyFileName, password, resolve, reject);
        })
    }

    // Отримання особистого ключа з контейнера JKS
    EnumJKSPrivateKeys(container: Uint8Array, index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.euSign.EnumJKSPrivateKeys(container, index, resolve, reject);
        })
    }

    // Перелічення особистих ключів в контейнері JKS.
    EnumJKSPrivateKeysFile(fileName: string, index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            this.euSign.EnumJKSPrivateKeysFile(fileName, index, resolve, reject);
        })
    }

    // Перелічення особистих ключів в контейнері JKS.
    GetJKSPrivateKey(container: Uint8Array, keyAlias: string): Promise<EndUserJKSPrivateKey> {
        return new Promise((resolve, reject) => {
            this.euSign.GetJKSPrivateKey(container, keyAlias, resolve, reject);
        })
    }

    // Перелічення особистих ключів в контейнері JKS.
    GetJKSPrivateKeyFile(fileName: string, keyAlias: string): Promise<EndUserJKSPrivateKey> {
        return new Promise((resolve, reject) => {
            this.euSign.GetJKSPrivateKeyFile(fileName, keyAlias, resolve, reject);
        })
    }

    //  А.5.1.6 Функції гешування

    //  А.5.1.7 Функції ЕЦП

    /*Отримання кількості ЕЦП, що містяться в підписаних даних*/
    GetSignsCount(signature: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.euSign.GetSignsCount(signature, resolve, reject);
        })
    }

    // Отримання розширеної інформації про підписувача
    GetSignerInfo(signIndex: number, signature: string): Promise<EndUserCertificateInfoEx> {
        return new Promise((resolve, reject) => {
            this.euSign.GetSignerInfo(signIndex, signature, resolve, reject);
        })
    }

    /*Отримання інформації про наявність даних в підписаних даних*/
    IsDataInSignedDataAvailable(signedData: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsDataInSignedDataAvailable(signedData, resolve, reject);
        })
    }

    // Отримання інформації про наявність даних в підписаному файлі (Примітка:
    // Розмір файла не обмежений)
    IsDataInSignedFileAvailable(fileNameWithSignedData: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.euSign.IsDataInSignedFileAvailable(fileNameWithSignedData, resolve, reject);
        })
    }

    // Отримання даних, що містяться в підписаних даних
    GetDataFromSignedData(signedData: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.euSign.GetDataFromSignedData(signedData, resolve, reject);
        })
    }

    // Отримання даних, що містяться в підписаних даних
    GetDataFromSignedFile(fileNameWithSignedData: string, fileNameWithData: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.euSign.GetDataFromSignedFile(fileNameWithSignedData, fileNameWithData, resolve, reject);
        })
    }

    // Отримання сертифікату з підпису, підписаних даних або контейнера з
    // сертифікатами p7b
    GetCertificateFromSignedData(index: number, signedData: Uint8Array): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.euSign.GetCertificateFromSignedData(index, signedData, resolve, reject);
        })
    }

    // Отримання сертифікату з підпису, підписаних даних або контейнера з
    // сертифікатами p7b
    GetCertificateFromSignedFile(index: number, fileNameWithSignedData: string): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            this.euSign.GetCertificateFromSignedFile(index, fileNameWithSignedData, resolve, reject);
        })
    }

    // Отримання інформації про час підпису
    GetSignTimeInfo(index: number, signature: string): Promise<EndUserTimeInfo> {
        return new Promise((resolve, reject) => {
            this.euSign.GetSignTimeInfo(index, signature, resolve, reject);
        })
    }

    // Отримання інформації про час підпису
    GetFileSignTimeInfo(index: number, fileNameWithSignedData: string): Promise<EndUserTimeInfo> {
        return new Promise((resolve, reject) => {
            this.euSign.GetFileSignTimeInfo(index, fileNameWithSignedData, resolve, reject);
        })
    }
}
