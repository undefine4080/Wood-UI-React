import React, { MouseEvent } from 'react';
import { rowData, propsTable } from './type';
import { TableColumn } from './TableColumn';
import { addUnitPx } from '@common/utils';

import './table.less';
import { useHeaderMaskWidth } from './hooks';

function Table(props: propsTable) {
    const {
        data,
        children,
        title,
        maxHeight,
        align = 'left',
        showNum,
        onRowClick,
        onCellClick,
    } = props;

    const tableMaxHeight = {
        maxHeight: addUnitPx(maxHeight),
    };

    const Children = React.Children.toArray(children);
    const TableColumns = Children.filter(
        (item: any) => item.type.displayName === 'TableColumn',
    );

    // title of table
    const titleTable = <caption className='wdu-table__title'>{title}</caption>;

    // first cell of the header of table
    const indexCellOfHeader = <th className='wdu-table__cell-index'></th>;

    // index cell
    const indexCell = (index: number) => (
        <td className='wdu-table__cell wdu-table__cell-index'>{index + 1}</td>
    );

    // header cells of the table
    const headerCells = TableColumns.map((item: any) => {
        const { prop, label, width } = item.props;
        const style = {
            width: `${width}px`,
            textAlign: item.props.align ?? align,
        };

        return (
            <th className='wdu-table__header-cell' key={prop} style={style}>
                {label}
            </th>
        );
    });

    const tableHeader = (
        <thead>
            <tr className='wdu-table__header'>
                {showNum && indexCellOfHeader}

                {headerCells}
            </tr>
        </thead>
    );

    // cell of the column
    const cellColumn = (dataItem: Object) => {
        return TableColumns.map((child: any) => {
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
            onRowClick(rowData, event);
        }
    };

    const headerMask = () => {
        return <table className='wdu-table'>{tableHeader}</table>;
    };

    const { refTable, refTableContainer, headerMaskWidth } =
        useHeaderMaskWidth(maxHeight);

    return (
        <div className='wdu-table__container' ref={refTableContainer}>
            {maxHeight && (
                <div
                    className='wdu-table__headerMask'
                    style={{ width: headerMaskWidth }}>
                    {headerMask()}
                </div>
            )}

            <div className='wdu-table__realBody' style={{ ...tableMaxHeight }}>
                <table className='wdu-table' ref={refTable}>
                    {title && titleTable}

                    {!maxHeight && tableHeader}

                    <tbody className='wdu-table__body'>
                        {data.map((dataItem, index) => {
                            return (
                                <tr
                                    className='wdu-table__row'
                                    key={index}
                                    onClick={(
                                        e: MouseEvent<HTMLTableRowElement>,
                                    ) => handleRowClick(e, dataItem)}>
                                    {showNum && indexCell(index)}

                                    {cellColumn(dataItem)}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export { Table, TableColumn };
