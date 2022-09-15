import { IntroComponent } from "@base/introComponent";
import Input from "@component/Input/Input";

export default function () {
    const formName = "personInfo";
    const props = {
        title: 'Input 输入框',
        position: 'input',
        components: [
            {
                title: '不同尺寸的 Input',
                component: (
                    <>
                        <Input name={ formName } label="小" size="small" />

                        <Input name={ formName } label="中" type="password" size="normal" />

                        <Input name={ formName } label="大" type="number" size="large" />
                    </>
                ),
                info: '通过 size 定义，小（small）、默认（normal）、大（large）',
                code: `
<Input name={ formName } label="小" size="small" />

<Input name={ formName } label="中" type="password" size="normal" />

<Input name={ formName } label="大" type="number" size="large" />`
            },
            {
                title: '多种类型的 Input',
                info: '通过 type 指定 Input 类型，与原生 input 元素的 type 用法完全相同',
                component: (
                    <>
                        <Input type="number" label="数字" />

                        <Input type="text" label="文字" />

                        <Input type="email" label="邮件" />

                        <Input type="password" label="密码" />

                        <Input type="date" label="日期" />

                        <Input type="color" label="颜色"
                        />
                    </>
                ),
                code: `
<Input type="number" label="数字" />

<Input type="text" label="文字" />

<Input type="email" label="邮件" />

<Input type="password" label="密码" />

<Input type="date" label="日期" />

<Input type="color" label="颜色"`
            },
        ],
        api: [
            {
                title: 'Input 属性',
                api: [ {
                    attribute: 'type',
                    description: 'input 输入框的类型，用法与原生 input 元素的 type 相同',
                    value: 'type="[input type]"，不传即为 text'
                },
                {
                    attribute: 'size',
                    description: 'input 输入框的尺寸',
                    value: 'small 小、normal 中、large 大，不传即为 normal'
                } ]
            },
            {
                title: 'Input 事件',
                api: [
                    {
                        attribute: 'onChange',
                        description: '键入时触发，自带防抖',
                    },
                    {
                        attribute: 'onFocus / onBlur',
                        description: '聚焦/失焦时触发',
                    } ]
            }
        ]
    };

    return <IntroComponent { ...props } />;
};