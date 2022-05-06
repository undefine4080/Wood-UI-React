import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import commonProps from "../../base/types/commonInterface";
import './input.less';

interface propsInput extends commonProps {
    type: HTMLInputTypeAttribute,
    label?: string,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

const Input: React.FC<propsInput> = (props) => {
    const PREFIX = 'wdu-input';
    const { size = "normal", label, type = 'text', placeholder, width, onChange, value } = props;
    const componentStyle = `${PREFIX}-container ${PREFIX}-${size}`;

    return (
        <div className={componentStyle}>
            {
                label?.toString().length && <label htmlFor="" className={`${PREFIX}-label`}>{label?.toString()}</label>
            }
            <input type={type} defaultValue={typeof value === "number" ? Number(value) : String(value)} className={`${PREFIX}-input`} placeholder={placeholder?.toString()} onChange={onChange} style={{ width }} />
        </div>
    );
};

export { Input };