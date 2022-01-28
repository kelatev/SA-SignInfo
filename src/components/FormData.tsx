import React, {useState} from 'react';
import IconCoding6 from "../media/icons/duotune/coding/cod006.svg";
import IconFil3 from "../media/icons/duotune/files/fil003.svg";
import TimelineItem from "./TimelineItem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from "react-bootstrap/FormControl";
import {Buffer} from 'buffer';
import {saveAs} from "file-saver";
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface FormDataProps {
    title: string
    hint?: string
    data: string | undefined
    fileName?: string
}

function FormData(props: FormDataProps) {
    const [base64Show, setBase64Show] = useState(false);

    const handleFileDownload = () => {
        if (props.data) {
            const buffer = Buffer.from(props.data, 'base64');
            saveAs(new Blob([buffer]), props.fileName);
        }
    };
    const handleBase64Show = () => setBase64Show(true);
    const handleBase64Close = () => setBase64Show(false);
    const handleBase64Copy = () => {
        alert('Скопировано');
    };

    return (
        <TimelineItem title={props.title} icon={IconFil3}>
            {props.hint && <p>{props.hint}</p>}
            {props.data && (
                <>
                    {props.fileName && (
                        <Button onClick={handleFileDownload} variant="light" size="sm" className="ms-2">Скачать
                            файл</Button>
                    )}
                    <Button onClick={handleBase64Show} variant="light" size="sm" className="ms-2">base64</Button>
                    <Modal show={base64Show} onHide={handleBase64Close} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Base64</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormControl as="textarea" value={props.data} rows={8} readOnly={true}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <CopyToClipboard text={props.data} onCopy={handleBase64Copy}>
                                <Button variant="secondary">Copy text</Button>
                            </CopyToClipboard>
                            <Button onClick={handleBase64Close} variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </TimelineItem>
    );
}

export default FormData;
