import React, { useState } from 'react';
import { propsTree } from './type';
import TreeNode from './TreeNode';

import './tree.less';
import commonProps from '@common/types';

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

const TreeContext = React.createContext<{
    data: Array<any>;
    size: commonProps['size'];
}>({
    data: [],
    size: 'normal',
});
const Provider = TreeContext.Provider;

function Tree(props: propsTree) {
    const { data, size = 'normal' } = props;

    return (
        <div className={`wdu-tree wdu-tree__${size}`}>
            <Provider value={{ data, size }}>
                {data.length &&
                    data.map((nodeData) => generateTreeNode(nodeData, 0))}
            </Provider>
        </div>
    );
}

export { Tree, TreeContext };
