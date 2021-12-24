import React, {useEffect, useState} from 'react';
import {EndUserCertificateInfoEx} from "../EUSign/types";
import IconCoding6 from "../media/icons/duotune/coding/cod006.svg";
import TimelineItem from "./TimelineItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface SignerProps {
    data: EndUserCertificateInfoEx
}

function SignInfoSigner(props: SignerProps) {
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
        <TimelineItem title='Подписант' icon={IconCoding6}>
            <div>
                issuer: {props.data.issuer} <br />
                subject: {props.data.subject} <br />
                subjEDRPOUCode: {props.data.subjEDRPOUCode} <br />
                subjDRFOCode: {props.data.subjDRFOCode} <br />
                certBeginTime: {props.data.certBeginTime.toString()} <br />
                certEndTime: {props.data.certEndTime.toString()} <br />
                isPrivKeyTimesAvail: {props.data.isPrivKeyTimesAvail.toString()} <br />
                privKeyBeginTime: {props.data.privKeyBeginTime.toString()} <br />
                privKeyEndTime: {props.data.privKeyEndTime.toString()} <br />
            </div>

            <Button onClick={handleShow} variant="light" size="sm" className="ms-2">json</Button>
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

export default SignInfoSigner;
