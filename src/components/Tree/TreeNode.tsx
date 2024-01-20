import {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { TreeContext } from './Tree';
import { propsTreeNode, treeNodeData, treeNodeDataList } from './type';

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
    const { label, children, depth = 0, id } = props;
    const { size, lazyLoad } = useContext(TreeContext);
    const refNodeChild = useRef<HTMLDivElement>(null);
    const lastNodeContainerHeight = useRef('');
    const [expand, setExpand] = useState(false);
    const [nodeContainerHeight, setNodeContainerHeight] = useState(
        CONTAINER.COLLAPSE,
    );
    const [applyChildNodes, setApplyChildNodes] = useState<treeNodeDataList>(
        [],
    );
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        if (expand) {
            if (children && children.length && !applyChildNodes.length) {
                if (lazyLoad) {
                    setLoading(true);
                    lazyLoad({ id, label, depth, children }).then((data) => {
                        setApplyChildNodes(children);
                        setLoading(false);
                    });
                } else {
                    setApplyChildNodes(children);
                }
            }
        } else {
            if (refNodeChild.current) {
                const { clientHeight } = refNodeChild.current;
                if (clientHeight) {
                    lastNodeContainerHeight.current =
                        refNodeChild.current.style.height = `${clientHeight}px`;

                    window.requestAnimationFrame(() => {
                        setNodeContainerHeight('0');
                    });
                }
            }
        }
    }, [expand]);

    useLayoutEffect(() => {
        if (applyChildNodes.length && expand) {
            const childNodeCounts = applyChildNodes.length;
            window.requestAnimationFrame(() => {
                setNodeContainerHeight(
                    lastNodeContainerHeight.current ||
                        `${childNodeCounts * SIZE[size!]}px`,
                );
            });
        }
    }, [applyChildNodes, expand]);

    return (
        <div className={`${T}`}>
            <div className={`${T}-label`} onClick={() => setExpand(!expand)}>
                <div
                    className={`${T}-label--container`}
                    style={{ marginLeft: `${depth * 20}px` }}>
                    <i
                        className={`${
                            expand
                                ? 'wdu-icon-caret-down'
                                : 'wdu-icon-caret-right'
                        } ${loading ? 'wdu-icon-loading' : ''}`}
                        style={{
                            visibility: children ? 'visible' : 'hidden',
                        }}></i>

                    <span className={`${T}-label--text`}>{label}</span>
                </div>
            </div>

            {applyChildNodes.length > 0 && (
                <div
                    ref={refNodeChild}
                    className={`${T}-children`}
                    style={{ height: `${nodeContainerHeight}` }}
                    onTransitionEnd={() => {
                        setNodeContainerHeight(
                            expand ? CONTAINER.EXPAND : CONTAINER.COLLAPSE,
                        );
                    }}>
                    {applyChildNodes.map((node: treeNodeData) => {
                        return (
                            <TreeNode
                                id={node.id}
                                key={node.id}
                                label={node.label}
                                depth={depth + 1}
                                children={node.children}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default TreeNode;
