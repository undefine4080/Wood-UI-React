import { HTMLInputTypeAttribute } from "react";
import commonProps from "@base/types/commonInterface";

type callback = ( inputValue: string | number | undefined ) => any;

interface inputEvents extends commonProps {
    onChange?: callback,
    onBlur?: callback;
    onFocus?: callback;
}

interface propsInput extends inputEvents {
    type?: HTMLInputTypeAttribute,
    label?: string,
    placeholder?: string,
    name?: string,
    value?: string;
    min?: number;
    max?: number;
    showClear?: boolean;
}

export type { propsInput };