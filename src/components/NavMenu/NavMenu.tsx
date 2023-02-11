import { propsNavMenu } from './type';
import NavMenuItem from './NavMenuItem';
import { getNamedChild } from '@base/utils';
import SubNavMenu from './SubNavMenu';

import './navMenu.less';

function NavMenu(props: propsNavMenu) {
    const { children, className = '', single = false } = props;

    return <ul className={`wdu-navMenu ${className}`}>{children}</ul>;
}

export { NavMenu, NavMenuItem, SubNavMenu };
