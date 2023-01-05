import React, { ReactElement, useContext, useEffect, useState } from "react";
import { propsOption, propsSelect, selectedValue } from './type';
import { getNamedChild } from "@base/utils";
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
    const { label, value, children, onSelect, placeholder, disabled = false } = props;
    const [ curValue, setCurValue ] = useState<selectedValue>( { value: '', label: '' } );
    const [ expand, setExpand ] = useState( false );

    const optionItems = getNamedChild( 'Option', children );

    useEffect( () => {
        if ( value ) {
            const selectedValue: any = optionItems.find( ( item: any ) => item.props.value === value );
            if ( selectedValue ) {
                setCurValue( {
                    value: selectedValue.props.value,
                    label: selectedValue.props.label
                } );
            } else {
                console.warn( 'Select: the value you set which is not exist, please checkout it again' );
            }
        }
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
        if ( disabled ) return;

        const value = e.nativeEvent.target.dataset.value;
        if ( value ) {
            const label = e.target.innerText;
            setCurValue( { value, label } );
            onSelect && onSelect( { value, label } );
        }
        setExpand( pre => !pre );
    };

    return (
        <div className={ `wdu-select-container ${ disabled ? 'wdu-select__disabled' : '' }` }>
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
                        { curValue.label ? curValue.label :
                            ( <span className="wdu-select__placeholder">{ placeholder }</span> ) }

                        <Arrow style={ expand ? 'bottom' : 'top' } />
                    </li>

                    { optionItems }
                </Provider>
            </ul>
        </div>
    );
};
Select.displayName = 'Select';


export { Select, Option };