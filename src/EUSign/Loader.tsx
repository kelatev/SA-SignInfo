import React, {useState, useEffect, useContext} from 'react';
import EUSignContext from '../context/EUSign';
import {loadCryptoLibrary, initializeCryptoLibrary} from './util';
import Modal from "react-bootstrap/Modal";

//import EUSign from '@mdoffice/ua-signature';

function Loader() {
    const {euSign, setEUSign} = useContext(EUSignContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (euSign == null) {
            setLoading(true);

            /*const lib = new EUSign();
            setEUSign(lib);
            lib.fullLoad()
                .then(() => {
                    setLoading(false);
                })
                .catch((e: any) => {
                    setError(e);
                    setLoading(false);
                });*/

            loadCryptoLibrary()
                .then(initializeCryptoLibrary)
                .then((library) => {
                    setEUSign(library);
                    setLoading(false);
                })
                .catch((e) => {
                    setError(e);
                    setLoading(false);
                });
        }
    }, [euSign, setEUSign]);

    const spinner = (<div className="text-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>);

    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Загрузка библиотеки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading ? spinner : ''}
                {error ? <div dangerouslySetInnerHTML={{__html: error}}/> : ''}
            </Modal.Body>
        </Modal>
    );
}

export default Loader;
