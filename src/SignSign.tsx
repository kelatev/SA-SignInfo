import React, {useContext, useState, useEffect} from "react";
import EUSignContext from './context/EUSign';
import IconCoding6 from './icons/duotune/coding/cod006.svg';
import Timeline from "./components/Timeline";
import TimelineItemFile from "./components/TimelineItemFile";
import {FileInterface} from "./components/FormFile";
import FormPassword from "./components/FormPassword";
import Card from "./components/Card";

function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [JKSPrivateKeyList, setJKSPrivateKeyList] = useState<string[]>();
    const [JKSPrivateKeyName, setJKSPrivateKeyName] = useState<string>();
    const [privateKey, setPrivateKey] = useState();
    const [password, setPassword] = useState<string | null>();
    const [keyRead, setKeyRead] = useState<boolean>(false);

    useEffect(() => {
        if (euSign && file?.content) {
            try {
                const container = euSign.BASE64Decode(file.content)
                //console.log(euSign.GetSignsCount(content))
                //console.log(euSign.GetSignerInfo(0, content));

                const _JKSPrivateKeysList = [];
                let i = 0;
                let alias = euSign.EnumJKSPrivateKeys(container, i);
                while (alias) {
                    _JKSPrivateKeysList.push(alias);
                    i++;
                    alias = euSign.EnumJKSPrivateKeys(container, i);
                }
                setJKSPrivateKeyList(_JKSPrivateKeysList);
                if (_JKSPrivateKeysList.length > 0) {
                    setJKSPrivateKeyName(_JKSPrivateKeysList[0]);
                }
            } catch (e: any) {
                console.log(e)
            }
        }
        setPassword(null);
        setKeyRead(false);
    }, [euSign, file]);

    useEffect(() => {
        if (euSign && file?.content && JKSPrivateKeyName) {
            try {
                const container = euSign.BASE64Decode(file.content);
                const JKSPrivateKey = euSign.GetJKSPrivateKey(container, JKSPrivateKeyName);
                //console.log(JKSPrivateKey);

                setPrivateKey(JKSPrivateKey.GetPrivateKey());
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, file, JKSPrivateKeyName]);

    useEffect(() => {
        if (euSign && file?.content && privateKey && password) {
            try {
                if (euSign.IsPrivateKeyReaded()) {
                    euSign.ResetPrivateKey();
                }
                /* Імпорт сертифікатів ос. ключа */
                //LoadCertificates(certsFilePathes);
                /* Зчитування ключа */
                console.log(euSign.ReadPrivateKeyBinary(privateKey, password))
                console.log(euSign.IsPrivateKeyReaded())

                //console.log(euSign.ShowOwnCertificate())
                setKeyRead(true);
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, file, privateKey, password]);

    //GetPrivateKeyOwnerInfo
    //GetKeyInfoBinary

    return (
        <Card title='Подпись файла' backgroundColor='#CBD4F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/4.png" />*/}
            <Timeline>
                <Timeline.Item title='Файл ЕЦП' icon={IconCoding6}>
                    <TimelineItemFile onFileChange={setFile}
                                      accept='.dat,.pfx,.pk8,.zs2,.jks'
                                      hint='Особистий ключ (Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks)'/>
                    {file && !keyRead && JKSPrivateKeyList && (
                        <select className="form-select mb-1"
                                onChange={(ev) => setJKSPrivateKeyName(ev.currentTarget.value)}>
                            {JKSPrivateKeyList.map((item) => <option>{item}</option>)}
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
