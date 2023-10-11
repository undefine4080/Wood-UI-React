import { IntroComponent } from '@doc/IntroComponent';
import Button from '@component/Button/Button';
import ButtonGroup from '@component/Button/ButtonGroup';

export default function () {
    const props = {
        title: 'Button 按钮',
        position: 'button',
        components: [
            {
                title: '按钮类型',
                component: (
                    <div className='wdu-row'>
                        <Button type='plain'>默认</Button>
                        <Button type='success'>成功</Button>
                        <Button type='danger'>危险</Button>
                        <Button type='important'>重要</Button>
                        <Button type='warn'>警示</Button>
                        <Button type='line'>边框</Button>
                        <Button disabled>禁用</Button>
                    </div>
                ),
                info: '按钮类型通过 type 属性来定义',
                code: `
<Button type="plain">默认</Button>
<Button type="success">成功</Button>
<Button type="danger">危险</Button>
<Button type="important">重要</Button>
<Button type="warn">警示</Button>
<Button type="line">边框</Button>
<Button disabled>禁用</Button>`,
            },
            {
                title: '按钮尺寸',
                component: (
                    <div className='wdu-row'>
                        <Button size='small'>小尺寸按钮</Button>
                        <Button size='normal'>中尺寸按钮</Button>
                        <Button size='large'>大尺寸按钮</Button>
                    </div>
                ),
                info: '按钮类型通过 size 属性来定义',
                code: `
<Button size="small">小尺寸按钮</Button>
<Button size="normal">中尺寸按钮</Button>
<Button size="large">大尺寸按钮</Button>`,
            },
            {
                title: '加载状态',
                component: (
                    <div className='wdu-row'>
                        <Button size='small' type='important' loading>
                            请求中
                        </Button>
                        <Button size='normal' type='danger' loading>
                            上传中
                        </Button>
                        <Button size='large' type='success' loading>
                            请稍后
                        </Button>
                    </div>
                ),
                info: '按钮加载状态通过 loading 属性定义',
                code: `
<Button size="small" type="important" loading>请求中</Button>
<Button size="normal" type="danger" loading>上传中</Button>
<Button size="large" type="success" loading>请稍后</Button>`,
            },
            {
                title: '按钮组',
                component: (
                    <div className='wdu-row'>
                        <ButtonGroup>
                            <Button type='plain'>默认</Button>
                            <Button type='success'>成功</Button>
                            <Button type='danger'>危险</Button>
                            <Button type='important'>重要</Button>
                            <Button type='warn'>警示</Button>
                            <Button type='line'>边框</Button>
                            <Button disabled>禁用</Button>
                        </ButtonGroup>
                    </div>
                ),
                info: '按钮类型通过 type 属性来定义',
                code: `
<ButtonGroup>
    <Button type='plain'>默认</Button>
    <Button type='success'>成功</Button>
    <Button type='danger'>危险</Button>
    <Button type='important'>重要</Button>
    <Button type='warn'>警示</Button>
    <Button type='line'>边框</Button>
    <Button disabled>禁用</Button>
</ButtonGroup>`,
            },
        ],
        api: [
            {
                title: 'Button 属性',
                api: [
                    {
                        attribute: 'size',
                        description: '按钮尺寸',
                        value: 'small (小) | normal (普通) | large (大)',
                        default: 'normal',
                    },
                    {
                        attribute: 'type',
                        description: '按钮类型',
                        value: 'plain (普通) | important (重要) | danger (警示) | success (成功) | warn (提示) | line (边框)',
                        default: 'plain',
                    },
                    {
                        attribute: 'loading',
                        description:
                            '按钮加载状态，当 loading 为 true 时表示正在加载，此时按钮不可用，直到加载状态结束',
                        value: 'boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'disabled',
                        description:
                            '按钮禁用状态，禁用后，按钮一切事件不生效，鼠标移入指针显示为禁用',
                        value: 'boolean',
                        default: 'false',
                    },
                ],
            },
            {
                title: 'Button 事件',
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
