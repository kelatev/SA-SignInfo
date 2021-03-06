import React, {useContext, useEffect, useState} from 'react';
import {EndUserJKSPrivateKey} from "../../EUSign/types";
import IconCoding6 from "../../media/icons/duotune/coding/cod006.svg";
import EUSignContext from "../../context/EUSign";
import Timeline from "../Timeline/Timeline";
import TimelineFileSelect from "../Timeline/TimelineFileSelect";
import FormPassword from "../Form/FormPassword";
import Form from "react-bootstrap/Form";
import {FileInterface} from "../../types";

interface SignSignFileBlockProps {
    onKeyRead: (key: EndUserJKSPrivateKey | null) => void
}

function SignSelect(props: SignSignFileBlockProps) {
    const {euSign} = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [fileContainer, setFileContainer] = useState<Uint8Array | null>();
    const [userJKSPrivateKeys, setUserJKSPrivateKeys] = useState<EndUserJKSPrivateKey[]>();
    const [fileAliasSelect, setFileAliasSelect] = useState<string>();
    const [privateKey, setPrivateKey] = useState<EndUserJKSPrivateKey>();
    const [password, setPassword] = useState<string>();
    const [keyRead, setKeyRead] = useState<boolean>();

    useEffect(() => {
        if (euSign && file?.content) {
            (async function () {
                try {
                    setFileContainer(await euSign.m_library.BASE64Decode(file.content));
                } catch (e: any) {
                    console.log(e)
                }
            })();
        } else {
            setFileContainer(null);
            //setUserJKSPrivateKeys(null);
            //setFileAliasSelect(null);
        }
        setPassword(undefined);
        setKeyRead(false);
        props.onKeyRead(null);
    }, [euSign, file]);

    useEffect(() => {
        if (euSign && fileContainer) {
            (async function () {
                try {
                    const userJKSPrivateKeys = await euSign.GetJKSPrivateKeys(fileContainer);
                    setUserJKSPrivateKeys(userJKSPrivateKeys);
                    if (userJKSPrivateKeys.length > 0) {
                        setFileAliasSelect(userJKSPrivateKeys[0].info.alias);
                    }
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
    }, [euSign, fileContainer]);

    useEffect(() => {
        if (euSign && fileContainer && userJKSPrivateKeys && fileAliasSelect) {
            try {
                const JKSPrivateKey = userJKSPrivateKeys.filter((item) => item.info.alias === fileAliasSelect);
                setPrivateKey(JKSPrivateKey[0]);
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, fileContainer, userJKSPrivateKeys, fileAliasSelect]);

    useEffect(() => {
        if (euSign && privateKey && password) {
            (async function () {
                try {
                    if (await euSign.m_library.IsPrivateKeyReaded()) {
                        await euSign.m_library.ResetPrivateKey();
                    }
                    /* ???????????????????? ?????????? */
                    await euSign.CtxReadPrivateKeyInternal(null, privateKey.GetPrivateKey(), password, null, privateKey.GetCertificates(), null);

                    setKeyRead(await euSign.m_library.IsPrivateKeyReaded());
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
    }, [euSign, privateKey, password]);

    useEffect(() => {
        if (euSign && privateKey && keyRead) {
            props.onKeyRead(privateKey);
        }
    }, [euSign, privateKey, keyRead]);

    return (
        <Timeline.Item
            title='?????????????? ?????????????????? ????????'
            icon={IconCoding6}
            description={'?????????????????? ???????? (Key-6.dat, *.pfx, *.pk8, *.zs2 ?????? *.jks)'}
        >
            <TimelineFileSelect onFileChange={setFile}
                                accept='.dat,.pfx,.pk8,.zs2,.jks'/>
            {file && !keyRead && userJKSPrivateKeys && userJKSPrivateKeys.length > 0 && (
                <Form.Select className="mb-1"
                             onChange={(ev) => setFileAliasSelect(ev.currentTarget.value)}>
                    {userJKSPrivateKeys.map((item) => <option
                        key={item.info.alias}>{item.info.alias} ({item.info.certificates[0].GetInfoEx().GetSubjCN()})</option>)}
                </Form.Select>
            )}
            {file && !keyRead && <FormPassword title='??????????????' onEnter={setPassword}/>}
        </Timeline.Item>
    );
}

export default SignSelect;
