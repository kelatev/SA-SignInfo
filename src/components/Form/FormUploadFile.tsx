import React from 'react';

interface FileProps {
    title: string
    accept?: string
    onChange: (file: File) => void
}

function FormUploadFile(props: FileProps) {
    function handleFileChosen(e: any) {
        if (e.target.files && e.target.files[0]) {
            props.onChange(e.target.files[0]);
            e.target.value = null;
        }
    }

    return (
        <label>
            <input type='file' className='d-none' onChange={handleFileChosen} accept={props.accept} />
            <span className="btn bts-sm btn-secondary border-hover border-gray-400 btn-active-light-primary">
                {props.title}
            </span>
        </label>
    );
}

/*function arePropsEqual(prevProps: FileProps, nextProps: FileProps) {
    return prevProps.title === nextProps.title && prevProps.accept === nextProps.accept && prevProps.onChange === nextProps.onChange;
}*/

export default FormUploadFile;
