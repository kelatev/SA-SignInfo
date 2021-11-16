import React from 'react';
import IconCoding6 from "../icons/duotune/coding/cod006.svg";
import TimelineItem from "./TimelineItem";

interface SignDataProps {
    has: boolean
    data: string | undefined
}

function SignInfoData(props: SignDataProps) {
    return (
        <TimelineItem title='Подписанные данные' icon={IconCoding6}>
            {props.has ? (
                <>присутствуют</>
            ) : (
                <>отсутствуют</>
            )}
        </TimelineItem>
    );
}

export default SignInfoData;
