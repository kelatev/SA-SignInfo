import React from 'react';
import TimelineItem from "./TimelineItem";
import Button from 'react-bootstrap/Button';
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { fileSizeName } from "../../utils/fileSizeName";
import { File } from "@phosphor-icons/react";
import FormFileBase64 from '../Form/FormFileBase64';

interface FormDataProps {
    title: string
    data: Uint8Array | undefined
    fileName?: string
}

function getSize(data: Uint8Array | undefined): string {
    const bytes = data ? Buffer.from(data).length : 0;
    return fileSizeName(bytes);
}

function TimelineFileData(props: FormDataProps) {
    const handleFileDownload = () => {
        if (props.data) {
            saveAs(new Blob([props.data]), props.fileName);
        }
    };

    return (
        <TimelineItem title={props.title} icon={<File />}>
            {props.data && (
                <>
                    {props.fileName && (
                        <Button onClick={handleFileDownload} variant="light" size="sm" className="ms-2 btn-active-light-primary">Скачати
                            файл ({getSize(props.data)})</Button>
                    )}
                    <FormFileBase64
                        data={props.data}
                        button={(handleShow) => <Button onClick={handleShow} variant="light" size="sm" className="ms-2 btn-active-light-primary">Вміст</Button>} />
                </>
            )}
        </TimelineItem>
    );
}

export default TimelineFileData;
