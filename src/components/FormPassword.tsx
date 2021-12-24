import React, {useRef} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
        <>
            <InputGroup className="mb-3">
                <FormControl type="password" placeholder='FormPassword' ref={passRef}/>
                <Button variant="primary" onClick={handleSetPassword}>{props.title}</Button>
            </InputGroup>
        </>
    );
}

export default FormPassword;
