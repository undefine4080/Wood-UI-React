import commonProps from "@base/types/commonInterface";

interface propsOption extends commonProps {
    label: string,
    value: string | number,
};

interface propsSelect extends commonProps {
    label?: string,
    name: string,
    form?: string,
    value?: string | number,
    trigger?: 'hover' | 'click';
    placeholder?: string;
    onSelect?: ( value: selectedValue ) => any;
}

interface selectedValue {
    value: string;
    label: string;
}

export type { propsOption, propsSelect, selectedValue };