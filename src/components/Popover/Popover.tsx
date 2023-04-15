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
        position = 'bottom',
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
    const refPopoverTarget = useRef<Element>();

    const classMap = {
        base: T,
        active: `${T}__active`,
    };

    const { classList, removeClassName, addClassName } =
        useCssClassManager(classMap);

    const findPopoverTarget = () => {
        let isFind = false;
        const findTarget = () => {
            const target = document.querySelector('.' + popoverId);
            if (target) {
                isFind = true;
                refPopoverTarget.current = target;
                handlePopoverActive();
            } else {
                window.requestAnimationFrame(findTarget);
            }
        };
        window.requestAnimationFrame(findTarget);
    };

    const togglePopover = () => {
        setVisible((prev) => !prev);
    };

    const handlePopoverActive = () => {
        if (refPopoverTarget.current) {
            const target = refPopoverTarget.current;
            if (trigger === 'click') {
                target.addEventListener('click', togglePopover);
            } else if (trigger === 'hover') {
                target.addEventListener('mouseenter', () => {
                    setVisible(true);
                });

                target.addEventListener('mouseleave', () => {
                    setVisible(false);
                });
            }
        }
    };

    useEffect(() => {
        findPopoverTarget();
        createPopoverContent();
    }, []);

    const createPopoverContent = () => {
        const popover = (
            <div
                ref={refPopover}
                className={classList}
                tabIndex={0}
                onBlur={() => {
                    setVisible(false);
                }}>
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
            // js cannot focus an element that is not visible in the DOM, so wait milliseconds
            setTimeout(() => refPopover.current?.focus());
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
