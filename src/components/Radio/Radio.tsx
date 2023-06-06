import commonProps from "types/commonInterface";
import './radio.less';

interface propsRadio extends commonProps {
    label?: string;
    name?: string;
    value?: string;
    onCheck?: () => any;
}

function Radio ( props: propsRadio ) {
    const { label, name, value, id, onCheck } = props;

    return (
        <div className="wdu-radio-container" >
            <label htmlFor={ id } className="wdu-radio-label">
                { label?.toString() }

                <input type="radio" id={ id } name={ name } value={ value } className="wdu-radio"
                    onChange={ () => onCheck && onCheck() }
                />

                <span className="wdu-radio-checkmark"></span>
            </label>
        </div>
    );
};
Radio.displayName = 'Radio';


export default Radio; 