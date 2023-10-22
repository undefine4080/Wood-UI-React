import { IntroComponent } from './IntroComponent';
import { Tree } from '@component/Tree/Tree';

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

export default function () {
    const props = {
        title: 'Tree 树',
        position: 'tree',
        components: [
            {
                title: '事件绑定',
                component: (
                    <Tree
                        data={testData}
                        onExpand={(value) => console.log('expand', value)}
                        onCollapse={(value) => console.log('collapse', value)}
                    />
                ),
            },
            {
                title: '可选的 Tree 节点',
                component: (
                    <Tree
                        data={testData}
                        selectable
                        onSelect={(nodeList) => console.log('select', nodeList)}
                    />
                ),
            },
        ],
    };

    return <IntroComponent {...props} />;
}
