import React, {
    MouseEvent,
    useContext,
    useEffect,
    useId,
    useState,
} from 'react';
import { NavContext } from './NavMenu';
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
        indent = 20,
        label,
    } = props as propsNavMenuItem & internalPropsNavMenuItem;

    const { selectedItem, submitSelectedItem } = useContext(NavContext);

    const menuId = useId();

    const [navItemClassList, setNavItemClassList] = useState(() => {
        const classes = [
            'wdu-navMenuItem',
            className,
            disabled && 'wdu-navMenuItem__disabled',
        ];

        return classes.filter((item) => Boolean(item)).join(' ');
    });

    const renderNavItem = () => {
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

    const handleClick = (event: MouseEvent) => {
        if (disabled) return;

        // ignore the menuId of first NavMenuItem in SubNavMenu
        if (!subMenuItem) submitSelectedItem(menuId);

        if (typeof onClick === 'function') {
            onClick(event, {
                to,
                expand,
                disabled,
                label,
            });
        }
    };

    useEffect(() => {
        if (selectedItem) {
            if (selectedItem === menuId) {
                setNavItemClassList(
                    (prev) => prev + ' wdu-navMenuItem__active',
                );
            } else {
                setNavItemClassList((prev) => {
                    const classes = prev.split(' ');
                    const result = classes
                        .filter((item) => item !== 'wdu-navMenuItem__active')
                        .join(' ');
                    return result;
                });
            }
        }
    }, [selectedItem]);

    return (
        <li
            className={navItemClassList}
            style={{ paddingLeft: `${indent}px` }}
            onClick={handleClick}>
            {icon && <span className={'wdu-navMenuItem__icon'}>{icon}</span>}

            {renderNavItem()}

            {subMenuItem && (
                <i
                    className={`${
                        expand ? 'wdu-icon-caret-down' : 'wdu-icon-caret-right'
                    }`}></i>
            )}
        </li>
    );
}

const memoNavMenuItem = React.memo(NavMenuItem);
memoNavMenuItem.displayName = 'NavMenuItem';

export default memoNavMenuItem;
