import commonProps from "@base/types/commonInterface";

interface treeNodeData {
    id: string,
    label: string,
    children?: Array<any>;
};

interface treeEvents {
    onExpand?: ( expandNode: treeNodeData ) => any;
    onCollapse?: ( expandNode: treeNodeData ) => any;
}

interface propsTree extends commonProps, treeEvents {
    data: Array<treeNodeData>,
    selectable?: boolean;
}

interface propsTreeNode extends treeNodeData, treeEvents {
    open?: boolean;
}

export type { propsTree, propsTreeNode, treeEvents }

