import React from "react";
import {fileSizeName} from "../../utils/fileSizeName";
import {FileInterface} from "../../types";

export type Props = {
    children?: React.ReactNode
    icon: string
    file: FileInterface
};
const DetailsFile: React.FC<Props> = ({icon, file, children}) => {
    const sizeName = fileSizeName(file.size);

    return (
        <div className="d-flex flex-stack border border-gray-600 rounded p-4 mb-5">
            <div className="d-flex align-items-center me-2">
                <img alt="" className="w-30px me-3" src={icon}/>
                <div className="d-flex flex-stack">
                    <div className="d-flex flex-column me-2">
                        <span className="fs-7 text-inverse-white text-hover-success fw-bolder">{file.name}</span>
                        <div
                            className="text-gray-400">{sizeName}</div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default DetailsFile;
