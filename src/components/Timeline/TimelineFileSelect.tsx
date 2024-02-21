import React, {useState} from "react";
import FormUploadFile from "../Form/FormUploadFile";
import AlertDanger from "../Form/AlertDanger";
import FormUploadBase64 from "../Form/FormUploadBase64";
import {FileInterface} from "../../types";
import DetailsFileAction from "./DetailsFileAction";
import { File } from "@phosphor-icons/react";

interface TimelineItemFileInterface {
    onFileChange: (file: FileInterface | null) => void
    accept?: string
    error?: string
    icon?: React.ReactNode
}

const TimelineFileSelect: React.FC<TimelineItemFileInterface> = ({onFileChange, accept, error, icon}) => {

    const [file, setFile] = useState<FileInterface>();

    function handleFileChange(file: FileInterface) {
        setFile(file);
        onFileChange(file);
    }

    function handleNewFile() {
        setFile(undefined);
        onFileChange(null);
    }

    return (
        <>
            {file ? (
                <DetailsFileAction
                    icon={icon || <File size={30}/>}
                    file={file}
                    actionName={'Змінити файл'}
                    onActionClick={handleNewFile}/>
            ) : (
                <>
                    <FormUploadFile title='Обрати файл' onChange={handleFileChange} accept={accept}/>
                    &nbsp;
                    <FormUploadBase64 title='base64' onChange={handleFileChange}/>
                </>
            )}

            {error && <div className='mt-1'><AlertDanger>{error}</AlertDanger></div>}
        </>
    );
};

export default TimelineFileSelect;
