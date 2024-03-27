import React from 'react';
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "./Layout";
import { EndUserContext } from '../EUSign/EndUserContext';
import useEndUserController from '../EUSign/useEndUserController';

function Home() {
    const controller = useEndUserController();

    return (
        <EndUserContext.Provider value={controller}>
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145-2002)"
                loading={controller.librarySW.loading ?? true}
                error={controller.librarySW.error?.toString()}
                left={<PanelCheck />}
                right={<PanelSign />}
            />
        </EndUserContext.Provider>
    );
}

export default Home;
