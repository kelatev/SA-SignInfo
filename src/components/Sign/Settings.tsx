import React, {useContext, useEffect, useState} from 'react';
import IconCoding6 from "../../media/icons/duotune/coding/cod006.svg";
import Timeline from "../Timeline/Timeline";
import Form from "react-bootstrap/Form";
import EUSignContext from "../../context/EUSign";

interface SignSignSignBlockProps {
    onSignTypeSelect: (key: number) => void
    onSignAlgoSelect: (key: number) => void
    onSignFormatSelect: (key: number) => void
}

interface SelectItem {
    key: number
    value: string
}

export const signTypeCAdESInt = 1;
export const signTypeCAdESExt = 2;
export const signTypeASiCS = 3;

function Settings(props: SignSignSignBlockProps) {
    const {euSign} = useContext(EUSignContext);

    const [signAlgoType, setSignTypeList] = useState<SelectItem[]>();
    const [signAlgoList, setSignAlgoList] = useState<SelectItem[]>();
    const [signFormatList, setSignFormatList] = useState<SelectItem[]>();

    const [signType, setSignType] = useState<number>();
    const [signAlgo, setSignAlgo] = useState<number>();
    const [signFormat, setSignFormat] = useState<number>();

    useEffect(() => {
        if (euSign) {
            const list: SelectItem[] = [];
            list.push({
                key: signTypeCAdESInt,
                value: "Дані та підпис в одному файлі (формат CAdES)"
            });
            list.push({
                key: signTypeCAdESExt,
                value: "Дані та підпис окремими файлами (формат CAdES)"
            });
            /*list.push({
                key: signTypeASiCS,
                value: "Дані та підпис в архіві (формат ASiC-S)"
            });*/
            setSignTypeList(list);
        }
    }, [euSign]);

    useEffect(() => {
        if (euSign) {
            const list: SelectItem[] = [];
            list.push({
                key: euSign.m_library.CERT_KEY_TYPE_DSTU4145,
                value: "ДСТУ 4145"
            });
            list.push({
                key: euSign.m_library.CERT_KEY_TYPE_RSA,
                value: "RSA"
            });
            setSignAlgoList(list);
        }
    }, [euSign]);

    useEffect(() => {
        if (euSign) {
            const list: SelectItem[] = [];
            list.push({
                key: euSign.m_library.EU_SIGN_TYPE_CADES_X_LONG,
                value: "з повними даними для перевірки (CAdES-X-Long)"
            });
            list.push({
                key: euSign.m_library.EU_SIGN_TYPE_CADES_C,
                value: "з посиланням на повні дані для перевірки (CAdES-C)"
            });
            list.push({key: euSign.m_library.EU_SIGN_TYPE_CADES_T, value: "з позначкою часу від КЕП (CAdES-T)"});
            list.push({key: euSign.m_library.EU_SIGN_TYPE_CADES_BES, value: "базовий (CAdES-BES)"});
            setSignFormatList(list);
        }
    }, [euSign]);

    useEffect(() => {
        euSign && signType && props.onSignTypeSelect(signType);
    }, [euSign, signType, props]);

    useEffect(() => {
        euSign && signAlgo && props.onSignAlgoSelect(signAlgo);
    }, [euSign, signAlgo, props]);

    useEffect(() => {
        euSign && signFormat && props.onSignFormatSelect(signFormat);
    }, [euSign, signFormat, props]);

    useEffect(() => {
        if (euSign && signAlgoType && signAlgoList && signFormatList && !signType && !signAlgo && !signFormat) {
            setSignType(signAlgoType[0].key);
            setSignAlgo(signAlgoList[0].key);
            setSignFormat(signFormatList[0].key);
        }
    }, [euSign, signAlgoType, signAlgoList, signFormatList, props, signType, signAlgo, signFormat]);

    return (
        <Timeline.Item title="Создание електронной подписи" icon={IconCoding6}>
            <Form>
                <Form.Label>Тип підпису</Form.Label>
                {signAlgoType && signAlgoType.map((item, index) =>
                    <Form.Check
                        type={'radio'}
                        key={item.key}
                        label={item.value}
                        checked={signType === item.key}
                        onChange={() => setSignType(item.key)}
                    />
                )}

                <Form.Label>Алгоритм підпису</Form.Label>
                <Form.Select className="mb-1"
                             onChange={(ev) => setSignAlgo(parseInt(ev.currentTarget.value))}>
                    {signAlgoList && signAlgoList.map((item) => <option
                        key={item.key}>{item.value}</option>)}
                </Form.Select>

                <Form.Label>Формат підпису</Form.Label>
                <Form.Select className="mb-1"
                             onChange={(ev) => setSignFormat(parseInt(ev.currentTarget.value))}>
                    {signFormatList && signFormatList.map((item) => <option
                        key={item.key}>{item.value}</option>)}
                </Form.Select>
            </Form>
        </Timeline.Item>
    );
}

export default Settings;
