import React from "react";
import DetailsFile, { Props } from "./DetailsFile";
import FormFileBase64 from '../Form/FormFileBase64';

interface DetailsFileActionProps extends Props {
    children?: React.ReactNode
    actionName: string
    onActionClick?: () => void
}

const DetailsFileAction = (props: DetailsFileActionProps) => {
    return (
        <DetailsFile {...props}>
            <FormFileBase64
                data={props.file.content}
                button={(handleShow) => <button onClick={handleShow} className="btn btn-sm btn-light btn-active-light-primary ms-auto">Вміст</button>} />
            {props.onActionClick &&
                <button onClick={props.onActionClick} className="btn btn-sm btn-light btn-active-light-primary ms-1">{props.actionName}</button>}
        </DetailsFile>
    );
}

export default DetailsFileAction;
