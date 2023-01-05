import { useEffect, useRef } from "react";
import { propsMessage, messageOption, messageQueueItem } from "./type";
import { createRoot } from "react-dom/client";
import { uuid } from "@base/utils";
import { useCssClassManager } from "@base/hooks";

import "./message.less";

const CONTAINER_ID = "wdu-message__container";
const MESSAGE_QUEUE: Array<messageQueueItem> = [];

function createContainer() {
  let container = document.getElementById(CONTAINER_ID);
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", CONTAINER_ID);
    document.body.appendChild(container);
  }
  return container;
}

function addMessage(params: messageOption) {
  const id = uuid(8);
  MESSAGE_QUEUE.push({ ...params, id });
  renderMessage([...MESSAGE_QUEUE]);
}

function removeMessage(id: string) {
  const position = MESSAGE_QUEUE.findIndex((item) => item.id === id);
  MESSAGE_QUEUE.splice(position, 1);
  renderMessage([...MESSAGE_QUEUE]);
}

function BaseMessage(props: any) {
  const { type, message, id } = props;

  const refMessage = useRef<any>();

  const classMap = {
    base: "",
    visible: "wdu-message__visible",
    hidden: "wdu-message__hidden",
  };

  const { addClassName, classList } = useCssClassManager(classMap);

  const clear = () => removeMessage(id);
  const handleHidden = () => {
    if (refMessage.current) {
      refMessage.current.addEventListener("animationend", clear, {
        once: true,
      });
    }
    addClassName("hidden");
  };

  useEffect(() => {
    addClassName("visible");

    setTimeout(() => {
      handleHidden();
    }, 3000);
  }, []);

  return (
    <p
      ref={refMessage}
      className={`wdu-message wdu-message__${type} ${classList}`}
    >
      {message}
    </p>
  );
}

let containerRoot: any;
function renderMessage(messageQueue: Array<any>) {
  const container = createContainer();
  if (!containerRoot) {
    containerRoot = createRoot(container);
  }

  const MessageComponents = messageQueue.map((props) => {
    return <BaseMessage {...props} key={props.id} />;
  });

  containerRoot.render(MessageComponents);
}

const Message: propsMessage = {
  info: (message: string) => addMessage({ type: "info", message }),
  warn: (message: string) => addMessage({ type: "warning", message }),
  error: (message: string) => addMessage({ type: "error", message }),
  success: (message: string) => addMessage({ type: "success", message }),
};

export default Message;
