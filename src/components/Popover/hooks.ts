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

    const onScroll = useCallback((e: Event) => {
        console.log(e);
    }, []);

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
) {
    const [popoverStyle, setPopoverStyle] = useState({
        transform: '',
    });

    const { hasFindParents, setHasFindParents, findScrollContainerParents } =
        useScrollContainer(visible);

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
            let left, top;
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

            let applyStyle = {
                transform: `translate(${left}px, ${top}px)`,
            };
            setPopoverStyle((prev) => ({ ...prev, ...applyStyle }));
        }
    };
    const flowTheTargetMove = () => {};

    useEffect(() => {
        calcStaticPos();
        flowTheTargetMove();

        if (popoverTarget && visible && !hasFindParents) {
            findScrollContainerParents(popoverTarget);
            setHasFindParents(true);
        }
    }, [popoverTarget, visible]);

    return {
        
        popoverStyle,
    };
}

export { usePopoverPosition };
