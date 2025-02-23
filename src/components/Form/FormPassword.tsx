import React, { KeyboardEvent, useState } from "react";
import FormControl from 'react-bootstrap/FormControl';

interface PasswordProps {
    title: string
    onChange?: () => void
    onSubmit: (pass: string) => void
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
        props.onSubmit(password);
    }

    return (
        <>
            <div className="mt-3 position-relative">
                <FormControl
                    type="password"
                    placeholder='пароль'
                    style={{ paddingRight: '88px' }}
                    value={password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button type="button" className="btn btn-sm btn-light-primary position-absolute top-0 end-0 bottom-0 m-1" onClick={handleSubmit} disabled={props.loading}>{props.title}</button>
            </div>
        </>
    );
}

export default FormPassword;
