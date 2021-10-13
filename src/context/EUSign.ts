import React from 'react';
import {EUSignCP} from "../EUSign/eusw";

type ContextProps = {
    euSign: EUSignCP | null,
    setEUSign: any
};

export default React.createContext<ContextProps>({
    euSign: null,
    setEUSign: (_library: any) => {}
});
