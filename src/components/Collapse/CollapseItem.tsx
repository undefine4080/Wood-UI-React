import { MutableRefObject, useEffect, useRef, useState } from "react";
import { propsCollapseItem } from "./type";

const PREFIX = "wdu-collapse-item";

function CollapseItem(props: propsCollapseItem) {
  const {
    expand = false,
    label,
    height,
    children,
    disabled = false,
    autoHeight,
  } = props;

  const itemNode = useRef<any>();
  const [itemHeight, setItemHeight] = useState("");
  const [isExpand, setExpand] = useState(expand);

  useEffect(() => {
    if (height && height !== "0px") {
      setItemHeight(height);
    } else {
      setItemHeight(`${itemNode.current.scrollHeight}px`);
    }
  }, []);

  const containerHeight = isExpand ? itemHeight : 0;

  const itemIndicator = isExpand ? `${PREFIX}__expand` : "";

  const classMap = {
    base: PREFIX,
    autoHeight: `${PREFIX} ${PREFIX}__autoHeight`,
  };

  const classList = autoHeight ? classMap.autoHeight : classMap.base;

  return (
    <div className={classList}>
      <div className={`${PREFIX}__label`} onClick={() => setExpand(!isExpand)}>
        <i className={`${PREFIX}__indicator ${itemIndicator}`}></i>
        {label}
      </div>

      <div
        ref={itemNode}
        className={`${PREFIX}__body`}
        style={{ height: containerHeight }}
      >
        {children}
      </div>
    </div>
  );
}

export default CollapseItem;
