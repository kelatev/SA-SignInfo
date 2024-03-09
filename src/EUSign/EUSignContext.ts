import { createContext, useContext } from "react";
import { KeyMediaType } from "./useEndUserController";
import { EndUserInstance } from "./useEndUserInstance";

interface EUSignContextType {
    keyMediaType: KeyMediaType;
    setKeyMediaType: React.Dispatch<React.SetStateAction<KeyMediaType>>;
    librarySW: EndUserInstance;
    currentLibrary: EndUserInstance | undefined;
}

export const EUSignContext = createContext<EUSignContextType>({} as EUSignContextType);

export const useEUSignContext = () => {
    const context = useContext(EUSignContext);

    if (!context) {
        throw new Error("useEUSignContext has to be used within <EUSignContext.Provider>");
    }

    return context;
};
