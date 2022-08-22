import commonProps from "../../base/types/commonInterface";

interface propsModal extends commonProps {
    title?: string;
    visible: boolean;
    mask?: boolean; // if show mask while modal is opening
    fullscreen?: boolean;
    onOpen?: () => {};
    onClose: any; // callback of close the modal
}

export type { propsModal };