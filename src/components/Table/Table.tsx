import React, { useEffect, useState } from 'react';
import { propsTable } from './type';
import TableColumn from './TableColumn';

import './table.less';

function Table ( props: propsTable ) {
    const { data, children, title, maxHeight } = props;

    // the children which are tableColumn
    const Children = React.Children.toArray( children );
    const TableColumnChildren = Children.filter( ( item: any ) => item.type.displayName === 'TableColumn' );

    const tableHeader: Array<string> = [];
    const tableIndex: Array<string> = [];
    TableColumnChildren.map( ( item: any ) => {
        const { index, label } = item.props;
        tableHeader.push( label );
        tableIndex.push( index );
    } );

    const tableMaxHeight = {
        maxHeight: typeof maxHeight === 'number' ? `${ maxHeight }px` : maxHeight
    };

    return (
        <div className='wdu-table__container' style={ tableMaxHeight }>
            <table className="wdu-table">
                { title && <caption className='wdu-table__title'>{ title }</caption> }
                <thead>
                    <tr className='wdu-table__header'>
                        { tableHeader.map( item => {
                            return <th key={ item }>{ item }</th>;
                        } ) }
                    </tr>
                </thead>

                <tbody className='wdu-table__body'>
                    {
                        data.map( ( item, index ) => {
                            return (
                                <tr className='wdu-table__row' key={ index }>
                                    {
                                        TableColumnChildren.map( ( child: any ) => {
                                            return React.cloneElement( child, { rowData: item } );
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