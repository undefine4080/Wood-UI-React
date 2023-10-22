import React, { useImperativeHandle, useRef, useState } from 'react';
import { propsInput } from './type';
import { debounce } from '@common/utils';
import Clear from '@icon/Clear/Clear';

import './input.less';

function Input(props: propsInput) {
    const {
        id,
        size = 'normal',
        name,
        label,
        type = 'text',
        placeholder,
        value,
        onChange,
        onBlur,
        onFocus,
        min,
        max,
        showClear = false,
    } = props;

    const inputContainerClass = `wdu-input-container wdu-input-${size}`;
    const inputClass = `wdu-input__input ${
        !label && 'wdu-input__input-noLabel'
    }`;

    const [input, setInput] = useState(false);
    const refInput = useRef<any>();

    const clear = (e: any) => {
        e.stopPropagation();
        refInput.current.value = '';
        setInput(false);
    };

    const getInputValue = (e: any) => {
        const value = e.target.value;
        const inputVal = Number(value) ? Number(value) : value;
        setInput(inputVal.length > 0);
        return inputVal;
    };

    const handleOnChange = debounce((e: any) => {
        onChange && onChange(getInputValue(e));
    }, 500);

    const handleOnBlur = (e: any) => {
        onBlur && onBlur(getInputValue(e));
    };

    const handleOnFocus = (e: any) => {
        onFocus && onFocus(getInputValue(e));
    };

    return (
        <div className={inputContainerClass}>
            {label && (
                <label htmlFor={id} className='wdu-input__label'>
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={refInput}
                value={value}
                type={type}
                name={name}
                min={min}
                max={max}
                className={inputClass}
                placeholder={placeholder}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
            />

            {showClear && input && (
                <span className='wdu-input__clear'>
                    <Clear onClick={clear} />
                </span>
            )}
        </div>
    );
}
Input.displayName = 'Input';

export { Input };
