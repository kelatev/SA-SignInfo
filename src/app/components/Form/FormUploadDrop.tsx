import React, { useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import { FileToIFile } from '../../utils/encode';
import { IFile } from "../../utils/types";

interface FileProps {
    title: string
    onChange: (file: IFile) => void
    children?: React.ReactNode
}

type onDropType = (acceptedFiles: File[]) => void

function FormUploadDrop(props: FileProps) {
    const onDrop = useCallback<onDropType>(acceptedFiles => {
        acceptedFiles.forEach(async (file) => {
            props.onChange(await FileToIFile(file));
        })
    }, [props.onChange])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        noClick: true
    })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? <div className="d-flex align-items-center border border-dashed border-gray-300 rounded px-5 py-3 mt-3">
                <div className="ms-4 fw-semibold">
                    <span className="fs-6 text-hover-primary fw-bold">{props.title}</span>
                </div>
            </div> :
                props.children}
        </div>
    );
}

export default FormUploadDrop;