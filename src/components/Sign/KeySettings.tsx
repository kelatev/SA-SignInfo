import { useEffect, useState } from 'react';
import Timeline from "../Timeline/Timeline";
import Form from "react-bootstrap/Form";
//import { useEUSignContext } from '../../EUSign/EUSignContext';
import { useKeyContext } from './KeyContext';
import { GearSix, Pencil } from "@phosphor-icons/react";
import { SignType, SignAlgo, SignFormat } from './types'

interface SelectItem {
    key: number
    value: string
}

export const signTypeCAdESInt = 1;
export const signTypeCAdESExt = 2;

function Settings() {
    //const { currentLibrary } = useEUSignContext();
    const { privateKey, setPrivateKey } = useKeyContext();

    const [signAlgoType, setSignTypeList] = useState<SelectItem[]>();
    const [signAlgoList, setSignAlgoList] = useState<SelectItem[]>();
    const [signFormatList, setSignFormatList] = useState<SelectItem[]>();

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
        setPrivateKey(prevState => ({
            ...prevState, settings: {
                signType: SignType.Int,
                signAlgo: SignAlgo.DSTU4145,
                signFormat: SignFormat.CADES_X_LONG
            }
        }));
    }, [setPrivateKey]);

    const printValue = (text: string, key: React.Key) => {
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
                    {signAlgoType && signAlgoType.filter(i => i.key === privateKey?.settings?.signType).map(item => printValue(item.value, item.key))}
                    {signAlgoList && signAlgoList.filter(i => i.key === privateKey?.settings?.signAlgo).map((item) => printValue(item.value, item.key))}
                    {signFormatList && signFormatList.filter(i => i.key === privateKey?.settings?.signFormat).map((item) => printValue(item.value, item.key))}
                </div>
            </Timeline.Item>
        )
    }

    return (
        <Timeline.Item title="Налаштування електронного підпису" icon={<GearSix />}>
            <Form>
                <Form.Label >Тип підпису</Form.Label>
                {signAlgoType?.map((item) =>
                    <Form.Check
                        type={'radio'}
                        key={item.key}
                        label={item.value}
                        checked={privateKey?.settings?.signType === item.key}
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
