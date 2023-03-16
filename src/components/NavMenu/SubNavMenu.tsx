import React, {
    Children,
    cloneElement,
    useEffect,
    useRef,
    useState,
    TransitionEvent,
} from 'react';
import { NavMenu, NavMenuItem } from './NavMenu';
import { internalPropsSubNavMenu, propsSubNavMenu } from './type';

const ITEM_HEIGHT = 50;
const NEST_ITEM_INDENT = 20;

function SubNavMenu(props: propsSubNavMenu) {
    const {
        children,
        expand = false,
        label,
        indent = NEST_ITEM_INDENT,
        single = false,
        lastExpandItem,
        submitExpandId,
        menuId,
    } = props as propsSubNavMenu & internalPropsSubNavMenu;

    const [menuExpand, setExpand] = useState(() => expand);

    const refSubNavContainer = useRef<HTMLDivElement>(null);

    // compute the height of SubNavMenu in order to make transition
    const setComputedHeightToContainer = () => {
        if (refSubNavContainer.current) {
            const { clientHeight } = refSubNavContainer.current;
            refSubNavContainer.current.style.height = clientHeight + 'px';
            return clientHeight;
        }
    };

    // single-expand mode
    useEffect(() => {
        if (menuExpand) {
            // @ts-ignore
            submitExpandId(menuId as number);
        }
    }, [menuExpand]);

    // close the item expanded last time
    useEffect(() => {
        if (!single) return;

        if (lastExpandItem !== undefined && lastExpandItem !== menuId) {
            setComputedHeightToContainer();
            setExpand(false);
        }
    }, [lastExpandItem]);

    // keep the id of last item which is expanded
    const [lastExpandItemIndex, setLastExpandItemIndex] = useState<
        number | undefined
    >();
    // pass the same props to the SubNavMenu child node
    const childNodes = Children.toArray(children).map(
        (node: any, index: number) => {
            if (node.type === 'div') {
                return node;
            } else {
                return cloneElement(node, {
                    single,
                    menuId: index,
                    indent: indent + NEST_ITEM_INDENT,
                    lastExpandItem: lastExpandItemIndex,
                    submitExpandId: setLastExpandItemIndex,
                });
            }
        },
    );

    // initially, every child item of a SubNavMenu is collapsed
    const initialHeight = childNodes.length * ITEM_HEIGHT + 'px';

    // height of subNav container that expanded the last time
    const [lastHeight, setLastHeight] = useState<number>();

    const handleClick = () => {
        // while the click event is triggered, first of all set the height of the container which in order to make the transition effect work.
        if (menuExpand && refSubNavContainer.current) {
            const clientHeight = setComputedHeightToContainer();
            setLastHeight(clientHeight);
        }

        // wait 50ms ensure the height of container has been modified
        setTimeout(() => setExpand(!menuExpand), 50);
    };

    // calculate the height before item expanding
    const [expandHeight, setExpandHeight] = useState<{
        height: string | number;
    }>({ height: 0 });

    // toggle the item
    useEffect(() => {
        let height: string | number;
        if (menuExpand) {
            height = lastHeight || initialHeight;
        } else {
            height = 0;
        }
        setExpandHeight((prev) => ({ ...prev, height }));
    }, [menuExpand]);

    const keepChildItemExpandable = (e: TransitionEvent) => {
        if (e.propertyName !== 'height' && e.propertyName !== 'width') return;

        let height: string | number;
        if (menuExpand) {
            // the value 'auto' can make it transitioning while child item expanding
            height = 'auto';
        } else {
            height = 0;
        }
        setExpandHeight((prev) => ({ ...prev, height }));
    };

    return (
        <NavMenu className='wdu-subNavMenu'>
            <NavMenuItem
                className='wdu-subNavMenu__title'
                expand={menuExpand}
                indent={indent}
                onClick={handleClick}
                label={label}
                subMenuItem></NavMenuItem>

            <div
                className='wdu-subNavMenu__items'
                style={expandHeight}
                ref={refSubNavContainer}
                onTransitionEnd={keepChildItemExpandable}>
                {childNodes}
            </div>
        </NavMenu>
    );
}

const memoSubNavMenu = React.memo(SubNavMenu);
memoSubNavMenu.displayName = 'SubNavMenu';

export default SubNavMenu;
