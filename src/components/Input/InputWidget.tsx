import { InputHTMLAttributes, RefObject, useEffect, useState } from 'react';

interface propsInputWidget {
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    inputRef: RefObject<HTMLInputElement>;
    setValue: (value: string) => void;
}

const Password = (props: Omit<propsInputWidget, 'type'>) => {
    const { inputRef } = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        inputRef.current!.type = visible ? 'text' : 'password';
    }, [visible]);

    return (
        <i
            className={`wdu-input__password wdu-input__password-${
                visible ? 'visible' : 'hidden'
            }`}
            onClick={() => {
                setVisible((prev) => !prev);
            }}></i>
    );
};

const Clear = (props: Omit<propsInputWidget, 'type'>) => {
    const { setValue, inputRef } = props;
    return (
        <i
            className='wdu-input__clear'
            onClick={() => {
                setValue('');
            }}></i>
    );
};

function InputWidget(props: propsInputWidget) {
    const { type, ...other } = props;

    switch (type) {
        case 'password':
            return <Password {...other} />;
        case 'clear':
            return <Clear {...other} />;
    }
}

export { InputWidget };
