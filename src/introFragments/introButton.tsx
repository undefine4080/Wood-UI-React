import { IntroComponent } from "../base/introComponent";
import { Button } from "../components/Button/Button";

export default function () {
    const props = {
        title: 'Button 按钮',
        position: 'button',
        components: [
            {
                component: <Button type="plain">点我点我</Button>,
                info: '默认按钮'
            },
            {
                component: <Button type="success">点我点我</Button>,
                info: '成功按钮'
            },
            {
                component: <Button type="danger">点我点我</Button>,
                info: '危险按钮'
            },
            {
                component: <Button type="important">点我点我</Button>,
                info: '重要按钮'
            },
            {
                component: <Button type="warn">点我点我</Button>,
                info: '警告按钮'
            },
            {
                component: <Button type="line">点我点我</Button>,
                info: '描边按钮'
            },
            {
                component: <Button type="disabled">点不了的</Button>,
                info: '禁用按钮'
            },
            {
                component: <Button size="small">点我点我</Button>,
                info: '小 '
            },
            {
                component: <Button size="normal">点我点我</Button>,
                info: '常规'
            },
            {
                component: <Button size="large">点我点我</Button>,
                info: '大'
            },
        ],
        code: `
        import { Button } from "../components/Button/Button";
        
        <Button type="plain">点我点我</Button>
        `
    };

    return <IntroComponent { ...props } />;
};