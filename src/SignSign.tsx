import React, {useContext, useEffect, useState} from "react";
import EUSignContext from './context/EUSign';
import Timeline from "./components/Timeline";
import Card from "./components/Card";
import {EndUserJKSPrivateKey} from "./EUSign/types";
import SignSignInfoBlock from "./components/SignSignInfoBlock";
import SignSignFileBlock from "./components/SignSignFileBlock";
import SignSignSignBlock, {signTypeCAdESExt, signTypeCAdESInt} from "./components/SignSignSignBlock";
import {FileInterface} from "./components/FormFile";
import TimelineItemFile from "./components/TimelineItemFile";
import IconCoding6 from "./media/icons/duotune/coding/cod006.svg";
import SignInfoData from "./components/SignInfoData";

function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const [privateKey, setPrivateKey] = useState<EndUserJKSPrivateKey>();
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
                    if (signType === signTypeCAdESExt) {
                        setSignedData(await euSign.Sign(data));
                    } else if (signType === signTypeCAdESInt) {
                        setSignedData(await euSign.Sign(data));
                        //setSignedData(await euSign.SignInternal(data));
                    }
                    //SignInternal
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
