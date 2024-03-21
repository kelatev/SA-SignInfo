import React from 'react';
import Loader from "../components/Loader";
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "../components/Layout";
import { EndUserContext } from '../EUSign/EndUserContext';
import useEndUserController from '../EUSign/useEndUserController';

function Home() {
    const { keyMediaType, setKeyMediaType, librarySW, currentLibrary } = useEndUserController();

    return (
        <EndUserContext.Provider value={{ keyMediaType, setKeyMediaType, librarySW, currentLibrary }}>
            {librarySW.loading && <Loader error={librarySW.error?.toString()} />}
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145-2002)"
                showOverlay={librarySW.loading}
                left={<PanelCheck />}
                right={<PanelSign />}
            />
        </EndUserContext.Provider>
    );
}

export default Home;
