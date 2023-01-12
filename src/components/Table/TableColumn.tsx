import React, { MouseEvent } from 'react';
import { cellData, propsTableColumn } from './type';

function TableColumn(props: propsTableColumn) {
    const { index, key, rowData, template, align, onCellClick } = props;

    const cellNode = () => {
        let result;
        if (rowData && index) {
            if (template) {
                result = React.cloneElement(template, { data: rowData[index] });
            } else {
                result = rowData[index];
            }
        }
        return result;
    };

    const cellData: cellData = rowData ? rowData[index] : null;

    const handleCellClick = (event: MouseEvent<HTMLTableCellElement>) => {
        event.stopPropagation();
        if (onCellClick && typeof onCellClick === 'function') {
            onCellClick(event, cellData);
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
