import { IntroComponent } from "../base/introComponent";
import { Button } from "../components/Button/Button";

export default function () {
    const props = {
        title: 'Button 按钮',
        position: 'button',
        components: [
            {
                title: '按钮类型',
                component: (
                    <>
                        <Button type="plain">默认</Button>
                        <Button type="success">成功</Button>
                        <Button type="danger">危险</Button>
                        <Button type="important">重要</Button>
                        <Button type="warn">警示</Button>
                        <Button type="line">边框</Button>
                        <Button type="disabled">禁用</Button>
                    </> ),
                info: '按钮类型通过 type 属性来定义',
                code: `
<Button type="plain">默认</Button>
<Button type="success">成功</Button>
<Button type="danger">危险</Button>
<Button type="important">重要</Button>
<Button type="warn">警示</Button>
<Button type="line">边框</Button>
<Button type="disabled">禁用</Button>`
            },
            {
                title: '按钮尺寸',
                component: (
                    <>
                        <Button size="small">小</Button>
                        <Button size="normal">默认</Button>
                        <Button size="large">大</Button>
                    </>
                ),
                info: '按钮类型通过 size 属性来定义',
                code: `
<Button size="small">小</Button>
<Button size="normal">默认</Button>
<Button size="large">大</Button>`
            },
        ]
    };

    return <IntroComponent { ...props } />;
};