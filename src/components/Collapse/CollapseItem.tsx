import { useContext, useEffect, useRef, useState } from 'react';
import { propsCollapseItem } from './type';
import { CollapseContext } from './Collapse';

const T = 'wdu-collapse-item';

function CollapseItem(props: propsCollapseItem) {
    const { title, children, index } = props;
    const expandItems = useContext(CollapseContext);
    const containerNode = useRef<any>();
    const [containerHeight, setContainerHeight] = useState('0');
    const [isExpand, setExpand] = useState(() => {
        if (expandItems?.length && index !== undefined && index !== null) {
            return expandItems.includes(index);
        }
    });

    useEffect(() => {
        const height = containerNode.current.scrollHeight;
        if (isExpand) {
            setContainerHeight(`${height}px`);
        } else {
            containerNode.current.style.height = height + 'px';
            setContainerHeight(`0px`);
        }
    }, [isExpand]);

    return (
        <div className={`${T} ${isExpand ? `${T}__expand` : ''}`}>
            <div
                className={`${T}__header`}
                onClick={() => setExpand(!isExpand)}>
                {typeof title === 'string' ? <span>{title}</span> : title}

                <i
                    className={`${
                        isExpand
                            ? 'wdu-icon-caret-down'
                            : 'wdu-icon-caret-right'
                    }`}></i>
            </div>

            <div
                ref={containerNode}
                className={`${T}__body`}
                style={{ height: containerHeight }}
                onTransitionEnd={() => {
                    if (isExpand) {
                        setContainerHeight('auto');
                    } else {
                        setContainerHeight('0');
                    }
                }}>
                {children}
            </div>
        </div>
    );
}

export default CollapseItem;
