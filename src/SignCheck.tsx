import React, {useContext, useEffect, useState} from 'react';
import EUSignContext from './context/EUSign';
import SignInfoTime from "./components/SignInfoTime";
import {EndUserTimeInfo, EndUserCertificateInfoEx} from "./EUSign/types";
import SignInfoSigner from "./components/SignInfoSigner";
import Timeline from "./components/Timeline";
import IconCoding6 from "./icons/duotune/coding/cod006.svg";
import TimelineItemFile from "./components/TimelineItemFile";
import {FileInterface} from "./components/FormFile";
import Card from "./components/Card";
import SignInfoData from "./components/SignInfoData";

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
            try {
                const container = euSign.BASE64Decode(file.content)
                //console.log(euSign.GetSignsCount(content))
                //console.log(euSign.GetSignerInfo(0, content));
                console.log(euSign.EnumJKSPrivateKeys(container, 0));
                console.log(euSign.GetJKSPrivateKey(container, 'keyAlias'));
            } catch (e: any) {
                console.log(e)
            }

            try {
                setIsSignedData(euSign.IsDataInSignedDataAvailable(file.content));
                setSignsCount(euSign.GetSignsCount(file.content));
                setSignTime(euSign.GetSignTimeInfo(0, file.content));
                setSignerInfo(euSign.GetSignerInfo(0, file.content));
            } catch (e: any) {
                console.log(e)
                setFileError(e.toString());
            }
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
            try {
                //Buffer.from(, 'base64')
                setSignedData(euSign.GetDataFromSignedData(file.content));
            } catch (e: any) {
                console.log(e)
                setFileError(e.toString());
            }
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
