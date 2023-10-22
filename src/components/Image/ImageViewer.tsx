import { CSSProperties, MouseEventHandler, useEffect, useState } from 'react';
import { Size } from '@common/types';
import { getImageSize } from '@common/utils';
import { useTransform } from './hooks';

function ImageViewer(props: { src: string; close: Function; active: boolean }) {
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

    const { target, scaleDown, scaleUp, reset, rotate } = useTransform();

    return (
        <>
            <img
                ref={target}
                className='wdu-image__preview'
                src={src}
                style={imageStyle}
            />

            <i
                className='wdu-image__preview-btn wdu-icon-close wdu-image__preview-btn--close'
                onClick={() => {
                    setTimeout(reset, 300);
                    close();
                }}></i>

            <div className='wdu-image__preview-controller'>
                <i
                    className='wdu-image__preview-btn wdu-icon-rotate-left'
                    onClick={() => rotate('left')}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-rotate-right'
                    onClick={() => rotate('right')}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-scaleDown'
                    onClick={scaleDown}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-scaleUp'
                    onClick={scaleUp}></i>
                <i
                    className='wdu-image__preview-btn wdu-icon-reset'
                    onClick={reset}></i>
            </div>
        </>
    );
}

export default ImageViewer;
