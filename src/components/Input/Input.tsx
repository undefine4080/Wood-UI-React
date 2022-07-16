import React, { ChangeEventHandler, HTMLInputTypeAttribute, useEffect, useState } from "react";
import commonProps from "../../base/types/commonInterface";
import './input.less';

interface propsInput extends commonProps {
    type?: HTMLInputTypeAttribute,
    label?: string,
    placeholder?: string,
    name?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

const Input: React.FC<propsInput> = ( props ) => {
    const { id, size = "normal", name, label, type = 'text', placeholder, value, onChange, style, min, max } = props;
    const classList = `wdu-input-container wdu-input-${ size }`;

    const [ inputValue, setInputValue ] = useState( value );

    useEffect( () => {
        setInputValue( value );
    }, [ value ] );

    return (
        <div className={ classList }>
            {
                label && <label htmlFor={ id } className="wdu-input-label">{ label?.toString() }</label>
            }
            <input id={ id }
                value={ inputValue }
                type={ type }
                name={ name }
                min={ min }
                max={ max }
                className="wdu-input-input"
                placeholder={ placeholder?.toString() }
                onChange={ onChange }
                style={ style } />
        </div>
    );
};

export { Input };