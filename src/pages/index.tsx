import { useEffect } from 'react';
import Loader from "../components/Loader";
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "../components/Layout";
import { EUSignContext } from '../context/EUSignContext';
import useEndUserController from '../hooks/useEndUserController';

function Home() {
    const settings = {
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
    const { keyMediaType, setKeyMediaType, librarySW, currentLibrary } = useEndUserController();

    useEffect(() => {
        if (!librarySW.info?.loaded && !librarySW.loading) {
            librarySW.Load();
        }
    }, [librarySW]);

    return (
        <EUSignContext.Provider value={{ keyMediaType, setKeyMediaType, librarySW, currentLibrary }}>
            {librarySW.loading && <Loader error={librarySW.error} />}
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145-2002)"
                showOverlay={librarySW.loading}
                left={<PanelCheck />}
                right={<PanelSign />}
            />
        </EUSignContext.Provider>
    );
}

export default Home;
