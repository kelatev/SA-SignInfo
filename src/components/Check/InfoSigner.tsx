import React, {useContext, useEffect, useState} from 'react';
import {EndUserCertificateInfoEx, EndUserTimeInfo} from "../../EUSign/types";
import IconCoding6 from "../../media/icons/duotune/coding/cod006.svg";
import TimelineItem from "../Timeline/TimelineItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import EUSignContext from "../../context/EUSign";

interface SignerProps {
    data: EndUserCertificateInfoEx,
    time: EndUserTimeInfo
}

const RowDescription: React.FC<{ title: string, description: string }> = ({title, description}) => {
    return (
        <div className="d-flex align-items-sm-center mb-2">
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                <div className="flex-grow-1 me-2">
                    <span className="text-muted fw-bold d-block fs-7">{title}</span>
                    <span className="text-gray-800 text-hover-primary fs-6 fw-bolder">{description}</span>
                </div>
            </div>
        </div>
    );
}

function InfoSigner(props: SignerProps) {
    const {euSign} = useContext(EUSignContext);

    const [show, setShow] = useState(false);
    const [json, setJson] = useState<string>();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let text = JSON.stringify(props.data);
        text = text.replace(/{/g, '{\n');
        text = text.replace(/}/g, '\n}');
        text = text.replace(/,/g, ',\n');
        setJson(text);
    }, [props.data]);

    return (
        <TimelineItem title='Підписувачі' icon={IconCoding6}>
            <RowDescription title={'Підписувач'} description={props.data.GetSubjCN()}/>
            <RowDescription title={'П.І.Б.'} description={props.data.GetSubjFullName()}/>
            {props.data.GetSubjDRFOCode() &&
                <RowDescription title={'РНОКПП'} description={props.data.GetSubjDRFOCode()}/>}
            <RowDescription title={'Організація (установа)'} description={props.data.GetSubjOrg()}/>
            {props.data.GetSubjEDRPOUCode() &&
                <RowDescription title={'Код ЄДРПОУ'} description={props.data.GetSubjEDRPOUCode()}/>}
            <RowDescription title={'Час підпису (підтверджено кваліфікованою позначкою часу для даних від Надавача)'}
                            description={props.time.GetTime().toString()}/>
            <RowDescription title={'Сертифікат виданий'} description={props.data.GetIssuerCN()}/>
            <RowDescription title={'Серійний номер'} description={props.data.GetSerial()}/>
            {/*<RowDescription title={'Тип носія особистого ключа'} description={''}/>*/}
            <RowDescription title={'Алгоритм підпису'} description={euSign?.GetSignAlgo(props.data) || ''}/>
            {/*<RowDescription title={'Тип підпису'} description={''}/>
            <RowDescription title={'Тип контейнера'} description={''}/>
            <RowDescription title={'Формат підпису'} description={''}/>
            <RowDescription title={'Сертифікат'} description={''}/>*/}
            {/*
            keyUsageType
            subjType
            subjSubType*/}

            <Button onClick={handleShow} variant="light" size="sm">json</Button>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Подписант</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SyntaxHighlighter language="json" style={darcula} wrapLines={true} wrapLongLines={true}>
                        {json}
                    </SyntaxHighlighter>
                </Modal.Body>
            </Modal>
        </TimelineItem>
    );
}

export default InfoSigner;
