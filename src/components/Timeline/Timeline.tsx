import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline: React.FC = ({children}) => {
    return (
        <div className="timeline">
            {children}
        </div>
    );
}

export default Object.assign(Timeline, {
    Item: TimelineItem,
});
