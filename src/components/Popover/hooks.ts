import {
    MutableRefObject,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react';
import { activeType, position } from './type';

function usePopoverPosition(
    popoverTarget: Element | undefined,
    popover: MutableRefObject<HTMLDivElement | null>,
    visible: boolean,
    position: position,
) {
    const [popoverStyle, setPopoverStyle] = useState({
        transform: '',
    });

    const [popoverSize, setPopoverSize] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (popover.current) {
            const popoverPos = popover.current?.getBoundingClientRect();
            const { width, height } = popoverPos;
            setPopoverSize({ width, height });
        }
    }, []);

    const calcPosition = () => {
        if (popoverTarget && visible) {
            const targetPos = popoverTarget.getBoundingClientRect();
            const { width, height } = popoverSize;

            console.log(targetPos);

            // let transform: string;
            // switch (position) {
            //     case 'left':
            //         const X = targetPos.left - width;
            //         const Y = height / 2 - targetPos.height / 2;
            //         debugger;
            //         transform = `translate(${X}px, ${Y}px)`;
            //         break;
            // }
            // setPopoverStyle((prev) => {
            //     return {
            //         ...prev,
            //         transform,
            //     };
            // });
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
