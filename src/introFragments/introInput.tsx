import { IntroComponent } from "../base/introComponent";
import { Input } from "../components/Input/Input";

export default function () {
    const formName = "personInfo";
    const props = {
        title: 'Input 输入框',
        position: 'input',
        components: [
            {
                component: <Input name={ formName } label="姓名" size="small" />,
                info: 'small 输入框'
            },
            {
                component: <Input name={ formName } label="密码" type="password" size="normal" />,
                info: 'normal 输入框(默认)'
            },
            {
                component: <Input name={ formName } label="年龄" type="number" size="large" />,
                info: 'large 输入框'
            },
            {
                component: <Input name={ formName } label="住址" type="tel" size="normal" placeholder="xxx路xxx号" />,
                info: '占位内容'
            },
        ],
        code: `
        import { Input } from "../components/Input/Input";

        <Input name="personInfo" label="姓名" size="small" />
        <Input name="personInfo" label="密码" type="password" size="normal" />
        <Input name="personInfo" label="年龄" type="number" size="large" />
        `
    };

    return <IntroComponent { ...props } />;
};