export default interface commonProps {
    className?: string,
    width?: string;
    children?: any;
    height?: string;
    style?: object;
    id?: string;
    disabled?: boolean;
    type?: string;
    size?: 'small' | 'normal' | 'large';
    [ attr: string ]: any;
}