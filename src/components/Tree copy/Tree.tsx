import React, { useState } from 'react';
import { propsTree, treeEvents, treeNodeData } from './type';
import TreeNode from './TreeNode';

import './tree.less';

// dfs
const generateTreeNode = (node: any, events: treeEvents) => {
    if (!node) return null;

    return (
        <TreeNode key={node.id} {...node} {...events}>
            {node.children &&
                node.children.map((child: any) =>
                    generateTreeNode(child, events),
                )}
        </TreeNode>
    );
};

const TreeContext = React.createContext<any>({});
const Provider = TreeContext.Provider;

function Tree(props: propsTree) {
    const { data, onExpand, onCollapse, onSelect, selectable = false } = props;

    const [selectNode, setSelectNode] = useState({});

    const events: treeEvents = {};
    onExpand && (events.onExpand = onExpand);
    onCollapse && (events.onCollapse = onCollapse);
    onSelect && (events.onSelect = onSelect);

    return (
        <div className='wdu-tree'>
            <Provider value={{ data, selectable, selectNode, setSelectNode }}>
                {data && data.map((item) => generateTreeNode(item, events))}
            </Provider>
        </div>
    );
}

export { Tree, TreeContext };
