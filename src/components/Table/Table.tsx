import React from 'react';
import { propsTable } from './type';
import TableColumn from './TableColumn';

import './table.less';

function Table ( props: propsTable ) {
    const { data, children, title, maxHeight, align, countable } = props;

    // the children which are tableColumn
    const Children = React.Children.toArray( children );
    const TableColumnChildren = Children.filter( ( item: any ) => item.type.displayName === 'TableColumn' );

    const tableMaxHeight = {
        maxHeight: typeof maxHeight === 'number' ? `${ maxHeight }px` : maxHeight
    };

    return (
        <div className='wdu-table__container' style={ { ...tableMaxHeight, width: '780px' } }>
            <table className="wdu-table">
                { title && <caption className='wdu-table__title'>{ title }</caption> }
                <thead>
                    <tr className='wdu-table__header'>
                        {
                            countable && <th className='wdu-table__cell-count'>序号</th>
                        }
                        {
                            TableColumnChildren.map( ( item: any ) => {
                                const { index, label, width, align } = item.props;
                                return (
                                    <th key={ index }
                                        style={
                                            {
                                                width: `${ width }px`,
                                                textAlign: align ? align : 'center'
                                            }
                                        }>
                                        { label }
                                    </th>
                                );
                            } )
                        }
                    </tr>
                </thead>

                <tbody className='wdu-table__body'>
                    {
                        data.map( ( item, index ) => {
                            return (
                                <tr className='wdu-table__row'
                                    key={ index }
                                >
                                    {
                                        countable && <td className='wdu-table__cell'>{ index + 1 }</td>
                                    }
                                    {
                                        TableColumnChildren.map( ( child: any ) => {
                                            return React.cloneElement( child,
                                                {
                                                    rowData: item,
                                                    align: align ? align : child.props.align
                                                }
                                            );
                                        } )
                                    }
                                </tr>
                            );
                        } )
                    }
                </tbody>
            </table>
        </div>
    );
}

export { Table, TableColumn };