import React from 'react';
import Loader from "../components/Loader";
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "../components/Layout";
import { EUSignContext } from '../context/EUSignContext';
import EUSignCPWorker from '../EUSign/EUSignCPWorker';

function Home() {
    const [isInitialized, error, commands] = EUSignCPWorker({
        settings: {
            language: 1,
            encoding: 'utf-8',
            CAs: '/eusign/data/CAs.json',
            CACertificates: '/eusign/data/CACertificates.p7b',
            verifySettings: {
                ocspResponseExpireTime: 100
            },
            httpProxyServiceURL: "",
            directAccess: true,
            TSLAddress: null
        }
    });

    return (
        <EUSignContext.Provider value={{ isInitialized, commands }}>
            {!isInitialized && <Loader error={error} />}
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145-2002)"
                showOverlay={!isInitialized}
                left={<PanelCheck />}
                right={<PanelSign />}
            />
        </EUSignContext.Provider>
    );
}

export default Home;
