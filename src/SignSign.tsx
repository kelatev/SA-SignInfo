import React, {useContext, useState, useEffect} from "react";
import EUSignContext from './context/EUSign';
import IconCoding6 from './media/icons/duotune/coding/cod006.svg';
import Timeline from "./components/Timeline";
import TimelineItemFile from "./components/TimelineItemFile";
import {FileInterface} from "./components/FormFile";
import FormPassword from "./components/FormPassword";
import Card from "./components/Card";
import {EndUserJKSPrivateKey} from "./EUSign/types";

function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [fileContainer, setFileContainer] = useState<Uint8Array | null>();
    const [userJKSPrivateKeys, setUserJKSPrivateKeys] = useState<EndUserJKSPrivateKey[]>();
    const [fileAliasSelect, setFileAliasSelect] = useState<string>();
    const [privateKey, setPrivateKey] = useState<EndUserJKSPrivateKey>();
    const [password, setPassword] = useState<string | null>();
    const [keyRead, setKeyRead] = useState<boolean>();

    useEffect(() => {
        if (euSign && file?.content) {
            (async function () {
                try {
                    setFileContainer(await euSign.BASE64Decode(file.content));
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
        setPassword(null);
        setKeyRead(false);
    }, [euSign, file]);

    useEffect(() => {
        if (euSign && fileContainer) {
            (async function () {
                try {
                    //console.log(euSign.GetSignsCount(content))
                    //console.log(euSign.GetSignerInfo(0, content));

                    const userJKSPrivateKeys = await euSign.GetJKSPrivateKeyS(fileContainer);
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

    //OnReadPKey
    useEffect(() => {
        if (euSign && privateKey && password) {
            console.log('read');
            (async function () {
                try {
                    if (await euSign.IsPrivateKeyReaded()) {
                        await euSign.ResetPrivateKey();
                    }
                    /* Зчитування ключа */
                    console.log(await euSign.GetKeyInfoBinary(privateKey.GetPrivateKey(), password))
                    console.log(await euSign.ReadPrivateKeyBinary(privateKey.GetPrivateKey(), password))
                    console.log(await euSign.IsPrivateKeyReaded())

                    //console.log(euSign.ShowOwnCertificate())
                    setKeyRead(true);
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
    }, [euSign, privateKey, password]);

    //GetPrivateKeyOwnerInfo

    return (
        <Card title='Подпись файла' backgroundColor='#CBD4F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/4.png" />*/}
            <Timeline>
                <Timeline.Item title='Файл ЕЦП' icon={IconCoding6}>
                    <TimelineItemFile onFileChange={setFile}
                                      accept='.dat,.pfx,.pk8,.zs2,.jks'
                                      hint='Особистий ключ (Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks)'/>
                    {file && !keyRead && userJKSPrivateKeys && (
                        <select className="form-select mb-1"
                                onChange={(ev) => setFileAliasSelect(ev.currentTarget.value)}>
                            {userJKSPrivateKeys.map((item) => <option
                                key={item.info.alias}>{item.info.alias} ({item.info.certificates[0].GetInfoEx().GetSubjCN()})</option>)}
                        </select>
                    )}
                    {file && !keyRead && <FormPassword title='считать' onEnter={setPassword}/>}
                </Timeline.Item>
                {keyRead && (
                    <Timeline.Item title='...' icon={IconCoding6}>

                    </Timeline.Item>
                )}
            </Timeline>
        </Card>
    );
}

export default SignSign;
