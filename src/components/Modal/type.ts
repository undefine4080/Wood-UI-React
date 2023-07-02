import commonProps from "../../common/types";

interface propsModal extends commonProps {
  title?: string;
  top?: string;
  visible: boolean;
  mask?: boolean;
  fullscreen?: boolean;
  onOpen?: () => any;
  onClose: () => any;
  onAfterClose?: () => any;
}

export type { propsModal };
