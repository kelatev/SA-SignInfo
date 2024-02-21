import React, {useContext, useEffect, useState} from 'react';
import {EndUserJKSPrivateKey, EndUserOwnerInfo} from "../../EUSign/types";
import EUSignContext from "../../context/EUSign";
import Timeline from "../Timeline/Timeline";
import { User } from "@phosphor-icons/react";

interface SignSignInfoBlockProps {
    endUserJKSPrivateKey: EndUserJKSPrivateKey
}

function SignInfo(props: SignSignInfoBlockProps) {
    const {euSign} = useContext(EUSignContext);

    const [ownerInfo, setOwnerInfo] = useState<EndUserOwnerInfo>();

    useEffect(() => {
        if (euSign) {
            try {
                euSign.m_library.GetPrivateKeyOwnerInfo().then(setOwnerInfo);
            } catch (e: any) {
                console.log(e)
            }
        }
    }, [euSign]);

    return (
        <>
            {ownerInfo && (
                <Timeline.Item title={ownerInfo.GetSubjFullName()} icon={<User />}>
                    <div className='d-flex align-items-center'>
                        <span className='badge badge-light-primary'>{ownerInfo.GetSubjOrg()}</span>
                        <span className='badge badge-light-primary ms-3'>{ownerInfo.GetSubjDRFOCode() || ownerInfo.GetSubjEDRPOUCode()}</span>
                    </div>
                </Timeline.Item>)}
        </>
    );
}

export default SignInfo;
