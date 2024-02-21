import React, { useContext, useEffect, useState } from "react";
import EUSignContext from '../../context/EUSign';
import Timeline from "../Timeline/Timeline";
import Card from "../Form/Card";
import { EndUserJKSPrivateKey } from "../../EUSign/types";
import SignInfo from "./SignInfo";
import SignSelect from "./SignSelect";
import Settings, { signTypeCAdESExt, signTypeCAdESInt } from "./Settings";
import TimelineFileSelect from "../Timeline/TimelineFileSelect";
import TimelineFileData from "../Timeline/TimelineFileData";
import { FileInterface } from "../../types";
import { Cursor } from "@phosphor-icons/react";

function PanelSign() {
    const { euSign } = useContext(EUSignContext);

    const [privateKey, setPrivateKey] = useState<EndUserJKSPrivateKey | null>();
    const [signType, setSignType] = useState<number>();
    const [signAlgo, setSignAlgo] = useState<number>();
    const [signFormat, setSignFormat] = useState<number>();
    const [fileToSign, setFileToSign] = useState<FileInterface | null>();
    const [signedData, setSignedData] = useState<string>();

    function Sign(data: Uint8Array, signAlgo: number, signType: number): Promise<string | undefined> {
        if (euSign) {
            if (signAlgo === euSign.m_library.m_library.CERT_KEY_TYPE_DSTU4145) {
                if (signType === signTypeCAdESExt) {
                    return euSign.m_library.Sign(data);
                } else if (signType === signTypeCAdESInt) {
                    return euSign.m_library.SignInternal(true, data);
                }
            } else if (signAlgo === euSign.m_library.m_library.CERT_KEY_TYPE_RSA) {
                return euSign.m_library.SignRSA(data, true, signType === signTypeCAdESExt);
            }
            //SignECDSA
            //CreateEmptySign
        }
        return Promise.resolve(undefined);
    }

    useEffect(() => {
        if (euSign && signType && signAlgo && signFormat && fileToSign) {
            (async function () {
                try {
                    const data = await euSign.m_library.BASE64Decode(fileToSign.content);

                    setSignedData(await Sign(data, signAlgo, signType));
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
    }, [euSign, signType, signAlgo, signFormat, fileToSign]);

    return (
        <Card title='Підписати файл' backgroundColor='#CBD4F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/4.png" />*/}
            <Timeline>
                <SignSelect onKeyRead={setPrivateKey} />
                {privateKey && (
                    <>
                        <SignInfo endUserJKSPrivateKey={privateKey} />
                        <Settings onSignTypeSelect={setSignType} onSignAlgoSelect={setSignAlgo}
                            onSignFormatSelect={setSignFormat} />
                        <Timeline.Item title='Файл для підпису' icon={<Cursor />}>
                            <TimelineFileSelect onFileChange={setFileToSign} />
                        </Timeline.Item>
                    </>
                )}
                {signedData && <TimelineFileData title={'Результат'} base64Data={signedData} fileName={'sign.p7s'} />}
            </Timeline>
        </Card>
    );
}

export default PanelSign;
