import { ReactElement, ReactNode } from 'react';
interface popoverEvents {
    onBeforeOpen?: () => any;
    onAfterClosed?: () => any;
    onOpened?: () => any;
    onClosed?: () => any;
    onChange?: (isActive: boolean) => any;
}

interface activeType {
    top: () => any;
    bottom: () => any;
    left: () => any;
    right: () => any;
}

type position = 'left' | 'bottom' | 'right' | 'top';
interface propsPopover extends popoverEvents {
    position?: position;
    className?: string;
    children: ReactElement;
    trigger?: 'hover' | 'click';
    active?: boolean;
    content: ReactNode;
}

export type { propsPopover, activeType, position };
