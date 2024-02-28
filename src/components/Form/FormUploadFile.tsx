import React from 'react';

interface FileProps {
    title: string
    accept?: string
    onChange: (file: File) => void
}

function FormUploadFile(props: FileProps) {
    let fileReader: FileReader;
    let name: string;

    function handleFileRead() {
        const content = fileReader.result as ArrayBuffer;
        props.onChange(new File([new Blob([content])], name));
    }

    function handleFileChosen(e: any) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            name = file.name;
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsArrayBuffer(file);

            e.target.value = null;
        }
    }

    return (
        <label>
            <input type='file' className='d-none' onChange={handleFileChosen} accept={props.accept} />
            <span className="btn btn-secondary border-hover border-gray-400 btn-active-light-primary hover-elevate-up">
                {props.title}
            </span>
        </label>
    );
}

/*function arePropsEqual(prevProps: FileProps, nextProps: FileProps) {
    return prevProps.title === nextProps.title && prevProps.accept === nextProps.accept && prevProps.onChange === nextProps.onChange;
}*/

export default FormUploadFile;
