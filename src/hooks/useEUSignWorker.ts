import { useState, useEffect, useRef, useCallback } from "react";
import withEUSignCommand, { EUSignCommandType } from "./withEUSignCommand";

export interface Props {
    settings: {
        CAs: string;
        CACertificates: string;
        language: number;
        verifySettings: {
            ocspResponseExpireTime: number;
        };
        httpProxyServiceURL: string;
        directAccess: boolean;
        TSLAddress: string | null;
    };
}

export default function useEUSignWorker(
    props: Props,
): [boolean, string | undefined, EUSignCommandType] {
    const worker = useRef<Worker & { _url?: string }>();
    const callbacks = useRef<any[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);
    const [error, setError] = useState<string>();

    const onMessage = useCallback((event: MessageEvent) => {
        const data = event.data;
        const params = data.params;

        const itemCallback = getCallback(data.callback_id);

        if (data.error == null) {
            switch (data.cmd) {
                case "Initialize":
                    itemCallback.onSuccess();
                    break;
                case "GetDataFromSignedFile":
                    itemCallback.onSuccess(params.data);
                    break;
                case "VerifyFiles":
                    itemCallback.onSuccess(params.result);
            }
        } else if (itemCallback) {
            itemCallback.onError(new Error(`${data.error.message} (${data.error.errorCode})`));
        }
    }, []);

    const onError = useCallback((event?: ErrorEvent) => {
        event && console.log("onError", event);

        callbacks.current.forEach(item => {
            item.onError(
                new Error(
                    "Виникла помилка при взаємодії з криптографічною бібліотекою. Будь ласка, перезавантажте web-сторінку (65540)",
                ),
            );
        });
        callbacks.current = [];
    }, [callbacks]);

    const postMessage = (cmd: string, params?: any) => {
        return new Promise((resolve, reject) => {
            const callback_data = {
                onSuccess: resolve,
                onError: reject,
            };
            const callback_id = callbacks.current.push(callback_data);

            worker.current?.postMessage({
                cmd: cmd,
                params: params,
                callback_id: callback_id,
            });
        });
    };

    const getCallback = (callback_id: number) => {
        const index = callback_id - 1;
        const item = callbacks.current[index];
        callbacks.current = callbacks.current.slice(index, -1);
        return item;
    };

    const killWorker = useCallback(() => {
        worker.current?.terminate();
        worker.current = undefined;
        onError(); //close callback
        setTimeout(() => setError(undefined), 0);
    }, [worker, onError]);

    useEffect(() => {
        if (worker.current) {
            return;
        }
        const instance = new Worker(process.env.PUBLIC_URL + "/eusign/euscp.worker.js");

        instance.onmessage = onMessage;
        instance.onerror = onError;

        worker.current = instance;
        postMessage("Initialize", {
            settings: props.settings,
            origin: window.location.origin
                ? window.location.origin
                : window.location.protocol +
                  "//" +
                  window.location.hostname +
                  (window.location.port ? ":" + window.location.port : ""),
            pathname: window.location.pathname,
        })
            .then(() => setIsInitialized(true))
            .catch(err => setError(err));

        return () => {
            killWorker();
        };
    }, [killWorker, onMessage, onError, props.settings]);

    return [isInitialized, error, withEUSignCommand(postMessage)];
}
