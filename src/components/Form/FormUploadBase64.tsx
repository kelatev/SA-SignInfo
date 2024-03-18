import React, { useRef, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import { dataURLtoFile } from '../../utils/encode'

interface Base64Props {
    title: string
    accept?: string
    fileName?: string
    onChange: (file: File) => void
}

function FormUploadBase64(props: Base64Props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const textInput = useRef<HTMLTextAreaElement>(null);

    function handleUpload() {
        if (!textInput.current) {
            return
        }

        const base64 = textInput.current.value;
        props.onChange(dataURLtoFile(base64, props.fileName ?? 'base64.bin'));
    }

    function handleClipboard() {
        try {
            navigator.clipboard.readText().then(value => {
                textInput.current && (textInput.current.value = value);
            });
        } catch (error) {
            console.log('Failed to read clipboard');
        }
    }

    return (
        <>
            <button onClick={handleShow}
                className="btn btn-secondary border-hover border-gray-400 btn-active-light-primary">{props.title}</button>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Base64</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl as="textarea" ref={textInput} />
                </Modal.Body>
                <Modal.Footer className='border-0 pt-0'>
                    <Button onClick={handleClose} variant="light">Закрити</Button>
                    <Button onClick={handleUpload} variant="primary">Завантажити</Button>
                    {navigator.clipboard && <Button onClick={handleClipboard} variant="primary">Вставити з буферу</Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormUploadBase64;
