import { useEffect, useState } from "react";
import { NavMenu, NavMenuItem } from "./NavMenu";
import { propsSubNavMenu } from "./type";
import { ItemHeight } from "./NavMenuItem";
import React from "react";

const INITIAL_HEIGHT = `${ItemHeight}px`;

function SubNavMenu(props: propsSubNavMenu) {
  const {
    children,
    expand = false,
    parentItemCount,
    parentSetItemCount,
    ...propsNavMenuItem
  } = props;

  const [menuExpand, setExpand] = useState(() => expand);
  const [containerHeight, setContainerHeight] = useState(INITIAL_HEIGHT);
  const [firstLoad, setFirstLoad] = useState(false);

  // +1 because at least including the SubNavItem itself
  const selfCount = React.Children.count(children) + 1;

  const [menuItemCount, setItemCount] = useState<number>(selfCount);

  const handleExpand = (menuExpand: boolean) => {
    if (menuExpand) {
      setContainerHeight(`${menuItemCount * ItemHeight}px`);

      // apply the increase of count to the parent SubNavMenu
      parentSetItemCount &&
        parentSetItemCount((prev: number) => prev + menuItemCount - 1);

      setFirstLoad(true);
    } else {
      setContainerHeight(INITIAL_HEIGHT);

      if (firstLoad) {
        // apply the decrease of count to the parent SubNavMenu
        parentSetItemCount &&
          parentSetItemCount((prev: number) => prev - menuItemCount + 1);
      }
    }
  };

  useEffect(() => {
    setContainerHeight(`${menuItemCount * ItemHeight}px`);
  }, [menuItemCount]);

  useEffect(() => {
    handleExpand(menuExpand);
  }, [menuExpand]);

  const menuItems = React.Children.toArray(children);

  // todo: It still can not nesting infinity

  return (
    <div
      className="wdu-subNavMenu__container"
      style={{ height: containerHeight }}
    >
      <NavMenu className="wdu-subNavMenu">
        <NavMenuItem
          {...propsNavMenuItem}
          expand={menuExpand}
          subMenuItem={true}
          onClick={() => setExpand(!menuExpand)}
        />

        {menuItems.map((item: any) => {
          return React.cloneElement(item, { parentSetItemCount: setItemCount });
        })}
      </NavMenu>
    </div>
  );
}

const memoSubNavMenu = React.memo(SubNavMenu);
memoSubNavMenu.displayName = "SubNavMenu";

export default memoSubNavMenu;
