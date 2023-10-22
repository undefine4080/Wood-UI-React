import commonProps from '../../common/types';

interface propsModal extends commonProps {
    visible: boolean;
    mask?: boolean;
    fullscreen?: boolean;
    top?: string;
    closeOnMaskClick?: boolean;
    containerClass?: string;
    close: () => void;
    onOpen?: () => any;
    onClose?: () => any;
}

export type { propsModal };
