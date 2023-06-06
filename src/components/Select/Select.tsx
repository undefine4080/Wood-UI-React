import React, { cloneElement, useEffect, useRef, useState } from 'react';
import { propsOption, propsSelect, selectedValue } from './type';
import Popover from '@component/Popover/Popover';
import { getNamedChild } from '@common/utils';
import Arrow from '@icon/Arrow/Arrow';

import './select.less';

function Option(props: propsOption) {
    const { value, label } = props;

    return (
        <li className={'wdu-select__option'} data-value={value}>
            {label}
        </li>
    );
}
Option.displayName = 'Option';

function Select(props: propsSelect) {
    const {
        label,
        value,
        children,
        onSelect,
        placeholder,
        disabled = false,
        prepend,
        append,
        size,
        className,
        trigger = 'click',
    } = props;

    const refSelect = useRef<any>();
    const [optionsActive, setOptionsActive] = useState(false);
    const [selected, setSelected] = useState<selectedValue>({
        value: '',
        label: '',
    });

    const optionItems = getNamedChild('Option', children);

    // set the value on mounted
    useEffect(() => {
        if (value) {
            const selectedValue: any = optionItems.find(
                (item: any) => item.props.value === value,
            );
            if (selectedValue) {
                const { value, label } = selectedValue.props;
                refSelect.current.value = label;
                onSelect && onSelect({ value, label });
            } else {
                console.warn(
                    'the value you set which is not exist, please checkout it again',
                );
            }
        }
    }, []);

    const handleSelect = (e: any) => {
        const value = e.nativeEvent.target.dataset.value;
        const label = e.target.innerText;

        // sync the value to the input element
        refSelect.current.value = label;

        setSelected({ value, label });
        onSelect && onSelect({ value, label });

        // close popover
        setOptionsActive(false);
    };

    const options = (
        <ul className={`wdu-select__options`} onClick={handleSelect}>
            {optionItems}
        </ul>
    );

    const prependContent = () => {
        if (prepend) {
            return (
                <div className='wdu-select__prepend'>
                    {cloneElement(prepend, {
                        className: 'wdu-select__prependItem',
                    })}
                </div>
            );
        } else if (label) {
            return <div className='wdu-select__label'>{label}</div>;
        } else {
            return null;
        }
    };

    const classList = `wdu-select ${className || ''} ${
        disabled && 'wdu-select__disabled'
    } ${optionsActive && 'wdu-select__active'} wdu-select__${size}`;

    return (
        <Popover
            active={optionsActive}
            onChange={(isOpen: boolean) => setOptionsActive(isOpen)}
            trigger={trigger}
            position='bottom'
            className='wdu-select-popover'
            content={options}>
            <div className={classList}>
                {prependContent()}

                <div className='wdu-select__main'>
                    <input
                        ref={refSelect}
                        className='wdu-select__input'
                        placeholder={placeholder}
                        onClick={() => setOptionsActive(!optionsActive)}
                        disabled={disabled}></input>
                    <Arrow style={optionsActive ? 'top' : 'bottom'} />
                </div>

                {append && (
                    <div className='wdu-select__append'>
                        {cloneElement(append, {
                            className: 'wdu-select__appendItem',
                        })}
                    </div>
                )}
            </div>
        </Popover>
    );
}
Select.displayName = 'Select';

export { Select, Option };
