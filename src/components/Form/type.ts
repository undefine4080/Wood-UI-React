interface propsForm {
    // data: {
    //     [ key: string ]: any;
    // };
    labelAlign?: 'center' | 'left' | 'right' | 'top';
    onSubmit: ( formData: any ) => any;
    children?: any;
}

interface propsFormItem {
    label: string;
    children?: any;
}

export type { propsForm, propsFormItem };