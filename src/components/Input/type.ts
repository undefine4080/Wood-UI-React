import commonProps from "@base/types/commonInterface";
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";

interface inputEvents extends commonProps {
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
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
}

export type { propsInput };