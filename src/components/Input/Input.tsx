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
        disabled = false,
        prepend,
        append,
        ...defaultInputAttributes
    } = props;

    const refInput = useRef<any>();
    const [value, setValue] = useState('');

    // calculate the width of the insert node in order to set the padding of input
    const [inputPaddingLeft, setInputPaddingLeft] = useState('');
    const [inputPaddingRight, setInputPaddingRight] = useState('');
    const calcPrependWidth = (node: HTMLDivElement) => {
        if (node) {
            setInputPaddingLeft(node.clientWidth + 5 + 'px');
        }
    };
    const calcWidgetWidth = (node: HTMLDivElement) => {
        if (node) {
            setInputPaddingRight(node.clientWidth + 5 + 'px');
        }
    };

    return (
        <div className={`wdu-input wdu-input-${inputSize}`}>
            {(label || prepend) && (
                <div className='wdu-input__prepend' ref={calcPrependWidth}>
                    {label && (
                        <label htmlFor={props.id} className='wdu-input__label'>
                            {label}
                        </label>
                    )}
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

            <div className='wdu-input__widget' ref={calcWidgetWidth}>
                <InputWidget
                    type={props.type}
                    inputRef={refInput}
                    setValue={setValue}></InputWidget>

                {clearable && value && (
                    <InputWidget
                        type='clear'
                        inputRef={refInput}
                        setValue={setValue}></InputWidget>
                )}
            </div>
        </div>
    );
}
Input.displayName = 'Input';

export { Input };
