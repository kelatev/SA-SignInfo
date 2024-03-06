import React, { useContext, useEffect, useState } from 'react';
import { EndUserJKSPrivateKey, EndUserPrivateKey } from "../../EUSign/types";
import EUSignContext from "../../context/EUSign";
import Timeline from "../Timeline/Timeline";
import FormPassword from "../Form/FormPassword";
import Form from "react-bootstrap/Form";
import { FileLock } from "@phosphor-icons/react";

function SignSelect() {
    const { euSign } = useContext(EUSignContext);

    const storagePrefix = 'sign';

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [file, setFile] = useState<File | null>();
    const [fileContainer, setFileContainer] = useState<Uint8Array>();
    const [userJKSPrivateKeys, setUserJKSPrivateKeys] = useState<EndUserJKSPrivateKey[]>();
    const [fileAliasSelect, setFileAliasSelect] = useState<string>();
    const [privateKey, setPrivateKey] = useState<EndUserPrivateKey>();
    const [password, setPassword] = useState<string>();
    const [IsPrivateKeyReaded, setIsPrivateKeyReaded] = useState<boolean>();

    useEffect(() => {
        if (euSign && file) {
            (async function () {
                try {
                    setFileContainer(new Uint8Array(await file.arrayBuffer()));
                } catch (e: any) {
                    console.log(e)
                }
            })();
        } else {
            setFileContainer(undefined);
        }
        setUserJKSPrivateKeys(undefined);
        setFileAliasSelect(undefined);
        setPassword(undefined);
        setIsPrivateKeyReaded(false);
        setPrivateKey(undefined);
    }, [euSign, file]);

    useEffect(() => {
        setError(undefined);
        //sessionStorage.removeItem(`${storagePrefix}-pass`);
    }, [euSign, file, fileContainer, userJKSPrivateKeys, fileAliasSelect, privateKey, password]);

    useEffect(() => {
        if (euSign && fileContainer) {
            (async function () {
                try {
                    const userJKSPrivateKeys = await euSign.GetJKSPrivateKeys(fileContainer);
                    setUserJKSPrivateKeys(userJKSPrivateKeys);
                    if (userJKSPrivateKeys.length > 0) {
                        setFileAliasSelect(userJKSPrivateKeys[0].info.alias);
                    } else {
                        setPrivateKey({ privateKey: fileContainer, certificates: null });
                    }
                } catch (e: any) {
                    console.log(e);
                    setError(e.toString());
                }
            })();
        }
    }, [euSign, fileContainer]);

    useEffect(() => {
        if (euSign && fileContainer && userJKSPrivateKeys && fileAliasSelect) {
            try {
                const JKSPrivateKey = userJKSPrivateKeys.filter((item) => item.info.alias === fileAliasSelect);

                setPrivateKey({ privateKey: JKSPrivateKey[0].GetPrivateKey(), certificates: JKSPrivateKey[0].GetCertificates() });
            } catch (e: any) {
                console.log(e);
                setError(e.toString());
            }
        }
    }, [euSign, fileContainer, userJKSPrivateKeys, fileAliasSelect]);

    useEffect(() => {
        if (euSign && privateKey && password && !IsPrivateKeyReaded) {
            (async function () {
                try {
                    setLoading(true);
                    if (await euSign.m_library.IsPrivateKeyReaded()) {
                        await euSign.m_library.ResetPrivateKey();
                    }
                    /* Зчитування ключа */
                    await euSign.CtxReadPrivateKeyInternal(null, privateKey.privateKey, password, null, privateKey.certificates, null);

                    const IsPrivateKeyReaded = await euSign.m_library.IsPrivateKeyReaded();
                    setIsPrivateKeyReaded(IsPrivateKeyReaded);
                    if (IsPrivateKeyReaded) {
                        //props.onKeyRead(privateKey);
                        //sessionStorage.setItem(`${storagePrefix}-pass`, password);
                    }
                    setLoading(false);
                } catch (e: any) {
                    setLoading(false);
                    console.log(e);
                    setError(e.toString());
                }
            })();
        }
    }, [euSign, privateKey, password, IsPrivateKeyReaded]);

    const handlePassChange = () => {
        if (error) {
            setError(undefined);
            setPassword(undefined);
        }
    }

    return (
        <Timeline.Item
            title='Особистий ключ'
            icon={<FileLock />}
            description={'Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks'}
        >
            <Timeline.FileSelect
                onFileChange={setFile}
                storagePrefix={storagePrefix}
                accept='.dat,.pfx,.pk8,.zs2,.jks'
                error={error} />
            {file && !IsPrivateKeyReaded && userJKSPrivateKeys && userJKSPrivateKeys.length > 0 && (
                <Form.Select className="mb-1"
                    onChange={(ev) => setFileAliasSelect(ev.currentTarget.value)}>
                    {userJKSPrivateKeys.map((item) => <option
                        key={item.info.alias}>{item.info.alias} ({item.info.certificates[0].GetInfoEx().GetSubjCN()})</option>)}
                </Form.Select>
            )}
            {file && !IsPrivateKeyReaded && <FormPassword
                title='зчитати'
                onChange={() => handlePassChange()}
                onEnter={(pass) => { handlePassChange(); setPassword(pass) }}
                loading={loading} />}
        </Timeline.Item>
    );
}

export default SignSelect;
