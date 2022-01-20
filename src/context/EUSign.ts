import React from 'react';
import EUSignCPFrontend from "../EUSign/EUSignCPFrontend";

type ContextProps = {
    euSign: EUSignCPFrontend | undefined
    setEUSign: any
};

export default React.createContext<ContextProps>({
    euSign: undefined,
    setEUSign: (_library: any) => {}
});
