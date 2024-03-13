import { EndUserSignAlgo, EndUserSignType } from "../../EUSign/EndUserConstants";

export enum SignType {
    Int = 1,
    Ext = 2,
}

export interface SettingsType {
    signType?: SignType;
    signAlgo?: EndUserSignAlgo;
    signFormat?: EndUserSignType;
}
