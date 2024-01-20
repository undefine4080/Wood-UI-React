import commonProps from '@common/types';
import { ReactNode } from 'react';

type treeNodeData = {
    [key: string]: any;
};

type treeNodeDataList = Array<treeNodeData>;

interface treeEvents {
    onNodeClick?: (nodeIndex: string | number, node: treeNodeData) => any;
    onNodeExpand?: (
        nodeIndex: string | number,
        node: treeNodeData,
        expand: boolean,
    ) => any;
    onNodeSelect?: (
        nodeIndex: string | number,
        node: treeNodeData,
        selectedNodesKey: Array<string>,
        selectedNodes: Array<treeNodeData>,
    ) => any;
}

interface propsTree extends treeEvents {
    data: Array<treeNodeData>;
    size?: commonProps['size'];
    treeClassName?: string;
    treeNodeClassName?: string;

    // an array of node index which will be expanded
    defaultExpandNodes?: Array<string | number>;

    // lazy loading the data from server
    lazyLoad?: (node: treeNodeData) => Promise<Array<treeNodeData>>;

    // if the nodes can be selected by the checkbox widget
    selectable?: boolean;

    // the key of children which default is 'children'
    nodeKey?: string;

    // the key of node index which default is 'id'
    nodeIndexKey?: string;

    // the key of node label which default is 'label'
    nodeLabelKey?: string;

    // user can custom the tree node component and the TreeNode data will pass through the component props
    customNode?: ReactNode;

    // if the node is highlight while it is clicked
    isHighlight?: boolean;
}

interface propsTreeNode {
    id?: string | number;
    label?: string;
    children?: Array<treeNodeData>;
    depth?: number;
    open?: boolean;
    onExpand?: (nodeIndex: string | number, expand: boolean) => any;
    onSelect?: (
        nodeIndex: string | number,
        selectedNodesKey: Array<string>,
        selectedNodes: Array<treeNodeData>,
    ) => any;
    select?: boolean;
}

interface refTree {
    toggle: (nodeIndex: string | number, expand: boolean) => void;
    toggleAll: (expand: boolean) => void;
    toggleSelect: (nodeIndex: string | number, select: boolean) => void;
    toggleSelectAll: (select: boolean) => void;
    isLeaf: (nodeIndex: string | number) => boolean;
    getDepth: (nodeIndex: string | number) => number;
    getChildren: (nodeIndex: string | number) => Array<treeNodeData>;
    getParent: (nodeIndex: string | number) => Array<treeNodeData>;
    getSelectedNodes: () => Array<treeNodeData>;
    getNodePath: (nodeIndex: string | number) => Array<string>;
}

export type {
    propsTree,
    treeNodeData,
    treeEvents,
    propsTreeNode,
    refTree,
    treeNodeDataList,
};
