import { useState } from 'react';
import { propsSwitch } from './type';

import './switch.less';

function Switch(props: propsSwitch) {
    const {
        id,
        activeLabel,
        inactiveLabel,
        activeValue = true,
        inactiveValue = false,
        defaultValue=false,
        disabled = false,
        size = 'normal',
        onChange,
    } = props;

    const formatSwitchValue = (value: any) => {
        if (value === activeValue) {
            return true;
        } else if (value === inactiveValue) {
            return false;
        } else {
            throw new RangeError('the value of the Switch is illegal');
        }
    };

    const [state, setState] = useState(formatSwitchValue(defaultValue));

    const handleClick = () => {
        if (disabled) return;

        setState((prev) => !prev);
        onChange && onChange(!state);
    };

    const classList = `wdu-switch wdu-switch__${size} ${
        disabled ? 'wdu-switch__disabled' : ''
    }`;

    return (
        <button className={classList}>
            {inactiveLabel && (
                <span className='wdu-switch__label wdu-switch__label-inactive'>
                    {inactiveLabel}
                </span>
            )}

            <div
                className={`wdu-switch__main ${
                    state ? 'wdu-switch__active' : ''
                }`}
                id={id}
                onClick={handleClick}>
                <div className='wdu-switch__wrapper'></div>
            </div>

            {activeLabel && (
                <span className='wdu-switch__label wdu-switch__label-active'>
                    {activeLabel}
                </span>
            )}
        </button>
    );
}
Switch.displayName = 'Switch';

export default Switch;
