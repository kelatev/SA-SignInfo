import React from 'react';
import { IFile } from "../../../utils/types";
import { FileToIFile } from '../../../utils/encode';

interface FileProps {
    title: string
    accept?: string
    onChange: (file: IFile) => void
}

function FormUploadFile(props: FileProps) {
    function handleFileChosen(e: any) {
        if (e.target.files && e.target.files[0]) {
            FileToIFile(e.target.files[0]).then(data => props.onChange(data));
            e.target.value = null;
        }
    }

    return (
        <label>
            <input type='file' className='d-none' onChange={handleFileChosen} accept={props.accept} />
            <span className="btn btn-light btn-bordered btn-active-light-primary border-hover-primary">
                {props.title}
            </span>
        </label>
    );
}

/*function arePropsEqual(prevProps: FileProps, nextProps: FileProps) {
    return prevProps.title === nextProps.title && prevProps.accept === nextProps.accept && prevProps.onChange === nextProps.onChange;
}*/

export default FormUploadFile;
