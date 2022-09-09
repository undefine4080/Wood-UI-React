import { ReactChild } from "react";
import commonProps from "../../base/types/commonInterface";

interface propsContainer extends commonProps {
    header?: ReactChild;
    main?: ReactChild;
    footer?: ReactChild;
    aside?: ReactChild;
}

interface propsAside extends commonProps {
    side?: string,
}

interface propsRow {
    justify?: 'start' | 'center' | 'end' | 'around' | 'between';
    align?: 'top' | 'middle' | 'bottom';
    style?: object;
    className?: string;
    children?: any;
}

interface propsCol {
    span?: number;
    children?: any;
}

export type {
    propsContainer,
    propsAside,
    propsRow,
    propsCol
};