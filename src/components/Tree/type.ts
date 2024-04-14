import commonProps from '@common/types';
import { ReactNode } from 'react';

type TreeNodeData = {
    [key: string]: any;
};

type treeNodeDataList = Array<TreeNodeData>;

interface TreeEvents {
    onNodeExpand?: (nodeData: TreeNodeData) => any;
    onNodeSelect?: (
        nodeData: TreeNodeData,
        selectedNodesData: Array<TreeNodeData>,
    ) => any;
    onNodeClick?: (nodeData: TreeNodeData) => any;
}

interface PropsTree extends TreeEvents {
    data: Array<TreeNodeData>;
    size?: commonProps['size'];
    treeClassName?: string;
    treeNodeClassName?: string;
    expandAll?: boolean;

    // whether the nodes can be selected by the checkbox widget
    selectable?: boolean;

    // the key of children which default is 'id'
    nodeKey?: string;

    // the key of node label which default is 'label'
    labelKey?: string;

    // whether to associate child nodes when selecting parent nodes
    associateSelection?: boolean;

    // an array of node key which will be expanded
    defaultExpandNodes?: Array<string | number>;

    // an array of node key which will be selected
    defaultSelectedNodes?: Array<string | number>;

    // whether the node is highlight while it is clicked
    clickHighlight?: boolean;

    // lazy loading the data from server
    lazyLoad?: (node: TreeNodeData) => Promise<Array<TreeNodeData>>;

    // user can custom the tree node component and the TreeNode data will pass through the component props
    customNode?: ReactNode;
}

interface PropsTreeNode {
    id?: string | number;
    label?: string;
    children?: Array<TreeNodeData>;
    depth?: number;
    expand?: boolean;
    defaultCheck?: boolean;
    [key: string]: any;
}

interface RefTree {
    isLeaf: (nodeKey: string | number) => boolean;
    getChildren: (nodeKey: string | number) => Array<TreeNodeData>;
    getParent: (nodeKey: string | number) => TreeNodeData;
    getSelectedNodes: () => Array<TreeNodeData>;
}

type MergeNodeAndChildren = Array<TreeNodeData | PropsTreeNode>;

export type {
    PropsTree,
    TreeNodeData as treeNodeData,
    TreeEvents,
    PropsTreeNode as propsTreeNode,
    RefTree as refTree,
    treeNodeDataList,
    MergeNodeAndChildren,
};
