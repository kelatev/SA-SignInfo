'use client';

import React, { useState, useEffect } from "react";
import FormUploadFile from "../Form/FormUploadFile";
import FormUploadDrop from "../Form/FormUploadDrop";
import AlertDanger from "../Form/AlertDanger";
import FormUploadBase64 from "../Form/FormUploadBase64";
import DetailsFileAction from "./DetailsFileAction";
import { FileIcon } from "@phosphor-icons/react";
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
        try {
            const stored = sessionStorage.getItem(storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                const restoredFile = dataURLtoFile(parsed.content, parsed.name);
                if (restoredFile) {
                    setFile(restoredFile);
                    onFileChange(restoredFile);
                }
            }
        } catch (err) {
            console.warn("Failed to load file from sessionStorage:", err);
        }
    }, [onFileChange, storagePrefix, storageKey]);

    function handleFileChange(newFile: IFile) {
        setFile(newFile);
        onFileChange(newFile);

        try {
            if (storagePrefix && newFile.size < 1_000_000) {
                const content = Uint8toBase64(newFile.content);
                const payload = JSON.stringify({ content, name: newFile.name });
                sessionStorage.setItem(storageKey, payload);
            }
        } catch (err) {
            console.warn("Failed to save file to sessionStorage:", err);
        }
    }

    function handleNewFile() {
        setFile(undefined);
        onFileChange(null);
        if (typeof window !== 'undefined' && storagePrefix) {
            sessionStorage.removeItem(storageKey);
        }
    }

    return (
        <>
            {file ? (
                <DetailsFileAction
                    icon={icon || <FileIcon size={30} />}
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
