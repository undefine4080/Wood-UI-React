import commonProps from "@common/types";

interface propsSwitch {
    id?: string;
    label?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    size?: commonProps['size']
    onChange?: ( value: boolean ) => any;
}

export type { propsSwitch };