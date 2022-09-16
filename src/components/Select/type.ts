import commonProps from "@base/types/commonInterface";

interface propsOption extends commonProps {
    label: string,
    value: string,
};

interface propsSelect extends commonProps {
    label?: string,
    name: string,
    form?: string,
    value: string,
    trigger?: 'hover' | 'click';
    onSelect?: ( value: selectedValue ) => any;
}

interface selectedValue {
    value: string;
    label: string;
}

export type { propsOption, propsSelect, selectedValue };