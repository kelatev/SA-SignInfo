import React, {useState} from 'react';
import EUSignContext from './context/EUSign';
import EUSignCPFrontend from "./EUSign/EUSignCPFrontend";
import Loader from "./EUSign/Loader";
import SignCheck from "./SignCheck";
import SignSign from "./SignSign";
import Layout from "./components/Layout";

function App() {
    const [euSign, setEUSign] = useState<EUSignCPFrontend>();

    return (
        <EUSignContext.Provider value={{euSign, setEUSign}}>
            {euSign == null && <Loader/>}
            <Layout
                title="SA - UA Sign"
                subtitle="ЕЦП (ДСТУ 4145)"
                showOverlay={!euSign}
                left={<SignCheck/>}
                right={<SignSign/>}
            />
        </EUSignContext.Provider>
    );
}

export default App;
