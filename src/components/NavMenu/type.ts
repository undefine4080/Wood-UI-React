import { MouseEventHandler, ReactElement } from 'react';

interface propsNavMenu {
    single?: boolean; // just expand single item while click
    children?: any;
    className?: string;
}

interface propsNavMenuItem {
    to?: string; // target url
    icon?: any;
    expand?: boolean;
    indent?: number;
    subMenuItem?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler;
    children?: any;
    className?: string;
}

interface internalPropsNavMenuItem {
    single?: boolean;
    menuId?: number;
    lastExpandItem?: number;
    submitExpandId?: (menuId: number) => void;
}

interface propsSubNavMenu extends propsNavMenuItem {
    children?:
        | ReactElement<React.FC<propsNavMenuItem>>
        | Array<ReactElement<React.FC<propsNavMenuItem>>>;
    title: string | number;
    parentItemCount?: number;
    parentSetItemCount?: any;
}

export type {
    propsNavMenu,
    propsNavMenuItem,
    propsSubNavMenu,
    internalPropsNavMenuItem,
};
