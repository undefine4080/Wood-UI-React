import { useEffect, useState } from 'react';
import { propsSwitch } from './type';

import './switch.less';

function Switch(props: propsSwitch) {
    const {
        id,
        label,
        defaultValue = false,
        onChange,
        disabled = false,
        size = 'normal',
    } = props;

    const [state, setState] = useState(defaultValue);

    const handleClick = () => {
        if (disabled) return;

        setState((pre: boolean) => !pre);
        onChange && onChange(!state);
    };

    const classList = `wdu-switch ${
        disabled ? 'wdu-switch__disabled' : ''
    } wdu-switch__${size}`;

    return (
        <button className={classList}>
            {label && <span className='wdu-switch__label'>{label}</span>}

            <div
                className={`wdu-switch__main ${
                    state ? 'wdu-switch__active' : ''
                }`}
                id={id}
                onClick={handleClick}>
                <div className='wdu-switch__wrapper'></div>
            </div>
        </button>
    );
}
Switch.displayName = 'Switch';

export default Switch;
