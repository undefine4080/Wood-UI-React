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

// the internal properties while table rendering
interface innerPropsColumn {
    children?: ReactChildren;
    rowData?: any;
    template?: any;
    key: string | number;
}

interface propsTableColumn extends innerPropsColumn {
    index: string; // the key of table column 
    label: string;
    width?: string | number;
    height?: string | number;
    maxWidth?: string | number;
    align?: propsTable[ 'align' ];
}

export type { propsTable, propsTableColumn };