import { useContext, useEffect, useState } from "react";
import EUSignContext from '../../context/EUSign';
import Timeline from "../Timeline/Timeline";
import Card from "../Form/Card";
import SignInfo from "./SignInfo";
import SignSelect from "./SignSelect";
import Settings from "./Settings";
import { Cursor, FileDashed } from "@phosphor-icons/react";
import { PrivatKeyContext, PrivatKeyType } from '../../context/PrivatKey';

function PanelSign() {
    const { euSign } = useContext(EUSignContext);

    const [privateKey, setPrivateKey] = useState<PrivatKeyType>();
    const [signType, setSignType] = useState<number>();
    const [signAlgo, setSignAlgo] = useState<number>();
    const [signFormat, setSignFormat] = useState<number>();
    const [fileToSign, setFileToSign] = useState<File | null>();
    const [signedData, setSignedData] = useState<Uint8Array>();

    /* function Sign(data: Uint8Array, signAlgo: number, signType: number): Promise<string | undefined> {
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
    } */

    useEffect(() => {
        if (euSign && signType && signAlgo && signFormat && fileToSign) {
            (async function () {
                try {
                    //const data = await euSign.m_library.BASE64Decode(fileToSign.content);

                    //setSignedData(await Sign(data, signAlgo, signType));
                    setSignedData(undefined);
                } catch (e: any) {
                    console.log(e)
                }
            })();
        }
    }, [euSign, signType, signAlgo, signFormat, fileToSign]);

    return (
        <PrivatKeyContext.Provider value={{ privateKey, setPrivateKey }}>
            <Card title='Підписати файл' backgroundColor='#CBD4F4' className='bgi-no-repeat bgi-position-x-end' backgroundImage='url("/wave-bg-purple.svg")'>
                <Timeline>
                    <SignSelect />
                    {privateKey && (
                        <>
                            {/* <SignInfo endUserPrivateKey={privateKey} /> */}
                            <Settings onSignTypeSelect={setSignType} onSignAlgoSelect={setSignAlgo}
                                onSignFormatSelect={setSignFormat} />
                            <Timeline.Item title='Файл для підпису' icon={<Cursor />}>
                                <Timeline.FileSelect onFileChange={setFileToSign} />
                            </Timeline.Item>
                            {fileToSign && !signedData && <Timeline.Spinner title="Підписування файлу" icon={<FileDashed />} />}
                            {signedData && <Timeline.FileData title={'Результат'} data={signedData} fileName={'sign.p7s'} />}
                        </>
                    )}
                </Timeline>
            </Card>
        </PrivatKeyContext.Provider>
    );
}

export default PanelSign;
