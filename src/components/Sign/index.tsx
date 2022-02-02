import React, {useContext, useEffect, useState} from "react";
import EUSignContext from '../../context/EUSign';
import Timeline from "../Timeline/Timeline";
import Card from "../Form/Card";
import {EndUserJKSPrivateKey} from "../../EUSign/types";
import SignInfo from "./SignInfo";
import SignSelect from "./SignSelect";
import Settings, {signTypeCAdESExt, signTypeCAdESInt} from "./Settings";
import TimelineFileSelect from "../Timeline/TimelineFileSelect";
import IconCoding6 from "../../media/icons/duotune/coding/cod006.svg";
import TimelineFileData from "../Timeline/TimelineFileData";
import {FileInterface} from "../../types";

function PanelSign() {
    const {euSign} = useContext(EUSignContext);

    const [privateKey, setPrivateKey] = useState<EndUserJKSPrivateKey | null>();
    const [signType, setSignType] = useState<number>();
    const [signAlgo, setSignAlgo] = useState<number>();
    const [signFormat, setSignFormat] = useState<number>();
    const [fileToSign, setFileToSign] = useState<FileInterface | null>();
    const [signedData, setSignedData] = useState<string>();

    useEffect(() => {
        if (euSign && signType && signAlgo && signFormat && fileToSign) {
            (async function () {
                try {
                    const data = await euSign.BASE64Decode(fileToSign.content);

                    if (signAlgo === euSign.m_library.CERT_KEY_TYPE_DSTU4145) {
                        if (signType === signTypeCAdESExt) {
                            setSignedData(await euSign.Sign(data));
                        } else if (signType === signTypeCAdESInt) {
                            setSignedData(await euSign.SignInternal(true, data));
                        }
                    } else if (signAlgo === euSign.m_library.CERT_KEY_TYPE_RSA) {
                        setSignedData(await euSign.SignRSA(data, true, signType === signTypeCAdESExt));
                    }
                    //SignECDSA

                    //CreateEmptySign
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
    }, [euSign, signType, signAlgo, signFormat, fileToSign]);

    return (
        <Card title='Подпись файла' backgroundColor='#CBD4F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/4.png" />*/}
            <Timeline>
                <SignSelect onKeyRead={setPrivateKey}/>
                {privateKey && (
                    <>
                        <SignInfo endUserJKSPrivateKey={privateKey}/>
                        <Settings onSignTypeSelect={setSignType} onSignAlgoSelect={setSignAlgo}
                                  onSignFormatSelect={setSignFormat}/>
                        <Timeline.Item title='Файл для підпису' icon={IconCoding6}>
                            <TimelineFileSelect onFileChange={setFileToSign}/>
                        </Timeline.Item>
                    </>
                )}
                {signedData && <TimelineFileData title={'Результат'} base64Data={signedData} fileName={'sign.p7k'}/>}
            </Timeline>
        </Card>
    );
}

export default PanelSign;
