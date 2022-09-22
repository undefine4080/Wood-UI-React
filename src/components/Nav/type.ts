import { JSXElementConstructor } from "react";

interface propsNav {
    fixed?: boolean;
    children?: any;
    onActive?: () => any;
    onClose?: () => any;
}

interface propsNavMenu {
    title: string | JSXElementConstructor<any>;
    children?: any;
    url?: string;
}

interface propsNavItem {
    children?: any;
    url: string;
    newTab?: boolean;
    label: string;
}

export type { propsNav, propsNavItem, propsNavMenu };