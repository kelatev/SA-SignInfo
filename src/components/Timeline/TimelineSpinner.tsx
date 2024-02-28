import React from 'react';
import TimelineItem from "./TimelineItem";

interface Props {
    title: string
    icon: React.ReactNode
}

export default function TimelineSpinner(props: Props) {
    return (
        <TimelineItem title={props.title} icon={props.icon}>
            <span className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </span>
        </TimelineItem>
    );
}
