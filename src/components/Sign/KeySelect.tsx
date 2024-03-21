import { useCallback, useEffect, useState } from 'react';
import { EndUserPrivateKey } from "../../EUSign/EndUserTypes";
import { useEndUserContext } from '../../EUSign/EndUserContext';
import { useKeyContext } from './KeyContext';
import Form from "react-bootstrap/Form";
import { KeyMediaType } from '../../EUSign/useEndUserController';
import Timeline from "../Timeline/Timeline";
import FormPassword from "../Form/FormPassword";
import { FileToUint8 } from '../../utils/encode';
import { FileLock, Password, Package } from "@phosphor-icons/react";

function SignSelect() {
    const { keyMediaType, setKeyMediaType, currentLibrary } = useEndUserContext();
    const { privateKey, setPrivateKey } = useKeyContext();

    const storagePrefix = 'sign';

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [file, setFile] = useState<File | null>();
    const [fileContainer, setFileContainer] = useState<Uint8Array>();
    const [jksPrivateKeys, setJKSPrivateKeys] = useState<EndUserPrivateKey[]>();
    const [aliasSelect, setAliasSelect] = useState<string>();
    const [keySelect, setKeySelect] = useState<{ privatKey: Uint8Array; certificates?: Uint8Array[] }>();
    const [password, setPassword] = useState<string>();

    //console.log(currentLibrary);

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
                    }
                    break;
            }
        } else if (keyMediaType !== KeyMediaType.File) {
            setKeyMediaType(KeyMediaType.File);
        }
    }, [keyMediaType, file, setKeyMediaType]);

    useEffect(() => {
        if (currentLibrary?.info.loaded && file) {
            FileToUint8(file).then(data => setFileContainer(data)).catch(err => console.log(err));
        } else {
            setFileContainer(undefined);
        }
        setError(undefined);
        setJKSPrivateKeys(undefined);
        setAliasSelect(undefined);
        setPassword(undefined);
        setKeySelect(undefined);
        setPrivateKey(undefined);
    }, [currentLibrary?.info.loaded, file, setPrivateKey]);

    useEffect(() => {
        if (currentLibrary?.info.loaded && fileContainer) {
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
    }, [currentLibrary?.info.loaded, currentLibrary?.library, fileContainer]);

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
                    /* Зчитування ключа */
                    //CtxReadPrivateKeyBinary-вернет контекст
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
                {currentLibrary?.info.loaded && file && !privateKey && jksPrivateKeys && jksPrivateKeys.length > 1 && (
                    <Form.Select className="mb-1"
                        onChange={(ev) => setAliasSelect(ev.currentTarget.value)}>
                        {jksPrivateKeys.map((item) => <option
                            key={item.alias}>{item.alias} ({item.certificates?.at(0)?.infoEx.subjCN})</option>)}
                    </Form.Select>
                )}
                {currentLibrary?.info.loaded && file && !privateKey && <FormPassword
                    title='зчитати'
                    onChange={() => handlePassChange()}
                    onSubmit={(pass) => { handlePassChange(); setPassword(pass) }}
                    loading={loading} />}
            </Timeline.Item>
            {(currentLibrary?.loading || currentLibrary?.error) &&
                <Timeline.Spinner
                    title='Завантаження бібліотеки'
                    icon={<Package />}
                    error={currentLibrary.error?.toString()}
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
