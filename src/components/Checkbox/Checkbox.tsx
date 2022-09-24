import React, { ChangeEventHandler } from "react";
import commonProps from "../../base/types/commonInterface";
import './checkbox.less';

interface propsCheckbox extends commonProps {
    label?: string; // 标签
    name?: string; // 组名称
    value?: string; // 代表值
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

function Checkbox ( props: propsCheckbox ) {
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

export default Checkbox; 