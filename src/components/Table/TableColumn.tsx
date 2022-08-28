import React from 'react';
import { propsTableColumn } from './type';

function TableColumn ( props: propsTableColumn ) {
    const { index, key, rowData, template } = props;

    return (
        <td className='wdu-table__cell' key={ key }>
            { template ?
                React.cloneElement( template, { data: rowData[ index ] } ) :
                rowData[ index ] }
        </td>
    );
}

TableColumn.displayName = 'TableColumn';

export default TableColumn;