import React, { useState, createContext } from 'react';
import { propsNavMenu, NavMenuContext } from './type';
import { bindImplicitProps } from '@base/utils';
import NavMenuItem from './NavMenuItem';
import SubNavMenu from './SubNavMenu';

import './navMenu.less';

const NavContext = createContext<NavMenuContext>({});
const NavProvider = NavContext.Provider;

function NavMenu(props: propsNavMenu) {
    const { children, className = '', single = false } = props;

    const [lastExpandItemId, setLastExpandItemId] = useState<string>();
    const [selectedItem, setSelectedItem] = useState<string>();

    const childNodes = bindImplicitProps(React.Children.toArray(children), {
        lastExpandItem: lastExpandItemId,
        submitExpandId: setLastExpandItemId,
    });

    const contextValue = {
        single,
        selectedItem,
        submitSelectedItem: setSelectedItem,
    };

    return (
        <ul className={`wdu-navMenu ${className}`}>
            <NavProvider value={contextValue}>{childNodes}</NavProvider>
        </ul>
    );
}

export { NavMenu, NavMenuItem, SubNavMenu, NavContext };
