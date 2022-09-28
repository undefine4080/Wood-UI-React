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
}

type userValidator = ( inputValue: any ) => boolean;

type ruleItem = {
    type?: 'number' | 'string' | 'boolean';
    required?: Boolean;
    trigger?: 'onBlur' | 'onChange' | 'onSelect';
    minLength?: Number;
    maxLength?: Number;
    info?: string;
    validator?: userValidator;
};

interface validatorRules {
    [ formItemName: string ]: ruleItem | userValidator;
}

export type { propsForm, propsFormItem, validatorRules, ruleItem, userValidator };