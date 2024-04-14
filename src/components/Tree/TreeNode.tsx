import {
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { TreeContext } from './Tree';
import {
    MergeNodeAndChildren,
    propsTreeNode,
    treeNodeData,
    treeNodeDataList,
} from './type';
import { Checkbox } from '@component/Checkbox/Checkbox';

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

const TreeNodeContext = createContext<{
    setSelectedNodes?: (
        fn: (nodes: MergeNodeAndChildren) => MergeNodeAndChildren,
    ) => void;
    parentHalfChecked?: boolean;
}>({});
const Provider = TreeNodeContext.Provider;

function TreeNode(props: propsTreeNode) {
    const {
        label,
        children,
        depth = 0,
        id,
        defaultCheck = false,
        checkFromParent,
        halfCheckFromParent,
    } = props;

    const {
        size,
        lazyLoad,
        clickHighlight,
        clickedNode,
        setClickedNode,
        treeNodeClassName,
        selectable,
        nodeKey,
        labelKey,
        expandAll,
        associateSelection,
        onNodeExpand,
        onNodeSelect,
        onNodeClick,
    } = useContext(TreeContext);

    const refNodeChild = useRef<HTMLDivElement>(null);
    const prevNodeContainerHeight = useRef('');

    const [expand, setExpand] = useState<boolean>();
    const [nodeContainerHeight, setNodeContainerHeight] = useState(
        CONTAINER.COLLAPSE,
    );

    const [loading, setLoading] = useState<boolean>();

    const [check, setCheck] = useState<boolean>();
    const [halfChecked, setHalfChecked] = useState<boolean>();

    const { setSelectedNodes: setParentSelectedNodes } =
        useContext(TreeNodeContext);
    const [selectedChild, setSelectedChild] = useState<Array<any>>([]);
    const [applyChildNodes, setApplyChildNodes] = useState<treeNodeDataList>(
        [],
    );

    // render child nodes with lazy load function or with the child nodes from props
    const handleExpand = (expand: boolean) => {
        setExpand(expand);
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
                    onNodeExpand && onNodeExpand(props);
                }
            }
        } else {
            if (refNodeChild.current) {
                const { clientHeight } = refNodeChild.current;
                if (clientHeight) {
                    prevNodeContainerHeight.current =
                        refNodeChild.current.style.height = `${clientHeight}px`;

                    window.requestAnimationFrame(() => {
                        setNodeContainerHeight('0');
                    });
                }
            }
        }
    };

    // if the expandAll is true, expand all nodes
    useEffect(() => {
        if (expandAll) handleExpand(expandAll);
    }, []);

    // recover the height of the current Tree container element from previous height
    useLayoutEffect(() => {
        if (applyChildNodes.length && expand) {
            const childNodeCounts = applyChildNodes.length;
            window.requestAnimationFrame(() => {
                setNodeContainerHeight(
                    prevNodeContainerHeight.current ||
                        `${childNodeCounts * SIZE[size!]}px`,
                );
            });
        }
    }, [applyChildNodes, expand]);

    useEffect(() => {
        // do nothing if it is top level node
        if (!setParentSelectedNodes) return;

        let submitSelectNodeFn =
            depth === 0 ? setSelectedChild : setParentSelectedNodes;
        let newStateOfSelectedNodes;
        if (check) {
            newStateOfSelectedNodes = (prev: propsTreeNode[]) => [
                ...prev,
                props,
            ];
        } else {
            newStateOfSelectedNodes = (prev: propsTreeNode[]) =>
                prev.filter((item: propsTreeNode) => item.id !== id);
        }
        submitSelectNodeFn(newStateOfSelectedNodes);
    }, [check]);

    // change the state of current node checkbox by child nodes check states
    useEffect(() => {
        if (associateSelection) {
            const numChild = children?.length;
            if (!numChild) return;

            const numSelectedChild = selectedChild.length;
            let isChecked: boolean = false;
            let isHalfChecked: boolean = false;
            if (numSelectedChild === numChild) {
                isChecked = true;
                isHalfChecked = false;
            } else if (numSelectedChild < numChild && numSelectedChild > 0) {
                isChecked = false;
                isHalfChecked = true;
            } else if (numSelectedChild === 0) {
                isChecked = false;
                isHalfChecked = false;
            }
            setCheck(isChecked);
            setHalfChecked(isHalfChecked);
        }
    }, [selectedChild]);

    // handle the state of current node checkbox by parent nodes
    useEffect(() => {
        if (halfCheckFromParent) return;
        setCheck(checkFromParent);
    }, [checkFromParent]);

    return (
        <Provider
            value={{
                setSelectedNodes: setSelectedChild,
            }}>
            <div className={`${T} ${treeNodeClassName}`}>
                <div
                    className={`${T}-label ${
                        clickedNode && clickedNode.id === id
                            ? 'wdu-tree__node-clicked'
                            : ''
                    }`}
                    onClick={() => {
                        if (clickHighlight) return;
                        handleExpand(!expand);
                    }}>
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
                            }}
                            onClick={() => {
                                if (clickHighlight) handleExpand(!expand);
                            }}></i>

                        {selectable && (
                            <Checkbox
                                checked={check}
                                halfChecked={halfChecked}
                                onChange={(checked: boolean) => {
                                    setCheck(checked);
                                }}
                            />
                        )}

                        <span
                            className={`${T}-label--text`}
                            onClick={() => {
                                if (clickHighlight) {
                                    setClickedNode({
                                        id,
                                        label,
                                        depth,
                                        children,
                                    });
                                }
                            }}>
                            {label}
                        </span>
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
                                    checkFromParent={check}
                                    halfCheckFromParent={halfChecked}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </Provider>
    );
}

export default TreeNode;
