import { useState } from 'react';
import { IntroComponent } from '@doc/IntroComponent';
import Button from '@component/Button/Button';
import Dialog from '@component/Dialog/Dialog';
import Tag from '@component/Tag/Tag';

export default function () {
    const [visible, setVisible] = useState({
        d1: false,
        d2: false,
        d3: false,
    });

    const props = {
        title: 'Dialog 按钮',
        position: 'dialog',
        components: [
            {
                title: '普通对话框',
                component: (
                    <>
                        <Button
                            type='plain'
                            onClick={() =>
                                setVisible((prev) => ({ ...prev, d1: true }))
                            }>
                            打开对话框 1
                        </Button>
                        <Dialog
                            title='对话框 1'
                            visible={visible.d1}
                            close={() =>
                                setVisible((prev) => ({ ...prev, d1: false }))
                            }>
                            <i>
                                Aute id excepteur id excepteur ullamco. Veniam
                                adipisicing excepteur nulla nisi voluptate
                                labore voluptate reprehenderit non aliquip
                                commodo. Qui mollit eu velit cillum quis elit
                                labore incididunt nulla est esse dolore nostrud.
                                Eu esse aliqua nisi incididunt tempor laboris
                                nisi Lorem voluptate. Amet duis officia
                                incididunt mollit qui laboris amet et consequat
                                non incididunt dolore culpa culpa. Consectetur
                                occaecat aliqua veniam ullamco sit non ullamco
                                duis tempor ad.
                            </i>
                        </Dialog>
                    </>
                ),
                info: '',
                code: `
<Button
    type='plain'
    onClick={() =>
        setVisible((prev) => ({ ...prev, d1: true }))
    }>
    打开对话框 1
</Button>
<Dialog
    title='对话框 1'
    visible={visible.d1}
    close={() =>
        setVisible((prev) => ({ ...prev, d1: false }))
    }>
    <i>
        Aute id excepteur id excepteur ullamco. Veniam
        adipisicing excepteur nulla nisi voluptate
        labore voluptate reprehenderit non aliquip
        commodo. Qui mollit eu velit cillum quis elit
        labore incididunt nulla est esse dolore nostrud.
        Eu esse aliqua nisi incididunt tempor laboris
        nisi Lorem voluptate. Amet duis officia
        incididunt mollit qui laboris amet et consequat
        non incididunt dolore culpa culpa. Consectetur
        occaecat aliqua veniam ullamco sit non ullamco
        duis tempor ad.
    </i>
</Dialog>`,
            },
            {
                title: '启用背景遮罩的对话框',
                component: (
                    <>
                        <Button
                            type='plain'
                            onClick={() =>
                                setVisible((prev) => ({ ...prev, d2: true }))
                            }>
                            打开对话框 2
                        </Button>
                        <Dialog
                            title='对话框 2'
                            visible={visible.d2}
                            mask
                            close={() =>
                                setVisible((prev) => ({ ...prev, d2: false }))
                            }>
                            <i>
                                Exercitation ex voluptate velit deserunt minim
                                Lorem laboris amet culpa quis do. Elit
                                consectetur fugiat est anim dolore. Ut culpa
                                officia nisi exercitation irure consectetur
                                cupidatat nisi quis laboris est anim aliquip.
                            </i>
                        </Dialog>
                    </>
                ),
                info: '',
                code: `
<Button
    type='plain'
    onClick={() =>
        setVisible((prev) => ({ ...prev, d2: true }))
    }>
    打开对话框 2
</Button>
<Dialog
    title='对话框 2'
    visible={visible.d2}
    mask
    close={() =>
        setVisible((prev) => ({ ...prev, d2: false }))
    }>
    <i>
        Exercitation ex voluptate velit deserunt minim
        Lorem laboris amet culpa quis do. Elit
        consectetur fugiat est anim dolore. Ut culpa
        officia nisi exercitation irure consectetur
        cupidatat nisi quis laboris est anim aliquip.
    </i>
</Dialog>`,
            },
            {
                title: '自定义 footer 和 header',
                component: (
                    <>
                        <Button
                            type='plain'
                            onClick={() =>
                                setVisible((prev) => ({ ...prev, d3: true }))
                            }>
                            打开对话框 3
                        </Button>
                        <Dialog
                            header={
                                <p>
                                    <Tag value='tag-1' type='plain' />
                                    <Tag value='tag-2' type='important' />
                                    <Tag value='tag-3' type='success' />
                                    <Button size='small'>查看更多</Button>
                                </p>
                            }
                            visible={visible.d3}
                            close={() =>
                                setVisible((prev) => ({ ...prev, d3: false }))
                            }
                            footer={
                                <>
                                    <Button
                                        type='plain'
                                        onClick={() =>
                                            setVisible((prev) => ({
                                                ...prev,
                                                d3: false,
                                            }))
                                        }>
                                        取消
                                    </Button>
                                    <Button
                                        type='important'
                                        onClick={() =>
                                            setVisible((prev) => ({
                                                ...prev,
                                                d3: false,
                                            }))
                                        }>
                                        确认
                                    </Button>
                                </>
                            }>
                            <i>
                                Exercitation ex voluptate velit deserunt minim
                                Lorem laboris amet culpa quis do. Elit
                                consectetur fugiat est anim dolore. Ut culpa
                                officia nisi exercitation irure consectetur
                                cupidatat nisi quis laboris est anim aliquip.
                            </i>
                        </Dialog>
                    </>
                ),
                info: '',
                code: `
<Button
    type='plain'
    onClick={() =>
        setVisible((prev) => ({ ...prev, d3: true }))
    }>
    打开对话框 3
</Button>
<Dialog
    header={
        <p>
            <Tag value='tag-1' type='plain' />
            <Tag value='tag-2' type='important' />
            <Tag value='tag-3' type='success' />
            <Button size='small'>查看更多</Button>
        </p>
    }
    visible={visible.d3}
    close={() =>
        setVisible((prev) => ({ ...prev, d3: false }))
    }
    footer={
        <>
            <Button
                type='plain'
                onClick={() =>
                    setVisible((prev) => ({
                        ...prev,
                        d3: false,
                    }))
                }>
                取消
            </Button>
            <Button
                type='important'
                onClick={() =>
                    setVisible((prev) => ({
                        ...prev,
                        d3: false,
                    }))
                }>
                确认
            </Button>
        </>
    }>
    <i>
        Exercitation ex voluptate velit deserunt minim
        Lorem laboris amet culpa quis do. Elit
        consectetur fugiat est anim dolore. Ut culpa
        officia nisi exercitation irure consectetur
        cupidatat nisi quis laboris est anim aliquip.
    </i>
</Dialog>
`,
            },
        ],
        api: [
            {
                title: 'Dialog 属性',
                api: [
                    {
                        attribute: 'visible',
                        description: '显示与隐藏',
                        value: 'boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'title',
                        description: '对话框标题',
                        value: 'string',
                        default: '',
                    },
                    {
                        attribute: 'mask',
                        description: '是否启用背景遮罩',
                        value: 'boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'showClose',
                        description: '是否显示关闭按钮',
                        value: 'boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'closeOnMaskClick',
                        description: '是否在点击遮罩时关闭对话框',
                        value: 'boolean',
                        default: 'true',
                    },
                    {
                        attribute: 'header',
                        description:
                            '自定义对话框顶部内容（会覆盖 title 属性）',
                        value: 'ReactElement',
                        default: '',
                    },
                    {
                        attribute: 'footer',
                        description: '自定义对话框底部内容',
                        value: 'ReactElement',
                        default: '',
                    },
                ],
            },
            {
                title: 'Dialog 事件',
                api: [
                    {
                        attribute: 'close',
                        description: '关闭对话框的回调函数',
                        value: 'function',
                        default: '',
                    },
                    {
                        attribute: 'onOpen',
                        description: '对话框打开后触发',
                        value: 'function',
                        default: '',
                    },
                    {
                        attribute: 'onClose',
                        description: '对话框关闭后触发',
                        value: 'function',
                        default: '',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
