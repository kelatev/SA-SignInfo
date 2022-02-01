import React from 'react';
import {ReactComponent as IconGen48} from '../media/icons/duotune/general/gen048.svg';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    show?: boolean
    onClose?: (a: any, b: any) => void
    title?: string
}

const Alert: React.FC<AlertProps> = ({children, title}) => {
    const icon = (
        <span className="svg-icon svg-icon-2hx svg-icon-danger me-4">
            <IconGen48 />
        </span>
    );

    return (
        <div className="alert alert-danger d-flex align-items-center p-5 mb-10">
            {icon}
            <div className="d-flex flex-column">
                {title ? (<h4 className="mb-1 text-danger">{title}</h4>) : ''}
                {children}
            </div>
        </div>
    );
};

export default Alert;
