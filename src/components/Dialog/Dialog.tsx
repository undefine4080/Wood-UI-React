import Modal from '@component/Modal/Modal';
import propsDialog from './type';
import { MouseEvent } from 'react';

import './dialog.less';

function Dialog(props: propsDialog) {
    const {
        visible,
        title,
        header,
        footer,
        mask = true,
        showClose = true,
        children,
        close,
        onOpen,
        onClose,
    } = props;

    return (
        <Modal
            visible={visible}
            close={close}
            mask={mask}
            onClose={onClose}
            onOpen={onOpen}>
            <div className='wdu-dialog'>
                {header ? (
                    header
                ) : (
                    <div className='wdu-dialog__header'>
                        {title && (
                            <p className='wdu-dialog__header-title'>{title}</p>
                        )}
                    </div>
                )}

                {showClose && (
                    <i
                        className='wdu-dialog__close'
                        onClick={(e: MouseEvent) => {
                            e.stopPropagation();
                            close();
                        }}></i>
                )}

                <div className='wdu-dialog__body'>{children}</div>

                {footer && <div className='wdu-dialog__footer'>{footer}</div>}
            </div>
        </Modal>
    );
}

export default Dialog;
