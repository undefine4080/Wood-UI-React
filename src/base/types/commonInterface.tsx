export default interface commonProps {
    className?: string,
    width?: string;
    children?: any;
    height?: string;
    style?: object;
    id?: string;
    disabled?: boolean;
    type?: string;
    size?: string;
    [ attr: string ]: any;
}

export type commonStyle = {
    width?: string,
    height?: string;
};