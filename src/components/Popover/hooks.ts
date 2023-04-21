import { MutableRefObject, useCallback, useEffect, useState } from 'react';
import { position } from './type';

/**
 *  find the container of the popoverTarget while scrolling
 * @param visible
 * @returns
 */
function useScrollContainer(visible: boolean) {
    const [hasFindParents, setHasFindParents] = useState(false);
    const [parentList, setParentList] = useState<Array<Element>>([]);
    const [initialScroll, setInitialScroll] = useState([0, 0]);
    const [scrollLength, setScrollLength] = useState([0, 0]);

    const onScroll = useCallback((e: any) => {
        const { scrollLeft, scrollTop } = e.target;
        setScrollLength([scrollLeft, scrollTop]);
    }, []);

    const getInitialScroll = () => {};

    const watchScroll = () => {
        if (parentList.length) {
            parentList.forEach((element) => {
                element.addEventListener('scroll', onScroll);
            });
        }
    };

    const unWatchScroll = () => {
        if (parentList.length) {
            parentList.forEach((element) => {
                element.removeEventListener('scroll', onScroll);
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
    }, [parentList, visible]);

    return {
        hasFindParents,
        parentList,
        setHasFindParents,
        findScrollContainerParents,
        scrollLength,
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
    const [initialPosition, setInitialPosition] = useState([0, 0]);

    const {
        hasFindParents,
        setHasFindParents,
        findScrollContainerParents,
        scrollLength,
    } = useScrollContainer(visible);

    // sync the move position to the Popover
    useEffect(() => {
        // ignore the hover way
        if (trigger === 'hover') {
            setVisible(false);
        }

        const [startX, startY] = initialPosition;
        const [endX, endY] = scrollLength;
        const newPosition = `translate(${startX - endX}px, ${startY - endY}px)`;
        window.requestAnimationFrame(() => {
            (popover.current as HTMLElement).style.transform = newPosition;
        });
    }, [scrollLength]);

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

            // keep the start position
            setInitialPosition([left, top]);
            (
                popover.current as HTMLElement
            ).style.transform = `translate(${left}px, ${top}px)`;
        }
    };

    useEffect(() => {
        calcStaticPos();

        if (popoverTarget && visible && !hasFindParents) {
            findScrollContainerParents(popoverTarget);
            setHasFindParents(true);
        }
    }, [popoverTarget, visible]);

    return {
        setInitialPosition,
    };
}

export { usePopoverPosition };
