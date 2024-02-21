import React, {useState, useEffect} from 'react';
import IconFil3 from "../../media/icons/duotune/files/fil003.svg";
import TimelineItem from "./TimelineItem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from "react-bootstrap/FormControl";
import {FormCheck} from 'react-bootstrap';
import {Buffer} from 'buffer';
import {saveAs} from "file-saver";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {fileSizeName} from "../../utils/fileSizeName";
import {decode} from 'windows-1251';

interface FormDataProps {
    title: string
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

function base64ToUtf8(text: string): string {
    return base64ToBuffer(text).toString('utf8');
  }

function base64ToBlob(text: string): Blob {
    const buffer = base64ToBuffer(text);
    return new Blob([buffer]);
}

function base64Size(text: string | undefined): string {
    const bytes = text ? base64ToBuffer(text).length : 0;
    return fileSizeName(bytes);
}

function TimelineFileData(props: FormDataProps) {
    const [base64Show, setBase64Show] = useState(false);
    const [asUtf8, setUtf8] = useState(false);
    const [asWin1251, setAsWin1251] = useState(false);
    const data = props.base64Data && props.showAsAscii ? base64ToAscii(props.base64Data) : props.base64Data ?? '';
    const [dataToShow, setDataToShow] = useState(data);

    const handleFileDownload = () => {
        if (props.base64Data) {
            saveAs(base64ToBlob(props.base64Data), props.fileName);
        }
    };
    const handleBase64Show = () => setBase64Show(true);
    const handleBase64Close = () => setBase64Show(false);
    const handleBase64Copy = () => alert('Скопіювати');
    const handleAsUtf8Change = () => setUtf8((prevState) => !prevState);
    const handleAsWin1251Change = () => setAsWin1251((prevState) => !prevState);

    useEffect(() => {        
        if (asUtf8) {
            const data1 = props.base64Data && props.showAsAscii ? base64ToUtf8(props.base64Data) : props.base64Data ?? '';
            setDataToShow(data1);
        } else {
            setDataToShow(data);
        }
    }, [props, data, asUtf8]);

    useEffect(() => {        
        if (asWin1251) {
            const data1 = props.base64Data && props.showAsAscii ? base64ToBuffer(props.base64Data) : props.base64Data ?? '';
            setDataToShow(decode(data1));
        } else {
            setDataToShow(data);
        }
    }, [props, data, asWin1251]);

    return (
        <TimelineItem title={props.title} icon={IconFil3}>
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
                            <FormCheck label={'as utf8'} onChange={handleAsUtf8Change} checked={asUtf8} />
                            <FormCheck label={'as win1251'} onChange={handleAsWin1251Change} checked={asWin1251} />
                            <FormControl as="textarea" value={dataToShow} rows={15} readOnly={true}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <CopyToClipboard text={dataToShow} onCopy={handleBase64Copy}>
                                <Button variant="secondary">Copy (view)</Button>
                            </CopyToClipboard>
                            <CopyToClipboard text={props.base64Data ?? data} onCopy={handleBase64Copy}>
                                <Button variant="secondary">Copy (origin)</Button>
                            </CopyToClipboard>
                            <Button onClick={handleBase64Close} variant="secondary">Закрити</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </TimelineItem>
    );
}

export default TimelineFileData;
