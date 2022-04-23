import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import commonProps from "../../base/types/commonInterface";
import './input.less';

interface propsInput extends commonProps {
    type: HTMLInputTypeAttribute,
    label?: string,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

const Input: React.FC<propsInput> = ( props ) => {
    const PREFIX = 'wdu-input';
    const { size = "normal", label, type = 'text', placeholder, onChange } = props;
    const componentStyle = `${ PREFIX }-container ${ PREFIX }-${ size }`;

    return (
        <div className={ componentStyle }>
            {
                label?.toString().length && <label htmlFor="" className={ `${ PREFIX }-label` }>{ label?.toString() }</label>
            }
            <input type={ type } className={ `${ PREFIX }-input` } placeholder={ placeholder?.toString() } onChange={ onChange } />
        </div>
    );
};

export { Input };