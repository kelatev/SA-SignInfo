import React, { useState, useEffect } from "react";
import FormUploadFile from "../Form/FormUploadFile";
import FormUploadDrop from "../Form/FormUploadDrop";
import AlertDanger from "../Form/AlertDanger";
import FormUploadBase64 from "../Form/FormUploadBase64";
import DetailsFileAction from "./DetailsFileAction";
import { File as IconFile } from "@phosphor-icons/react";
import { blobToBase64, dataURLtoFile } from '../../utils/encode';

interface TimelineItemFileInterface {
    onFileChange: (file: File | null) => void
    storagePrefix?: string
    accept?: string
    error?: string
    icon?: React.ReactNode
    withToken?: boolean
    base64fileName?: string
}

const TimelineFileSelect: React.FC<TimelineItemFileInterface> = ({ onFileChange, storagePrefix, accept, error, icon, withToken, base64fileName }) => {

    const [file, setFile] = useState<File>();
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

    function handleFileChange(file: File) {
        setFile(file);
        onFileChange(file);
        if (storagePrefix && file.size < 1000000) {
            (async function () {
                const content = await blobToBase64(file);
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
                        <button onClick={() => handleFileChange(new File([], 'Токен'))}
                            className="btn bts-sm btn-secondary border-hover border-gray-400 btn-active-light-primary">Токен</button>
                        &nbsp;
                        <button onClick={() => handleFileChange(new File([], 'Хмарний'))}
                            className="btn bts-sm btn-secondary border-hover border-gray-400 btn-active-light-primary">Хмарний</button>
                    </>}
                </FormUploadDrop>
            )}

            {error && <AlertDanger>{error}</AlertDanger>}
        </>
    );
};

export default TimelineFileSelect;
