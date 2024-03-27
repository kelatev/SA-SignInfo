import { useState, useRef } from "react";

export interface ConfirmationTimerReturn {
    dimmerViewTimerLabel: string | undefined;
    dimmerViewTimerVisible: boolean;
    dimmerViewTimerBlock: JSX.Element | undefined;
    StopTimer: () => void;
    BeginOperation: (href: string, qrCode: string, kspProvider: string, expire: Date) => void;
}

export default function useEndUserConfirmationTimer(): ConfirmationTimerReturn {
    const dimmerViewTimer = useRef<NodeJS.Timeout>();
    const [dimmerViewTimerLabel, setDimmerViewTimerLabel] = useState<string>();
    const [dimmerViewTimerVisible, setDimmerViewTimerVisible] = useState(false);
    const [dimmerViewTimerBlock, setDimmerViewTimerBlock] = useState<JSX.Element>();

    const BeginTimer = (expire: Date, text: string, callback: () => void) => {
        const func = () => {
            var i = expire.getTime() - new Date().getTime(),
                o = Math.floor((i / 1e3) % 60),
                a = Math.floor((i / 1e3 / 60) % 60),
                s = text + " " + ("0" + a).slice(-2) + ":" + ("0" + o).slice(-2);
            setDimmerViewTimerLabel(s);
            if (i <= 0) {
                clearInterval(dimmerViewTimer.current);
                dimmerViewTimer.current = (undefined);
                setDimmerViewTimerVisible(false);
                callback();
            }
        };
        func();
        dimmerViewTimer.current = setInterval(func, 1e3);
        setDimmerViewTimerVisible(true);
    };

    const StopTimer = () => {
        if (dimmerViewTimer.current !== undefined) {
            clearInterval(dimmerViewTimer.current);
            dimmerViewTimer.current = undefined;
            setDimmerViewTimerVisible(false);
        }
    };

    const BeginOperation = (href: string, qrCode: string, kspProvider: string, expire: Date) => {
        BeginTimer(expire, 'QR-код буде дійсним ще', () => StopTimer());

        setDimmerViewTimerBlock((
            <div className="text-center">
                <div className='p-4'>
                    <a href={href} target="_blank" rel="noreferrer">
                        <img src={'data:image/bmp;base64,' + qrCode} alt='token' className="p-4 bg-white" />
                    </a>
                </div>
                <label className="text-mutted"><a href={href} target="_blank" rel="noreferrer">
                    {'Натисність або зчитайте QR-код сканером у застосунку {0} та дотримуйтесь інструкцій'.replace('{0}', kspProvider)}
                </a></label>
            </div>
        ));
    }

    return {
        dimmerViewTimerLabel,
        dimmerViewTimerVisible,
        dimmerViewTimerBlock,
        StopTimer,
        BeginOperation
    };
}
