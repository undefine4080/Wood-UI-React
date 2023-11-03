import { IntroComponent } from '@doc/IntroComponent';
import { Input } from '@component/Input/Input';
import { Button } from '@component/Button/Button';

export default function () {
    const props = {
        title: 'Input 输入框',
        position: 'input',
        components: [
            {
                title: '基础 Input',
                component: (
                    <>
                        <Input />

                        <Input label='带标签的 Input' />

                        <Input label='被禁用的 Input' disabled />

                        <Input label='可清空的 Input' clearable />
                    </>
                ),
                code: `
<Input />
<Input label='带标签的 Input' />
<Input label='被禁用的 Input' disabled />
<Input label='可清空的 Input' clearable />`,
            },
            {
                title: '不同尺寸的 Input',
                component: (
                    <>
                        <Input label='小' inputSize='small' />

                        <Input label='中' inputSize='normal' />

                        <Input label='大' inputSize='large' />
                    </>
                ),
                info: '通过 inputSize 定义，小（small）、默认（normal）、大（large）',
                code: `
<Input label='小' inputSize='small' />
<Input label='中' inputSize='normal' />
<Input label='大' inputSize='large' />`,
            },
            {
                title: '多种类型的 Input',
                info: '通过 type 指定 Input 类型，与原生 input 元素的 type 用法完全相同',
                component: (
                    <>
                        <Input type='number' label='数字' />

                        <Input type='text' label='文字' />

                        <Input type='email' label='邮件' />

                        <Input type='password' label='密码' />

                        <Input type='date' label='日期' />

                        <Input type='color' label='颜色' />
                    </>
                ),
                code: `
<Input type="number" label="数字" />

<Input type="text" label="文字" />

<Input type="email" label="邮件" />

<Input type="password" label="密码" />

<Input type="date" label="日期" />

<Input type="color" label="颜色"`,
            },
            {
                title: '插入自定义内容',
                component: (
                    <>
                        <Input
                            label='可乐'
                            prepend={<i className='doc-icon-cola'></i>}
                            type='number'
                            append={<Button type='important'>购买</Button>}
                        />

                        <Input
                            label='牛排'
                            prepend={<i className='doc-icon-steak'></i>}
                            type='number'
                            append={<Button type='important'>购买</Button>}
                        />

                        <Input
                            label='汉堡'
                            type='number'
                            prepend={<i className='doc-icon-hamburger'></i>}
                            append={<Button type='important'>购买</Button>}
                        />
                    </>
                ),
                code: `
<Input
    label='可乐'
    prepend={<i className='doc-icon-cola'></i>}
    type='number'
    append={<Button type='important'>购买</Button>}
/>

<Input
    label='牛排'
    prepend={<i className='doc-icon-steak'></i>}
    type='number'
    append={<Button type='important'>购买</Button>}
/>
                        
<Input
    label='汉堡'
    type='number'
    prepend={<i className='doc-icon-hamburger'></i>}
    append={<Button type='important'>购买</Button>}
/>`,
            },
            {
                title: '内置输入防抖',
                info: '传入 debounce 参数即可开启输入防抖，单位为毫秒，默认为 100ms',
                component: (
                    <>
                        <p>打开控制台查看防抖效果</p>

                        <Input
                            label='未启用防抖'
                            clearable
                            onChange={(e) => console.log(e.target.value)}
                        />

                        <Input
                            label='启用防抖'
                            debounce
                            clearable
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </>
                ),
                code: `
<p>打开控制台查看防抖效果</p>

<Input
    label='未启用防抖'
    clearable
    onChange={(e) => console.log(e.target.value)}
/>

<Input
    label='启用防抖'
    debounce
    clearable
    onChange={(e) => console.log(e.target.value)}
/>`,
            },
        ],
        api: [
            {
                title: 'Input 属性',
                api: [
                    {
                        attribute: 'label',
                        description: '输入框的标签文字',
                        value: 'String',
                    },
                    {
                        attribute: 'inputSize',
                        description: 'input 输入框的尺寸',
                        value: 'small 小、normal 中、large 大，不传即为 normal',
                    },
                    {
                        attribute: 'clearable',
                        description: '是否显示右侧清除按钮',
                        value: 'Boolean',
                    },
                    {
                        attribute: 'debounce',
                        description: '是否开启输入防抖',
                        value: 'Boolean || Number',
                        default: 100,
                    },
                ],
            },
            {
                title: 'Input 事件',
                api: [
                    {
                        attribute: 'onChange',
                        description: '键入时触发，与原生事件绑定相同',
                    },
                    {
                        attribute: 'onFocus / onBlur',
                        description: '聚焦/失焦时触发，与原生事件绑定相同',
                    },
                ],
            },
            {
                title: 'Input 实例属性',
                api: [
                    {
                        attribute: 'setValue',
                        description:
                            '方法，通过 ref.current.setValue() 调用，设置输入框的值',
                    },
                    {
                        attribute: 'value',
                        description:
                            '属性，通过 ref.current.value 访问，获取输入框的值',
                    },
                    {
                        attribute: 'clear',
                        description:
                            '方法，通过 ref.current.clear() 调用，清除输入框的值',
                    },
                    {
                        attribute: 'refInput',
                        description:
                            '属性，通过 ref.current.refInput 访问，表示 input 元素的 DOM 节点对象',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
