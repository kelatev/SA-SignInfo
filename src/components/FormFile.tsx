import React from 'react';

export interface FileInterface {
    content: string
    name: string
    size: number
}

interface FileProps {
    title: string
    accept?: string
    onChange: (file: FileInterface) => void
}

function FormFile(props: FileProps) {
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
            <span className="btn btn-hover-rise bg-white text-uppercase fs-7 fw-bolder">
                {props.title}
            </span>
        </label>
    );
}

export default FormFile;
