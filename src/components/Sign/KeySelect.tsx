import { useCallback, useEffect, useState } from 'react';
import { EndUserPrivateKey, EndUserKeyMedia } from "../../EUSign/EndUserTypes";
import { useEndUserContext } from '../../EUSign/EndUserContext';
import { useKeyContext } from './KeyContext';
import useEndUserKeyMedia from '../../EUSign/useEndUserKeyMedia';
import Form from "react-bootstrap/Form";
import { KeyMediaType } from '../../EUSign/useEndUserController';
import Timeline from "../Timeline/Timeline";
import FormPassword from "../Form/FormPassword";
import AlertWarning from "../Form/AlertWarning";
import { FileToUint8 } from '../../utils/encode';
import { FileLock, Password, Package } from "@phosphor-icons/react";
import { errorLoadDescription } from '../../EUSign/useEndUserInstance'
import Settings from "../../EUSign/LIBRARY_SETTINGS.json";
import { MakeUserId, IsQualifiedCertificates } from '../../EUSign/EndUserUtil'
import { EndUserKSP } from '../../EUSign/EndUserConstants'

function SignSelect() {
    const { keyMediaType, setKeyMediaType, currentLibrary, Confirmation } = useEndUserContext();
    const { privateKey, setPrivateKey } = useKeyContext();
    const { KMs, updateKMRef, BeginUpdateKMs, StopUpdateKMs } = useEndUserKeyMedia({ instance: currentLibrary });

    const storagePrefix = 'sign';

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [file, setFile] = useState<File | null>();
    const [fileContainer, setFileContainer] = useState<Uint8Array>();
    const [jksPrivateKeys, setJKSPrivateKeys] = useState<EndUserPrivateKey[]>();
    const [kmSelect, setKMSelect] = useState<string>();
    const [kspSelect, setKSPSelect] = useState<string | undefined>(Settings.KSPs.at(0)?.name);
    const [kspUserId, setKSPUserId] = useState<string>('');
    const [aliasSelect, setAliasSelect] = useState<string>();
    const [keySelect, setKeySelect] = useState<{ privatKey: Uint8Array; certificates?: Uint8Array[] }>();
    const [password, setPassword] = useState<string>();

    //console.log(currentLibrary);
    const libLoaded = currentLibrary?.info.loaded && !currentLibrary.loading;
    const showJKS = keyMediaType === KeyMediaType.File && file && !privateKey && jksPrivateKeys && jksPrivateKeys.length > 1;
    const showPass = file && ((keyMediaType === KeyMediaType.File && !privateKey) || (KeyMediaType.Hardware && KMs.length > 0));
    const showKeyMedia = keyMediaType === KeyMediaType.Hardware && libLoaded && currentLibrary?.error == null && !privateKey;
    const showKSP = keyMediaType === KeyMediaType.KSP && libLoaded && currentLibrary?.error == null && !Confirmation.dimmerViewTimerVisible && !privateKey;
    const showKSPUserId = keyMediaType === KeyMediaType.KSP && libLoaded && currentLibrary?.error == null && !Settings.KSPs.find(item => item.name === kspSelect)?.confirmationURL && !Confirmation.dimmerViewTimerVisible && !privateKey;
    const showKSPRead = keyMediaType === KeyMediaType.KSP && libLoaded && currentLibrary?.error == null && kspSelect && !Confirmation.dimmerViewTimerVisible && !privateKey;

    useEffect(() => {
        if (file && file.size === 0) {
            switch (file.name) {
                case 'Токен':
                    if (keyMediaType !== KeyMediaType.Hardware) {
                        setKeyMediaType(KeyMediaType.Hardware);

                    }
                    break;
                case 'Хмарний':
                    if (keyMediaType !== KeyMediaType.KSP) {
                        setKeyMediaType(KeyMediaType.KSP);
                        //setKSPSelect(Settings.KSPs.at(0)?.name);
                    }
                    break;
            }
        } else if (keyMediaType !== KeyMediaType.File) {
            setKeyMediaType(KeyMediaType.File);
        }
    }, [keyMediaType, file, setKeyMediaType]);

    useEffect(() => {
        if (file) {
            FileToUint8(file).then(data => setFileContainer(data)).catch(err => console.log(err));
        } else {
            setFileContainer(undefined);
        }
        setError(undefined);
        setJKSPrivateKeys(undefined);
        setKMSelect(undefined);
        setAliasSelect(undefined);
        setPassword(undefined);
        setKeySelect(undefined);
        setPrivateKey(undefined);
        setLoading(false);
        Confirmation.StopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    useEffect(() => {
        if (currentLibrary?.info.loaded && !currentLibrary.loading && keyMediaType === KeyMediaType.Hardware) {
            BeginUpdateKMs();
        } else if (keyMediaType !== KeyMediaType.Hardware && updateKMRef.current) {
            StopUpdateKMs();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLibrary?.info.loaded, currentLibrary?.loading, keyMediaType]);

    useEffect(() => {
        if (currentLibrary?.info.loaded && keyMediaType === KeyMediaType.File && fileContainer) {
            (async function () {
                try {
                    setError(undefined);
                    const privateKeys = await currentLibrary.library?.GetJKSPrivateKeys(fileContainer);
                    setJKSPrivateKeys(privateKeys);
                    if (privateKeys && privateKeys.length > 0) {
                        setAliasSelect(privateKeys[0].alias);
                    } else {
                        setKeySelect({ privatKey: fileContainer });
                    }
                } catch (e: any) {
                    console.log(e);
                    setError(e.toString());
                }
            })();
        }
    }, [currentLibrary?.info.loaded, currentLibrary?.library, keyMediaType, fileContainer]);

    useEffect(() => {
        if (jksPrivateKeys && aliasSelect) {
            try {
                const JKSPrivateKey = jksPrivateKeys.find((item) => item.alias === aliasSelect);
                if (JKSPrivateKey) {
                    setKeySelect({ privatKey: JKSPrivateKey.privateKey, certificates: JKSPrivateKey.certificates.map(item => item.data) });
                }
            } catch (e: any) {
                console.log(e);
                setError(e.toString());
            }
        }
    }, [jksPrivateKeys, aliasSelect]);

    useEffect(() => {
        if (currentLibrary?.library && keySelect && password && !privateKey) {
            (async function () {
                try {
                    setError(undefined);
                    setLoading(true);
                    if (await currentLibrary.library?.IsPrivateKeyReaded()) {
                        await currentLibrary.library?.ResetPrivateKey();
                    }
                    const ownerInfo = await currentLibrary.library?.ReadPrivateKeyBinary(keySelect.privatKey, password, keySelect.certificates ?? null, null);
                    const ownCertificates = await currentLibrary.library?.GetOwnCertificates();
                    const isPrivateKeyReaded = await currentLibrary.library?.IsPrivateKeyReaded();
                    if (isPrivateKeyReaded) {
                        setPrivateKey({
                            privateKey: keySelect.privatKey,
                            certificates: ownCertificates,
                            ownerInfo: ownerInfo,
                        });
                    }

                    setLoading(false);
                } catch (e: any) {
                    setLoading(false);
                    console.log(e);
                    setError(`${e.message} (${e.code})`);
                }
            })();
        }
    }, [currentLibrary?.library, keySelect, password, privateKey, setPrivateKey]);

    //token
    useEffect(() => {
        if (currentLibrary?.library && kmSelect && password) {
            (async function () {
                try {
                    setError(undefined);
                    setLoading(true);
                    if (await currentLibrary.library?.IsPrivateKeyReaded()) {
                        await currentLibrary.library?.ResetPrivateKey();
                    }
                    const [typeIndex, devIndex] = kmSelect.split(':');
                    const keyMedia: EndUserKeyMedia = { typeIndex: Number(typeIndex), devIndex: Number(devIndex), password };
                    const ownerInfo = await currentLibrary.library?.ReadPrivateKey(keyMedia, null, null);
                    const ownCertificates = await currentLibrary.library?.GetOwnCertificates();
                    const isPrivateKeyReaded = await currentLibrary.library?.IsPrivateKeyReaded();
                    if (isPrivateKeyReaded) {
                        setPrivateKey({
                            certificates: ownCertificates,
                            ownerInfo: ownerInfo,
                        });
                    }

                    setLoading(false);
                } catch (e: any) {
                    setLoading(false);
                    console.log(e);
                    setError(`${e.message} (${e.code})`);
                }
            })();
        }
    }, [currentLibrary?.library, kmSelect, password, setPrivateKey]);

    //ksp
    useEffect(() => {
        if (kspSelect) {
            const item = Settings.KSPs.find(item => item.name === kspSelect);
            setKSPUserId(item?.confirmationURL ? MakeUserId() : '');
        }
    }, [kspSelect]);

    const handleClickKSP = () => {
        (async function () {
            try {
                setError(undefined);
                setLoading(true);

                const item = Settings.KSPs.find(item => item.name === kspSelect);

                if (item && kspUserId && currentLibrary?.library) {
                    const kspId = item.ksp === EndUserKSP.IIT ||
                        item.ksp === EndUserKSP.PB ||
                        item.ksp === EndUserKSP.DIIA
                        ? item.name
                        : item.ksp;

                    const ownerInfo = await currentLibrary.library.ReadPrivateKeyKSP(kspUserId, kspId, true, 0);
                    const ownCertificates = await currentLibrary.library.GetOwnCertificates();
                    if (!ownCertificates) {
                        await currentLibrary.library.ResetPrivateKey();
                        setLoading(false);
                        Confirmation.StopTimer();
                        return;
                    }
                    if (!IsQualifiedCertificates(ownCertificates)) {
                        await currentLibrary.library.ResetPrivateKey();
                        setLoading(false);
                        setError('Використання удосконаленого сертифіката відкритого ключа не дозволено. Зверніться до надавача Вашого сертифіката ({0}) для отримання квалфікованого сертифіката відкритого ключа'.replace('{0}', ownCertificates.at(0)?.infoEx.issuerCN ?? ''));
                        Confirmation.StopTimer();
                        return;
                    }

                    Confirmation.StopTimer();
                    const isPrivateKeyReaded = await currentLibrary.library.IsPrivateKeyReaded();
                    if (isPrivateKeyReaded) {
                        setPrivateKey({
                            certificates: ownCertificates,
                            ownerInfo: ownerInfo,
                        });
                    }
                }

                setLoading(false);
            } catch (e: any) {
                setLoading(false);
                console.log(e);
                setError(`${e.message} (${e.code})`);
                Confirmation.StopTimer();
            }
        })();
    }

    const handlePassChange = useCallback(() => {
        if (error) {
            setError(undefined);
            setPassword(undefined);
        }
    }, [error]);

    return (
        <>
            <Timeline.Item
                title='Особистий ключ'
                icon={<FileLock />}
                description={'Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks'}
            >
                <Timeline.FileSelect
                    onFileChange={setFile}
                    storagePrefix={storagePrefix}
                    accept='.dat,.pfx,.pk8,.zs2,.jks'
                    error={error}
                    withToken={true} />
                {showJKS && (
                    <Form.Select className="mt-3"
                        onChange={(ev) => setAliasSelect(ev.currentTarget.value)}>
                        {jksPrivateKeys.map((item) => <option
                            key={item.alias}>{item.alias} ({item.certificates?.at(0)?.infoEx.subjCN})</option>)}
                    </Form.Select>
                )}
                {showKeyMedia && KMs.length === 0 && <AlertWarning>Захищений носій не знайдено</AlertWarning>}
                {showKeyMedia && KMs.length > 0 && <Form.Select className="mt-3"
                    onChange={(ev) => setKMSelect(ev.currentTarget.value)}>
                    {KMs.map((item) => <option
                        key={item.devIndex + ':' + item.typeIndex}
                        value={item.devIndex + ':' + item.typeIndex}>{item.visibleName}</option>)}
                </Form.Select>}
                {showPass && <FormPassword
                    title='зчитати'
                    onChange={() => handlePassChange()}
                    onSubmit={(pass) => { handlePassChange(); setPassword(pass) }}
                    loading={loading} />}
                {showKSP && Settings.KSPs.length && <Form.Select className="mt-5"
                    defaultValue={kspSelect ?? Settings.KSPs.at(0)?.name}
                    onChange={(ev) => ev.currentTarget.value && setKSPSelect(ev.currentTarget.value)}>
                    {Settings.KSPs.map((item, index) => <option key={index} value={item.name}>{item.name}</option>)}
                </Form.Select>}
                {showKSPUserId && <input className='form-control mt-3' placeholder='Ідентифікатор користувача' onChange={(ev) => setKSPUserId(ev.currentTarget.value)} value={kspUserId} />}
                {showKSPRead && <button type='button' className='btn btn-sm btn-primary' onClick={() => handleClickKSP()}>Зчитати</button>}
                {Confirmation.dimmerViewTimerVisible && <>
                    {Confirmation.dimmerViewTimerBlock}
                    <div className='text-center'>{Confirmation.dimmerViewTimerLabel}</div>
                </>}
            </Timeline.Item>
            {(currentLibrary?.loading || (!currentLibrary?.info.loaded && currentLibrary?.error)) &&
                <Timeline.Spinner
                    title='Завантаження бібліотеки'
                    icon={<Package />}
                    error={errorLoadDescription(currentLibrary)}
                />
            }
            {loading &&
                <Timeline.Spinner
                    title='Зчитування ключу'
                    icon={<Password />}
                />
            }
        </>
    );
}

export default SignSelect;
