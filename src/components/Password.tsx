import React, {useRef} from "react";

interface PasswordProps {
    title: string
    onEnter: (pass: string | null) => void
}

function Password(props: PasswordProps) {
    const passRef = useRef<HTMLInputElement>(null);

    function handleSetPassword() {
        if (passRef.current) {
            props.onEnter(passRef.current.value);
        } else {
            props.onEnter(null);
        }
    }

    return (
        <div className="input-group mb-3">
            <input type='password'  className="form-control" placeholder='Password' ref={passRef}/>
            <button type='button' className='btn btn-light' onClick={handleSetPassword}>{props.title}</button>
        </div>
    );
}

export default Password;
