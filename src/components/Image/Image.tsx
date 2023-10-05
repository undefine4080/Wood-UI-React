import { useLazyLoad } from '@common/hooks';
import { MouseEvent, useRef, useState } from 'react';
import { propsImage } from './type';

import Modal from '@component/Modal/Modal';
import ImageViewer from './ImageViewer';
import './image.less';
import { WDLoading } from '@component/Loading/Loading';
import { LoadingState } from '@common/types';

function WDImage(props: propsImage) {
    const {
        width,
        height,
        src,
        title,
        link,
        lazy = false,
        fit,
        preview = false,
        alt,
        hoverContent,
        errorContent,
    } = props;

    const refImg = useRef<any>();
    const [imgSrc, setSrc] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [loading, setLoading] = useState(LoadingState.PENDING);
    const imageStyle = {
        width: `${typeof width === 'number' ? `${width}px` : width}`,
        height: `${typeof height === 'number' ? `${height}px` : height}`,
        cursor: preview ? 'pointer' : 'initial',
        objectFit: fit,
    };

    link && Object.assign(imageStyle, { cursor: 'pointer' });

    const linkTo = () => {
        if (!link) return;

        window.open(link.toString());
    };

    const close = () => setPreviewVisible(false);

    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();

        if (preview) {
            setPreviewVisible(true);
        }
    };

    useLazyLoad(
        refImg,
        () => {
            const image = new Image();

            image.onload = function () {
                setLoading(LoadingState.SUCCESS);
                setSrc(src);
            };

            image.onerror = function () {
                setLoading(LoadingState.ERROR);
            };

            image.src = src;
        },
        lazy,
    );

    return (
        <div
            className='wdu-image'
            style={imageStyle}
            ref={refImg}
            onClick={handleClick}>
            <img
                className='wdu-image__img'
                src={imgSrc}
                onClick={linkTo}
                loading='lazy'
                width={width}
                height={height}
                alt={alt}
            />

            <WDLoading loading={loading}></WDLoading>

            {title && <p className='wdu-image__info'>{title}</p>}

            {preview && (
                <Modal
                    containerClass='wdu-image__previewContainer'
                    visible={previewVisible}
                    close={close}
                    closeOnMaskClick={false}
                    mask>
                    <ImageViewer
                        src={src}
                        close={close}
                        active={previewVisible}></ImageViewer>
                </Modal>
            )}
        </div>
    );
}

export { WDImage };
