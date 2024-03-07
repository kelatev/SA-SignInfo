import { EndUserSettings } from "./types";

export enum EndUserEventType {
    "None" = 0,
    "All" = 1,
    "ConfirmKSPOperation" = 2,
}

export interface LibraryInfo {
    version: string;
    supported: boolean;
    loaded: boolean;
}

export default interface EndUserLibrary {
    AddEventListener: (eventType: EndUserEventType, callback: any) => Promise<void>;
    GetLibraryInfo: (downloadsURL?: string) => Promise<LibraryInfo>;
    IsInitialized: () => Promise<boolean>;
    Initialize: (settings: EndUserSettings) => Promise<void>;
}
