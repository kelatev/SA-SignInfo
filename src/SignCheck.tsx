import React, {useContext, useEffect, useState} from 'react';
import EUSignContext from './context/EUSign';
import {FileInterface} from "./components/FormFile";
import {EndUserTimeInfo, EndUserCertificateInfoEx} from "./EUSign/types";
import Card from "./components/Card";
import Timeline from "./components/Timeline";
import TimelineItemFile from "./components/TimelineItemFile";
import SignInfoTime from "./components/SignInfoTime";
import SignInfoData from "./components/SignInfoData";
import SignInfoSigner from "./components/SignInfoSigner";
import IconCoding6 from "./media/icons/duotune/coding/cod006.svg";

function SignCheck() {
    const {euSign} = useContext(EUSignContext);

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
                    setIsSignedData(await euSign.IsDataInSignedDataAvailable(file.content));
                    setSignsCount(await euSign.GetSignsCount(file.content));
                    setSignTime(await euSign.GetSignTimeInfo(0, file.content));
                    setSignerInfo(await euSign.GetSignerInfo(0, file.content));
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
                    //Buffer.from(, 'base64')
                    setSignedData(await euSign.GetDataFromSignedData(file.content));
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
        <Card title='Проверка подписи' backgroundColor='#CBF0F4'>
            {/*<img className="mw-100 h-100px mb-7 mx-auto"
                 src="/media/illustrations/sigma-1/5.png" />*/}
            <Timeline>
                <Timeline.Item title='Подпись' icon={IconCoding6}>
                    <TimelineItemFile onFileChange={setFile} error={fileError}/>
                </Timeline.Item>
                {isSignedData != null && <SignInfoData has={isSignedData} data={signedData}/>}
                {signTime && <SignInfoTime data={signTime}/>}
                {signerInfo && <SignInfoSigner data={signerInfo}/>}
                {signsCount}
            </Timeline>
        </Card>
    );
}

export default SignCheck;
