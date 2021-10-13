import React from 'react';
import {EndUserCertificateInfoEx} from "../EUSign/types";
import IconCoding6 from "../icons/duotune/coding/cod006.svg";
import TimelineItem from "./TimelineItem";

interface SignerProps {
    data: EndUserCertificateInfoEx
}

function SignInfoSigner(props: SignerProps) {
    return (
        <TimelineItem title='подписант' icon={IconCoding6}>
            {JSON.stringify(props.data)}
        </TimelineItem>
    );
}

export default SignInfoSigner;
