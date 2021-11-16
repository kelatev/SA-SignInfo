import React, {useContext, useState, useEffect} from "react";
import EUSignContext from './context/EUSign';
import IconCoding6 from './icons/duotune/coding/cod006.svg';
import Timeline from "./components/Timeline";
import TimelineItemFile from "./components/TimelineItemFile";
import {FileInterface} from "./components/FormFile";
import FormPassword from "./components/FormPassword";
import Card from "./components/Card";
import {instanceOf} from "prop-types";


function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [JKSPrivateKeysList, setJKSPrivateKeysList] = useState<string[]>();
    const [JKSPrivateKeys, setJKSPrivateKeys] = useState<string>();
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
                setJKSPrivateKeysList(_JKSPrivateKeysList);
                if (_JKSPrivateKeysList.length > 0) {
                    setJKSPrivateKeys(_JKSPrivateKeysList[0]);
                }
            } catch (e: any) {
                console.log(e)
            }
        }
        setPassword(null);
        setKeyRead(false);
    }, [euSign, file]);

    useEffect(() => {
        if (euSign && file?.content && JKSPrivateKeys && password) {
            try {
                const container = euSign.BASE64Decode(file.content);
                //console.log(euSign.GetKeyInfoBinary(privateKey, password))
                const JKSPrivateKey = euSign.GetJKSPrivateKey(container, JKSPrivateKeys);
                const privateKey = JKSPrivateKey.GetPrivateKey();
                console.log(JKSPrivateKey);

                if (euSign.IsPrivateKeyReaded()) {
                    euSign.ResetPrivateKey();
                }
                /* Імпорт сертифікатів ос. ключа */
                //LoadCertificates(certsFilePathes);
                /* Зчитування ключа */
                console.log(euSign.ReadPrivateKeyBinary(privateKey, password))

                //console.log(euSign.ShowOwnCertificate())
                setKeyRead(true);
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, file, JKSPrivateKeys, password]);

    //GetPrivateKeyOwnerInfo
    //GetKeyInfoBinary

    return (
        <Card title='Подпись файла' backgroundColor='#CBD4F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/4.png" />*/}
            <Timeline>
                <Timeline.Item title='ЕЦП' icon={IconCoding6}>
                    <TimelineItemFile onFileChange={setFile}
                                      accept='.dat,.pfx,.pk8,.zs2,.jks'
                                      hint='Особистий ключ (Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks)'/>
                    {file && JKSPrivateKeysList && (
                        <select className="form-select mb-1"
                                onChange={(ev) => setJKSPrivateKeys(ev.currentTarget.value)}
                                disabled={keyRead}>
                            {JKSPrivateKeysList.map((item) => <option>{item}</option>)}
                        </select>
                    )}
                    {file && !keyRead && <FormPassword title='считать' onEnter={setPassword}/>}
                </Timeline.Item>
            </Timeline>
        </Card>
    );
}

export default SignSign;
