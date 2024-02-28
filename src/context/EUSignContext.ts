import { createContext, useContext } from "react";
import { EUSignCommandType } from "../hooks/withEUSignCommand";

interface EUSignContextType {
    isInitialized: boolean | null;
    commands: EUSignCommandType;
}

export const EUSignContext = createContext<EUSignContextType>({} as EUSignContextType);

export const useEUSignContext = () => {
    const context = useContext(EUSignContext);

    if (!context) {
        throw new Error("useEUSignContext has to be used within <EUSignContext.Provider>");
    }

    return context;
};
