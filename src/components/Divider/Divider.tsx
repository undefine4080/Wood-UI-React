import { useEffect, useRef } from "react";
import { propsDivider } from "./type";

import "./divider.less";

function Divider(props: propsDivider) {
  const { direction = "horizontal", text } = props;

  const classList = `wdu-divider wdu-divider__${direction}`;

  const dividerNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (direction === "vertical") {
      const dividerParentNode = dividerNode.current?.parentNode as HTMLElement;
      // make the parent node box is flex box
      dividerParentNode.style.display = "flex";
    }
  }, [dividerNode]);

  return (
    <div ref={dividerNode} className={classList}>
      {text && <span className="wdu-divider__text">{text}</span>}
    </div>
  );
}

export default Divider;
