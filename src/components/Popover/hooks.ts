import { MutableRefObject, useEffect, useState } from 'react';
import { position } from './type';

function usePopoverPosition(
    popoverTarget: Element | undefined,
    popover: MutableRefObject<HTMLDivElement | null>,
    visible: boolean,
    position: position,
) {
    const [popoverStyle, setPopoverStyle] = useState({
        transform: '',
    });

    const calcPosition = () => {
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

    useEffect(() => {
        calcPosition();
    }, [popoverTarget, visible]);

    return {
        popoverStyle,
    };
}

export { usePopoverPosition };
