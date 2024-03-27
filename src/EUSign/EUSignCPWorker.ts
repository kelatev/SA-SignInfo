export default class EUSignCPWorker {
    m_worker: Worker & { _url?: string };
    m_promises: any[];
    m_origin: string;
    m_pathname: string;

    constructor(workerUrl: string, onMessage: (result: any) => void) {
        this.m_worker = this.loadWorker(workerUrl);
        this.m_worker.onmessage = (event: MessageEvent) => {
            const data = event.data;
            if (data.id !== -2) {
                const itemCallback = this.m_promises[data.id - 1];

                if (itemCallback) {
                    delete this.m_promises[data.id - 1];
                    if (data.error == null) {
                        itemCallback.onSuccess(data.result);
                    } else {
                        itemCallback.onError(data.error);
                    }
                }
            } else {
                onMessage(data.result);
            }
        };
        this.m_worker.onerror = (event: ErrorEvent) => {
            this.m_promises.forEach(item => item.onError(event?.error));
            this.m_promises = [];
        };

        this.m_promises = [];

        this.m_origin = window.location.origin
            ? window.location.origin
            : window.location.protocol +
              "//" +
              window.location.hostname +
              (window.location.port ? ":" + window.location.port : "");
        this.m_pathname = window.location.pathname;
    }

    postMessage(cmd: string, params?: any) {
        return new Promise((resolve, reject) => {
            const callback_data = {
                onSuccess: resolve,
                onError: reject,
            };
            const callback_id = this.m_promises.push(callback_data);

            this.m_worker.postMessage({
                cmd,
                params,
                id: callback_id,
                origin: this.m_origin,
                pathname: this.m_pathname,
            });
        });
    }

    loadWorker(url: string) {
        return new Worker(url);
    }
}
