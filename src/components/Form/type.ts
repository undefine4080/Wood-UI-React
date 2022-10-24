interface propsForm {
    data: {
        [ key: string ]: any;
    };
    itemLayout?: 'vertical' | 'horizon';
    labelAlign?: 'center' | 'left' | 'right';
    // onSubmit?: ( formData: any ) => any;
    children?: any;
    validateRule?: any;
}

interface propsFormItem {
    refer?: string;
    label?: string;
    children?: any;
    [ props: string ]: any;
}

type userValidator = ( inputValue: any ) => boolean;

type ruleItem = {
    type?: 'number' | 'string' | 'boolean';
    required?: Boolean;
    trigger: 'onBlur' | 'onChange' | 'onSelect';
    minLength?: Number;
    maxLength?: Number;
    info?: string;
    validator?: userValidator;
};

type ruleItems = Array<ruleItem>;

interface validatorRules {
    [ referName: string ]: Array<ruleItem>;
};

export type {
    propsForm,
    propsFormItem,
    validatorRules,
    ruleItem,
    ruleItems,
    userValidator
};