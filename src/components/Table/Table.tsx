import React, { MouseEvent } from 'react';
import { rowData, propsTable } from './type';
import { TableColumn } from './TableColumn';
import { addUnitPx } from '@base/utils';

import './table.less';

function Table(props: propsTable) {
    const {
        data,
        children,
        title,
        maxHeight,
        align = 'center',
        showNum,
        onRowClick,
        onCellClick,
    } = props;

    const tableMaxHeight = {
        maxHeight: addUnitPx(maxHeight),
    };

    const Children = React.Children.toArray(children);
    const TableColumnChildren = Children.filter(
        (item: any) => item.type.displayName === 'TableColumn',
    );

    // title of table
    const titleTable = <caption className='wdu-table__title'>{title}</caption>;

    // first cell of the header of table
    const indexCellOfHeader = <th className='wdu-table__cell-index'></th>;

    // index cell
    const indexCell = (index: number) => (
        <td className='wdu-table__cell'>{index + 1}</td>
    );

    // header cells of the table
    const headerCells = TableColumnChildren.map((item: any) => {
        const { index, label, width } = item.props;
        const style = {
            width: `${width}px`,
            textAlign: item.props.align ?? align,
        };

        return (
            <th className='wdu-table__header-cell' key={index} style={style}>
                {label}
            </th>
        );
    });

    // cell of the column
    const cellColumn = (dataItem: Object) => {
        return TableColumnChildren.map((child: any) => {
            const props = {
                rowData: dataItem,
                align: child.props.align ?? align,
                onCellClick,
            };
            return React.cloneElement(child, props);
        });
    };

    const handleRowClick = (
        event: MouseEvent<HTMLTableRowElement>,
        rowData: rowData,
    ) => {
        event.stopPropagation();
        if (onRowClick && typeof onRowClick === 'function') {
            onRowClick(event, rowData);
        }
    };

    return (
        <div className='wdu-table__container' style={{ ...tableMaxHeight }}>
            <table className='wdu-table'>
                {title && titleTable}
                <thead>
                    <tr className='wdu-table__header'>
                        {showNum && indexCellOfHeader}

                        {headerCells}
                    </tr>
                </thead>

                <tbody className='wdu-table__body'>
                    {data.map((dataItem, index) => {
                        return (
                            <tr
                                className='wdu-table__row'
                                key={index}
                                onClick={(e: MouseEvent<HTMLTableRowElement>) =>
                                    handleRowClick(e, dataItem)
                                }>
                                {showNum && indexCell(index)}

                                {cellColumn(dataItem)}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export { Table, TableColumn };
