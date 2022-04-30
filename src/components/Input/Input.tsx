import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
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
    const PREFIX = 'wdu-input';
    const { id, size = "normal", name, label, type = 'text', placeholder, onChange } = props;
    const classList = `${ PREFIX }-container ${ PREFIX }-${ size }`;

    return (
        <div className={ classList }>
            {
                label?.toString().length && <label htmlFor={ id } className={ `${ PREFIX }-label` }>{ label?.toString() }</label>
            }
            <input id={ id } type={ type } name={ name } className={ `${ PREFIX }-input` } placeholder={ placeholder?.toString() } onChange={ onChange } />
        </div>
    );
};

export { Input };