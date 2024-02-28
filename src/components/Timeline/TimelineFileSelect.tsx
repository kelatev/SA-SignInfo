import React, { useState, useEffect } from "react";
import FormUploadFile from "../Form/FormUploadFile";
import AlertDanger from "../Form/AlertDanger";
import FormUploadBase64 from "../Form/FormUploadBase64";
import DetailsFileAction from "./DetailsFileAction";
import { File } from "@phosphor-icons/react";
import { blobToBase64, dataURLtoFile } from '../../utils/encode';

interface TimelineItemFileInterface {
    onFileChange: (file: File | null) => void
    storagePrefix?: string
    accept?: string
    error?: string
    icon?: React.ReactNode
}

const TimelineFileSelect: React.FC<TimelineItemFileInterface> = ({ onFileChange, storagePrefix, accept, error, icon }) => {

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
    }, []);

    function handleFileChange(file: File) {
        setFile(file);
        onFileChange(file);
        if (storagePrefix) {
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
                    icon={icon || <File size={30} />}
                    file={file}
                    actionName={'Змінити файл'}
                    onActionClick={handleNewFile} />
            ) : (
                <>
                    <FormUploadFile title='Обрати файл' onChange={handleFileChange} accept={accept} />
                    &nbsp;
                    <FormUploadBase64 title='Base64' onChange={handleFileChange} />
                </>
            )}

            {error && <AlertDanger>{error}</AlertDanger>}
        </>
    );
};

export default TimelineFileSelect;
