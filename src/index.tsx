import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './pages';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(
    document.getElementById('root') as Element
);
root.render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const firebaseConfig = {
    apiKey: "AIzaSyCo9d4ynJTY3W4r3TGHPF8F7dfrTJM9fCU",
    authDomain: "sign-f90aa.firebaseapp.com",
    projectId: "sign-f90aa",
    storageBucket: "sign-f90aa.appspot.com",
    messagingSenderId: "1046655274267",
    appId: "1:1046655274267:web:8fc6a9bb348fbe0e5157be",
    measurementId: "G-ZRSQRHMNBS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);