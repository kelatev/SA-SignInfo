import React from 'react';
import {ReactComponent as IconGen48} from '../../media/icons/duotune/general/gen048.svg';

type Props = {
    children: React.ReactNode
    title?: string
};
const AlertDanger: React.FC<Props> = ({title, children}) => {
    const icon = (
        <span className="svg-icon svg-icon-2hx svg-icon-danger me-4">
            <IconGen48/>
        </span>
    );

    return (
        <div className="alert alert-danger d-flex align-items-center p-5 mb-10">
            {icon}
            <div className="d-flex flex-column">
                {title && <h4 className="mb-1 text-danger">{title}</h4>}
                {children}
            </div>
        </div>
    );
};

export default AlertDanger;
