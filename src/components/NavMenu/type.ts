import { MouseEventHandler, ReactElement } from "react";

interface propsNavMenu {
  mode?: "vertical" | "horizontal";
  collapse?: boolean;
  children?: any;
  className?: string;
}

interface propsNavMenuItem {
  to?: string; // target url
  label?: string; // text of item
  icon?: any; 
  key?: string | number;
  expand?: boolean;
  subMenuItem?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children?: any;
}

interface propsSubNavMenu extends propsNavMenuItem {
  children?:
  | ReactElement<React.FC<propsNavMenuItem>>
  | Array<ReactElement<React.FC<propsNavMenuItem>>>;
  parentItemCount?: number;
  parentSetItemCount?: any;
}

export type { propsNavMenu, propsNavMenuItem, propsSubNavMenu };
