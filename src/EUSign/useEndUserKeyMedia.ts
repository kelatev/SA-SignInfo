import { useState } from "react";
import { EndUserInstance, EndUserLibraryType } from "./useEndUserInstance";
import { EndUserKeyMedia } from "./EndUserTypes";

interface Props {
    instance: EndUserInstance;
}

export default function useEndUserKeyMedia(props: Props) {
    const [isPKActionDone, setIsPKActionDone] = useState(false);
    const [KM, setKM] = useState();
    const [updateKM, setUpdateKM] = useState(false);
    const [updatingKM, setUpdatingKM] = useState(false);
    const [readedPKey, setReadedPKey] = useState();
    const [KMs, setKMs] = useState<EndUserKeyMedia[]>([]);
    const [dimmerViewTimer, setDimmerViewTimer] = useState<NodeJS.Timeout | undefined>();
    const [dimmerViewTimerLabel, setDimmerViewTimerLabel] = useState<string>();
    const [dimmerViewTimerBlock, setDimmerViewTimerBlock] = useState(false);

    const multiKeyDevice = ["криптомод. ІІТ Гряда-301"];

    const GetKMLocalizedVisibleName = (keyMedia: EndUserKeyMedia) =>
        keyMedia.device + "(" + keyMedia.type + ")";

    const GetKMsVisibleNames = (keyMedias: EndUserKeyMedia[]) => {
        const result: string[] = [];
        if (keyMedias) {
            keyMedias.forEach(item => result.push(GetKMLocalizedVisibleName(item)));
        }
        return result;
    };

    const IsKMMultiKeyDevice = (keyMedia: EndUserKeyMedia) =>
        keyMedia.type && multiKeyDevice.indexOf(keyMedia.type) > -1;

    const IsKMConnected = (item: EndUserKeyMedia, arr: EndUserKeyMedia[]) => {
        for (let i = 0; i < arr.length; i++) {
            const item0 = arr[i];
            if (
                item.typeIndex === item0.typeIndex &&
                item.devIndex === item0.devIndex &&
                item.type === item0.type &&
                item.device === item0.device
            ) {
                return true;
            }
        }
        return false;
    };

    const IsKMsUpdated = (list1: EndUserKeyMedia[], list2: EndUserKeyMedia[]) => {
        const arr1 = GetKMsVisibleNames(list1);
        const arr2 = GetKMsVisibleNames(list2);
        if (arr1.length !== arr2.length) return true;
        for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return true;
        return false;
    };

    const BeginUpdateKMs = () => {
        console.log("BeginUpdateKMs");
        if (props.instance.type === EndUserLibraryType.JS) {
            if (updatingKM) {
                setUpdateKM(true);
            } else {
                setUpdateKM(true);
                setUpdatingKM(true);
                props.instance.library
                    ?.GetKeyMedias()
                    .then(data => {
                        console.log("KeyMedias: ", data);
                        setUpdatingKM(false);
                        if (updateKM) {
                            if (IsKMsUpdated(data, KMs)) {
                                setKMs(data);
                            }
                            setTimeout(function () {
                                updateKM && BeginUpdateKMs();
                            }, 1e3);
                        }
                    })
                    .catch(e => {
                        setUpdatingKM(false);
                        if (updateKM) console.log("ERROR_KM_UPDATE_LIST", e);
                        StopUpdateKMs();
                    });
            }
        } else {
            StopUpdateKMs();
        }
    };

    const StopUpdateKMs = () => {
        console.log("StopUpdateKMs");
        setUpdateKM(false);
    };

    const BeginOperationConfirmationTimer = (expire: Date, text: string, callback: () => void) => {
        const func = () => {
            var i = expire.getTime() - new Date().getTime(),
                o = Math.floor((i / 1e3) % 60),
                a = Math.floor((i / 1e3 / 60) % 60),
                s = text + " " + ("0" + a).slice(-2) + ":" + ("0" + o).slice(-2);
            setDimmerViewTimerLabel(s);
            if (i <= 0) {
                clearInterval(dimmerViewTimer);
                setDimmerViewTimer(undefined);
                callback();
            }
        };
        func();
        setDimmerViewTimer(setInterval(func, 1e3));
        setDimmerViewTimerBlock(true);
    };

    const StopOperationConfirmationTimer = () => {
        if (dimmerViewTimer !== undefined) {
            clearInterval(dimmerViewTimer);
            setDimmerViewTimer(undefined);
            setDimmerViewTimerBlock(false);
        }
    };

    return {};
}
