import React from "react";

interface CardProps {
    title: string
    backgroundColor?: string
}

const Card: React.FC<CardProps> = ({children, title, backgroundColor}) => {
    return (
        <div className='card' style={{backgroundColor: backgroundColor}}>
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-3 mb-1">{title}</span>
                </h3>
            </div>
            <div className='card-body'>
                <div className="px-5 py-5 py-lg-8 px-lg-11">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;
