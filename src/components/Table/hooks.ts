import { useEffect, useRef, useState } from "react";
import { propsTable } from "./type";

function useHeaderMaskWidth(maxHeight: propsTable['maxHeight']) {
    const [headerMaskWidth, setHeaderMaskWidth] = useState<string>();
    const refTable = useRef<any>();
    const refTableContainer = useRef<any>();

    const calcHeaderMaskWidth = () => {
        const containerWidth = refTableContainer.current.clientWidth;
        const scrollbarWidth =
            containerWidth - refTable.current.clientWidth;
        const headerWidth = containerWidth - scrollbarWidth;
        setHeaderMaskWidth(headerWidth + 'px');
    };

    const resetHeaderMaskWidthByResize = () => {
        calcHeaderMaskWidth();
    };

    useEffect(() => {
        if (maxHeight) {
            calcHeaderMaskWidth();

            window.addEventListener('resize', resetHeaderMaskWidthByResize);

            return () =>
                window.removeEventListener(
                    'resize',
                    resetHeaderMaskWidthByResize,
                );
        }
    }, []);

    return {
        refTable,
        refTableContainer,
        headerMaskWidth
    };
}

export { useHeaderMaskWidth };