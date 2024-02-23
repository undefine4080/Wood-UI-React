import React, { useState } from 'react';
import { propsTree, treeNodeData, treeNodeDataList } from './type';
import TreeNode from './TreeNode';
import commonProps from '@common/types';

import './tree.less';

const TreeContext = React.createContext<{
    data: Array<any>;
    size: commonProps['size'];
    lazyLoad?: (node: treeNodeData) => Promise<treeNodeDataList>;
    clickedNode: undefined | treeNodeData;
    setClickedNode: (node: treeNodeData) => void;
    clickHighlight?: boolean;
}>({
    data: [],
    size: 'normal',
    setClickedNode: () => {},
    clickedNode: undefined,
});
const Provider = TreeContext.Provider;

function Tree(props: propsTree) {
    const { data, size = 'normal', lazyLoad, clickHighlight } = props;

    const [clickedNode, setClickedNode] = useState<treeNodeData>();

    return (
        <div className={`wdu-tree wdu-tree__${size}`}>
            <Provider
                value={{
                    data,
                    size,
                    lazyLoad,
                    clickedNode,
                    setClickedNode,
                    clickHighlight,
                }}>
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
