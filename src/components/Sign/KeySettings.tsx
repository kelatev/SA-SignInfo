import { useEffect, useState } from 'react';
import Timeline from "../Timeline/Timeline";
import Form from "react-bootstrap/Form";
import { useKeyContext } from './KeyContext';
import { GearSix, Pencil } from "@phosphor-icons/react";
import { GetSupportedSignAlgos, GetSignContainerType } from '../../EUSign/EndUserUtil';
import { EndUserSignType, EndUserSignContainerType, EndUserCAdESType } from "../../EUSign/EndUserConstants";

interface SelectItem {
    value: number
    text: string
}

function Settings() {
    const { privateKey, setPrivateKey } = useKeyContext();

    const [signType, setSignTypeList] = useState<SelectItem[]>();
    const [signAlgo, setSignAlgoList] = useState<SelectItem[]>();
    const [signFormatList, setSignFormatList] = useState<SelectItem[]>();

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const signAlgos = GetSupportedSignAlgos(privateKey?.certificates ?? []);
        setSignAlgoList(signAlgos);

        //const aa = GetSignContainerType(privateKey?.certificates?.at(0)?.infoEx);

        setSignTypeList([
            {
                value: EndUserCAdESType.Enveloped,
                text: GetSignContainerType(EndUserSignContainerType.CAdES, EndUserCAdESType.Enveloped)
            },
            {
                value: EndUserCAdESType.Detached,
                text: GetSignContainerType(EndUserSignContainerType.CAdES, EndUserCAdESType.Detached)
            }
        ]);
        setSignFormatList([
            {
                value: EndUserSignType.CAdES_X_Long,
                text: "з повними даними для перевірки (CAdES-X-Long)"
            },
            {
                value: EndUserSignType.CAdES_C,
                text: "з посиланням на повні дані для перевірки (CAdES-C)"
            },
            { value: EndUserSignType.CAdES_T, text: "з позначкою часу від КЕП (CAdES-T)" },
            { value: EndUserSignType.CAdES_BES, text: "базовий (CAdES-BES)" }
        ]);
        setPrivateKey(prevState => ({
            ...prevState, settings: {
                signType: EndUserCAdESType.Enveloped,
                signAlgo: signAlgos[0].value,
                signFormat: EndUserSignType.CAdES_X_Long
            }
        }));
    }, [privateKey?.certificates, setPrivateKey]);

    const printValue = (text: string | undefined, key: React.Key) => {
        return <div key={key}><span className='badge badge-light-primary'>{text}</span></div>
    }

    const setSignType = (key: number) => {
        setPrivateKey(prevState => ({
            ...prevState, settings: {
                ...prevState?.settings,
                signType: key,
            }
        }));
    }
    const setSignAlgo = (key: number) => {
        setPrivateKey(prevState => ({
            ...prevState, settings: {
                ...prevState?.settings,
                signAlgo: key,
            }
        }));
    }
    const setSignFormat = (key: number) => {
        setPrivateKey(prevState => ({
            ...prevState, settings: {
                ...prevState?.settings,
                signFormat: key,
            }
        }));
    }

    if (!editMode) {
        return (
            <Timeline.Item title="Налаштування електронного підпису" icon={<GearSix />}>
                <div className="border border-dashed border-gray-300 rounded px-5 py-3 mb-5 position-relative">
                    <button type='button' className='btn btn-light btn-sm position-absolute top-0 end-0 m-1 d-none' onClick={() => setEditMode(true)}><Pencil /></button>
                    {signType && signType.filter(i => i.value === privateKey?.settings?.signType).map(item => printValue(item.text, item.value))}
                    {signAlgo && signAlgo.filter(i => i.value === privateKey?.settings?.signAlgo).map(item => printValue(item.text, item.value))}
                    {signFormatList && signFormatList.filter(i => i.value === privateKey?.settings?.signFormat).map((item) => printValue(item.text, item.value))}
                </div>
            </Timeline.Item>
        )
    }

    return (
        <Timeline.Item title="Налаштування електронного підпису" icon={<GearSix />}>
            <Form>
                <Form.Label >Тип підпису</Form.Label>
                {signType?.map((item) =>
                    <Form.Check
                        type={'radio'}
                        key={item.value}
                        label={item.text}
                        checked={privateKey?.settings?.signType === item.value}
                        onChange={() => setSignType(item.value)}
                    />
                )}

                <Form.Label>Тип алгоритму</Form.Label>
                <Form.Select className="mb-1"
                    onChange={(ev) => setSignAlgo(parseInt(ev.currentTarget.value))}>
                    {signAlgo && signAlgo.map((item) => <option
                        key={item.value}>{item.text}</option>)}
                </Form.Select>

                <Form.Label>Формат підпису</Form.Label>
                <Form.Select className="mb-1"
                    onChange={(ev) => setSignFormat(parseInt(ev.currentTarget.value))}>
                    {signFormatList && signFormatList.map((item) => <option
                        key={item.value}>{item.text}</option>)}
                </Form.Select>
            </Form>
        </Timeline.Item>
    );
}

export default Settings;
