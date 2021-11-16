import React, {useRef, useState} from 'react';
import {FileInterface} from "./FormFile";

interface Base64Props {
    title: string
    accept?: string
    onChange: (file: FileInterface) => void
}

function FormBase64(props: Base64Props) {
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
            <button className="btn btn-hover-rise bg-white text-uppercase fs-7 fw-bolder"
                    onClick={handleShow}>{props.title}</button>
            <div className="modal fade" aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Base64</h5>
                        </div>
                        <div className="modal-body">
                            <textarea className='form-control' ref={textInput}></textarea>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-secondary' onClick={handleClose}>
                                Close
                            </button>
                            <button className='btn btn-primary' onClick={handleUpload}>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBase64;
