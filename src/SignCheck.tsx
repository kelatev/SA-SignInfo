import React, {useContext, useEffect, useState} from 'react';
import EUSignContext from './context/EUSign';
import SignInfoTime from "./components/SignInfoTime";
import {EndUserTimeInfo, EndUserCertificateInfoEx} from "./EUSign/types";
import SignInfoSigner from "./components/SignInfoSigner";
import Timeline from "./components/Timeline";
import IconCoding6 from "./icons/duotune/coding/cod006.svg";
import TimelineItem from "./components/TimelineItem";
import TimelineItemFile from "./components/TimelineItemFile";
import {FileInterface} from "./components/File";

function SignCheck() {
    const {euSign} = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [fileError, setFileError] = useState('');

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
        <div className='card' style={{backgroundColor: '#CBF0F4'}}>
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-3 mb-1">Проверка подписи</span>
                </h3>
            </div>
            <div className='card-body'>
                <div className="hover-scroll-y me-n6 pe-6" id="kt_sidebar_body" data-kt-scroll="true"
                     data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_sidebar_header, #kt_sidebar_footer"
                     data-kt-scroll-wrappers="#kt_page, #kt_sidebar, #kt_sidebar_body" data-kt-scroll-offset="0">
                    <Timeline>
                        <TimelineItem title='Подписанный файл' icon={IconCoding6}>
                            <TimelineItemFile onFileChange={setFile} error={fileError}/>
                        </TimelineItem>
                        {isSignedData != null && (isSignedData ?
                                <TimelineItem title='Подписанные данные' icon={IconCoding6}>
                                    присутствуют
                                </TimelineItem>
                                :
                                <TimelineItem title='Подписанные данные' icon={IconCoding6}>
                                    отсутствуют
                                </TimelineItem>
                        )
                        }
                        {signTime && <SignInfoTime data={signTime}/>}
                        {signerInfo && <SignInfoSigner data={signerInfo}/>}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}

export default SignCheck;
