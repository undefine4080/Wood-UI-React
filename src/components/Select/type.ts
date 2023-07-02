import commonProps from '@common/types';

interface propsOption extends commonProps {
    label: string;
    value: string | number;
}

interface propsSelect extends commonProps {
    label?: string;
    form?: string;
    value?: string | number;
    trigger?: 'hover' | 'click';
    placeholder?: string;
    prepend?: JSX.Element;
    append?: JSX.Element;
    onSelect?: (value: selectedValue) => any;
}

interface selectedValue {
    value: string | number;
    label: string | number;
}

export type { propsOption, propsSelect, selectedValue };
