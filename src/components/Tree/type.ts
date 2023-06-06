import commonProps from "types/commonInterface";

type treeNodeData = {
    id: string,
    label: string,
    children?: Array<any>;
};

interface selectNodes {
    [ nodeId: string ]: treeNodeData;
};

interface treeEvents {
    onExpand?: ( expandNode: treeNodeData ) => any;
    onCollapse?: ( expandNode: treeNodeData ) => any;
    onSelect?: ( selectNodes: Array<treeNodeData> ) => any;
}

interface propsTree extends commonProps, treeEvents {
    data: Array<treeNodeData>,
    selectable?: boolean;
}

interface propsTreeNode extends treeNodeData, treeEvents {
    open?: boolean;
    select?: boolean;
}

export type { propsTree, propsTreeNode, treeEvents, treeNodeData, selectNodes }

