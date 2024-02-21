import React, {useState, useEffect, useContext} from 'react';
import EUSignContext from '../context/EUSign';
import Modal from "react-bootstrap/Modal";
import EUSignCPFrontend from "./EUSignCPFrontend";
import * as LIBRARY_SETTINGS from "./LIBRARY_SETTINGS.json";

function Loader() {
    const {setEUSign} = useContext(EUSignContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function initLibrary() {
        setLoading(true);

        EUSignCPFrontend.loadLibrary()
            .then((library) => {
                setEUSign(library);
                return library.Initialize(LIBRARY_SETTINGS)
            })
            .then(() => setLoading(false))
            .catch((e) => {
                setError(e.full);
                setLoading(false);
            });
    }

    useEffect(() => {
        initLibrary();
        return () => {};
    }, []);

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
