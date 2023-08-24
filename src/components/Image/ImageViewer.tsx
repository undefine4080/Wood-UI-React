import { CSSProperties, MouseEventHandler, useEffect, useState } from 'react';
import { Size } from '@common/types';
import { getImageSize } from '@common/utils';
import { useTransform } from './hooks';

function ImageViewer(props: {
    src: string;
    close: MouseEventHandler<HTMLElement>;
    active: boolean;
}) {
    const { src, close, active } = props;
    const [imageStyle, setImageStyle] = useState<CSSProperties>();

    useEffect(() => {
        if (active && !imageStyle) {
            getImageSize(props.src).then((size: Size) => {
                const { width, height } = size;
                const { innerWidth, innerHeight } = window;

                let imageStyle;
                if (width / 2 - innerWidth / 2 > height / 2 - innerHeight / 2) {
                    imageStyle = {
                        width: '100vw',
                    };
                } else {
                    imageStyle = {
                        height: '100vh',
                    };
                }
                setImageStyle(imageStyle);
            });
        }
    }, [active]);

    const { scaleDown, scaleUp, reset, full, rotate } = useTransform();

    return (
        <div className='wdu-image__preview'>
            <i
                className='wdu-image__preview-btn wdu-icon-close wdu-image__preview-btn--close'
                onClick={close}></i>

            <img src={src} style={imageStyle} onDragStart={() => {}} />

            <div className='wdu-image__preview-controller'>
                <i
                    className='wdu-image__preview-btn wdu-icon-scaleDown'
                    onClick={scaleDown}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-scaleUp'
                    onClick={scaleUp}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-reset'
                    onClick={reset}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-full'
                    onClick={full}></i>
            </div>
        </div>
    );
}

export default ImageViewer;
