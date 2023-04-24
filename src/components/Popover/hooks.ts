import {
    UIEvent,
    MutableRefObject,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    MouseEvent,
} from 'react';
import { position } from './type';

/**
 *  find the container of the popoverTarget while scrolling, and trigger the scroll event
 * @param visible
 * @returns
 */
function useScrollContainer(visible: boolean, onScroll: Function) {
    // the flag of the parent nodes cache
    const [hasParents, setHasParents] = useState(false);
    const [parentList, setParentList] = useState<Array<Element>>([]);

    const scroll = useCallback((e: Event) => onScroll(e), []);

    const watchScroll = () => {
        if (parentList.length) {
            parentList.forEach((element) => {
                element.addEventListener('scroll', scroll);
            });
        }
    };

    const unWatchScroll = () => {
        if (parentList.length) {
            parentList.forEach((element) => {
                element.removeEventListener('scroll', scroll);
            });
        }
    };

    const findScrollContainerParents = (node: Element) => {
        if (!node) return;

        const parent = node.parentElement;
        if (parent) {
            if (parent.scrollHeight > parent.clientHeight) {
                setParentList((prev) => [...prev, parent]);
            } else {
                findScrollContainerParents(parent);
            }
        }
    };

    useEffect(() => {
        if (visible) {
            watchScroll();
        } else {
            unWatchScroll();
        }

        return () => unWatchScroll();
    }, [parentList, visible]);

    return {
        hasParents,
        parentList,
        setHasParents,
        findScrollContainerParents,
    };
}

/**
 * calculate the position of the popover activation
 * @param popoverTarget the ReactNode wrapped by the Popover
 * @param popover the Popover component
 * @param visible
 * @param position
 * @returns
 */
function usePopoverPosition(
    popoverTarget: Element | undefined,
    popover: MutableRefObject<HTMLDivElement | null>,
    visible: boolean,
    position: position,
    trigger: 'click' | 'hover',
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
) {
    const scrollBarPosition = useRef([0, 0]);
    const popoverPosition = useRef([0, 0]);
    const firstScrollFlag = useRef(false);

    const onScroll = (e: MouseEvent) => {
        // ignore the scroll behavior while hovering
        if (trigger === 'hover') {
            setVisible(false);
            return;
        }

        // get the distance of the scroll bar when scrolling at first time
        const { scrollLeft, scrollTop } = e.target as HTMLElement;
        if (!firstScrollFlag.current) {
            scrollBarPosition.current = [scrollLeft, scrollTop];
            firstScrollFlag.current = true;
        }

        // position of the Popover when it is activating
        const [x, y] = popoverPosition.current;
        const [exitLeft, exitTop] = scrollBarPosition.current;
        window.requestAnimationFrame(() => {
            const position = `translate(${x - scrollLeft + exitLeft}px, ${
                y - scrollTop + exitTop
            }px)`;

            (popover.current as HTMLElement).style.transform = position;
        });
    };

    const { hasParents, setHasParents, findScrollContainerParents } =
        useScrollContainer(visible, onScroll);

    const calcStaticPos = () => {
        if (popoverTarget && visible) {
            // size of popover target
            const targetPos = popoverTarget.getBoundingClientRect();
            const {
                x: targetX,
                y: targetY,
                width: targetW,
                height: targetH,
            } = targetPos;

            // size of Popover
            let sourceW = 0,
                sourceH = 0;
            if (popover.current) {
                const { width, height } =
                    popover.current.getBoundingClientRect();
                [sourceW, sourceH] = [width, height];
            }

            // position of Popover
            let left = 0,
                top = 0;
            if (position === 'left') {
                left = targetX - sourceW - 12;
                top = targetY + (targetH - sourceH) / 2;
            } else if (position === 'right') {
                left = targetX + targetW + 12;
                top = targetY + (targetH - sourceH) / 2;
            } else if (position === 'top') {
                left = targetX + (targetW - sourceW) / 2;
                top = targetY - sourceH - 12;
            } else if (position === 'bottom') {
                left = targetX + (targetW - sourceW) / 2;
                top = targetY + targetH + 12;
            }

            popoverPosition.current = [left, top];

            (
                popover.current as HTMLElement
            ).style.transform = `translate(${left}px, ${top}px)`;
        }
    };

    useLayoutEffect(() => {
        calcStaticPos();

        if (popoverTarget && visible && !hasParents) {
            findScrollContainerParents(popoverTarget);
            setHasParents(true);
        }
    }, [popoverTarget, visible]);

    useEffect(() => {
        if (visible) {
            firstScrollFlag.current = false;
        }
    }, [visible]);
}

export { usePopoverPosition };
