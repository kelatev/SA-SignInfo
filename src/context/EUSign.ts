import React from 'react';
import {EUSignCP} from "../EUSign/eusw";

type ContextProps = {
    euSign: EUSignCP | undefined
    setEUSign: any
};

export default React.createContext<ContextProps>({
    euSign: undefined,
    setEUSign: (_library: any) => {}
});
