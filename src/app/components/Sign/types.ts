import { EndUserCAdESType, EndUserXAdESType, EndUserASiCType, EndUserSignAlgo, EndUserSignType } from "../../EUSign/EndUserConstants";

export interface SettingsType {
    signType?: EndUserCAdESType | EndUserXAdESType | EndUserASiCType;
    signAlgo?: EndUserSignAlgo;
    signFormat?: EndUserSignType;
}
