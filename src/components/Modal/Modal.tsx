import ReactDOM from 'react-dom';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { propsModal } from './type';
import { useCssClassManager } from '@common/hooks';

import './modal.less';

function Modal(props: propsModal) {
    const {
        mask,
        visible = false,
        fullscreen = false,
        top,
        children,
        onOpen,
        onClose,
        close,
    } = props;

    const refModal = useRef<any>();

    const classMap = {
        base: 'wdu-modal',
        mask: 'wdu-modal__mask',
        visible: 'wdu-modal__visible',
        hidden: 'wdu-modal__hidden',
        fullscreen: 'wdu-modal__fullScreen',
    };

    const { addClassName, removeClassName, classList } =
        useCssClassManager(classMap);

    const [firstLoad, setFirstLoad] = useState(false);
    useEffect(() => {
        setFirstLoad(true);
        mask && addClassName('mask');
    }, []);

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

    useEffect(() => {
        if (firstLoad) {
            handleFullScreen(visible);
            handleVisibility(visible);
        }
    }, [visible]);

    const modal = (
        <div
            ref={refModal}
            className={classList}
            onClick={(e: MouseEvent) => {
                e.stopPropagation();
                close();
            }}>
            <div
                className='wdu-modal__container'
                onClick={(e) => e.stopPropagation()}
                style={{ marginTop: top }}>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, document.body);
}

export default Modal;
