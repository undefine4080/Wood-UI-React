import { useEffect, useRef, useState } from 'react';
import { propsCollapseItem } from './type';
import IconArrow from '../../icon/Arrow/Arrow';

const T = 'wdu-collapse-item';

function CollapseItem(props: propsCollapseItem) {
    const { expand = false, title, children, index, onClick, size } = props;
    const containerNode = useRef<any>();
    const [isExpand, setExpand] = useState(expand);
    const [containerHeight, setContainerHeight] = useState('0');

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
                <span>{title}</span>
                <IconArrow
                    style={isExpand === true ? 'bottom' : 'right'}></IconArrow>
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
