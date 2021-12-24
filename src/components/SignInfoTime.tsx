import React from 'react';
import {EndUserTimeInfo} from "../EUSign/types";
import IconCoding6 from "../media/icons/duotune/coding/cod006.svg";
import TimelineItem from "./TimelineItem";

interface SignTimeProps {
    data: EndUserTimeInfo
}

function SignInfoTime(props: SignTimeProps) {
    return (
        <TimelineItem title='время' icon={IconCoding6}>
            <div>isTimeAvail: {props.data.isTimeAvail ? '1' : '0'}</div>
            <div>isTimeStamp: {props.data.isTimeStamp ? '1' : '0'}</div>
            <div>time: {props.data.time.toString()}</div>
        </TimelineItem>
    );
}

export default SignInfoTime;
