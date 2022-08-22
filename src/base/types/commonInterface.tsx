import { CSSProperties, EventHandler } from "react";

interface commonEventProps {
    onClick?: any;
    onChange?: any;
}
export default interface commonProps extends commonEventProps {
    id?: string;
    className?: string,
    style?: CSSProperties;
    width?: string | number;
    height?: string | number;
    children?: any;
    disabled?: boolean;
    type?: string;
    size?: 'small' | 'normal' | 'large';
}