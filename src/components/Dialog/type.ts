import { ReactElement } from 'react';

interface propsDialog {
    visible: boolean;
    title?: string;
    header?: JSX.Element | string;
    footer?: ReactElement;
    children?: any;
    mask?: boolean;
    showClose?: boolean;
    closeOnMaskClick?: boolean;
    close: () => void;
    onOpen?: () => void;
    onClose?: () => void;
}

export default propsDialog;
