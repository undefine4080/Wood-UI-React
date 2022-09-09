import { useEffect } from 'react';
import { useState } from 'react';

interface cssClass {
    base: string;
    [ key: string ]: string;
}

/**
 * 
 * @param cssClass key-value map ex:
 * {
    base: 'wdu-modal',
    mask: 'wdu-modal__mask',
    visible: 'wdu-modal__visible',
    hidden: 'wdu-modal__hidden'
  };
 * @returns 
 */
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

    const addClassName = ( classKey: string ) => {
        setClassMap( prev => ( { ...prev, [ classKey ]: cssClass[ classKey ] } ) );
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