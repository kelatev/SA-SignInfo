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
            <div className="timeline-content mb-6 mt-n1">
                <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">{title}</div>
                    <div className="d-flex align-items-center text-gray-600 mt-1 fs-7">
                        <div className="text-muted me-2 fs-7">{description}</div>
                    </div>
                </div>
                {children && <div className="">{children}</div>}
            </div>
        </div>
    );
};

export default TimelineItem;
