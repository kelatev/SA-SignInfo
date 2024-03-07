import React from 'react';
import Loader from "../components/Loader";
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "../components/Layout";
import { EUSignContext } from '../context/EUSignContext';
import { EndUserLibraryType } from '../EUSign/EndUserInstance';
import useEndUserController from '../hooks/useEndUserController';
import useEndUserLoading from '../hooks/useEndUserLoading';

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
    const { keyMediaType, setKeyMediaType, findLibrary, currentLibrary } = useEndUserController();
    const { loading, error } = useEndUserLoading({ library: findLibrary(EndUserLibraryType.SW) });



    return (
        <EUSignContext.Provider value={{ keyMediaType, setKeyMediaType, findLibrary, currentLibrary }}>
            {!loading && <Loader error={error} />}
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145-2002)"
                showOverlay={!loading}
                left={<PanelCheck />}
                right={<PanelSign />}
            />
        </EUSignContext.Provider>
    );
}

export default Home;
