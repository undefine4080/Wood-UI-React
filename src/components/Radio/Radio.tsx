import React from "react";
import commonProps from "../../base/types/commonInterface";
import './radio.less';

interface propsRadio extends commonProps {
    label?: string; // 标签
    name?: string; // 组名称
    value?: string; // 代表值
}

const Radio: React.FC<propsRadio> = ( props ) => {
    const PREFIX = 'wdu-radio';
    const { label, name, value, id } = props;

    return (
        <div className={ `${ PREFIX }-container` } >
            <label htmlFor="" className={ `${ PREFIX }-label` }>
                { label?.toString() }

                <input type="radio" id={ id } name={ name } value={ value } className={ PREFIX } />

                <span className="wdu-radio-checkmark"></span>
            </label>
        </div>
    );
};

export { Radio };