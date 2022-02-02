import React from "react";
import DetailsFile, {DetailsFileProps} from "./DetailsFile";

interface DetailsFileActionProps extends DetailsFileProps{
    actionName: string
    onActionClick?: () => void
}

const DetailsFileAction = (props: DetailsFileActionProps) => {
    return (
        <DetailsFile {...props}>
            {props.onActionClick &&
                <button className="btn btn-sm btn-light" onClick={props.onActionClick}>{props.actionName}</button>}
        </DetailsFile>
    );
}

export default DetailsFileAction;
