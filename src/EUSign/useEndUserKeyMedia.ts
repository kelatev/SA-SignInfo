import { useRef, useState, useCallback } from "react";
import { EndUserInstance, EndUserLibraryType } from "./useEndUserInstance";
import { EndUserKeyMedia } from "./EndUserTypes";

interface Props {
    instance?: EndUserInstance;
}

export default function useEndUserKeyMedia(props: Props) {
    const updateKMRef = useRef(false);
    const updatingKMRef = useRef(false);
    const [KMs, setKMs] = useState<EndUserKeyMedia[]>([]);

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

    const BeginUpdateKMs = useCallback(() => {
        console.log("BeginUpdateKMs");
        if (props.instance?.type === EndUserLibraryType.JS) {
            if (updatingKMRef.current) {
                updateKMRef.current = true;
            } else {
                updateKMRef.current = true;
                updatingKMRef.current = true;
                props.instance.library
                    ?.GetKeyMedias()
                    .then(data => {
                        console.log("KeyMedias: ", data);
                        updatingKMRef.current = false;
                        if (updateKMRef.current) {
                            if (IsKMsUpdated(data, KMs)) {
                                setKMs(data);
                            }
                            setTimeout(() => {
                                updateKMRef.current && BeginUpdateKMs();
                            }, 1e3);
                        }
                    })
                    .catch(e => {
                        updatingKMRef.current = false;
                        if (updateKMRef.current) console.log("ERROR_KM_UPDATE_LIST", e);
                        StopUpdateKMs();
                    });
            }
        } else {
            StopUpdateKMs();
        }
    }, [props.instance?.type]);

    const StopUpdateKMs = () => {
        console.log("StopUpdateKMs");
        updateKMRef.current = false;
    };

    return { KMs, updateKMRef, updatingKMRef, BeginUpdateKMs, StopUpdateKMs };
}
