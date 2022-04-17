import React from "react";
import commonProps from "../../base/types/commonInterface";
import './input.less';

interface propsInput extends commonProps {
    label?: string, // 标签
    placeholder?: string, // 缺省文字
}

const Input: React.FC<propsInput> = ( props ) => {
    const PREFIX = 'wdu-input';
    const { size = "normal", label, type = 'text', placeholder } = props;
    const classList = `${ PREFIX }-container ${ PREFIX }-${ size }`;

    return (
        <div className={ classList }>
            {
                label?.toString().length && <label htmlFor="" className={ `${ PREFIX }-label` }>{ label?.toString() }</label>
            }
            <input type={ type } className={ `${ PREFIX }-input` } />
        </div>
    );
};

export { Input };