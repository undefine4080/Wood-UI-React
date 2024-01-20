import React from 'react';
import { propsTree, treeNodeData, treeNodeDataList } from './type';
import TreeNode from './TreeNode';
import commonProps from '@common/types';

import './tree.less';

const TreeContext = React.createContext<{
    data: Array<any>;
    size: commonProps['size'];
    lazyLoad?: (node: treeNodeData) => Promise<treeNodeDataList>;
}>({
    data: [],
    size: 'normal',
});
const Provider = TreeContext.Provider;

function Tree(props: propsTree) {
    const { data, size = 'normal', lazyLoad } = props;

    return (
        <div className={`wdu-tree wdu-tree__${size}`}>
            <Provider value={{ data, size, lazyLoad }}>
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
