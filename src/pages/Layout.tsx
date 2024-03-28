import React, { ReactElement } from "react";
import Card from "../components/Form/Card";

interface LayoutProps {
    title: string
    subtitle?: string
    loading: boolean
    error?: string
    left: ReactElement
    right: ReactElement
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, loading = false, error, left, right }) => {
    return (
        <>
            <div className='d-flex flex-column flex-root'>
                <div className={'page d-flex flex-row flex-column-fluid'}>
                    <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>

                        <div id="kt_header" className="app-container container-xxl d-flex align-items-start ">
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
                        <div id='kt_content' className='container-xxl d-flex flex-column flex-column-fluid'>
                            <div className='row gy-5 g-xl-10 position-relative'>
                                {loading && <div className="col-xl-8 offset-xl-2 z-index-3 min-h-350px" style={{ 'backgroundColor': 'var(--bs-app-bg-color)' }}>
                                    <Card title='Завантаження бібліотеки' className="bg-warning-subtle">
                                        <div className="text-center my-2">
                                            <span className="spinner-border text-primary" role="status"></span>
                                        </div>
                                    </Card>
                                </div>}
                                <div className={ (loading ? 'position-absolute col-xl-8 offset-xl-2 mh-300px overflow-hidden' : 'position-xl-absolute col-xl-6')} style={{ 'transition': 'margin .2s ease, width .3s ease' }}>
                                    {left}
                                </div>
                                <div className={ (loading ? 'position-absolute col-xl-8 offset-xl-2 mh-300px overflow-hidden' : 'position-xl-absolute col-xl-6 offset-xl-6')} style={{ 'transition': 'margin .3s ease, width .2s ease' }}>
                                    {right}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
