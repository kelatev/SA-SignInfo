import {createContext} from 'react';
import EUSignCPFrontend from "../EUSign/EUSignCPFrontend";

type ContextInterface = {
    euSign: EUSignCPFrontend | undefined;
    setEUSign: (library: EUSignCPFrontend) => void;
};

export default createContext<ContextInterface>({
    euSign: undefined,
    setEUSign: (_library: EUSignCPFrontend) => {}
});
