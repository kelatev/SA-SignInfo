import React from "react";

type Props = {
    children?: React.ReactNode;
    title: string;
    className?: string;
    backgroundColor?: string;
    backgroundImage?: string;
};
const Card: React.FC<Props> = ({ children, title, className, backgroundColor, backgroundImage }) => {
    return (
        <div className="card card-xl-stretch card-reset mb-xl-8 ">
            <div className="card-body p-0">
                <div className={"px-9 pt-7 card-rounded h-175px w-100 " + className} style={{ backgroundColor, backgroundImage }}>
                    <h3 className="m-0 text-gray-900 fw-bold fs-3">{title}</h3>
                </div>
                <div className="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style={{ marginTop: "-88px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;
