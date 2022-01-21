import React, {useContext, useEffect, useState} from "react";
import EUSignContext from './context/EUSign';
import Timeline from "./components/Timeline";
import Card from "./components/Card";
import {EndUserJKSPrivateKey} from "./EUSign/types";
import SignSignInfoBlock from "./components/SignSignInfoBlock";
import SignSignFileBlock from "./components/SignSignFileBlock";
import SignSignSignBlock from "./components/SignSignSignBlock";
import {FileInterface} from "./components/FormFile";
import TimelineItemFile from "./components/TimelineItemFile";
import IconCoding6 from "./media/icons/duotune/coding/cod006.svg";
import SignInfoData from "./components/SignInfoData";

function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const [privateKey, setPrivateKey] = useState<EndUserJKSPrivateKey>();
    const [signType, setSignType] = useState<string>();
    const [signAlgo, setSignAlgo] = useState<string>();
    const [signFormat, setSignFormat] = useState<string>();
    const [fileToSign, setFileToSign] = useState<FileInterface | null>();
    const [signedData, setSignedData] = useState<string>();

    useEffect(() => {
        if (euSign && signType && signAlgo && signFormat && fileToSign) {
            (async function () {
                try {
                    const signanure = await euSign.Sign(await euSign.BASE64Decode(fileToSign.content));
                    //SignInternal
                    //CreateEmptySign
                    setSignedData(signanure);
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
                <SignSignFileBlock onKeyRead={setPrivateKey}/>
                {privateKey && <SignSignInfoBlock endUserJKSPrivateKey={privateKey}/>}
                {privateKey && <SignSignSignBlock onSignTypeSelect={setSignType} onSignAlgoSelect={setSignAlgo}
                                                  onSignFormatSelect={setSignFormat}/>}
                {privateKey && <Timeline.Item title='Файл для підпису' icon={IconCoding6}>
                    <TimelineItemFile onFileChange={setFileToSign}/>
                </Timeline.Item>}
                {signedData && <SignInfoData has={true} data={signedData}/>}
            </Timeline>
        </Card>
    );
}

export default SignSign;
