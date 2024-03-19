import { createContext, useContext } from "react";
import { KeyMediaType } from "./useEndUserController";
import { EndUserInstance } from "./useEndUserInstance";

interface EndUserContextType {
    keyMediaType: KeyMediaType;
    setKeyMediaType: React.Dispatch<React.SetStateAction<KeyMediaType>>;
    librarySW: EndUserInstance;
    currentLibrary: EndUserInstance | undefined;
}

export const EndUserContext = createContext<EndUserContextType>({} as EndUserContextType);

export const useEndUserContext = () => {
    const context = useContext(EndUserContext);

    if (!context) {
        throw new Error("useEndUserContext has to be used within <EndUserContext.Provider>");
    }

    return context;
};
