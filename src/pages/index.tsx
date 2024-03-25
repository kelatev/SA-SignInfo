import React from 'react';
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "./Layout";
import { EndUserContext } from '../EUSign/EndUserContext';
import useEndUserController from '../EUSign/useEndUserController';

function Home() {
    const { keyMediaType, setKeyMediaType, librarySW, currentLibrary } = useEndUserController();

    return (
        <EndUserContext.Provider value={{ keyMediaType, setKeyMediaType, librarySW, currentLibrary }}>
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145-2002)"
                loading={librarySW.loading}
                error={librarySW.error?.toString()}
                left={<PanelCheck />}
                right={<PanelSign />}
            />
        </EndUserContext.Provider>
    );
}

export default Home;
