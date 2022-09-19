import React, { useEffect, useState } from "react";
import { propsInput } from "./type";
import './input.less';
import { debounce } from "@util";


function Input ( props: propsInput ) {
    const { id, size = "normal", name,
        label, type = 'text', placeholder,
        value, onChange, onBlur,
        onFocus, min, max
    } = props;

    const classList = `wdu-input-container wdu-input-${ size }`;

    const [ inputValue, setInputValue ] = useState( value );

    useEffect( () => {
        setInputValue( value );
    }, [ value ] );

    return (
        <div className={ classList }>
            {
                label && (
                    <label htmlFor={ id } className="wdu-input__label">
                        { label.toString() }
                    </label>
                )
            }

            <input id={ id }
                value={ inputValue }
                type={ type }
                name={ name }
                min={ min }
                max={ max }
                className={ `wdu-input__input ${ ( !label ) && 'wdu-input__input-noLabel' }` }
                placeholder={ placeholder?.toString() }
                onChange={ debounce( ( e: any ) => {
                    onChange( e.target.value );
                }, 500 ) }
                onBlur={ onBlur }
                onFocus={ onFocus }
            />
        </div>
    );
};
Input.displayName = 'Input';

export default Input;