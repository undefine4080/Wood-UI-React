interface propsForm {
    data: {
        [ key: string ]: any;
    };
    itemLayout?: 'vertical' | 'horizon';
    labelAlign?: 'center' | 'left' | 'right';
    // onSubmit?: ( formData: any ) => any;
    children?: any;
}

interface propsFormItem {
    refer?: string;
    label?: string;
    children?: any;
}

export type { propsForm, propsFormItem };