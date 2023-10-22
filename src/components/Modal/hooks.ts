import { useEffect, useState } from 'react';

const TOP_INDEX = 2000;

function useTopLayer(visible: boolean, onceFlag: boolean) {
    const [topIndex, setTopIndex] = useState(TOP_INDEX);

    useEffect(() => {
        if (!window.WOOD_UI_MODAL_LEVEL) {
            window.WOOD_UI_MODAL_LEVEL = TOP_INDEX;
        }
    }, []);

    useEffect(() => {
        if (onceFlag) {
            if (visible) {
                window.WOOD_UI_MODAL_LEVEL += 1;
            } else {
                window.WOOD_UI_MODAL_LEVEL -= 1;
            }

            setTopIndex(window.WOOD_UI_MODAL_LEVEL);
        }
    }, [visible]);

    return { topIndex };
}

export { useTopLayer, TOP_INDEX };
