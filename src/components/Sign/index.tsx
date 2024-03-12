import { useState } from "react";
import { KeyContext, PrivatKeyType } from './KeyContext';
import Timeline from "../Timeline/Timeline";
import Card from "../Form/Card";
import KeyInfo from "./KeyInfo";
import KeySelect from "./KeySelect";
import KeySettings from "./KeySettings";
import KeySign from "./KeySign";

function PanelSign() {

    const [privateKey, setPrivateKey] = useState<PrivatKeyType>();

    return (
        <KeyContext.Provider value={{ privateKey, setPrivateKey }}>
            <Card title='Підписати файл' backgroundColor='#CBD4F4' className='bgi-no-repeat bgi-position-x-end' backgroundImage='url("/wave-bg-purple.svg")'>
                <Timeline>
                    <KeySelect />
                    {privateKey && (
                        <>
                            <KeyInfo />
                            <KeySettings />
                            <KeySign />
                        </>
                    )}
                </Timeline>
            </Card>
        </KeyContext.Provider>
    );
}

export default PanelSign;
