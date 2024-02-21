import React from "react";
import DetailsFile, {Props} from "./DetailsFile";

interface DetailsFileActionProps extends Props {
    children?: React.ReactNode
    actionName: string
    onActionClick?: () => void
}

const DetailsFileAction = (props: DetailsFileActionProps) => {
    return (
        <DetailsFile {...props}>
            {props.onActionClick &&
                <button className="btn btn-sm btn-light btn-active-light-primary ms-auto" onClick={props.onActionClick}>{props.actionName}</button>}
        </DetailsFile>
    );
}

export default DetailsFileAction;
