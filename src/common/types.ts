import { CSSProperties, ReactElement } from 'react';

export default interface commonProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    width?: string | number;
    height?: string | number;
    children?: any;
    disabled?: boolean;
    type?: 'plain' | 'important' | 'danger' | 'success' | 'warn';
    size?: 'small' | 'normal' | 'large';
    name?: string;
    value?: string | number;
}

interface propsIntroComponent {
    title?: string;
    position: string;
    components: Array<{
        title?: string;
        component: ReactElement;
        info?: string;
        code: string;
        api?: Array<{
            title: string;
            description: string;
            value?: string | number;
        }>;
    }>;
    api?: Array<{
        title: string;
        api: Array<{
            attribute: string;
            description: string;
            value: string;
            default: string;
        }>;
    }>;
}

interface docItem {
    title: string;
    info: string;
    component: ReactElement;
    code: string;
}

interface Size {
    width: number;
    height: number;
}

export type { propsIntroComponent, docItem, Size };
