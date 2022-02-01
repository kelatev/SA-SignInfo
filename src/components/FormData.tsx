import React, {useState} from 'react';
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
    base64Data: string | undefined
    showAsAscii?: boolean
    fileName?: string
}

function base64ToBuffer(text: string): Buffer {
    return Buffer.from(text, 'base64');
}

function base64ToAscii(text: string): string {
    return base64ToBuffer(text).toString('ascii');
}

function base64ToBlob(text: string): Blob {
    const buffer = base64ToBuffer(text);
    return new Blob([buffer]);
}

function base64Size(text: string | undefined): string {
    const bytes = text ? base64ToBuffer(text).length : 0;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

function FormData(props: FormDataProps) {
    const [base64Show, setBase64Show] = useState(false);
    const data = props.base64Data && props.showAsAscii ? base64ToAscii(props.base64Data) : props.base64Data;

    const handleFileDownload = () => {
        if (props.base64Data) {
            saveAs(base64ToBlob(props.base64Data), props.fileName);
        }
    };
    const handleBase64Show = () => setBase64Show(true);
    const handleBase64Close = () => setBase64Show(false);
    const handleBase64Copy = () => {
        alert('Скопировано');
    };

    return (
        <TimelineItem title={props.title} icon={IconFil3}>
            {props.hint && <span>{props.hint}</span>}
            {data && (
                <>
                    {props.fileName && (
                        <Button onClick={handleFileDownload} variant="light" size="sm" className="ms-2">Скачать
                            файл ({base64Size(props.base64Data)})</Button>
                    )}
                    <Button onClick={handleBase64Show} variant="light" size="sm"
                            className="ms-2">{props.showAsAscii ? 'ascii' : 'base64'}</Button>
                    <Modal show={base64Show} onHide={handleBase64Close} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Base64</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormControl as="textarea" value={data} rows={8} readOnly={true}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <CopyToClipboard text={data} onCopy={handleBase64Copy}>
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
