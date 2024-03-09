import { useEffect, useState } from "react";
import Timeline from "../Timeline/Timeline";
import Card from "../Form/Card";
import KeyInfo from "./KeyInfo";
import KeySelect from "./KeySelect";
import KeySettings from "./KeySettings";
import { Cursor, FileDashed } from "@phosphor-icons/react";
import { KeyContext, PrivatKeyType } from './KeyContext';
import { useEUSignContext } from '../../EUSign/EUSignContext';
import { FileToUint8 } from "../../utils/encode";
import { SignType } from './types'

function PanelSign() {
    const { currentLibrary } = useEUSignContext();

    const [privateKey, setPrivateKey] = useState<PrivatKeyType>();
    const [fileToSign, setFileToSign] = useState<File | null>();
    const [signedData, setSignedData] = useState<Uint8Array>();

    useEffect(() => {
        if (currentLibrary?.library && fileToSign) {
            (async function () {
                try {
                    const data = await FileToUint8(fileToSign);
                    const result = await currentLibrary.library?.SignDataEx(1, data, privateKey?.settings?.signType === SignType.Ext, true);
                    setSignedData(result);
                } catch (e: any) {
                    console.log(e);
                    setSignedData(undefined);
                }
            })();
        }
    }, [currentLibrary?.library, privateKey?.settings?.signType, fileToSign]);

    return (
        <KeyContext.Provider value={{ privateKey, setPrivateKey }}>
            <Card title='Підписати файл' backgroundColor='#CBD4F4' className='bgi-no-repeat bgi-position-x-end' backgroundImage='url("/wave-bg-purple.svg")'>
                <Timeline>
                    <KeySelect />
                    {privateKey && (
                        <>
                            <KeyInfo />
                            <KeySettings />
                            <Timeline.Item title='Файл для підпису' icon={<Cursor />}>
                                <Timeline.FileSelect onFileChange={setFileToSign} />
                            </Timeline.Item>
                            {fileToSign && !signedData && <Timeline.Spinner title="Підписування файлу" icon={<FileDashed />} />}
                            {signedData && <Timeline.FileData title={'Результат'} data={signedData} fileName={'sign.p7s'} />}
                        </>
                    )}
                </Timeline>
            </Card>
        </KeyContext.Provider>
    );
}

export default PanelSign;
