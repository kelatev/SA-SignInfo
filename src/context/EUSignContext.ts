import { createContext, useContext } from "react";
import { KeyMediaType } from "../hooks/useEndUserController";
import EndUserInstance, { EndUserLibraryType } from "../EUSign/EndUserInstance";

interface EUSignContextType {
    keyMediaType: KeyMediaType;
    setKeyMediaType: React.Dispatch<React.SetStateAction<KeyMediaType>>;
    findLibrary: (type: EndUserLibraryType) => EndUserInstance | undefined;
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
