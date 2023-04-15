import { RefObject, useEffect, useRef, useState } from 'react';
import { activeType, position } from './type';

function usePopoverPosition(
    container: RefObject<HTMLDivElement | null>,
    position: position,
) {
    const refPopover = useRef<HTMLDivElement>(null);
    const [popoverSize, setPopoverSize] = useState<[number, number]>([0, 0]);
    const [popoverTarget, setPopoverTarget] = useState<HTMLElement>();
    const [popoverStyle, setPopoverStyle] = useState({});

    useEffect(() => {
        if (container && container.current) {
            setPopoverTarget(container.current.firstChild as HTMLElement);
        }

        if (refPopover.current) {
            const { clientWidth, clientHeight } = refPopover.current;
            setPopoverSize([clientWidth, clientHeight]);
        }
    }, []);

    const calcPopoverStyle = () => {};

    const active: activeType = {
        bottom: () => {
            if (popoverTarget) {
                const { x, y, width, height } = (
                    popoverTarget as HTMLElement
                ).getBoundingClientRect();

                const top = y + height + 8;
                const left = x - (width - popoverSize[0]);

                const popoverStyle = {
                    translate: `translate(${left}px, ${top}px)`,
                };
                setPopoverStyle((prev) => {
                    return { ...prev, ...popoverStyle };
                });
            }
        },
        top: () => {},
        left: () => {},
        right: () => {},
    };

    const activePopover = () => active[position]();

    return {
        refPopover,
        popoverStyle,
        popoverTarget,
        activePopover,
    };
}

export { usePopoverPosition };
