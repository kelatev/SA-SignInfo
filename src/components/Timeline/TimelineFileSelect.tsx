import React, {useState} from "react";
import IconFil004 from "../../media/icons/duotune/files/fil004.svg";
import FormUploadFile from "../Form/FormUploadFile";
import AlertDanger from "../Form/AlertDanger";
import FormUploadBase64 from "../Form/FormUploadBase64";
import {FileInterface} from "../../types";
import DetailsFileAction from "./DetailsFileAction";

interface TimelineItemFileInterface {
    onFileChange: (file: FileInterface | null) => void
    accept?: string
    error?: string
}

const TimelineFileSelect: React.FC<TimelineItemFileInterface> = ({onFileChange, accept, error}) => {

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
                    icon={IconFil004}
                    file={file}
                    actionName={'Изменить файл'}
                    onActionClick={handleNewFile}/>
            ) : (
                <>
                    <FormUploadFile title='Выбрать файл' onChange={handleFileChange} accept={accept}/>
                    &nbsp;
                    <FormUploadBase64 title='base64' onChange={handleFileChange}/>
                </>
            )}

            {error && <div className='mt-1'><AlertDanger>{error}</AlertDanger></div>}
        </>
    );
};

export default TimelineFileSelect;
