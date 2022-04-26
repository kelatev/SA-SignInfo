import React from "react";
import {default as BSCard} from 'react-bootstrap/Card';

type Props = {
    children?: React.ReactNode
    title: string
    backgroundColor?: string
};
const Card: React.FC<Props> = ({children, title, backgroundColor}) => {
    return (
        <BSCard style={{backgroundColor: backgroundColor}}>
            <BSCard.Header className="border-0 pt-5">
                <BSCard.Title as="h3" className="fw-bolder fs-3 mb-1">{title}</BSCard.Title>
            </BSCard.Header>
            <BSCard.Body>
                <div className="px-5 py-5 py-lg-8 px-lg-11">
                    {children}
                </div>
            </BSCard.Body>
        </BSCard>
    );
}

export default Card;
