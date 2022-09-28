interface propsSwitch {
    id?: string;
    label?: string;
    value?: boolean;
    name?: string;
    disabled?: boolean;
    onChange?: ( value: boolean ) => any;
}

export type { propsSwitch };