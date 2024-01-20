import { useEffect, MouseEvent } from 'react';
import { propsButton } from './type';
import { useCssClassManager } from '@common/hooks';

import './button.less';
import commonProps from '@common/types';

const T = 'wdu-button';
function Button(props: propsButton) {
    const {
        type = 'plain',
        size = 'normal',
        children,
        onClick,
        disabled = false,
        loading = false,
        icon,
        className,
    } = props as propsButton & commonProps;

    const classMap = {
        base: `${T} ${className}`,
        type: `${T}__${type}`,
        size: `${T}__${size}`,
        disabled: `${T}__disabled`,
        loading: `${T}__loading`,
    };

    const { addClassName, removeClassName, classList } =
        useCssClassManager(classMap);

    useEffect(() => {
        addClassName('type');
        addClassName('size');
        disabled && addClassName('disabled');
    }, []);

    useEffect(() => {
        loading ? addClassName('loading') : removeClassName('loading');
    }, [loading]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };

    return (
        <button type='button' className={classList} onClick={handleClick}>
            {loading && <i className='wdu-icon-loading'></i>}

            {icon}

            {children}
        </button>
    );
}

Button.displayName = 'Button';

export { Button };
