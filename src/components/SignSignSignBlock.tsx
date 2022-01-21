import React, {useContext, useEffect, useState} from 'react';
import IconCoding6 from "../media/icons/duotune/coding/cod006.svg";
import Timeline from "./Timeline";
import Form from "react-bootstrap/Form";
import EUSignContext from "../context/EUSign";

interface SignSignSignBlockProps {
    onSignTypeSelect: (key: string) => void
    onSignAlgoSelect: (key: string) => void
    onSignFormatSelect: (key: string) => void
}

interface SelectItem {
    key: number
    value: string
}

function SignSignSignBlock(props: SignSignSignBlockProps) {
    const {euSign} = useContext(EUSignContext);

    const [signAlgoList, setSignAlgoList] = useState<SelectItem[]>();
    const [signFormatList, setSignFormatList] = useState<SelectItem[]>();

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

    return (
        <Timeline.Item title="Создание електронной подписи" icon={IconCoding6}>
            <Form>
                <Form.Label>Тип підпису</Form.Label>
                <Form.Check
                    type={'radio'}
                    id={'signTypeCAdESIntRadioButtonInput'}
                    label={'Дані та підпис в одному файлі (формат CAdES)'}
                    checked={true}
                    onChange={(ev) => props.onSignTypeSelect(ev.currentTarget.value)}
                />
                <Form.Check
                    type={'radio'}
                    id={'signTypeCAdESExtRadioButtonInput'}
                    label={'Дані та підпис окремими файлами (формат CAdES)'}
                    onChange={(ev) => props.onSignTypeSelect(ev.currentTarget.value)}
                />
                <Form.Check
                    type={'radio'}
                    id={'signTypeASiCSRadioButtonInput'}
                    label={'Дані та підпис в архіві (формат ASiC-S)'}
                    onChange={(ev) => props.onSignTypeSelect(ev.currentTarget.value)}
                />

                <Form.Label>Алгоритм підпису</Form.Label>
                <Form.Select className="mb-1"
                             onChange={(ev) => props.onSignAlgoSelect(ev.currentTarget.value)}>
                    {signAlgoList && signAlgoList.map((item) => <option
                        key={item.key}>{item.value}</option>)}
                </Form.Select>

                <Form.Label>Формат підпису</Form.Label>
                <Form.Select className="mb-1"
                             onChange={(ev) => props.onSignFormatSelect(ev.currentTarget.value)}>
                    {signFormatList && signFormatList.map((item) => <option
                        key={item.key}>{item.value}</option>)}
                </Form.Select>
            </Form>
        </Timeline.Item>
    );
}

export default SignSignSignBlock;
