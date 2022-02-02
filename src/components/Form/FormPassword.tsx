import React, {KeyboardEvent, useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface PasswordProps {
    title: string
    onEnter: (pass: string) => void
}

function FormPassword(props: PasswordProps) {
    const [password, setPassword] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        props.onEnter(password);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    type="password"
                    placeholder='FormPassword'
                    value={password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Button variant="primary" onClick={handleSubmit}>{props.title}</Button>
            </InputGroup>
        </>
    );
}

export default FormPassword;
