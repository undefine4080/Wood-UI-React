import { CSSProperties, MouseEventHandler, useEffect, useState } from 'react';
import { Size } from '@common/types';
import { getImageSize } from '@common/utils';

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
                const edge = width > height ? 'width' : 'height';
                if (innerWidth > innerHeight) {
                    imageStyle = {
                        [edge]: innerHeight + 'px',
                    };
                } else if (innerWidth < innerHeight) {
                    imageStyle = {
                        [edge]: innerWidth + 'px',
                    };
                } else {
                    imageStyle = undefined;
                }

                setImageStyle(imageStyle);
            });
        }
    }, [active]);

    return (
        <div className='wdu-image__preview'>
            <i
                className='wdu-image__preview-btn wdu-icon-close wdu-image__preview-btn--close'
                onClick={close}></i>

            <img src={src} style={imageStyle} onDragStart={() => {}} />

            <div className='wdu-image__preview-controller'>
                <i className='wdu-image__preview-btn wdu-icon-scaleDown'></i>
                <i className='wdu-image__preview-btn wdu-icon-scaleUp'></i>
                <i className='wdu-image__preview-btn wdu-icon-reset'></i>
                <i className='wdu-image__preview-btn wdu-icon-full'></i>
            </div>
        </div>
    );
}

export default ImageViewer;
