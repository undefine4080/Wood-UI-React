import { CSSProperties, ReactNode, MouseEvent } from "react";

type cellData = string | number | null | undefined;
interface rowData {
    [key: string]: cellData;
};

interface propsTableEvents {
    onSelect?: () => any;
    onChange?: () => any;
    onRowClick?: (event: MouseEvent<HTMLTableRowElement>, rowData: rowData) => any;
    onCellClick?: (event: MouseEvent<HTMLTableCellElement>, ceilData: ReactNode) => any;
    onPageChange?: () => any;
    onNextPage?: () => any;
    onPrevPage?: () => any;
    onPageSizeChange?: () => any;
}

interface propsTable extends propsTableEvents {
    data: Array<{ [indexName: string]: any; }>;
    title?: string;
    maxHeight?: string | number;
    align?: 'left' | 'center' | 'right';
    pagination?: boolean;
    showNum?: boolean; // if show the num of row 
    selectable?: boolean; // if the row can be selected
    hoverStyle?: CSSProperties; // user define the hover style of row
    children?: ReactNode;
}

// the internal properties while table rendering
interface innerPropsColumn {
    children?: ReactNode;
    rowData?: rowData;
    key?: string | number;
    onCellClick?: propsTableEvents['onCellClick'];
}

interface propsTableColumn extends innerPropsColumn {
    prop: string; // the key of data item of table column 
    label?: string; // text of table column
    width?: string | number;
    maxWidth?: string | number;
    template?: any; // user define cell node
    align?: propsTable['align'];
}

export type { propsTable, propsTableColumn, rowData, cellData };