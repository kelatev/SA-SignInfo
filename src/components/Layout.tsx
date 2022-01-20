import React, {ReactElement} from "react";

interface LayoutProps {
    title: string
    subtitle?: string
    showOverlay?: boolean
    left: ReactElement
    right: ReactElement
}

const Layout: React.FC<LayoutProps> = ({children,title, subtitle, showOverlay = false, left, right}) => {
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
                                <h1 className="d-flex flex-column text-dark fw-bolder my-0 fs-1">{title}
                                <small className="text-muted fs-6 fw-bold ms-1 pt-1">{subtitle}</small></h1>
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
