import { useState, useEffect } from "react";
import EndUserInstance from "../EUSign/EndUserInstance";

interface Props {
    library: EndUserInstance | undefined;
}

export default function useEndUserLoading(props: Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        setError(undefined);
        if (props.library) {
            if (props.library.IsLoaded()) {
                setLoading(false);
            } else if (props.library.IsLoading()) {
                setLoading(true);
            } else {
                props.library
                    .Load()
                    .then(() => {
                        setLoading(false);
                    })
                    .catch(err => {
                        setLoading(false);
                        setError(err);
                    });
            }
        } else {
            setLoading(false);
        }
    }, [props.library]);

    return { loading, error };
}
