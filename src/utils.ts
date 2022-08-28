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

export { getCssSizeValue };