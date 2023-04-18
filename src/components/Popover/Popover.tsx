import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { propsPopover } from './type';
import { useCssClassManager } from '@base/hooks';
import { usePopoverPosition } from './hooks';

import './popover.less';
import { uuid } from '@base/utils';

const T = 'wdu-popover';

function Popover(props: propsPopover) {
    const {
        position = 'left',
        className,
        children,
        trigger = 'hover',
        active = false,
        width,
        content,
    } = props;

    // popover can only accept one child
    if (Children.count(children) > 1) {
        throw new Error('Popover can only accept one child');
    }

    const randomId = uuid(8);
    const popoverId = `wdu-popover-${randomId}`;
    const [visible, setVisible] = useState(active);
    const refPopover = useRef<HTMLDivElement>(null);
    const [refPopoverTarget, setRefPopoverTarget] = useState<Element>();

    const { popoverStyle } = usePopoverPosition(
        refPopoverTarget,
        refPopover,
        visible,
        position,
    );

    const classMap = {
        base: `${T}${className ?? ''}`,
        active: `${T}__active`,
    };
    const { classList, removeClassName, addClassName } =
        useCssClassManager(classMap);

    /**get the dom node of the element wrapped by Popover */
    const findPopoverTarget = () => {
        let isFind = false;
        const findTarget = () => {
            const target = document.querySelector('.' + popoverId);
            if (target) {
                isFind = true;
                setRefPopoverTarget(target);
            } else {
                window.requestAnimationFrame(findTarget);
            }
        };
        window.requestAnimationFrame(findTarget);
    };

    const togglePopover = () => setVisible((prev) => !prev);
    const openPopover = () => setVisible(true);
    const closePopover = () => setVisible(false);
    const handlePopoverActive = () => {
        if (refPopoverTarget) {
            if (trigger === 'click') {
                refPopoverTarget.addEventListener('click', togglePopover);
            } else if (trigger === 'hover') {
                refPopoverTarget.addEventListener('mouseenter', openPopover);
                refPopoverTarget.addEventListener('mouseleave', closePopover);
            }
        }
    };

    useEffect(() => {
        findPopoverTarget();
        createPopoverContent();

        return () => {
            const events = [
                ['click', togglePopover],
                ['mouseenter', openPopover],
                ['mouseleave', closePopover],
            ];
            events.forEach(([type, listener]) => {
                if (refPopoverTarget) {
                    // @ts-ignore
                    refPopoverTarget.removeEventListener(type, listener);
                }
            });
        };
    }, []);

    useEffect(() => {
        handlePopoverActive();
    }, [refPopoverTarget]);

    const createPopoverContent = () => {
        const popover = (
            <div
                ref={refPopover}
                className={classList}
                tabIndex={0}
                onBlur={closePopover}
                onMouseLeave={() => {
                    if (trigger === 'hover') closePopover();
                }}
                style={popoverStyle}>
                {content}
            </div>
        );

        if (content) {
            return createPortal(popover, document.body);
        } else {
            console.warn('Popover content is empty');
        }
    };

    useEffect(() => {
        if (visible) {
            addClassName('active');

            if (trigger === 'click') {
                // js cannot focus an element that is not visible in the DOM, so wait milliseconds
                setTimeout(() => refPopover.current?.focus());
            }
        } else {
            removeClassName('active');
        }
    }, [visible]);

    return (
        <>
            {cloneElement(children, { className: popoverId })}
            {createPopoverContent()}
        </>
    );
}

export default Popover;
