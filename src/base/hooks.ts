import { useEffect } from 'react';
import { useState } from 'react';

interface cssClass {
    base: string;
    [ key: string ]: string;
}

function useCssClassManager ( cssClass: cssClass ) {
    const [ classMap, setClassMap ] = useState<cssClass>( { base: cssClass.base } );
    const [ classList, setClassList ] = useState( '' );

    const removeClassName = ( classKey: string ) => {
        setClassMap( prev => {
            const template = { ...prev };
            delete template[ classKey ];
            return template;
        } );
    };

    const addClassName = ( newClassName: string ) => {
        setClassMap( prev => ( { ...prev, [ newClassName ]: cssClass[ newClassName ] } ) );
    };

    useEffect( () => {
        setClassList( Object.values( classMap ).join( ' ' ) );
    }, [ classMap ] );

    return {
        removeClassName,
        addClassName,
        classList
    };
}

export { useCssClassManager };