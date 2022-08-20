import { CSSProperties, EventHandler } from "react";

interface commonEventProps {
    onClick?: any;
}
export default interface commonProps extends commonEventProps {
    class?: string,
    width?: string | number;
    children?: any;
    height?: string | number;
    style?: CSSProperties;
    id?: string;
    disabled?: boolean;
    type?: string;
    size?: 'small' | 'normal' | 'large';
}