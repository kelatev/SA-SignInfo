'use client';

import { useMemo, useRef, useEffect } from 'react';

type WorkerCallback = {
    onSuccess: (result: any) => void;
    onError: (error: any) => void;
};

const workerCache = new Map<
    string,
    {
        worker: Worker;
        promises: WorkerCallback[];
    }
>();

export default function useEUSignCPWorker(workerUrl: string, onMessage: (result: any) => void) {
    const onMessageRef = useRef(onMessage);
    useEffect(() => {
        onMessageRef.current = onMessage;
    }, [onMessage]);

    const { worker, promises } = useMemo(() => {
        if (typeof window === 'undefined') {
            return { worker: null, promises: [] };
        }

        if (workerCache.has(workerUrl)) {
            return workerCache.get(workerUrl)!;
        }

        const worker = new Worker(workerUrl);
        let promises = [] as WorkerCallback[];

        worker.onmessage = (event: MessageEvent) => {
            const data = event.data;
            if (data.id !== -2) {
                const callback = promises[data.id - 1];
                if (callback) {
                    delete promises[data.id - 1];
                    if (data.error == null) {
                        callback.onSuccess(data.result);
                    } else {
                        callback.onError(data.error);
                    }
                }
            } else {
                onMessageRef.current?.(data.result);
            }
        };

        worker.onerror = (event: ErrorEvent) => {
            promises.forEach(cb => cb.onError(event?.error));
            promises = [];
        };

        const entry = { worker, promises };
        workerCache.set(workerUrl, entry);

        return entry;
    }, [workerUrl]);

    const origin =
        typeof window !== 'undefined'
            ? window.location.origin ||
            window.location.protocol +
            '//' +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port : '')
            : '';
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

    function postMessage(cmd: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const callbackData: WorkerCallback = {
                onSuccess: resolve,
                onError: reject,
            };
            const id = promises.push(callbackData);// id = index + 1

            worker.postMessage({
                cmd,
                params,
                id,
                origin,
                pathname,
            });
        });
    }

    return {
        postMessage,
    };
}
