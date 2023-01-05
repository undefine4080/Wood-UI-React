import Arrow from "@base/icon/Arrow/Arrow";
import { MouseEvent } from "react";
import { propsNavMenuItem } from "./type";

function NavMenuItem(props: propsNavMenuItem) {
  const {
    to,
    label,
    icon,
    expand = false,
    onClick,
    subMenuItem = false,
    disabled = false,
    children
  } = props;

  const renderItem = () => {
    if (to) {
      // normal <a> using
      return <a className={"wdu-navMenuItem__label"} href={to}>{label}</a>;
    } else if (!to && children) {
      // <Link/> of react-router using
      return children;
    } else if (!to && label) {
      // static title using
      return <span className={"wdu-navMenuItem__label"}>{label}</span>;
    }
  };

  return (
    <div
      className={`wdu-navMenuItem ${disabled ? "wdu-navMenuItem__disabled" : ""
        }`}
      onClick={(e: MouseEvent) => !disabled && onClick && onClick(e)}
    >
      {icon && <span className={"wdu-navMenuItem__icon"}></span>}

      {renderItem()}

      {subMenuItem && <Arrow style={expand ? "bottom" : "right"} />}
    </div>
  );
}

NavMenuItem.displayName = "NavMenuItem";

export default NavMenuItem;
export const ItemHeight = 50;
