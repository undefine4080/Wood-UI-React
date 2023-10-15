import commonProps from '@common/types';
import { ReactNode } from 'react';

interface propsCollapse extends commonProps {
    expandItems?: Array<string | number>;
    size?: commonProps['size'];
}

interface propsCollapseItem {
    title?: ReactNode;
    index?: number;
    children?: ReactNode;
    onClick?: (index: number) => void;
}

export type { propsCollapse, propsCollapseItem };
