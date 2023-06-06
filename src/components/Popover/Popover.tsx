import {
    Children,
    cloneElement,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { propsPopover } from './type';
import { useCssClassManager } from '@common/hooks';
import { usePopoverPosition } from './hooks';
import { uuid } from '@common/utils';

import './popover.less';

const T = 'wdu-popover';

function Popover(props: propsPopover) {
    const {
        position = 'left',
        className,
        children,
        trigger = 'hover',
        active = false,
        content,
        onChange,
    } = props;

    // popover can only accept one child
    if (Children.count(children) > 1) {
        throw new Error('Popover can only accept one child');
    }

    const popoverId = useRef(`wdu-popover-${uuid(8)}`);
    const [visible, setVisible] = useState(active);
    const refPopover = useRef<HTMLDivElement>(null);
    const [refPopoverTarget, setRefPopoverTarget] = useState<Element>();

    const classMap = {
        base: `${T} ${T}__${position} ${className ?? ''}`,
        active: `${T}__active`,
        hidden: `${T}__hidden`,
    };
    const { classList, removeClassName, addClassName, hasClassName } =
        useCssClassManager(classMap);

    // set the position of popover
    usePopoverPosition(
        refPopoverTarget,
        refPopover,
        visible,
        position,
        trigger,
        setVisible,
    );

    /**get the dom node of the element wrapped by Popover */
    const findPopoverTarget = (id: string) => {
        let isFind = false;
        let query: number;
        const findTarget = () => {
            if (isFind) {
                window.cancelAnimationFrame(query);
            } else {
                const target = document.querySelector(`.${id}`);
                if (target) {
                    isFind = true;
                    setRefPopoverTarget(target);
                } else {
                    query = window.requestAnimationFrame(findTarget);
                }
            }
        };
        query = window.requestAnimationFrame(findTarget);
    };
    useEffect(() => {
        findPopoverTarget(popoverId.current);
    }, []);

    // add active eventlistener to popover
    const togglePopover = () => {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };
    const openPopover = () => setVisible(true);
    const closePopover = () => setVisible(false);
    const addPopoverTargetEvents = () => {
        if (refPopoverTarget) {
            if (trigger === 'click') {
                refPopoverTarget.addEventListener('focus', togglePopover);
            } else if (trigger === 'hover') {
                refPopoverTarget.addEventListener('mouseenter', openPopover);
                refPopoverTarget.addEventListener('mouseleave', closePopover);
            }
        }
    };
    useEffect(() => {
        addPopoverTargetEvents();
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

    // control hidden or visible animation
    const clearClassNames = useCallback(() => {
        removeClassName('active');
        removeClassName('hidden');
    }, []);
    useEffect(() => {
        if (visible) {
            refPopover.current?.removeEventListener(
                'animationend',
                clearClassNames,
            );
        } else {
            refPopover.current?.addEventListener(
                'animationend',
                clearClassNames,
            );
        }
    }, [visible]);

    // toggle the classNames of hidden and visible
    useEffect(() => {
        if (visible) {
            addClassName('active');

            if (trigger === 'click') {
                // js cannot focus an element that is not visible in the DOM, so wait milliseconds
                setTimeout(() => refPopover.current?.focus());
            }
        } else {
            if (hasClassName('active')) {
                addClassName('hidden');
            }
        }
    }, [visible]);

    // sync the props.active to visible
    useEffect(() => {
        setVisible(active);
    }, [active]);
    useEffect(() => {
        onChange && onChange(visible);
    }, [visible]);

    // mixin the classNames of the child component
    const exitChildClassName = children.props.className
        ? children.props.className.trim()
        : '';

    return (
        <>
            {cloneElement(children, {
                className: `${exitChildClassName} ${popoverId.current}`,
            })}
            {createPopoverContent()}
        </>
    );
}

export default Popover;
