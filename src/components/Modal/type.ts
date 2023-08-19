import commonProps from '../../common/types';

interface propsModal extends commonProps {
    visible: boolean;
    mask?: boolean;
    fullscreen?: boolean;
    top?: string;
    closeOnMaskClick?: boolean;
    close: () => void;
    onOpen?: () => any;
    onClose?: () => any;
}

export type { propsModal };
