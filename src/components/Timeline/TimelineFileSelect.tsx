import React, { useState, useEffect } from "react";
import FormUploadFile from "../Form/FormUploadFile";
import FormUploadDrop from "../Form/FormUploadDrop";
import AlertDanger from "../Form/AlertDanger";
import FormUploadBase64 from "../Form/FormUploadBase64";
import DetailsFileAction from "./DetailsFileAction";
import { File as IconFile } from "@phosphor-icons/react";
import { Uint8toBase64, dataURLtoFile } from '../../utils/encode';
import { IFile, emptyIFile } from "../../utils/types";

interface TimelineItemFileInterface {
    onFileChange: (file: IFile | null) => void
    storagePrefix?: string
    accept?: string
    error?: string
    icon?: React.ReactNode
    withToken?: boolean
    base64fileName?: string
}

const TimelineFileSelect: React.FC<TimelineItemFileInterface> = ({ onFileChange, storagePrefix, accept, error, icon, withToken, base64fileName }) => {

    const [file, setFile] = useState<IFile>();
    const storageKey = `${storagePrefix}-file`;

    useEffect(() => {
        const storeData = sessionStorage.getItem(storageKey);
        const fileData = storagePrefix && storeData && JSON.parse(storeData);
        const file = fileData && dataURLtoFile(fileData.content, fileData.name);

        if (file) {
            setFile(file);
            onFileChange(file);
        }
    }, [onFileChange, storagePrefix, storageKey]);

    function handleFileChange(file: IFile) {
        setFile(file);
        onFileChange(file);
        if (storagePrefix && file.size < 1000000) {
            (async function () {
                const content = Uint8toBase64(file.content);
                sessionStorage.setItem(storageKey, JSON.stringify({ content, name: file.name }));
            })();
        }
    }

    function handleNewFile() {
        setFile(undefined);
        onFileChange(null);
        storagePrefix && sessionStorage.removeItem(storageKey);
    }

    return (
        <>
            {file ? (
                <DetailsFileAction
                    icon={icon || <IconFile size={30} />}
                    file={file}
                    actionName={'Змінити файл'}
                    onActionClick={handleNewFile} />
            ) : (
                <FormUploadDrop title='Скиньте файл сюди' onChange={handleFileChange}>
                    <FormUploadFile title='Обрати файл' onChange={handleFileChange} accept={accept} />
                    &nbsp;
                    <FormUploadBase64 title='Base64' onChange={handleFileChange} fileName={base64fileName} />
                    {withToken && <>
                        &nbsp;
                        <button onClick={() => handleFileChange(emptyIFile('Токен'))}
                            className="btn btn-light btn-bordered btn-active-light-primary border-hover-primary">Токен</button>
                        &nbsp;
                        <button onClick={() => handleFileChange(emptyIFile('Хмарний'))}
                            className="btn btn-light btn-bordered btn-active-light-primary border-hover-primary">Хмарний</button>
                    </>}
                </FormUploadDrop>
            )}

            {error && <AlertDanger>{error}</AlertDanger>}
        </>
    );
};

export default TimelineFileSelect;
