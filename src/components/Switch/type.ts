import commonProps from "@base/types/commonInterface";

interface propsSwitch extends commonProps {
    label?: string;
    value?: boolean;
    onChange?: ( value: boolean ) => any;
}

export type { propsSwitch };