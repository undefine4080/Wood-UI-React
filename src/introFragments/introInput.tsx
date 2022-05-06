import { IntroComponent } from "../base/introComponent";
import { Input } from "../components/Input/Input";

export default function () {
    const props = {
        title: 'Input 输入框',
        position: 'input',
        components: [
            {
                component: <Input label="姓名" type=" text" size="small" />,
                info: 'small 输入框'
            },
            {
                component: <Input label="密码" type="password" size="normal" />,
                info: 'normal 输入框(默认)'
            },
            {
                component: <Input label="年龄" type="number" size="large" />,
                info: 'large 输入框'
            },
            {
                component: <Input label="住址" type="tel" size="normal" placeholder="蒙古大草原" value={250} />,
                info: '占位内容'
            },
        ],
        code: `
        import { Input } from "../components/Input/Input";

        <Input label="姓名" type="text" size="small" />
        <Input label="密码" type="password" size="normal" />
        <Input label="年龄" type="number" size="large" />
        `
    };

    return <IntroComponent {...props} />;
};