import React, { lazy, useEffect, useState } from 'react';
import { propsTree } from './type';
import TreeNode from './TreeNode';

import './tree.less';

// dfs
const generateTreeNode = (data: any, depth: number, index: number) => {
    if (!data) return;

    return (
        <TreeNode key={data.id} {...data} depth={depth}>
            {Array.isArray(data.children) &&
                data.children.length &&
                data.children.map((child: any, index: number) =>
                    generateTreeNode(child, depth + 1, index),
                )}
        </TreeNode>
    );
};

const TreeContext = React.createContext<{
    data: propsTree['data'];
    size: propsTree['size'];
    lazyLoad?: propsTree['lazyLoad'];
}>({
    data: [],
    size: 'normal',
});
const Provider = TreeContext.Provider;

function Tree(props: propsTree) {
    const { data, size = 'normal', lazyLoad } = props;
    const [treeNodes, setTreeNodes] = useState<any>();

    useEffect(() => {
        if (lazyLoad && typeof lazyLoad === 'function') {
            lazyLoad().then((res) => {
                setTreeNodes(res);
            });
        }
    }, []);

    return (
        <div className={`wdu-tree wdu-tree__${size}`}>
            <Provider value={{ data, size, lazyLoad }}>
                {treeNodes &&
                    treeNodes.map((nodeData, index) =>
                        generateTreeNode(nodeData, 0, index),
                    )}
            </Provider>
        </div>
    );
}

export { Tree, TreeContext, generateTreeNode };
