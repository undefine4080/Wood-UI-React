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
                        <Input name={ formName } label="姓名" size="small" />

                        <Input name={ formName } label="密码" type="password" size="normal" />

                        <Input name={ formName } label="年龄" type="number" size="large" />
                    </>
                ),
                info: '通过 size 定义，小（small）、默认（normal）、大（large）',
                code: `
<Input name={ formName } label="姓名" size="small"/> 

<Input name={ formName } label="密码" type="password"
size="normal" />

<Input name={ formName } label="年龄" type="number"
size="large" />`
            }
        ],
    };

    return <IntroComponent { ...props } />;
};