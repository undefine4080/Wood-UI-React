import React, { ComponentProps } from "react";
import './input.less';

const PREFIX = 'wdu-input';

interface propsInput {
    size?: string, // 大小
    label?: string, // 标签
    type?: string, // 输入类型
    placeholder?: string, // 缺省文字
}

const Input: React.FC<propsInput> = ( props ) => {
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