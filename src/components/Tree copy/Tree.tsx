import React, { useState } from 'react';
import { propsTree } from './type';
import TreeNode from './TreeNode';

import './tree.less';

// dfs
const generateTreeNode = (data: any, depth: number) => {
    if (!data) return;

    return (
        <TreeNode key={data.id} {...data} depth={depth}>
            {Array.isArray(data.children) &&
                data.children.length &&
                data.children.map((child: any) =>
                    generateTreeNode(child, depth + 1),
                )}
        </TreeNode>
    );
};

const TreeContext = React.createContext<any>({});
const Provider = TreeContext.Provider;

function Tree(props: propsTree) {
    const { data, selectable = false } = props;

    return (
        <div className='wdu-tree'>
            <Provider value={{ data }}>
                {data.length &&
                    data.map((nodeData) => generateTreeNode(nodeData, 0))}
            </Provider>
        </div>
    );
}

export { Tree, TreeContext };
