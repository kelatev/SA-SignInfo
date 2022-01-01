import React, {useState} from 'react';
import EUSignContext from './context/EUSign';
import Loader from "./EUSign/Loader";
import SignCheck from "./SignCheck";
import SignSign from "./SignSign";
import Layout from "./components/Layout";

function App() {
    const [euSign, setEUSign] = useState();

    return (
        <EUSignContext.Provider value={{euSign, setEUSign}}>
            {euSign == null && <Loader/>}
            <Layout title="SA - UA Sign" subtitle="ЕЦП (ДСТУ 4145)" showOverlay={!euSign}>
                <div className='row gy-5 g-xl-10'>
                    <div className='col-xl-6'>
                        <SignCheck/>
                    </div>
                    <div className='col-xl-6'>
                        <SignSign/>
                    </div>
                </div>
            </Layout>
        </EUSignContext.Provider>
    );
}

export default App;
