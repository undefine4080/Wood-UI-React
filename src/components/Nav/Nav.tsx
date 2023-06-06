import React, { useContext, useEffect, useRef, useState } from "react";
import { getNamedChild } from "@common/utils";
import { propsNav, propsNavItem, propsNavMenu } from "./type";

import './nav.less';

const navContext = React.createContext<any>( {} );
const Provider = navContext.Provider;

function Nav ( props: propsNav ) {
    const { fixed = false, children, onActive,
        onClose } = props;

    const navMenu = getNamedChild( 'NavMenu', children );
    const refNav = useRef<any>();

    const navClass = `wdu-nav ${ fixed ? 'wdu-nav__fixed' : '' }`;

    return (
        <div className={ navClass }
            ref={ refNav }>
            <Provider
                value={ { onActive, onClose } }>
                { navMenu }
            </Provider>
        </div>
    );
}

function NavMenu ( props: propsNavMenu ) {
    const { title, children, url } = props;
    const [ navActive, setNavActive ] = useState( false );

    const { onActive, onClose } = useContext( navContext );

    const navMenuClass = `wdu-navMenu__container ${ navActive && 'wdu-navMenu__container-active' }`;

    return (
        <div className="wdu-navMenu"
            onMouseLeave={ () => {
                setNavActive( false );
                onClose && onClose();
            } }>
            { title && (
                <a className="wdu-navMenu__title"
                    onMouseEnter={ () => {
                        setNavActive( true );
                        onActive && onActive();
                    } }
                    href={ url }
                    target="_blank"
                >
                    { ( title as string ) }
                </a>
            ) }

            {
                children && (
                    <div className={ navMenuClass }>
                        { children }
                    </div>
                )
            }
        </div>
    );
}
NavMenu.displayName = 'NavMenu';

function NavItem ( props: propsNavItem ) {
    const { url, label } = props;

    return (
        <a className="wdu-nav__item"
            href={ url }
            target="_blank">{ label }</a>
    );
}
NavItem.displayName = 'NavItem';

export { Nav, NavItem, NavMenu };