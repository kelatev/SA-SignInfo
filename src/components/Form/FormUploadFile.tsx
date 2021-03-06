import React from 'react';
import {FileInterface} from "../../types";

interface FileProps {
    title: string
    accept?: string
    onChange: (file: FileInterface) => void
}

function FormUploadFile(props: FileProps) {
    let fileReader: FileReader;
    let name: string;
    let size: number;

    function handleFileRead() {
        let content: any = fileReader.result;
        content = content.substring(content.indexOf(';base64,') + 8);

        props.onChange({content, name, size});
    }

    function handleFileChosen(e: any) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            name = file.name;
            size = file.size;
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsDataURL(file);

            e.target.value = null;
        }
    }

    return (
        <label>
            <input type='file' className='d-none' onChange={handleFileChosen} accept={props.accept}/>
            <span className="btn btn-hover-rise bg-white fs-7 fw-bolder">
                {props.title}
            </span>
        </label>
    );
}

/*function arePropsEqual(prevProps: FileProps, nextProps: FileProps) {
    return prevProps.title === nextProps.title && prevProps.accept === nextProps.accept && prevProps.onChange === nextProps.onChange;
}*/

export default FormUploadFile;
