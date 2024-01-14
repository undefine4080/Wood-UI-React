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

const lazyLoading = (node: any) => {
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

function Example() {
    return (
        <div>
            <Tree data={testData} size='small' />

            <div style={{ height: 20 + 'px' }}></div>

            <Tree data={testData} />

            <div style={{ height: 20 + 'px' }}></div>

            <p>懒加载</p>
            <Tree data={testData} size='large' lazyLoad={lazyLoading} />
        </div>
    );
}

export { Example };
