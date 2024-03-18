import React from 'react';

type Props = {
    children: React.ReactNode
    title?: string
};
const AlertDanger: React.FC<Props> = ({title, children}) => {

    return (
        <div className="alert alert-danger border border-danger border-dashed d-flex align-items-center p-5 mb-5">
            <div className="d-flex flex-column">
                {title && <h4 className="mb-1 text-danger">{title}</h4>}
                {children}
            </div>
        </div>
    );
};

export default AlertDanger;
