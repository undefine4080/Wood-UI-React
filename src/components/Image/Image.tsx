import { useLazyLoad } from '@common/hooks';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { propsImage } from './type';

import Modal from '@component/Modal/Modal';
import ImageViewer from './ImageViewer';
import './image.less';

function Image(props: propsImage) {
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

    const refImg: any = useRef();
    const [imgSrc, setSrc] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [loading, setLoading] = useState<'lazy' | 'eager' | 'internal'>();
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

    const handleLoading = () => {
        const imgElement = document.createElement('img');
        const hasLoadingApi = 'loading' in imgElement;
        if (hasLoadingApi) {
            setSrc(src);
            setLoading(lazy ? 'lazy' : 'eager');
        } else {
            setLoading('internal');
        }
    };

    useEffect(handleLoading, []);

    useLazyLoad(
        refImg,
        () => {
            if (loading === 'internal') {
                setSrc(src);
            }
        },
        lazy,
    );

    return (
        <div
            className={`wdu-image ${imgSrc && 'wdu-image__loaded'}`}
            style={imageStyle}
            ref={refImg}
            onClick={handleClick}>
            <img
                className='wdu-image__img'
                src={imgSrc}
                onClick={linkTo}
                loading={loading as 'lazy' | 'eager'}
                width={width}
                height={height}
                alt={alt}
            />

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

export default Image;
