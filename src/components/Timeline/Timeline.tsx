import React from "react";
import TimelineItem from "./TimelineItem";

type Props = {
    children?: React.ReactNode
};
const Timeline: React.FC<Props> = ({children}) => {
    return (
        <div className="timeline timeline-border-dashed">
            {children}
        </div>
    );
}

export default Object.assign(Timeline, {
    Item: TimelineItem,
});
