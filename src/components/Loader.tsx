import React from 'react';
import Modal from "react-bootstrap/Modal";

interface Props {
    error?: string
}

function Loader(props: Props) {
    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Завантаження бібліотеки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!props.error && (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {props.error ? <div dangerouslySetInnerHTML={{ __html: props.error }} /> : ''}
            </Modal.Body>
        </Modal>
    );
}

export default Loader;
