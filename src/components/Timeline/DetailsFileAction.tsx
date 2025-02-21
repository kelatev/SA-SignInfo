import React, { useState, useEffect } from "react";
import DetailsFile, { Props } from "./DetailsFile";
import FormFileBase64 from '../Form/FormFileBase64';
import { FileToUint8 } from "../../utils/encode";

interface DetailsFileActionProps extends Props {
    children?: React.ReactNode
    actionName: string
    onActionClick?: () => void
}

const DetailsFileAction = (props: DetailsFileActionProps) => {
    const [fileData, setFileData] = useState<Uint8Array | undefined>();

    useEffect(() => {
        if (props.file) {
            FileToUint8(props.file).then(data => setFileData(data));
        } else {
            setFileData(undefined);
        }
    }, [props.file]);

    return (
        <DetailsFile {...props}>
            <FormFileBase64
                data={fileData}
                button={(handleShow) => <button onClick={handleShow} className="btn btn-sm btn-light btn-active-light-primary ms-auto">Вміст</button>} />
            {props.onActionClick &&
                <button onClick={props.onActionClick} className="btn btn-sm btn-light btn-active-light-primary ms-1">{props.actionName}</button>}
        </DetailsFile>
    );
}

export default DetailsFileAction;
