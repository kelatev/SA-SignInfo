import { useEffect, useState } from 'react';
import Timeline from "../Timeline/Timeline";
import Form from "react-bootstrap/Form";
import { useEUSignContext } from '../../EUSign/EUSignContext';
import { useKeyContext } from './KeyContext';
import { GearSix } from "@phosphor-icons/react";
import { SignType, SignAlgo, SignFormat } from './types'

interface SelectItem {
    key: number
    value: string
}

export const signTypeCAdESInt = 1;
export const signTypeCAdESExt = 2;

function Settings() {
    const { currentLibrary } = useEUSignContext();
    const { privateKey, setPrivateKey } = useKeyContext();

    const [signAlgoType, setSignTypeList] = useState<SelectItem[]>();
    const [signAlgoList, setSignAlgoList] = useState<SelectItem[]>();
    const [signFormatList, setSignFormatList] = useState<SelectItem[]>();

    const [signType, setSignType] = useState<number>();
    const [signAlgo, setSignAlgo] = useState<number>();
    const [signFormat, setSignFormat] = useState<number>();

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setSignTypeList([
            {
                key: SignType.Int,
                value: "Дані та підпис в одному файлі (формат CAdES)"
            },
            {
                key: SignType.Ext,
                value: "Дані та підпис окремими файлами (формат CAdES)"
            }
        ]);
        setSignType(SignType.Int);
    }, []);

    useEffect(() => {
        const list: SelectItem[] = [];
        list.push({
            key: SignAlgo.DSTU4145,
            value: "ДСТУ 4145"
        });
        list.push({
            key: SignAlgo.RSA,
            value: "RSA"
        });
        list.push({
            key: SignAlgo.ECDSA,
            value: "ECDSA"
        });
        setSignAlgoList(list);
        setSignAlgo(SignAlgo.DSTU4145);
    }, []);

    useEffect(() => {
        setSignFormatList([
            {
                key: SignFormat.CADES_X_LONG,
                value: "з повними даними для перевірки (CAdES-X-Long)"
            },
            {
                key: SignFormat.CADES_C,
                value: "з посиланням на повні дані для перевірки (CAdES-C)"
            },
            { key: SignFormat.CADES_T, value: "з позначкою часу від КЕП (CAdES-T)" },
            { key: SignFormat.CADES_BES, value: "базовий (CAdES-BES)" }
        ]);
        setSignFormat(SignFormat.CADES_X_LONG);
    }, []);

    const printValue = (text: string) => {
        return <div><span className='badge badge-light-primary'>{text}</span></div>
    }

    if (!editMode) {
        return (
            <Timeline.Item title="Налаштування електронного підпису" icon={<GearSix />}>
                <div className="border border-dashed border-gray-300 rounded px-5 py-3 mb-5">
                    <button type='button' onClick={() => setEditMode(true)}>edit</button>
                    {signAlgoType && signAlgoType.filter(i => i.key === signType).map(i => printValue(i.value))}
                    {signAlgoList && signAlgoList.map((item) => printValue(item.value))}
                    {signFormatList && signFormatList.map((item) => printValue(item.value))}
                </div>
            </Timeline.Item>
        )
    }

    return (
        <Timeline.Item title="Налаштування електронного підпису" icon={<GearSix />}>
            <Form>
                <Form.Label >Тип підпису</Form.Label>
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
