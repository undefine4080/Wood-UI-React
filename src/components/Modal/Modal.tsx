import ReactDOM from 'react-dom';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { propsModal } from './type';
import { useCssClassManager } from '@common/hooks';
import { useTopLayer, TOP_INDEX } from './hooks';

import './modal.less';

const T = 'wdu-modal';
function Modal(props: propsModal) {
    const {
        mask,
        visible = false,
        fullscreen = false,
        containerClass = '',
        top,
        children,
        closeOnMaskClick = true,
        onOpen,
        onClose,
        close,
    } = props;

    const refModal = useRef<any>();

    const classMap = {
        base: T,
        mask: `${T}__mask`,
        visible: `${T}__visible`,
        hidden: `${T}__hidden`,
        fullscreen: `${T}__fullScreen`,
    };
    const { addClassName, removeClassName, classList } =
        useCssClassManager(classMap);

    const resetClassList = () => {
        const modal = refModal.current;

        const clear = () => {
            removeClassName('visible');
            removeClassName('hidden');
            modal.removeEventListener('animationend', clear);
        };

        if (modal) {
            modal.addEventListener('animationend', clear);
        }
    };

    const handleFullScreen = (visible: Boolean) => {
        if (fullscreen) {
            if (visible) {
                document.body.style.overflow = 'hidden';
                addClassName('fullscreen');
            } else {
                document.body.style.overflow = 'auto';
                removeClassName('fullscreen');
            }
        }
    };

    const handleVisibility = (visible: Boolean) => {
        if (visible) {
            addClassName('visible');
            onOpen && onOpen();
        } else {
            addClassName('hidden');
            resetClassList();
            onClose && onClose();
        }
    };

    const [firstLoad, setFirstLoad] = useState(false);
    useEffect(() => {
        setFirstLoad(true);
    }, []);

    useEffect(() => {
        if (firstLoad) {
            handleFullScreen(visible);
            handleVisibility(visible);
        }
    }, [visible]);

    const { topIndex } = useTopLayer(visible, firstLoad);
    useEffect(() => {
        if (visible) {
            const applyMask = topIndex - 1 > TOP_INDEX ? true : mask;
            applyMask && addClassName('mask');
        }
    }, [topIndex]);

    const modal = (
        <div
            ref={refModal}
            className={classList}
            style={{ zIndex: topIndex }}
            onClick={(e: MouseEvent) => {
                e.stopPropagation();
                if (closeOnMaskClick) close();
            }}>
            <div
                className={`wdu-modal__container ${containerClass}`}
                onClick={(e) => e.stopPropagation()}
                style={{ marginTop: top }}>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, document.body);
}

export { Modal };
