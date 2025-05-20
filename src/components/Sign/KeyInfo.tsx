import React from 'react';
import Timeline from "../Timeline/Timeline";
import { useKeyContext } from './KeyContext';
import { UserIcon } from "@phosphor-icons/react";

function KeyInfo() {
    const { privateKey } = useKeyContext();
    const ownerInfo = privateKey?.ownerInfo;

    return (
        <>
            {ownerInfo && (
                <Timeline.Item title={ownerInfo.subjFullName ?? ''} icon={<UserIcon />}>
                    <div className='d-flex align-items-center'>
                        <span className='badge badge-pill badge-primary badge-light-primary badge-outline'>{ownerInfo.subjOrg}</span>
                        <span className='badge badge-pill badge-primary badge-light-primary badge-outline ms-3'>{ownerInfo.subjDRFOCode || ownerInfo.subjEDRPOUCode}</span>
                    </div>
                </Timeline.Item>)}
        </>
    );
}

export default KeyInfo;
