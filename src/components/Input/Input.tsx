import {
    ChangeEvent,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { handleInput, propsInput } from './type';
import { debounce } from '@common/utils';
import { InputWidget } from './InputWidget';

import './input.less';

const TheInput = (props: propsInput, ref: any) => {
    const {
        inputSize = 'normal',
        label,
        clearable = false,
        prepend,
        append,
        debounce: debounceTime,
        onChange,
        ...defaultInputAttributes
    } = props;
    const { type, disabled } = props;

    const refInput = useRef<any>();
    const [value, setValue] = useState('');

    useEffect(() => {
        if (refInput.current) {
            refInput.current.value = value;
        }
    }, [value]);

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

    // handle debounce for the onChange event
    const composeOnChange = () => {
        let time;
        if (debounceTime === true) {
            time = 100;
        } else if (typeof debounceTime === 'number') {
            time = debounceTime;
        } else {
            time = 0;
        }

        if (time) {
            return debounce((e: ChangeEvent<HTMLInputElement>) => {
                props?.onChange && props.onChange(e);
                setValue(e.target.value);
            }, time);
        } else {
            return (e: ChangeEvent<HTMLInputElement>) => {
                onChange && onChange(e);
                setValue(e.target.value);
            };
        }
    };

    useImperativeHandle(ref, () => {
        return {
            setValue,
            value,
            refInput,
            clear: () => {
                setValue('');
            },
        };
    });

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
                onChange={composeOnChange()}
                {...defaultInputAttributes}
            />

            {(clearable || append || type === 'password') && (
                <div className='wdu-input__widget' ref={calcWidgetWidth}>
                    {(append || type === 'password') && (
                        <InputWidget
                            type={type}
                            inputRef={refInput}
                            setValue={setValue}></InputWidget>
                    )}

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
};

const Input = forwardRef(TheInput);
Input.displayName = 'Input';

export { Input };
