import { propsNavMenu } from './type';
import NavMenuItem from './NavMenuItem';
import { getNamedChild } from '@base/utils';
import SubNavMenu from './SubNavMenu';

import './navMenu.less';

function NavMenu(props: propsNavMenu) {
    const { children, className = '', single=false } = props;

    const navMenuItems = getNamedChild(['NavMenuItem', 'SubNavMenu'], children);
    
    return <ul className={`wdu-navMenu ${className}`}>{navMenuItems}</ul>;
}

export { NavMenu, NavMenuItem, SubNavMenu };
