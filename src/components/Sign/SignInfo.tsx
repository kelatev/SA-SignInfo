import React from 'react';
import { usePrivatKeyContext } from '../../context/PrivatKey';
import Timeline from "../Timeline/Timeline";
import { User } from "@phosphor-icons/react";

function SignInfo() {
    const { privateKey } = usePrivatKeyContext();

    const ownerInfo = privateKey?.ownerInfo;

    return (
        <>
            {ownerInfo && (
                <Timeline.Item title={ownerInfo.subjFullName ?? ''} icon={<User />}>
                    <div className='d-flex align-items-center'>
                        <span className='badge badge-light-primary'>{ownerInfo.subjOrg}</span>
                        <span className='badge badge-light-primary ms-3'>{ownerInfo.subjDRFOCode || ownerInfo.subjEDRPOUCode}</span>
                    </div>
                </Timeline.Item>)}
        </>
    );
}

export default SignInfo;
