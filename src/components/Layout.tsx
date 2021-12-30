import React from "react";

interface LayoutProps {
    title: string
    showOverlay?: boolean
}

const Layout: React.FC<LayoutProps> = ({children,title, showOverlay = false}) => {
    return (
        <div className='d-flex flex-column flex-root'>
            <div className={'page d-flex flex-row flex-column-fluid' + (showOverlay ? ' overlay overlay-block' : '')}>
                <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>

                    <div id="kt_header" className="header">
                        <div className="container d-flex align-items-center justify-content-between"
                             id="kt_header_container">
                            <div
                                className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0"
                                data-kt-swapper="true" data-kt-swapper-mode="prepend"
                                data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                                <h1 className="d-flex flex-column text-dark fw-bolder my-0 fs-1">{title}</h1>
                            </div>
                        </div>

                    </div>
                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid px-10'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
