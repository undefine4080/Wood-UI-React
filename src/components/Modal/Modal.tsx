import ReactDOM from "react-dom";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { propsModal } from "./type";
import { useCssClassManager } from "@common/hooks";

import "./modal.less";

function Modal(props: propsModal) {
  const {
    width = "350px",
    height,
    top,
    title,
    mask,
    className,
    visible = false,
    fullscreen = false,
    children,
    onOpen,
    onClose,
    onAfterClose,
  } = props;

  const classMap = {
    base: "wdu-modal",
    mask: "wdu-modal__mask",
    visible: "wdu-modal__visible",
    hidden: "wdu-modal__hidden",
    fullscreen: "wdu-modal__fullScreen",
  };

  const { addClassName, removeClassName, classList } =
    useCssClassManager(classMap);

  const refModal = useRef<any>();

  const [firstLoad, setFirstLoad] = useState(false);
  useEffect(() => {
    setFirstLoad(true);
    mask && addClassName("mask");
  }, []);

  const handleClose = (modal: any) => {
    const clear = () => {
      removeClassName("visible");
      removeClassName("hidden");
      modal.removeEventListener("animationend", clear);
      onAfterClose && onAfterClose();
    };

    if (modal) {
      modal.addEventListener("animationend", clear);
    }
  };

  const close = (e: MouseEvent) => {
    handleClose(refModal.current);
    e.stopPropagation();
    onClose && onClose();
    addClassName("hidden");
  };

  const handleFullScreen = (visible: Boolean) => {
    if (fullscreen) {
      if (visible) {
        document.body.style.overflow = "hidden";
        addClassName("fullscreen");
      } else {
        document.body.style.overflow = "auto";
        removeClassName("fullscreen");
      }
    }
  };

  const handleVisible = (visible: Boolean) => {
    if (visible) {
      addClassName("visible");
      onOpen && onOpen();
    } else {
      addClassName("hidden");
    }
  };

  useEffect(() => {
    if (firstLoad) {
      handleFullScreen(visible);
      handleVisible(visible);

      if (!visible) {
        handleClose(refModal.current);
      }
    }
  }, [visible]);

  const modal = (
    <div
      ref={refModal}
      className={`${classList} ${className ?? ""}`}
      onClick={(e: MouseEvent) => close(e)}
    >
      <div
        className="wdu-modal__container"
        onClick={(e) => e.stopPropagation()}
        style={{ width: fullscreen ? "100%" : width, height, top }}
      >
        <i
          className="wdu-modal__close"
          onClick={(e: MouseEvent) => close(e)}
        ></i>

        {title && <p className="wdu-modal__title">{title}</p>}

        <div
          className="wdu-modal__body"
          style={{ marginTop: title ? 0 : "48px" }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
}

export default Modal;
