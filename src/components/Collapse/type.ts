import commonProps from '@common/types';
import { ReactNode } from 'react';

interface propsCollapse extends commonProps {
    expandItems?: Array<string>;
}

interface propsCollapseItem {
    title?: ReactNode;
    index?: number;
    expand?: boolean;
    size?: commonProps['size'];
    children?: ReactNode;
    onClick?: (index: number) => void;
}

export type { propsCollapse, propsCollapseItem };
