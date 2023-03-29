import { propsPopover } from './type';
import { useCssClassManager } from '@base/hooks';
import { useEffect, useRef, useState } from 'react';

import './popover.less';

const S = 'wdu-popover';

function Popover(props: propsPopover) {
    const {
        position = 'top',
        className,
        children,
        trigger = 'click',
        active = false,
        width,
        content,
    } = props;

    const refPopover = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(active);

    const classMap = {
        base: S,
        active: `${S}__active`,
        hover: `${S}__hover`,
        bottom: `${S}__bottom`,
        top: `${S}__top`,
        left: `${S}__left`,
        right: `${S}__right`,
    };

    const { classList, removeClassName, addClassName } =
        useCssClassManager(classMap);

    const triggerCLick = (e: any) => {
        if (trigger === 'click' && !visible) {
            setVisible(true);
        }
    };

    const triggerHover = (e: any) => {
        if (trigger === 'hover') {
            if (!visible) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    };

    useEffect(() => {
        addClassName(position);
    }, []);

    useEffect(() => {
        if (visible) {
            addClassName('active');
        } else {
            removeClassName('active');
        }
    }, [visible]);

    return (
        <div
            ref={refPopover}
            tabIndex={-1}
            className={classList}
            onClick={triggerCLick}
            onMouseOver={triggerHover}
            onMouseLeave={triggerHover}
            onBlur={() => setVisible(false)}>
            {children}
            <div
                className='wdu-popover__content'
                style={{ width: `${width}px` }}>
                {content}
            </div>
        </div>
    );
}

export default Popover;
