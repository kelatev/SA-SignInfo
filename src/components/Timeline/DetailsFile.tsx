import React from "react";
import { fileSizeName } from "../../utils/fileSizeName";

export type Props = {
    children?: React.ReactNode
    icon: React.ReactNode
    file: File
};
const DetailsFile: React.FC<Props> = ({ icon, file, children }) => {
    const sizeName = fileSizeName(file.size);

    return (
        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded px-5 py-3 mb-5">
            {icon}
            <div className="ms-4 fw-semibold">
                <span className="fs-6 text-hover-primary fw-bold">{file.name}</span>
                {sizeName !== 'n/a' ? <div className="text-gray-500">{sizeName}</div> : ''}
            </div>
            {children}
        </div>
    );
}

export default DetailsFile;
