import commonProps from "../../base/types/commonInterface";

interface propsContainer extends commonProps {
    header?: ReactFragment,
    main?: ReactFragment,
    footer?: ReactFragment,
    aside?: ReactFragment;
}

interface propsAside extends commonProps {
    side?: string,
}

interface propsRow {
    justify?: 'start' | 'center' | 'end' | 'around' | 'between';
    align?: 'top' | 'middle' | 'bottom';
    style?: object;
    className?: string;
}

interface propsCol {
    span?: number;
}

export type {
    propsContainer
    propsAside
    propsRow
    propsCol
};