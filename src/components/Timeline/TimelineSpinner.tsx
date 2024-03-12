import React from 'react';
import TimelineItem from "./TimelineItem";
import AlertDanger from "../Form/AlertDanger";

interface Props {
    title: string
    icon: React.ReactNode
    error?: string
}

export default function TimelineSpinner(props: Props) {
    return (
        <TimelineItem title={props.title} icon={props.icon}>
            {!props.error && <span className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </span>}
            {props.error && <AlertDanger>{props.error}</AlertDanger>}
        </TimelineItem>
    );
}
