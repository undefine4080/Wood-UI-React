import React, { useState, useRef, useEffect, MutableRefObject } from "react";
import { propsCollapse, propsCollapseNav } from "./type";
import CollapseItem from "./CollapseItem";

import "./collapse.less";

function Collapse(props: propsCollapse) {
  const { sticky, width, children } = props;

  return (
    <div
      className={`wdu-collapse__container ${
        sticky ? `wdu-collapse__sticky` : ""
      }`}
    >
      <div className="wdu-collapse" style={{ width }}>
        {children}
      </div>
    </div>
  );
}

function CollapseNav(props: propsCollapseNav) {
  const PREFIX = "wdu-collapse-item";
  const { label, url, newTab = true, disabled = false } = props;
  let disableStyle = disabled
    ? { cursor: "not-allowed", color: "grey" }
    : { cursor: "pointer" };
  const aRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (disabled) {
      aRef.current.removeAttribute("href");
    } else {
      if (url && url.length > 0) aRef.current.setAttribute("href", url);
    }
  }, []);

  return (
    <div className={`${PREFIX}__nav`}>
      <a ref={aRef} style={disableStyle} target={newTab ? "_self" : "_blank"}>
        {label}
      </a>
    </div>
  );
}

export { Collapse, CollapseItem, CollapseNav };
