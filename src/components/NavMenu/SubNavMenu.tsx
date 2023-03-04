import React, { Children, cloneElement, useEffect, useState } from 'react';
import { NavMenu, NavMenuItem } from './NavMenu';
import { internalPropsNavMenuItem, propsSubNavMenu } from './type';

const nestItemIndent = 20;
function SubNavMenu(props: propsSubNavMenu & internalPropsNavMenuItem) {
    const {
        children,
        expand = false,
        title,
        indent = nestItemIndent,
        single = false,
        lastExpandItem,
        submitExpandId,
        menuId,
    } = props;

    const [menuExpand, setExpand] = useState(() => expand);

    const handleClick = () => {
        setExpand(!menuExpand);
    };

    useEffect(() => {
        if (menuExpand) {
            submitExpandId && submitExpandId(menuId as number);
        }
    }, [menuExpand]);

    useEffect(() => {
        if (!single) return;

        if (lastExpandItem !== undefined && lastExpandItem !== menuId) {
            setExpand(false);
        }
    }, [lastExpandItem]);

    const [lastExpandItemIndex, setLastExpandItemIndex] = useState<
        number | undefined
    >();

    const childNodes = Children.toArray(children).map(
        (node: any, index: number) => {
            if (node.type === 'div') {
                return node;
            } else {
                return cloneElement(node, {
                    single,
                    menuId: index,
                    indent: indent + nestItemIndent,
                    lastExpandItem: lastExpandItemIndex,
                    submitExpandId: setLastExpandItemIndex,
                });
            }
        },
    );

    return (
        <NavMenu className='wdu-subNavMenu'>
            <NavMenuItem
                className='wdu-subNavMenu__title'
                expand={menuExpand}
                indent={indent}
                onClick={handleClick}
                subMenuItem>
                {title}
            </NavMenuItem>

            <div
                className='wdu-subNavMenu__items'
                style={{
                    display: menuExpand ? 'block' : 'none',
                }}>
                {childNodes}
            </div>
        </NavMenu>
    );
}

const memoSubNavMenu = React.memo(SubNavMenu);
memoSubNavMenu.displayName = 'SubNavMenu';

export default SubNavMenu;
