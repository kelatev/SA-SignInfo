import React, {useState, useEffect, useContext} from 'react';
import EUSignContext from '../context/EUSign';
import {loadCryptoLibrary, initializeCryptoLibrary} from './util';

function Loader() {
    const {euSign, setEUSign} = useContext(EUSignContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (euSign == null) {
            setLoading(true);

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
    }, []);

    const spinner = (<div className="text-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>);

    return (
        <div className="modal fade show d-block" aria-modal="true" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Загрузка библиотеки</h5>
                    </div>
                    <div className="modal-body">
                        {loading ? spinner : ''}
                        {error ? <div dangerouslySetInnerHTML={{__html: error}}/> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
