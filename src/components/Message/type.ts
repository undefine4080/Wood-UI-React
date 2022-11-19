type messageType = "info" | "warning" | "error" | "success";

type messageInput = (message: string) => void;

interface messageOption {
  type: messageType;
  message: string;
}

interface messageQueueItem extends messageOption {
  id: string;
}

interface propsMessage {
  info: messageInput;
  warn: messageInput;
  error: messageInput;
  success: messageInput;
}

export type { propsMessage, messageOption, messageQueueItem };
