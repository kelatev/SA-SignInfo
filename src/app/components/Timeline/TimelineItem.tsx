import React from "react";

type Props = {
    children?: React.ReactNode
    icon: React.ReactNode
    title: string
    description?: string | React.ReactNode
};
const TimelineItem: React.FC<Props> = ({ icon, title, description, children }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-line" />
            <div className="timeline-icon">
                <span className="svg-icon svg-icon-2 fs-2 text-gray-500">{icon}</span>
            </div>
            <div className="timeline-content">
                <div className="mb-3">
                    <div className="fs-6 text-gray-800">{title}</div>
                    <div className="fs-7 text-gray-600">{description}</div>
                </div>
                {children && <div className="">{children}</div>}
            </div>
        </div>
    );
};

export default TimelineItem;
