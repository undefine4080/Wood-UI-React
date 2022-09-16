import React, { ReactElement, useContext, useEffect, useState } from "react";
import { propsOption, propsSelect, selectedValue } from './type';
import { getNamedChild } from "@util";
import Arrow from "@base/icon/Arrow/Arrow";

import './select.less';

const optionHeight = '36px';
const SelectContext = React.createContext( { value: '', label: '' } );
const Provider = SelectContext.Provider;

function Option ( props: propsOption ) {
    const selectedValue: selectedValue = useContext( SelectContext );
    const { value, label } = props;

    return (
        <li
            className={ `wdu-select-option ${ value === selectedValue.value &&
                'wdu-select-option__selected' }` }
            data-value={ value }>
            { label }
        </li>
    );
};
Option.displayName = 'Option';

function Select ( props: propsSelect ) {
    const { label, children, onSelect } = props;
    const [ curValue, setCurValue ] = useState<selectedValue>( { value: '', label: '' } );
    const [ expand, setExpand ] = useState( false );

    const optionItems = getNamedChild( 'Option', children );

    useEffect( () => {
        const { value, label } = ( optionItems[ 0 ] as ReactElement ).props;
        setCurValue( { value: value.toString(), label: label.toString() } );
    }, [] );

    let [ optionListHeight, setOptListHeight ] = useState( optionHeight );
    useEffect( () => {
        if ( expand ) {
            setOptListHeight( `${ optionItems.length * 36 }px` );
        } else {
            setOptListHeight( optionHeight );
        }
    }, [ expand ] );

    const handleSelect = ( e: any ) => {
        const value = e.nativeEvent.target.dataset.value;
        if ( value ) {
            const label = e.target.innerText;
            setCurValue( { value, label } );
            onSelect && onSelect( { value, label } );
        }
        setExpand( pre => !pre );
    };

    return (
        <div className="wdu-select-container">
            { label &&
                <div className="wdu-select-label">{ label.toString() }</div>
            }

            <ul className={ `wdu-select ${ !label && 'wdu-select__noLabel' }` }
                tabIndex={ 1 }
                style={ { height: optionListHeight } }
                onBlur={ () => setExpand( false ) }
                onClick={ handleSelect }
            >
                <Provider value={ curValue }>
                    <li className="wdu-select-option">
                        { curValue.label }

                        <Arrow style={ expand ? 'bottom' : 'top' } />
                    </li>

                    { optionItems }
                </Provider>
            </ul>
        </div>
    );
};

export { Select, Option };