import React, { KeyboardEvent, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface PasswordProps {
    title: string
    onChange?: () => void
    onEnter: (pass: string) => void
    loading?: boolean
}

function FormPassword(props: PasswordProps) {
    const [password, setPassword] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        props.onChange && props.onChange();
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
                    placeholder='пароль'
                    value={password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Button variant="primary" onClick={handleSubmit} disabled={props.loading}>{props.title}</Button>
            </InputGroup>
        </>
    );
}

export default FormPassword;
