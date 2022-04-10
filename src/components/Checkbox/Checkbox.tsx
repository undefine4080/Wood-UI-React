import React, { ReactEventHandler, useState } from "react";
import './checkbox.less';

interface propsCheckbox {
    label?: string; // 标签
    name?: string; // 组名称
    value?: string; // 代表值
    id?: string;
    disabled?: boolean;
    onChange?: ( evt: React.ChangeEvent<HTMLInputElement> ) => void;
}

const Checkbox: React.FC<propsCheckbox> = ( props ) => {
    const PREFIX = 'wdu-checkbox';
    const { label, name, value, id, onChange, disabled = false } = props;

    const labelStyle = disabled ? `${ PREFIX }-label ${ PREFIX }-disabled` : `${ PREFIX }-label`;
    const checkboxStyle = disabled ? `${ PREFIX } wdu-no-event` : PREFIX;
    const checkmarkStyle = disabled ? `${ PREFIX }-checkmark ${ PREFIX }-disabled` : `${ PREFIX }-checkmark`;

    return (
        <div className={ `${ PREFIX }-container` } >
            <label htmlFor="" className={ labelStyle }>
                { label?.toString() }

                <input type="checkbox" id={ id } name={ name } value={ value } className={ checkboxStyle } onChange={ onChange } />

                <span className={ checkmarkStyle }></span>
            </label>
        </div>
    );
};

export { Checkbox };