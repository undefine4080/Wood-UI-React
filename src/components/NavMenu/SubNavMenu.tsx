import React, {
    useEffect,
    useRef,
    useState,
    TransitionEvent,
    useId,
    useContext,
} from 'react';
import { NavContext, NavMenuItem } from './NavMenu';
import { internalPropsSubNavMenu, propsSubNavMenu } from './type';
import { bindImplicitProps } from '@common/utils';

const ITEM_HEIGHT = 50;
const NEST_ITEM_INDENT = 20;

function SubNavMenu(props: propsSubNavMenu) {
    const {
        children,
        expand = false,
        label,
        indent = NEST_ITEM_INDENT,
        lastExpandItem,
        submitExpandId,
    } = props as propsSubNavMenu & internalPropsSubNavMenu;

    const { single } = useContext(NavContext);

    const [menuExpand, setExpand] = useState(() => expand);

    const refSubNavContainer = useRef<HTMLDivElement>(null);

    const menuId = useId();

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
            submitExpandId(menuId);
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
    
    // pass the props to the SubNavMenu child node
    const childNodes = bindImplicitProps(React.Children.toArray(children), {
        indent: indent + NEST_ITEM_INDENT,
        lastExpandItem: lastExpandItemIndex,
        submitExpandId: setLastExpandItemIndex,
    });

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
        <ul className='wdu-subNavMenu'>
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
        </ul>
    );
}

const memoSubNavMenu = React.memo(SubNavMenu);
memoSubNavMenu.displayName = 'SubNavMenu';

export default SubNavMenu;
