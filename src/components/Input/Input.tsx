import React, {
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { propsInput } from './type';
import { debounce } from '@common/utils';

import './input.less';
import { InputWidget } from './InputWidget';

function Input(props: propsInput) {
    const {
        inputSize = 'normal',
        label,
        clearable = false,
        prepend,
        append,
        ...defaultInputAttributes
    } = props;
    const { type, disabled } = props;

    const refInput = useRef<any>();
    const [value, setValue] = useState('');

    // calculate the width of the insert node in order to set the padding of input
    const [inputPaddingLeft, setInputPaddingLeft] = useState('');
    const [inputPaddingRight, setInputPaddingRight] = useState('');
    const calcPrependWidth = (node: HTMLDivElement) => {
        if (node) {
            setTimeout(() => {
                setInputPaddingLeft(node.clientWidth + 5 + 'px');
            }, 50);
        }
    };
    const calcWidgetWidth = (node: HTMLDivElement) => {
        if (node) {
            setTimeout(() => {
                setInputPaddingRight(node.clientWidth + 5 + 'px');
            }, 50);
        }
    };

    return (
        <div
            className={`wdu-input wdu-input-${inputSize} ${
                disabled ? 'wdu-input__disabled' : ''
            }`}>
            {(label || prepend) && (
                <div className='wdu-input__prepend' ref={calcPrependWidth}>
                    {label && (
                        <label htmlFor={props.id} className='wdu-input__label'>
                            {label}
                        </label>
                    )}

                    {prepend}
                </div>
            )}

            <input
                ref={refInput}
                className={'wdu-input__input'}
                style={{
                    paddingLeft: inputPaddingLeft,
                    paddingRight: inputPaddingRight,
                }}
                onChange={(e) => setValue(e.target.value)}
                {...defaultInputAttributes}
            />

            {(clearable || append || type === 'password') && (
                <div className='wdu-input__widget' ref={calcWidgetWidth}>
                    <InputWidget
                        type={type}
                        inputRef={refInput}
                        setValue={setValue}></InputWidget>

                    {clearable && value && (
                        <InputWidget
                            type='clear'
                            inputRef={refInput}
                            setValue={setValue}></InputWidget>
                    )}

                    {append}
                </div>
            )}
        </div>
    );
}
Input.displayName = 'Input';

export { Input };
