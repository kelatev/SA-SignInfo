import React from "react";

interface TimelineItemInterface {
    icon: string
    title: string
    time?: string
}

const TimelineItem: React.FC<TimelineItemInterface> = ({icon, title, time, children}) => {
    return (
        /*begin::Timeline item*/
        <div className="timeline-item">
            {/*begin::Timeline line*/}
            <div className="timeline-line w-40px"></div>
            {/*end::Timeline line*/}
            {/*begin::Timeline icon*/}
            <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                <div className="symbol-label">
                    <span className="svg-icon svg-icon-2"><img src={icon} alt="logo"/></span>
                </div>
            </div>
            {/*end::Timeline icon*/}
            {/*begin::Timeline content*/}
            <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                    {/*begin::Title*/}
                    <div className="fs-5 fw-bold mb-2 text-white">{title}</div>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    {
                        time && (
                            <div className="d-flex align-items-center mt-1 fs-6">
                                {/*begin::Info*/}
                                <div className="text-white opacity-50 me-2 fs-7">{time}</div>
                                {/*end::Info*/}
                            </div>
                        )
                    }
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
