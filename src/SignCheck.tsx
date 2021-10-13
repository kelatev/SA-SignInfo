import React, {useContext, useEffect, useState} from 'react';
import EUSignContext from './context/EUSign';
import Alert from "./components/Alert";
import File from "./components/File";
import SignInfoTime from "./components/SignInfoTime";
import {EndUserTimeInfo, EndUserCertificateInfoEx} from "./EUSign/types";
import SignInfoSigner from "./components/SignInfoSigner";

function SignCheck() {
    const {euSign} = useContext(EUSignContext);
    const [error, setError] = useState('');

    const [data, setData] = useState<string>();
    const [isSignedData, setIsSignedData] = useState<boolean>();
    const [signedData, setSignedData] = useState<string>();
    const [signsCount, setSignsCount] = useState<number>();
    const [signTime, setSignTime] = useState<EndUserTimeInfo | null>();
    const [signerInfo, setSignerInfo] = useState<EndUserCertificateInfoEx | null>();

    useEffect(() => {
        if (euSign && data) {
            try {
                const container = euSign.BASE64Decode(data)
                //console.log(euSign.GetSignsCount(content))
                //console.log(euSign.GetSignerInfo(0, content));
                console.log(euSign.EnumJKSPrivateKeys(container, 0));
                console.log(euSign.GetJKSPrivateKey(container, 'keyAlias'));
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign, data]);

    function handleFileChange(content: string) {
        setData(content);
        if (euSign == null) {
            return;
        }

        try {
            setIsSignedData(euSign.IsDataInSignedDataAvailable(content));
            if (isSignedData) {
                //Buffer.from(, 'base64')
                setSignedData(euSign.GetDataFromSignedData(content));
            }

            setSignsCount(euSign.GetSignsCount(content));

            setSignTime(euSign.GetSignTimeInfo(0, content));

            setSignerInfo(euSign.GetSignerInfo(0, content));
        } catch (e: any) {
            console.log(e)
            setError(e.toString());
        }
    }

    return (
        <div className='card' style={{backgroundColor: '#CBF0F4'}}>
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-3 mb-1">Проверка подписи</span>
                </h3>
            </div>
            <div className='card-body'>
                {error && <Alert text={error}/>}
                <File title='Выбрать подписанный файл' onChange={handleFileChange}/>
                {(isSignedData != null || signTime) && <hr/>}
                {isSignedData != null && (isSignedData ?
                    <div>Подписанные данные: присутствуют</div>
                    :
                    <div>Подписанные данные: отсутствуют</div>)
                }
                {signTime && <SignInfoTime data={signTime}/>}
                {signerInfo && <SignInfoSigner data={signerInfo}/>}
            </div>
        </div>
    );
}

export default SignCheck;
