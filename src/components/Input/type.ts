import commonProps from "@base/types/commonInterface";
import { FocusEventHandler, HTMLInputTypeAttribute } from "react";

interface inputEvents extends commonProps {
    onChange?: any,
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
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