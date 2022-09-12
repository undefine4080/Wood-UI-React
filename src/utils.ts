import React from 'react';
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

// filter children node by the displayName of the component
function getNamedChild ( childrenNodeName: string, reactChildren: any ) {
    const children = React.Children.toArray( reactChildren );

    const result = children.filter( ( item: any ) => item.type.displayName === childrenNodeName );

    return result;
}


function debounce ( callback: any, delay: number ) {
    let timer: any;

    return () => {
        clearTimeout( timer );

        timer = setTimeout( ( ...args: any ) => {
            callback.apply( this, args );
        }, delay );
    };
}

function throttle ( callback: any, delay: number ) {
    let prevTime = Date.now();

    return ( ...args: any ) => {
        const nowTime: number = Date.now();

        if ( nowTime - prevTime > delay ) {
            callback.apply( this, args );

            prevTime = nowTime;
        }
    };
}

export { getCssSizeValue, getNamedChild, debounce, throttle };