import React, { useState } from 'react';
import { PropsTree, treeNodeData } from './type';
import TreeNode from './TreeNode';

import './tree.less';

const TreeContext = React.createContext<PropsTree & treeNodeData>({
    data: [],
    size: 'normal',
    setClickedNode: () => {},
    clickedNode: undefined,
    nodeKey: 'id',
});
const Provider = TreeContext.Provider;

function Tree(props: PropsTree) {
    const {
        data,
        size = 'normal',
        clickHighlight,
        treeClassName = '',
        treeNodeClassName = '',
        selectable,
        associateSelection,
        nodeKey = 'id',
        labelKey = 'label',
        lazyLoad,
        onNodeExpand,
        onNodeSelect,
        onNodeClick,
    } = props;

    const [clickedNode, setClickedNode] = useState<treeNodeData>();

    const contextValue = {
        data,
        size,
        clickHighlight,
        treeNodeClassName,
        selectable,
        associateSelection,
        nodeKey,
        labelKey,
        clickedNode,
        lazyLoad,
        setClickedNode,
        onNodeExpand,
        onNodeSelect,
        onNodeClick,
    };

    return (
        <div className={`wdu-tree wdu-tree__${size} ${treeClassName}`}>
            <Provider value={contextValue}>
                {data.length &&
                    data.map((nodeData: treeNodeData) => {
                        return (
                            <TreeNode
                                key={nodeData.id}
                                {...nodeData}
                                depth={0}
                            />
                        );
                    })}
            </Provider>
        </div>
    );
}

export { Tree, TreeContext };
