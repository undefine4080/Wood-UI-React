import React from 'react';
import { propsTableColumn } from './type';

function TableColumn ( props: propsTableColumn ) {
    const { index, key, rowData, template, align } = props;

    return (
        <td className='wdu-table__cell' key={ key } style={ { textAlign: align ? align : 'center' } }>
            { template ?
                React.cloneElement( template, { data: rowData[ index ] } ) :
                rowData[ index ] }
        </td>
    );
}

TableColumn.displayName = 'TableColumn';

export default TableColumn;