import { CSSProperties, ReactChildren } from "react";

interface propsTableEvents {
    onSelect?: () => any;
    onChange?: () => any;
    onRowClick?: () => any;
    onPageChange?: () => any;
    onNextPage?: () => any;
    onPrevPage?: () => any;
    onPageSizeChange?: () => any;
}

interface propsTable extends propsTableEvents {
    data: Array<{ [ indexName: string ]: any; }>;
    title?: string;
    maxHeight?: string | number;
    align?: 'left' | 'center' | 'right';
    pagination?: boolean;
    countable?: boolean;
    selectable?: boolean;
    hoverStyle?: CSSProperties;
    children?: any;
}

interface propsTableColumn {
    index: string;
    label: string;
    key: string | number;
    width?: string | number;
    height?: string | number;
    maxWidth?: string | number;
    align?: propsTable[ 'align' ];
    children?: ReactChildren;
    rowData?: any;
    template?: any;
}

export type { propsTable, propsTableColumn };