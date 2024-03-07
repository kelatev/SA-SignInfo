import React, { useRef, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";

interface Base64Props {
    title: string
    accept?: string
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
        fetch(`data:application/octet-stream;base64,${base64}`)
            .then(res => res.blob())
            .then(res => {
                props.onChange(new File(
                    [res],
                    'application.bin'
                ));
            })


    }

    return (
        <>
            <button onClick={handleShow}
                className="btn btn-secondary border-hover border-gray-400 btn-active-light-primary hover-elevate-up">{props.title}</button>
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
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormUploadBase64;
