import commonProps from '@common/types';
import React, { InputHTMLAttributes } from 'react';

interface propsInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputSize?: commonProps['size'];
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    clearable?: boolean;
}

export type { propsInput };
