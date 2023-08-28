import { useRef, useState } from 'react';

function useTransform() {
    const target = useRef<any>();
    const [scaleFactor, setScaleFactor] = useState(1);
    const [rotateAngle, setRotateAngle] = useState(0);
    const [lastTransform, setLastTransform] = useState(0);

    const scaleDown = () => {
        if (scaleFactor >= 0.4) {
            target.current.style.transform = `rotate(${rotateAngle}deg) scale(${
                scaleFactor - 0.2
            })`;
            setScaleFactor(scaleFactor - 0.2);
        }
    };

    const scaleUp = () => {
        target.current.style.transform = `rotate(${rotateAngle}deg) scale(${
            scaleFactor + 0.5
        })`;
        setScaleFactor(scaleFactor + 0.5);
    };

    const rotate = (direction: 'left' | 'right') => {
        const step = direction === 'left' ? -90 : 90;
        target.current.style.transform = `rotate(${
            rotateAngle + step
        }deg) scale(${scaleFactor})`;
        setRotateAngle(rotateAngle + step);
    };

    const reset = () => {
        target.current.style.transform = '';
        setScaleFactor(1);
        setRotateAngle(0);
    };

    return { scaleDown, scaleUp, reset, rotate, target };
}

export { useTransform };
