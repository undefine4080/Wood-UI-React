import { ChangeEvent } from "react";
import commonProps from "../../base/types/commonInterface";
import './checkbox.less';

interface propsCheckbox extends commonProps {
    label?: string;
    name?: string;
    checked?: boolean;
    onChange?: ( value: boolean ) => any;
}

function Checkbox ( props: propsCheckbox ) {
    const PREFIX = 'wdu-checkbox';
    const { label, name, checked = false, id, onChange, disabled = false } = props;

    const labelStyle = disabled ? `${ PREFIX }-label ${ PREFIX }-disabled` : `${ PREFIX }-label`;
    const checkboxStyle = disabled ? `${ PREFIX } wdu-no-event` : PREFIX;
    const checkmarkStyle = disabled ? `${ PREFIX }-checkmark ${ PREFIX }-disabled` : `${ PREFIX }-checkmark`;

    const handleChange = ( e: ChangeEvent<any> ) => {
        e.stopPropagation();
        onChange && onChange( e.target.checked );
    };

    return (
        <div className={ `${ PREFIX }-container` }
            onClick={ ( e: any ) => e.stopPropagation() }
        >
            <label htmlFor="" className={ labelStyle }>
                { label?.toString() }

                <input
                    type="checkbox"
                    id={ id }
                    name={ name }
                    checked={ checked }
                    className={ checkboxStyle }
                    onChange={ handleChange }
                />

                <span className={ checkmarkStyle }></span>
            </label>
        </div>
    );
};

export default Checkbox; 