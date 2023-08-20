import { ReactElement } from 'react';

interface propsImage {
    width?: number | string;
    height?: number | string;
    src: string;
    hoverContent?: ReactElement;
    lazy?: boolean;
    title?: string;
    link?: string;
    preview?: boolean;
    alt?: string;
    fit?: 'contain' | 'cover' | 'fill' | 'scale-down';
    errorContent?: ReactElement;
}

export type { propsImage };
