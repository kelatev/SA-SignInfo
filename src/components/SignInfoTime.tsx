import React from 'react';
import {EndUserTimeInfo} from "../EUSign/types";

interface SignTimeProps {
    data: EndUserTimeInfo
}

function SignInfoTime(props: SignTimeProps) {
    return (
        <div>
            <div>время</div>
            <div>isTimeAvail: {props.data.isTimeAvail ? '1' : '0'}</div>
            <div>isTimeStamp: {props.data.isTimeStamp ? '1' : '0'}</div>
            <div>time: {props.data.time.toString()}</div>
        </div>
    );
}

export default SignInfoTime;
