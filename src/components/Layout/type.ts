import commonProps from "@base/types/commonInterface";

interface propsContainer extends commonProps {
    children?: any;
}

interface propsAside extends commonProps {
    side?: 'left' | 'right';
    width: string | number;
}

interface propsFooter extends commonProps {
    height: number | string;
}

interface propsRow {
    justify?: 'start' | 'center' | 'end' | 'around' | 'between';
    align?: 'top' | 'middle' | 'bottom';
    className?: string;
    children?: any;
}

interface propsCol {
    span: number;
    className?: string;
    children?: any;
}

export type {
    propsContainer,
    propsAside,
    propsFooter,
    propsRow,
    propsCol
};