import { useState } from 'react';
import { IntroComponent } from '@doc/IntroComponent';
import Button from '@component/Button/Button';
import Dialog from '@component/Dialog/Dialog';

export default function () {
    const [visible, setVisible] = useState({
        d1: false,
    });

    const props = {
        title: 'Dialog 按钮',
        position: 'dialog',
        components: [
            {
                title: '',
                component: (
                    <>
                        <Button
                            type='plain'
                            onClick={() =>
                                setVisible((prev) => ({ ...prev, d1: true }))
                            }>
                            默认对话框
                        </Button>
                        <Dialog
                            title='标题'
                            visible={visible.d1}
                            close={() =>
                                setVisible((prev) => ({ ...prev, d1: false }))
                            }
                            footer={
                                <>
                                    <Button
                                        type='plain'
                                        onClick={() =>
                                            setVisible((prev) => ({
                                                ...prev,
                                                d1: false,
                                            }))
                                        }>
                                        取消
                                    </Button>
                                    <Button
                                        type='important'
                                        onClick={() =>
                                            setVisible((prev) => ({
                                                ...prev,
                                                d1: false,
                                            }))
                                        }>
                                        确认
                                    </Button>
                                </>
                            }>
                            这是一个对话框
                        </Dialog>
                    </>
                ),
                info: '',
                code: `
`,
            },
        ],
        api: [
            {
                title: 'Dialog 属性',
                api: [
                    {
                        attribute: 'size',
                        description: '按钮尺寸',
                        value: 'small (小) | normal (普通) | large (大)',
                        default: 'normal',
                    },
                ],
            },
            {
                title: 'Dialog 事件',
                api: [
                    {
                        attribute: 'onClick',
                        description: '按钮单击事件',
                        value: 'function',
                        default: '/',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
