import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineSpinner from "./TimelineSpinner";
import TimelineFileData from "./TimelineFileData";
import TimelineFileSelect from "./TimelineFileSelect";

type Props = {
    children?: React.ReactNode
};
const Timeline: React.FC<Props> = ({ children }) => {
    return (
        <div className="timeline timeline-border-dashed">
            {children}
        </div>
    );
}

export default Object.assign(Timeline, {
    Item: TimelineItem,
    FileData: TimelineFileData,
    FileSelect: TimelineFileSelect,
    Spinner: TimelineSpinner
});
