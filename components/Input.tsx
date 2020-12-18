import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from '../styles/components/Input';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input = ({ name, ...rest }: IInputProps)  => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField])

    return (
        <Container isErrored={!!error} >
            <input 
                ref={inputRef} 
                defaultValue={defaultValue} 
                {...rest} 
            />
                {error && (
                     <FiAlertCircle size={24} color="#c63030" />
                )}
        </Container>
    )
}

export default Input