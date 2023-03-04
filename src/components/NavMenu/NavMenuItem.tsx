import Arrow from '@base/icon/Arrow/Arrow';
import { MouseEvent } from 'react';
import { propsNavMenuItem } from './type';

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
    } = props;

    const renderItem = () => {
        if (to) {
            // normal <a>
            return (
                <a className={'wdu-navMenuItem__label'} href={to}>
                    {children}
                </a>
            );
        } else if (!to && children) {
            // <Link/> of react-router
            return children;
        } else if (!to && children) {
            // static title
            return <span className={'wdu-navMenuItem__label'}>{children}</span>;
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

NavMenuItem.displayName = 'NavMenuItem';

export default NavMenuItem;
export const ItemHeight = 50;
