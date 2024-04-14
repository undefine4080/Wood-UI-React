import { IntroComponent } from './IntroComponent';
import { Tree } from '../components/Tree/Tree';
import type { treeNodeData, treeNodeDataList } from '@component/Tree/type';

const testData = [
    {
        id: '1',
        label: '节点-1',
        name: 'hahhahahah',
        children: [
            {
                id: '1-1',
                name: 'hahhahahah',
                label: '节点-1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: 'hahhahahah',
                        label: '节点-1-1-1',
                    },
                ],
            },
            {
                id: '1-2',
                label: '节点-1-2',
                name: 'hahhahahah',
            },
        ],
    },
    {
        id: '2',
        label: '节点-2',
        name: 'hahhahahah',
        children: [
            {
                id: '2-1',
                label: '节点-2-1',
                name: 'hahhahahah',
                children: [
                    {
                        id: '2-1-1',
                        label: '节点-2-1-1',
                        name: 'hahhahahah',
                    },
                ],
            },
            {
                id: '2-2',
                label: '节点-2-2',
                name: 'hahhahahah',
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
                    name: 'hahhahahah',
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
                title: '节点多选',
                info: '设置 selectable 属性可启用节点多选功能；默认点击父节点不会选中子节点，通过 associateSelection 属性可以启用关联选择模式',
                component: (
                    <Tree data={testData} selectable associateSelection />
                ),
            },
            {
                title: '基础用法',
                component: <Tree data={testData} labelKey='name' />,
                code: `
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

<Tree data={testData} />`,
            },
            {
                title: '单击选中节点',
                info: '设置 clickHighlight 属性为 true 即可实现单击选中时节点的高亮效果；此时只能点击图标来展开节点',
                component: <Tree data={testData} clickHighlight nodeKey='id' />,
            },

            {
                title: '懒加载',
                component: <Tree data={testData} lazyLoad={lazyLoading} />,
                code: `
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

<Tree data={testData} lazyLoad={lazyLoading} />`,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
