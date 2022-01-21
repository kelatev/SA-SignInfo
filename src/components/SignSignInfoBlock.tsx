import React, {useContext, useEffect, useState} from 'react';
import {EndUserJKSPrivateKey, EndUserOwnerInfo} from "../EUSign/types";
import IconCoding6 from "../media/icons/duotune/coding/cod006.svg";
import EUSignContext from "../context/EUSign";
import Timeline from "./Timeline";

interface SignSignInfoBlockProps {
    endUserJKSPrivateKey: EndUserJKSPrivateKey
}

function SignSignInfoBlock(props: SignSignInfoBlockProps) {
    const {euSign} = useContext(EUSignContext);

    const [ownerInfo, setOwnerInfo] = useState<EndUserOwnerInfo>();

    useEffect(() => {
        if (euSign) {
            try {
                euSign.GetPrivateKeyOwnerInfo().then(setOwnerInfo);
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign]);

    return (
        <>
            {ownerInfo && (
                <Timeline.Item title={ownerInfo.GetSubjFullName()} icon={IconCoding6}>
                    <p>РНОКПП: {ownerInfo.GetSubjDRFOCode() || ownerInfo.GetSubjEDRPOUCode()}</p>
                </Timeline.Item>)}
        </>
    );
}

export default SignSignInfoBlock;
