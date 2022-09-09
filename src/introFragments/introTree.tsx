import { IntroComponent } from "../base/introComponent";
import { Tree } from '../components/Tree/Tree';

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
                    }
                ]
            },
            {
                id: '1-2',
                label: '节点-1-2',
            }
        ]
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
                    }
                ]
            },
            {
                id: '2-2',
                label: '节点-2-2',
            }
        ]
    }
];

export default function () {
    const props = {
        title: 'Tree 树',
        position: 'tree',
        components: [
            {
                component: <Tree data={ testData } />,
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
                    }
                ]
            },
            {
                id: '1-2',
                label: '节点-1-2',
            }
        ]
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
                    }
                ]
            },
            {
                id: '2-2',
                label: '节点-2-2',
            }
        ]
    }
];      

<Tree data={ testData } />`
            }
        ],
    };

    return <IntroComponent { ...props } />;
}