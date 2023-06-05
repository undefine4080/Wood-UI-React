import React, {
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { propsOption, propsSelect, selectedValue } from './type';
import Popover from '@component/Popover/Popover';
import { getNamedChild } from '@base/utils';
import Arrow from '@base/icon/Arrow/Arrow';

import './select.less';

const optionHeight = '36px';
const SelectContext = React.createContext({ value: '', label: '' });
const Provider = SelectContext.Provider;

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

    return (
        <Popover
            active={optionsActive}
            onChange={(isOpen: boolean) => setOptionsActive(isOpen)}
            trigger={trigger}
            position='bottom'
            className='wdu-select-popover'
            content={options}>
            <div
                className={`wdu-select ${className || ''} ${
                    disabled && 'wdu-select__disabled'
                } ${optionsActive && 'wdu-select__active'}`}>
                <input
                    ref={refSelect}
                    className='wdu-select__input'
                    placeholder={placeholder}
                    onClick={() => setOptionsActive(!optionsActive)}
                    disabled={disabled}></input>
                <Arrow style={optionsActive ? 'top' : 'bottom'} />
            </div>
        </Popover>
    );
}
Select.displayName = 'Select';

export { Select, Option };
