import React from 'react';
/**
 * @param rawValue css property width or height which from props, the type maybe number or string
 * @returns legal css value
 */
function addUnitPx ( rawValue: string | number | undefined ) {
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

    return ( ...args: any ) => {
        clearTimeout( timer );

        timer = setTimeout( () => {
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

function rqData ( data: any ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( data );
        }, 1000 );
    } );
}

export { addUnitPx, getNamedChild, debounce, throttle, rqData };