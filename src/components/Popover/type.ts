import { ReactNode } from 'react';
interface popoverEvents {
    onBeforeOpen?: () => any;
    onAfterClosed?: () => any;
    onOpened?: () => any;
    onClosed?: () => any;
}

interface propsPopover extends popoverEvents {
    position?: 'left' | 'bottom' | 'right' | 'top' | 'auto';
    className?: string;
    children?: ReactNode;
    trigger?: 'hover' | 'click';
    active?: boolean;
    width?: number;
    content: ReactNode;
}

export type { propsPopover };
