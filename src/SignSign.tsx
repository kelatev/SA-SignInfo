import React, {useContext, useState, useRef, useEffect} from "react";
import EUSignContext from './context/EUSign';
import File from "./components/File";
import IconCoding6 from './icons/duotune/coding/cod006.svg';
import IconFil004 from './icons/duotune/files/fil004.svg';

const Timeline: React.FC = ({children}) => {
    return (
        <div className="timeline">
            {children}
        </div>
    );
}

interface TimelineItemInterface {
    icon: string
    title: string
    time?: string
}

const TimelineItem: React.FC<TimelineItemInterface> = ({icon, title, time, children}) => {
    return (
        /*begin::Timeline item*/
        <div className="timeline-item">
            {/*begin::Timeline line*/}
            <div className="timeline-line w-40px"></div>
            {/*end::Timeline line*/}
            {/*begin::Timeline icon*/}
            <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                <div className="symbol-label">
                    <span className="svg-icon svg-icon-2"><img src={icon} alt="logo"/></span>
                </div>
            </div>
            {/*end::Timeline icon*/}
            {/*begin::Timeline content*/}
            <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-bold mb-2 text-white">{title}</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    {
                        time && (
                            <div className="d-flex align-items-center mt-1 fs-6">
                                {/*begin::Info*/}
                                <div className="text-white opacity-50 me-2 fs-7">{time}</div>
                                {/*end::Info*/}
                            </div>
                        )
                    }
                    {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="pb-5">
                    {children}
                </div>
                {/*end::Timeline details*/}
            </div>
            {/*end::Timeline content*/}
        </div>
    );
};

interface TimelineItemFileInterface {
    name: string
    size: number
}

const TimelineItemFile: React.FC<TimelineItemFileInterface> = ({name, size}) => {
    return (
        <div className="d-flex flex-stack border rounded p-4 mb-5">
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center me-2">
                {/*begin::Icon*/}
                <img alt="" className="w-30px me-3" src={IconFil004}/>
                {/*end::Icon*/}
                {/*begin::Info*/}
                <div className="d-flex flex-stack">
                    {/*begin::Info*/}
                    <div className="d-flex flex-column me-2">
                        {/*begin::Desc*/}
                        <a href="#" className="fs-7 text-white text-hover-success fw-bolder">{name}</a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">{size}mb</div>
                        {/*end::Number*/}
                    </div>
                    {/*end::Info*/}
                </div>
                {/*begin::Info*/}
            </div>
            {/*end::Wrapper*/}
            {/*-begin::Action*/}
            <a href="#" className="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">View</a>
            {/*end::Action*/}
        </div>
    );
};

function SignSign() {
    const {euSign} = useContext(EUSignContext);

    const passRef = useRef<HTMLInputElement>(null);

    const [sign, setSign] = useState<{ content: string, name: string, size: number }>();
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (euSign && sign?.content) {
            try {
                const container = euSign.BASE64Decode(sign.content)
                //console.log(euSign.GetSignsCount(content))
                //console.log(euSign.GetSignerInfo(0, content));
                console.log(euSign.EnumJKSPrivateKeys(container, 0));
                console.log(euSign.GetJKSPrivateKey(container, 'pb_sign_3374608313'));
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, sign]);

    useEffect(() => {
        if (euSign && sign?.content && password) {
            try {
                euSign.ResetPrivateKey();
                console.log(euSign.ReadPrivateKeyBinary(euSign.BASE64Decode(sign?.content), password))
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, sign, password]);

    function handleFileSignChange(content: any, name: string, size: number) {
        setSign({content, name, size});
    }

    function handleSetPassword() {
        if (passRef.current) {
            setPassword(passRef.current.value);
        }
    }

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
                        {sign ? (
                            <TimelineItem title='ЕЦП' icon={IconCoding6}>
                                <TimelineItemFile name={sign.name} size={sign.size}/>
                                <input type='password' ref={passRef}/>
                                <button type='button' className='btn btn-light' onClick={handleSetPassword}>считать
                                </button>
                            </TimelineItem>
                        ) : (
                            <TimelineItem title='ЕЦП' icon={IconCoding6}>
                                <File title='Выбрать файл' onChange={handleFileSignChange}
                                      accept='.dat,.pfx,.pk8,.zs2,.jks'/>
                            </TimelineItem>
                        )}

                    </Timeline>
                </div>
            </div>
        </div>
    );
}

export default SignSign;
