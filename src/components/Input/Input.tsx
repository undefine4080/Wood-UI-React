import React, {
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { propsInput } from './type';
import { debounce } from '@common/utils';
import Clear from '@icon/Clear/Clear';

import './input.less';

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
    const [inputPaddingLeft, setInputPaddingLeft] = useState('');

    const clear = (e: any) => {
        e.stopPropagation();
        refInput.current.value = '';
        setValue('');
    };

    const calcPrependWidth = (node: HTMLDivElement) => {
        if (node) {
            setInputPaddingLeft(node.clientWidth + 5 + 'px');
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
                style={{ paddingLeft: inputPaddingLeft }}
                {...defaultInputAttributes}
            />
            {clearable && value && (
                <span className='wdu-input__clear'>
                    <Clear onClick={clear} />
                </span>
            )}
        </div>
    );
}
Input.displayName = 'Input';

export { Input };
