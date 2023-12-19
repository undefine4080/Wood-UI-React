import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { TreeContext, generateTreeNode } from './Tree';

const T = 'wdu-tree__node';
const CONTAINER = {
    EXPAND: 'auto',
    COLLAPSE: '0',
};
const SIZE = {
    small: 25,
    normal: 30,
    large: 40,
};

function TreeNode(props: propsTreeNode) {
    const { label, children, depth, index } = props;
    const { size, lazyLoad } = useContext(TreeContext);
    const [treeNodes, setTreeNodes] = useState<ReactNode>();

    const refNodeChild = useRef<HTMLDivElement>(null);
    const lastNodeContainerHeight = useRef('');
    const [expand, setExpand] = useState(false);
    const [nodeContainerHeight, setNodeContainerHeight] = useState(
        CONTAINER.COLLAPSE,
    );

    useEffect(() => {
        if (expand) {
            const childNodeCounts = children.length;
            if (childNodeCounts) {
                setNodeContainerHeight(
                    lastNodeContainerHeight.current ||
                        `${childNodeCounts * SIZE[size!]}px`,
                );
            }
        } else {
            if (refNodeChild.current) {
                const { clientHeight } = refNodeChild.current;
                if (clientHeight) {
                    lastNodeContainerHeight.current =
                        refNodeChild.current.style.height = `${clientHeight}px`;

                    setTimeout(() => {
                        setNodeContainerHeight('0');
                    }, 50);
                }
            }
        }
    }, [expand]);

    // if (lazyLoad && typeof lazyLoad === 'function') {
    //     lazyLoad(props).then((res) => {
    //         const nodes = generateTreeNode(res, depth, index);
    //         setTreeNodes(nodes);
    //     });
    // } else {
    //     setTreeNodes(children);
    // }

    return (
        <div className={`${T}`}>
            <div
                className={`${T}-label`}
                onClick={() => {
                    if (!expand) {
                        lazyLoad(props).then((res) => {
                            const nodes = generateTreeNode(res, depth, index);
                            setTreeNodes(nodes);
                            setExpand(true);
                        });
                    } else {
                        setExpand(false);
                    }
                }}>
                <span style={{ marginLeft: `${depth * 20}px` }}>
                    <i
                        className={
                            expand ? 'wdu-icon-expand' : 'wdu-icon-collapse'
                        }
                        style={{
                            visibility: children ? 'visible' : 'hidden',
                        }}></i>

                    {label}
                </span>
            </div>

            {treeNodes && (
                <div
                    ref={refNodeChild}
                    className={`${T}-children`}
                    style={{ height: `${nodeContainerHeight}` }}
                    onTransitionEnd={() => {
                        setNodeContainerHeight(
                            expand ? CONTAINER.EXPAND : CONTAINER.COLLAPSE,
                        );
                    }}>
                    {treeNodes}
                </div>
            )}
        </div>
    );
}

export default TreeNode;
