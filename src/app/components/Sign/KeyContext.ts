import { createContext, useContext } from "react";
import { EndUserCertificate, EndUserOwnerInfo, EndUserPrivateKeyContext } from "../../EUSign/EndUserTypes";
import { SettingsType } from "./types";

export type PrivatKeyType =
    | {
          privateKey?: Uint8Array;
          certificates?: EndUserCertificate[];
          ownerInfo?: EndUserOwnerInfo;
          pkContext?: EndUserPrivateKeyContext;
          settings?: SettingsType;
      }
    | undefined;

interface KeyContextType {
    privateKey: PrivatKeyType;
    setPrivateKey: React.Dispatch<React.SetStateAction<PrivatKeyType>>;
}

export const KeyContext = createContext<KeyContextType>({} as KeyContextType);

export const useKeyContext = () => {
    const pkContext = useContext(KeyContext);

    if (!pkContext) {
        throw new Error("useKeyContext has to be used within <KeyContext.Provider>");
    }

    return pkContext;
};
