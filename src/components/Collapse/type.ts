import commonProps from '@common/types';
import { ReactNode } from 'react';

interface propsCollapse extends commonProps {
    expandItems?: Array<string | number>;
}

interface propsCollapseItem {
    title?: ReactNode;
    index?: number;
    size?: commonProps['size'];
    children?: ReactNode;
    onClick?: (index: number) => void;
}

export type { propsCollapse, propsCollapseItem };
