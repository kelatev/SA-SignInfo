import React, { ReactElement } from "react";

interface LayoutProps {
    title: string
    subtitle?: string
    showOverlay?: boolean
    left: ReactElement
    right: ReactElement
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, showOverlay = false, left, right }) => {
    return (
        <div className='d-flex flex-column flex-root'>
            <div className={'page d-flex flex-row flex-column-fluid' + (showOverlay ? ' overlay overlay-block' : '')}>
                <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>

                    <div id="kt_header" className="app-container  container-xxl d-flex align-items-start ">
                        <div className="d-flex flex-column flex-row-fluid">
                            <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-4 gap-lg-8 pt-6 pb-16 py-lg-10">
                                <div className="page-title d-flex align-items-center me-3">
                                    <h1 className="page-heading d-flex fw-bolder fs-2 flex-column justify-content-center my-0">
                                    {title}
                                        <span className="page-desc opacity-50 fs-6 fw-bold pt-4">{subtitle}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid px-10'>
                        <div className='row gy-5 g-xl-10'>
                            <div className='col-xl-6'>
                                {left}
                            </div>
                            <div className='col-xl-6'>
                                {right}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
