import EUSignCPPromise from "./EUSignCPPromise";

export default class EUSignCPFrontend extends EUSignCPPromise {
    static async loadLibrary(): Promise<EUSignCPFrontend> {
        const self = new EUSignCPFrontend();
        await self.m_library.Load();
        return self;
    }

}
