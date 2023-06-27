import { MouseEvent, ReactElement } from 'react';
interface internalPropsNavMenuItem {
    single?: boolean;
    menuId?: number;
    lastExpandItem?: string;
    submitExpandId?: any;
    indent?: number;
    subMenuItem?: boolean;
    className?: string;
    expand?: boolean;
}

interface internalPropsSubNavMenu extends internalPropsNavMenuItem {}

interface propsNavMenu {
    single?: boolean;
    children?: Array<JSX.Element>;
    className?: string;
}

interface propsNavMenuItem extends internalPropsNavMenuItem {
    to?: string;
    icon?: any;
    disabled?: boolean;
    onClick?: (event: MouseEvent, navMenuItemData: any) => any;
    label?: string;
    children?: any;
}

interface propsSubNavMenu {
    label: string;
    icon?: any;
    disabled?: boolean;
    onClick?: (event: MouseEvent, navMenuItemData: any) => any;
    expand?: boolean;
    children?: any;
}

interface NavMenuContext {
    readonly single?: boolean;
    readonly lastExpandItem?: string;
    readonly submitExpandId?: any;
    readonly selectedItem?: string;
    readonly submitSelectedItem?: any;
}

export type {
    propsNavMenu,
    propsNavMenuItem,
    propsSubNavMenu,
    internalPropsNavMenuItem,
    internalPropsSubNavMenu,
    NavMenuContext,
};
