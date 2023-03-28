import { MouseEventHandler, ReactNode } from 'react';

interface propsButton {
    type?:
        | 'plain'
        | 'important'
        | 'danger'
        | 'success'
        | 'border'
        | 'warn'
        | 'circle'
        | 'line';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    loading?: boolean;
    size?: 'small' | 'normal' | 'large';
    disabled?: boolean;
    children?: ReactNode;
    icon?: ReactNode;
}

export type { propsButton };
