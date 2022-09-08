import React, { ReactChildren } from 'react';
/**
 * @param rawValue css property width or height which from props, the type maybe number or string
 * @returns legal css value
 */
function getCssSizeValue ( rawValue: string | number | undefined ) {
    if ( !rawValue ) return;

    if ( typeof rawValue === 'number' ) {
        return `${ rawValue }px`;
    } else if ( typeof rawValue === 'string' ) {
        return rawValue;
    } else {
        const error = new Error( `the data type of props must be string or number` );
        console.trace( error );
        throw error;
    }
}

function getNamedChild ( childrenNodeName: string, reactChildren: ReactChildren ) {
    const children = React.Children.toArray( reactChildren );

    const result = children.filter( ( item: any ) => item.type.displayName === childrenNodeName );

    return result;
}

export { getCssSizeValue, getNamedChild };