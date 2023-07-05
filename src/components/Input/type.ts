import commonProps from "@common/types";
import { HTMLInputTypeAttribute } from "react";

type callback = (inputValue: string | number | undefined) => any;

interface inputEvents {
  onChange?: callback;
  onBlur?: callback;
  onFocus?: callback;
}

interface propsInput extends inputEvents {
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  min?: number;
  max?: number;
  showClear?: boolean;
  id?: string;
  size?: commonProps["size"];
  style?: any;
}

export type { propsInput };
