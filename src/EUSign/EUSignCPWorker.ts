export default class EUSignCPWorker {
    m_worker: Worker & { _url?: string };
    m_promises: any[];
    m_origin: string;
    m_pathname: string;

    constructor() {
        this.m_worker = this.loadWorker();
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

    loadWorker() {
        const instance = new Worker(process.env.PUBLIC_URL + "/eusign/euscp.worker.js?maxDataSize=25");

        instance.onmessage = (event: MessageEvent) => {
            const data = event.data;
            const itemCallback = this.m_promises[data.id - 1];

            if (itemCallback) {
                delete this.m_promises[data.id - 1];
                if (data.error == null) {
                    itemCallback.onSuccess(data.result);
                } else {
                    itemCallback.onError(data.error);
                }
            }
        };
        instance.onerror = (event: ErrorEvent) => {
            this.m_promises.forEach(item => item.onError(event?.error));
            this.m_promises = [];
        };

        return instance;
    }
}
