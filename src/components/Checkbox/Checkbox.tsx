import {
    ChangeEvent,
    InputHTMLAttributes,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import './checkbox.less';
import commonProps from '@common/types';

type propsCheckbox = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => any;
    checkboxSize?: commonProps['size'];
};

const T = 'wdu-checkbox';
function TheCheckbox(props: propsCheckbox, ref: any) {
    const {
        label,
        onChange,
        checked,
        checkboxSize,
        ...defaultCheckboxAttributes
    } = props;
    const { disabled } = props;

    const refCheckbox = useRef<any>();
    const [value, setValue] = useState(checked);

    useEffect(() => {
        if (refCheckbox.current) {
            refCheckbox.current.checked = value;
        }
    }, [value]);

    const handleChange = (e: ChangeEvent<any>) => {
        e.stopPropagation();
        onChange && onChange(e.target.checked);
        setValue(e.target.checked);
    };

    useImperativeHandle(ref, () => {
        return {
            setValue,
            value,
            refInput: refCheckbox,
        };
    });

    return (
        <label
            className={`${T} ${T}__${checkboxSize} ${
                value === true ? 'wdu-checkbox__checked' : ''
            } ${disabled ? 'wdu-checkbox__disabled' : ''}`}>
            <input
                ref={refCheckbox}
                className='wdu-checkbox__input'
                type='checkbox'
                onChange={handleChange}
                {...defaultCheckboxAttributes}
            />

            <span>{label?.toString()}</span>
        </label>
    );
}
const Checkbox = forwardRef(TheCheckbox);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
