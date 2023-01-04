import commonProps from "@base/types/commonInterface";

interface propsContainer {
    children?: any;
    className?: string;
    style?: Object;
}

interface propsMain {
    children?: any;
    className?: string;
    style?: Object;
}

interface propsAside {
    side?: 'left' | 'right';
    style?: Object;
    children?: any;
    className?: string;
}

interface propsFooterOrHeader {
    children?: any;
    className?: string;
}

interface propsRow {
    justify?: 'start' | 'center' | 'end' | 'around' | 'between';
    align?: 'top' | 'middle' | 'bottom';
    className?: string;
    children?: any;
    style?: Object;
}

interface propsCol {
    span: number;
    className?: string;
    children?: any;
    style?: Object;
}

export type {
    propsContainer,
    propsMain,
    propsAside,
    propsFooterOrHeader,
    propsRow,
    propsCol
};