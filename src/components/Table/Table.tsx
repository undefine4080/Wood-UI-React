import React, { useEffect, useState } from 'react';
import { propsTable } from './type';
import TableColumn from './TableColumn';

import './table.less';

function Table ( props: propsTable ) {
    const { data, children, title } = props;

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

    return (
        <table className="wdu-table">
            { title && <caption className='wdu-table__title'>{ title }</caption> }
            <thead>
                <tr className='wdu-table__header'>
                    { tableHeader.map( item => {
                        return <th key={ item }>{ item }</th>;
                    } ) }
                </tr>
            </thead>

            <tbody>
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
    );
}

export { Table, TableColumn };