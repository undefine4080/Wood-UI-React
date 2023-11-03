import commonProps from '@common/types';
import React, { InputHTMLAttributes } from 'react';

interface propsInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputSize?: commonProps['size'];
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    clearable?: boolean;
    debounce?: number | boolean;
}

interface handleInput {
    setValue: (value: string) => void;
    value: string;
    clear: () => void;
    refInput: React.RefObject<HTMLInputElement>;
}

export type { propsInput, handleInput };
