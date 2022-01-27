import React, {useState, useEffect, useContext} from 'react';
import EUSignContext from '../context/EUSign';
import Modal from "react-bootstrap/Modal";
import EUSignCPFrontend from "./EUSignCPFrontend";

/* Налаштування серверів АЦСК */
const CAs = '/CAs.json';
/* Масив з шляхом до кореневих сертификатів ЦЗО та ЦСК */
const CACerts = [
    '/CACertificates.p7b'
];

function Loader() {
    const {setEUSign} = useContext(EUSignContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const initLibrary = () => {
        setLoading(true);

        EUSignCPFrontend.loadLibrary()
            .then((library) => library.initializeLibrary(CAs, CACerts))
            .then((library) => {
                setEUSign(library);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e)
                setError(e);
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
