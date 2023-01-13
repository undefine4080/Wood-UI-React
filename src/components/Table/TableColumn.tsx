import React, { MouseEvent } from 'react';
import { cellData, propsTableColumn } from './type';

function TableColumn(props: propsTableColumn) {
    const { prop, key, rowData, template, align, onCellClick } = props;

    const cellNode = () => {
        let result;
        if (rowData && prop) {
            if (template) {
                result = React.cloneElement(template, { data: rowData[prop] });
            } else {
                result = rowData[prop];
            }
        }
        return result;
    };

    const cellData: cellData = rowData ? rowData[prop] : null;

    const handleCellClick = (event: MouseEvent<HTMLTableCellElement>) => {
        event.stopPropagation();
        if (onCellClick && typeof onCellClick === 'function') {
            onCellClick(cellData, event);
        }
    };

    return (
        <td
            className='wdu-table__cell'
            key={key}
            style={{ textAlign: align ? align : 'center' }}
            onClick={(e: MouseEvent<HTMLTableCellElement>) =>
                handleCellClick(e)
            }>
            {cellNode()}
        </td>
    );
}

TableColumn.displayName = 'TableColumn';

export { TableColumn };
