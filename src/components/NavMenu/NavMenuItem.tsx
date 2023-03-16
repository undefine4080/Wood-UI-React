import Arrow from '@base/icon/Arrow/Arrow';
import React, { MouseEvent } from 'react';
import { internalPropsNavMenuItem, propsNavMenuItem } from './type';

function NavMenuItem(props: propsNavMenuItem) {
    const {
        to,
        icon,
        expand = false,
        onClick,
        subMenuItem = false,
        disabled = false,
        children,
        className = '',
        indent,
        label,
    } = props as propsNavMenuItem & internalPropsNavMenuItem;

    const renderItem = () => {
        if (to) {
            // normal <a>
            return (
                <a
                    className={'wdu-navMenuItem__label'}
                    href={to}
                    target='_blank'
                    referrerPolicy='no-referrer'>
                    {label}
                </a>
            );
        } else if (!to && children) {
            // <Link/> of react-router
            return children;
        } else if (!to && !children && label) {
            // text
            return (
                <span className={'wdu-navMenuItem__label'}>
                    {label.toString()}
                </span>
            );
        }
    };

    const handleClick = (e: MouseEvent) => {
        if (!disabled) {
            if (typeof onClick === 'function') onClick(e);
        }
    };

    return (
        <li
            className={`wdu-navMenuItem ${className} ${
                disabled ? 'wdu-navMenuItem__disabled' : ''
            }`}
            style={{ paddingLeft: `${indent}px` }}
            onClick={handleClick}>
            {icon && <span className={'wdu-navMenuItem__icon'}>{icon}</span>}

            {renderItem()}

            {subMenuItem && <Arrow style={expand ? 'bottom' : 'right'} />}
        </li>
    );
}

const memoNavMenuItem = React.memo(NavMenuItem);
memoNavMenuItem.displayName = 'NavMenuItem';

export default memoNavMenuItem;
