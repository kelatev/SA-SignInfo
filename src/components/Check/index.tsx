import React, { useContext, useEffect, useState } from 'react';
import EUSignContext from '../../context/EUSign';
import { EndUserTimeInfo, EndUserCertificateInfoEx } from "../../EUSign/types";
import Card from "../Form/Card";
import Timeline from "../Timeline/Timeline";
import TimelineFileSelect from "../Timeline/TimelineFileSelect";
import InfoSigner from "./InfoSigner";
import TimelineFileData from "../Timeline/TimelineFileData";
import { Buffer } from 'buffer';
import { FileInterface } from "../../types";
import { Cursor } from "@phosphor-icons/react";

function PanelCheck() {
    const { euSign } = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [fileError, setFileError] = useState<string>();

    const [isSignedData, setIsSignedData] = useState<boolean>();
    const [signedData, setSignedData] = useState<string>();
    const [signsCount, setSignsCount] = useState<number>();
    const [signTime, setSignTime] = useState<EndUserTimeInfo | null>();
    const [signerInfo, setSignerInfo] = useState<EndUserCertificateInfoEx | null>();

    useEffect(() => {
        if (euSign && file?.content) {
            (async function () {
                try {
                    setIsSignedData(await euSign.m_library.IsDataInSignedDataAvailable(file.content));
                    setSignsCount(await euSign.m_library.GetSignsCount(file.content));
                    setSignTime(await euSign.m_library.GetSignTimeInfo(0, file.content));
                    setSignerInfo(await euSign.m_library.GetSignerInfo(0, file.content));
                } catch (e: any) {
                    console.log(e)
                    setFileError(e.toString());
                }
            })();
        } else {
            setFileError(undefined);
            setIsSignedData(undefined);
            setSignsCount(undefined);
            setSignTime(undefined);
            setSignerInfo(undefined);
        }
    }, [euSign, file]);

    useEffect(() => {
        if (euSign && file?.content && isSignedData) {
            (async function () {
                try {
                    const data = await euSign.m_library.GetDataFromSignedData(file.content);
                    setSignedData(Buffer.from(data).toString('base64'));
                } catch (e: any) {
                    console.log(e)
                    setFileError(e.toString());
                }
            })();
        } else {
            setSignedData(undefined);
        }
    }, [euSign, file, isSignedData]);

    return (
        <Card title='Перевірка підпису' backgroundColor='#CBF0F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/5.png" />*/}
            <Timeline>
                <Timeline.Item title='Підпис' icon={<Cursor />}>
                    <TimelineFileSelect onFileChange={setFile} error={fileError} />
                </Timeline.Item>
                {isSignedData === true &&
                    <TimelineFileData title={'Файл без підпису'} base64Data={signedData} showAsAscii={true} fileName={file?.name.replace('.p7s', '')} />}
                {signerInfo && signTime && <InfoSigner data={signerInfo} time={signTime} />}
            </Timeline>
        </Card>
    );
}

export default PanelCheck;
