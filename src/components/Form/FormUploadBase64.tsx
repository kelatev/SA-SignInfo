import React, {useRef, useState} from 'react';
import {FileInterface} from "../../types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";

interface Base64Props {
    title: string
    accept?: string
    onChange: (file: FileInterface) => void
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
        const content = textInput.current.value;
        //content = content.substring(content.indexOf(';base64,') + 8);

        props.onChange({
            content: content,
            name: 'application.bin',
            size: (content.length - 814) / 1.37
        });
    }

    return (
        <>
            <Button onClick={handleShow} variant="none"
                    className="btn btn-secondary btn-active-light-primary hover-elevate-up">{props.title}</Button>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Base64</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl as="textarea" ref={textInput} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="light">Закрити</Button>
                    <Button onClick={handleUpload} variant="primary">Закантажити</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormUploadBase64;
