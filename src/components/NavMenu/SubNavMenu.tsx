import React, {
    JSXElementConstructor,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { NavMenu, NavMenuItem } from './NavMenu';
import { internalPropsNavMenuItem, propsSubNavMenu } from './type';
import { ItemHeight } from './NavMenuItem';

const INITIAL_HEIGHT = `${ItemHeight}px`;
const INDENT = 40;

function SubNavMenu(props: propsSubNavMenu & internalPropsNavMenuItem) {
    const {
        children,
        expand = false,
        // parentItemCount,
        // parentSetItemCount,
        collapsePrevExpandItem,
        title,
        indent = 0,
        ...propsNavMenuItem
    } = props;

    const [menuExpand, setExpand] = useState(() => expand);
    const [containerHeight, setContainerHeight] = useState(INITIAL_HEIGHT);
    const [firstLoad, setFirstLoad] = useState(false);

    // +1 because at least including the SubNavItem itself
    const selfCount = React.Children.count(children) + 1;
    const [menuItemsCount, setItemsCount] = useState<number>(selfCount);

    const handleExpand = (menuExpand: boolean) => {
        if (menuExpand) {
            setContainerHeight(`${menuItemsCount * ItemHeight}px`);

            // apply the increase of count to the parent SubNavMenu
            // parentSetItemCount &&
            //     parentSetItemCount((prev: number) => prev + menuItemsCount - 1);

            setFirstLoad(true);
        } else {
            setContainerHeight(INITIAL_HEIGHT);

            if (firstLoad) {
                // apply the decrease of count to the parent SubNavMenu
                // parentSetItemCount &&
                //     parentSetItemCount(
                //         (prev: number) => prev - menuItemsCount + 1,
                //     );
            }
        }
    };

    useEffect(() => {
        setContainerHeight(`${menuItemsCount * ItemHeight}px`);
    }, [menuItemsCount]);

    useEffect(() => {
        handleExpand(menuExpand);
    }, [menuExpand]);

    const menuItems = React.Children.toArray(children);

    return (
        <NavMenu className='wdu-subNavMenu'>
            <NavMenuItem
                className='wdu-subNavMenu__title'
                indent={indent + INDENT}
                onClick={() => setExpand(!menuExpand)}>
                {title}
            </NavMenuItem>

            <div style={{ display: menuExpand ? 'block' : 'none' }}>
                {menuItems.map((item: any) =>
                    React.cloneElement(item, { indent: indent + INDENT }),
                )}
            </div>
        </NavMenu>
    );
}

const memoSubNavMenu = React.memo(SubNavMenu);
memoSubNavMenu.displayName = 'SubNavMenu';

export default memoSubNavMenu;
