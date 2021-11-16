import React, {useRef} from "react";

interface PasswordProps {
    title: string
    onEnter: (pass: string | null) => void
}

function FormPassword(props: PasswordProps) {
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
            <input type='password'  className="form-control" placeholder='FormPassword' ref={passRef}/>
            <button type='button' className='btn btn-primary' onClick={handleSetPassword}>{props.title}</button>
        </div>
    );
}

export default FormPassword;
