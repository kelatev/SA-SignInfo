import {createContext, useContext} from 'react';
import { EndUserPrivateKeyContext } from "../EUSign/types";

export type PrivatKeyType = {
    privateKey: Uint8Array;
    certificates: Uint8Array[] | null;
    privatKeyContext?: EndUserPrivateKeyContext;
} | undefined;

interface PrivatKeyContextType {
    privateKey: PrivatKeyType;
    setPrivateKey: React.Dispatch<React.SetStateAction<PrivatKeyType>>;
}

export const PrivatKeyContext = createContext<PrivatKeyContextType>(
    {} as PrivatKeyContextType
);

export const usePrivatKeyContext = () => {
    const pkContext = useContext(PrivatKeyContext);

    if (!pkContext) {
        throw new Error(
            'usePrivatKeyContext has to be used within <PrivatKeyContext.Provider>'
        );
    }

    return pkContext;
};
