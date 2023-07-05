import commonProps from '@common/types';

interface propsSwitch {
    id?: string;
    activeLabel?: string | number;
    inactiveLabel?: string | number;
    activeValue?: string | number;
    inactiveValue?: string | number;
    defaultValue?: string | number | boolean;
    disabled?: boolean;
    size?: commonProps['size'];
    onChange?: (value: boolean) => any;
}

export type { propsSwitch };
