import React from "react";

interface TimelineItemInterface {
    icon: string
    title: string
    description?: string
}

const TimelineItem: React.FC<TimelineItemInterface> = ({icon, title, description, children}) => {
    return (
        /*begin::Timeline item*/
        <div className="timeline-item">
            {/*begin::Timeline line*/}
            <div className="timeline-line w-40px"/>
            {/*end::Timeline line*/}
            {/*begin::Timeline icon*/}
            <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                <div className="symbol-label">
                    <span className="svg-icon svg-icon-2"><img src={icon} alt="logo"/></span>
                </div>
            </div>
            {/*end::Timeline icon*/}
            {/*begin::Timeline content*/}
            <div className="timeline-content mb-8 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-bold mb-2 text-white">{title}</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    {description && <div className="d-flex align-items-center mt-1 fs-6">{description}</div>}
                    {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                {children}
                {/*end::Timeline details*/}
            </div>
            {/*end::Timeline content*/}
        </div>
    );
};

export default TimelineItem;
