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
    const { label, children, depth = 0, id, selected = false } = props;

    const {
        size,
        lazyLoad,
        clickHighlight,
        clickedNode,
        setClickedNode,
        treeNodeClassName,
        selectable,
        associateSelection,
    } = useContext(TreeContext);

    const { setSelectedNodes: setParentSelectedNodes, parentHalfChecked } =
        useContext(TreeNodeContext);

    const refNodeChild = useRef<HTMLDivElement>(null);
    const prevNodeContainerHeight = useRef('');

    const [expand, setExpand] = useState(false);
    const [nodeContainerHeight, setNodeContainerHeight] = useState(
        CONTAINER.COLLAPSE,
    );
    const [selectedNodes, setSelectedNodes] = useState<Array<any>>([]);
    const [applyChildNodes, setApplyChildNodes] = useState<treeNodeDataList>(
        [],
    );
    const [loading, setLoading] = useState<boolean>();
    const [checked, setChecked] = useState<boolean>();
    const [halfChecked, setHalfChecked] = useState<boolean>();

    // render child nodes with lazy load function or with the child nodes from props
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
                    prevNodeContainerHeight.current =
                        refNodeChild.current.style.height = `${clientHeight}px`;

                    window.requestAnimationFrame(() => {
                        setNodeContainerHeight('0');
                    });
                }
            }
        }
    }, [expand]);

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

    // set the parent node checkbox to checked after all child nodes checked, and set it to unchecked after all child nodes unchecked
    useEffect(() => {
        if (!associateSelection) return;

        const numChildNodes = children?.length;
        if (!numChildNodes) return;

        const numSelectedNodes = selectedNodes.length;
        if (numSelectedNodes === numChildNodes) {
            setChecked(true);
            setHalfChecked(false);
        } else if (numSelectedNodes < numChildNodes && numSelectedNodes > 0) {
            setChecked(false);
            setHalfChecked(true);
        } else if (numSelectedNodes === 0) {
            setChecked(false);
            setHalfChecked(false);
        }
    }, [selectedNodes]);

    // Set the checked status of the current node based on the checked status of the parent node
    useEffect(() => {
        if (associateSelection && !parentHalfChecked) {
            setChecked(selected);
        }
    }, [selected]);

    // Set the parent node checked status based on the current node selected nodes counts
    useEffect(() => {
        // do nothing if it is top level node
        if (!setParentSelectedNodes) return;

        let submitSelectNodeFn =
            depth === 0 ? setSelectedNodes : setParentSelectedNodes;
        let newStateOfSelectedNodes;
        if (checked) {
            newStateOfSelectedNodes = (prev: propsTreeNode[]) => [
                ...prev,
                { ...props },
            ];
        } else {
            newStateOfSelectedNodes = (prev: propsTreeNode[]) =>
                prev.filter((item: propsTreeNode) => item.id !== id);
        }
        submitSelectNodeFn(newStateOfSelectedNodes);
    }, [checked]);

    return (
        <Provider
            value={{
                setSelectedNodes,
                parentHalfChecked: halfChecked,
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
                        setExpand(!expand);
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
                                if (clickHighlight) {
                                    setExpand(!expand);
                                }
                            }}></i>

                        {selectable && (
                            <Checkbox
                                checked={checked}
                                halfChecked={halfChecked}
                                onChange={(checked: boolean) =>
                                    setChecked(checked)
                                }
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
                                    selected={checked}
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
