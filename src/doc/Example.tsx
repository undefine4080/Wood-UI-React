import { Tree } from '@component/Tree copy/Tree';

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

const traverse = (target: number, data: any) => {
    if (!data) return;

    const loop = (node: any, depth: number) => {
        if (depth === target) {
            return node?.children || node;
        }

        node.children.map((child: any, index: number) => {
            loop(child, depth + 1);
        });
    };

    return loop(data, target);
};

function Example() {
    return (
        <div>
            {/* <Tree data={testData} size='small' />

            <div style={{ height: 20 + 'px' }}></div>

            <Tree data={testData} />

            <div style={{ height: 20 + 'px' }}></div> */}

            <Tree
                lazyLoad={(resolve: any) => {
                    setTimeout(() => {
                        const res = traverse(depth, testData);
                        resolve(res);
                    }, 3000);
                }}
                size='large'
            />
        </div>
    );
}

export { Example };
