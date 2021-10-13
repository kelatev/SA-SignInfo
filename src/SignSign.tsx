import React, {useContext, useState, useRef, useEffect} from "react";
import EUSignContext from './context/EUSign';
import IconCoding6 from './icons/duotune/coding/cod006.svg';
import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";
import TimelineItemFile from "./components/TimelineItemFile";
import {FileInterface} from "./components/File";
import Password from "./components/Password";


function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const [file, setFile] = useState<FileInterface | null>();
    const [password, setPassword] = useState<string | null>();

    useEffect(() => {
        if (euSign && file?.content) {
            try {
                const container = euSign.BASE64Decode(file.content)
                //console.log(euSign.GetSignsCount(content))
                //console.log(euSign.GetSignerInfo(0, content));
                console.log(euSign.EnumJKSPrivateKeys(container, 0));
                console.log(euSign.GetJKSPrivateKey(container, 'pb_sign_3374608313'));
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, file]);

    useEffect(() => {
        if (euSign && file?.content && password) {
            try {
                euSign.ResetPrivateKey();
                console.log(euSign.ReadPrivateKeyBinary(euSign.BASE64Decode(file?.content), password))
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, file, password]);

    //ResetPrivateKey
    //ReadPrivateKeyBinary(euSign.BASE64Decode(

    //GetPrivateKeyOwnerInfo
    //GetKeyInfoBinary

    return (
        <div className='card' style={{backgroundColor: '#CBD4F4'}}>
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-3 mb-1">Подпись файла</span>
                </h3>
            </div>
            <div className='card-body'>
                <div className="hover-scroll-y me-n6 pe-6" id="kt_sidebar_body" data-kt-scroll="true"
                     data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_sidebar_header, #kt_sidebar_footer"
                     data-kt-scroll-wrappers="#kt_page, #kt_sidebar, #kt_sidebar_body" data-kt-scroll-offset="0">
                    <Timeline>
                        <TimelineItem title='ЕЦП' icon={IconCoding6}>
                            <TimelineItemFile onFileChange={setFile}
                                              accept='.dat,.pfx,.pk8,.zs2,.jks'
                                              hint='Особистий ключ (Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks)'/>
                            {file && password == null && <Password title='считать' onEnter={setPassword} />}
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
}

export default SignSign;
