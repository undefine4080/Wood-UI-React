import Arrow from "@base/icon/Arrow/Arrow";
import { MouseEvent } from "react";
import { propsNavMenuItem } from "./type";

function NavMenuItem(props: propsNavMenuItem) {
  const {
    label,
    icon,
    to,
    expand = false,
    onClick,
    subMenuItem = false,
    disabled = false,
  } = props;

  const labelLink = (
    <a className={"wdu-navMenuItem__label"} href={to}>
      {label}
    </a>
  );

  const labelText = <span className={"wdu-navMenuItem__label"}>{label}</span>;

  return (
    <div
      className={`wdu-navMenuItem ${
        disabled ? "wdu-navMenuItem__disabled" : ""
      }`}
      onClick={(e: MouseEvent) => !disabled && onClick && onClick(e)}
    >
      {icon && <span className={"wdu-navMenuItem__icon"}></span>}

      {to ? labelLink : labelText}

      {subMenuItem && <Arrow style={expand ? "bottom" : "right"} />}
    </div>
  );
}

NavMenuItem.displayName = "NavMenuItem";

export default NavMenuItem;
export const ItemHeight = 60;
