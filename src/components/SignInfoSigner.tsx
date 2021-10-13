import React from 'react';
import {EndUserCertificateInfoEx} from "../EUSign/types";

interface SignerProps {
    data: EndUserCertificateInfoEx
}

function SignInfoSigner(props: SignerProps) {
    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    );
}

export default SignInfoSigner;
