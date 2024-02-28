import React from 'react';
import Loader from "../EUSign/Loader";
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "../components/Layout";
import { EUSignContext } from '../context/EUSignContext';
import useEUSignWorker from '../hooks/useEUSignWorker';

function Home() {
    const [isInitialized, error, commands] = useEUSignWorker({
        settings: {
            CAs: '/eusign/data/CAs.json',
            CACertificates: '/eusign/data/CACertificates.p7b',
            language: 1,
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
