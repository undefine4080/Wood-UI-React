import { MouseEventHandler, ReactElement } from "react";

interface propsNavMenu {
  mode?: "vertical" | "horizontal";
  collapse?: boolean;
  children?: any;
  className?: string;
}

interface propsNavMenuItem {
  label: string;
  icon?: any;
  key?: string | number;
  to?: string;
  expand?: boolean;
  subMenuItem?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

interface propsSubNavMenu extends propsNavMenuItem {
  children?:
    | ReactElement<React.FC<propsNavMenuItem>>
    | Array<ReactElement<React.FC<propsNavMenuItem>>>;
  parentItemCount?: number;
  parentSetItemCount?: any;
}

export type { propsNavMenu, propsNavMenuItem, propsSubNavMenu };
