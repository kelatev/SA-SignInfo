import React, { useState, useEffect } from 'react';
import TimelineItem from "./TimelineItem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from "react-bootstrap/FormControl";
import { FormCheck } from 'react-bootstrap';
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { fileSizeName } from "../../utils/fileSizeName";
import { decode } from 'windows-1251';
import { File, Copy } from "@phosphor-icons/react";

interface FormDataProps {
    title: string
    data: Uint8Array | undefined
    fileName?: string
}

function toBase64(data: Uint8Array | undefined): string {
    return (data && Buffer.from(data).toString('base64')) ?? '';
}
function toAscii(data: Uint8Array | undefined): string {
    return (data && Buffer.from(data).toString('ascii')) ?? '';
}

function toUtf8(data: Uint8Array | undefined): string {
    return (data && Buffer.from(data).toString('utf8')) ?? '';
}

function toWin1251(data: Uint8Array | undefined): string {
    return (data && decode(data)) ?? '';
}

function getSize(data: Uint8Array | undefined): string {
    const bytes = data ? Buffer.from(data).length : 0;
    return fileSizeName(bytes);
}

function TimelineFileData(props: FormDataProps) {
    const [base64Show, setBase64Show] = useState(false);
    const [encode, setEncode] = useState<'ascii' | 'utf8' | 'win1251' | null>(null);
    const content = toBase64(props.data) ?? '';
    const [dataToShow, setDataToShow] = useState<string>(content);

    const handleFileDownload = () => {
        if (props.data) {
            saveAs(new Blob([props.data]), props.fileName);
        }
    };
    const handleShow = () => setBase64Show(true);
    const handleClose = () => setBase64Show(false);
    const handleCopy = () => alert('Скопіювати');

    useEffect(() => {
        switch (encode) {
            case 'ascii':
                setDataToShow(toAscii(props.data));
                break;
            case 'utf8':
                setDataToShow(toUtf8(props.data));
                break;
            case 'win1251':
                setDataToShow(toWin1251(props.data));
                break;
            default:
                setDataToShow(content);
                break;
        }
    }, [props, content, encode]);

    return (
        <TimelineItem title={props.title} icon={<File />}>
            {content && (
                <>
                    {props.fileName && (
                        <Button onClick={handleFileDownload} variant="light" size="sm" className="ms-2 btn-active-light-primary">Скачати
                            файл ({getSize(props.data)})</Button>
                    )}
                    <Button onClick={handleShow} variant="light" size="sm" className="ms-2 btn-active-light-primary">Вміст</Button>
                    <Modal show={base64Show} onHide={handleClose} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Вміст</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-5 d-flex">
                                <FormCheck type='radio' label={'base64'} className='me-10' onChange={() => setEncode(null)} checked={encode == null} />
                                <FormCheck type='radio' label={'ascii'} className='me-10' onChange={() => setEncode('ascii')} checked={encode === 'ascii'} />
                                <FormCheck type='radio' label={'utf8'} className='me-10' onChange={() => setEncode('utf8')} checked={encode === 'utf8'} />
                                <FormCheck type='radio' label={'win1251'} className='me-10' onChange={() => setEncode('win1251')} checked={encode === 'win1251'} />
                            </div>
                            <FormControl as="textarea" value={dataToShow} rows={13} readOnly={true} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose} variant="link" className='me-6'>Закрити</Button>
                            <CopyToClipboard text={dataToShow} onCopy={handleCopy}>
                                <Button variant="secondary"><Copy className='me-3' />Copy</Button>
                            </CopyToClipboard>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </TimelineItem>
    );
}

export default TimelineFileData;
