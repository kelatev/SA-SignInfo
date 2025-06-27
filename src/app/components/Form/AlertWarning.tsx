import React from 'react';

type Props = {
    children?: React.ReactNode
    title?: string
};
const AlertWarning: React.FC<Props> = ({title, children}) => {

    return (
        <div className="alert alert-warning border border-warning border-dashed d-flex align-items-center p-5 mb-5">
            <div className="d-flex flex-column">
                {title && <h4 className="mb-1 text-warning">{title}</h4>}
                {children}
            </div>
        </div>
    );
};

export default AlertWarning;
