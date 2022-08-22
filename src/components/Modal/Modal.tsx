import ReactDOM from 'react-dom';
import { MouseEvent, useEffect } from 'react';
import { propsModal } from './type';
import { useCssClassManager } from '../../base/hooks';

import './modal.less';

function Modal ( props: propsModal ) {
  const { width = "350px", height, title, mask, className, visible = false, fullscreen = false, children, onOpen, onClose } = props;

  const classMap = {
    base: 'wdu-modal',
    mask: 'wdu-modal__mask',
    visible: 'wdu-modal__visible',
    hidden: 'wdu-modal__hidden'
  };

  const { addClassName, removeClassName, classList } = useCssClassManager( classMap );

  const close = ( e: MouseEvent ) => {
    e.stopPropagation();
    onClose();
    addClassName( 'hidden' );
  };

  useEffect( () => {
    mask ? addClassName( 'mask' ) : removeClassName( 'mask' );
    visible ? addClassName( 'visible' ) : removeClassName( 'visible' );
  }, [ visible, mask ] );

  const sizeStyle = fullscreen ? { width: '100%', height: '100%' } : { width, height };

  return ReactDOM.createPortal(
    (
      <div className={ classList + ` ${ className }` } onClick={ close } onAnimationEnd={ () => {
        if ( !visible ) {
          removeClassName( 'hidden' );
        }
      } }>
        <div className='wdu-modal__container' style={ sizeStyle }>
          <i className='wdu-modal__close' onClick={ e => close( e ) }></i>

          { title && <p className='wdu-modal__title'>{ title.toString() }</p> }

          <div className='wdu-modal__body' style={ { marginTop: title ? 0 : '48px' } }>
            { children }
          </div>
        </div>
      </div>
    ),
    document.body
  );
}

export default Modal;