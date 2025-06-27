'use client';

import React, {useEffect} from 'react';
import PanelCheck from "./components/Check";
import PanelSign from "./components/Sign";
import Layout from "./components/Layout";
import { EndUserContext } from '../EUSign/EndUserContext';
import useEndUserController from '../EUSign/useEndUserController';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Home() {
    /*const firebaseConfig = {
        apiKey: "AIzaSyCo9d4ynJTY3W4r3TGHPF8F7dfrTJM9fCU",
        authDomain: "sign-f90aa.firebaseapp.com",
        projectId: "sign-f90aa",
        storageBucket: "sign-f90aa.appspot.com",
        messagingSenderId: "1046655274267",
        appId: "1:1046655274267:web:8fc6a9bb348fbe0e5157be",
        measurementId: "G-ZRSQRHMNBS"
    };

    const app = initializeApp(firebaseConfig);
    getAnalytics(app);*/

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