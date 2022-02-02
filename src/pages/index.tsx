import React, {useState} from 'react';
import EUSignContext from '../context/EUSign';
import EUSignCPFrontend from "../EUSign/EUSignCPFrontend";
import Loader from "../EUSign/Loader";
import PanelCheck from "../components/Check";
import PanelSign from "../components/Sign";
import Layout from "../components/Layout";

function Home() {
    const [euSign, setEUSign] = useState<EUSignCPFrontend>();

    return (
        <EUSignContext.Provider value={{euSign, setEUSign}}>
            {euSign == null && <Loader/>}
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145)"
                showOverlay={!euSign}
                left={<PanelCheck/>}
                right={<PanelSign/>}
            />
        </EUSignContext.Provider>
    );
}

export default Home;
