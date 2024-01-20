import { IntroComponent } from './IntroComponent';
import { Tree } from '../components/Tree/Tree';
import type { treeNodeData, treeNodeDataList } from '@component/Tree/type';

const testData = [
    {
        id: '1',
        label: '节点-1',
        children: [
            {
                id: '1-1',
                label: '节点-1-1',
                children: [
                    {
                        id: '1-1-1',
                        label: '节点-1-1-1',
                    },
                ],
            },
            {
                id: '1-2',
                label: '节点-1-2',
            },
        ],
    },
    {
        id: '2',
        label: '节点-2',
        children: [
            {
                id: '2-1',
                label: '节点-2-1',
                children: [
                    {
                        id: '2-1-1',
                        label: '节点-2-1-1',
                    },
                ],
            },
            {
                id: '2-2',
                label: '节点-2-2',
            },
        ],
    },
];

const lazyLoading = (node: treeNodeData): Promise<treeNodeDataList> => {
    console.log(node);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'xxxx-1',
                    label: '节点-3',
                },
            ]);
        }, 3000);
    });
};

export default function () {
    const props = {
        title: 'Tree 树',
        position: 'tree',
        components: [
            {
                title: '基础用法',
                component: <Tree data={testData} />,
            },
            {
                title: '懒加载',
                component: <Tree data={testData} lazyLoad={lazyLoading} />,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
