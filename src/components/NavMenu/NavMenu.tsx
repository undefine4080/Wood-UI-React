import { propsNavMenu } from "./type";
import NavMenuItem from "./NavMenuItem";
import { getNamedChild } from "@base/utils";
import SubNavMenu from "./SubNavMenu";

import "./navMenu.less";

function NavMenu(props: propsNavMenu) {
  const { children, className = "" } = props;

  const navMenuItems = getNamedChild(["NavMenuItem", "SubNavMenu"], children);

  return <div className={`wdu-navMenu ${className}`}>{navMenuItems}</div>;
}

export { NavMenu, NavMenuItem, SubNavMenu };
