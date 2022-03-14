import { IntroComponent } from "../base/introComponent";
import { Button } from "../components/Button/Button";
import { Message } from "../components/Message/Message";

export default function () {
    const props = {
        title: 'Message 消息提示',
        position: 'message',
        components: [
            {
                component: <Button type="plain" onClick={ () => Message.info( '你的假期余额已不足，请充值' ) }>info 全局消息</Button>
            },
            {
                component: <Button type="warn" onClick={ () => Message.warn( '请洗干净手再来' ) }>warn 全局消息</Button>
            },
            {
                component: <Button type="success" onClick={ () => Message.success( '哈哈哈' ) }>success 全局消息</Button>
            },
            {
                component: <Button type="danger" onClick={ () => Message.danger( '这次请求失败了' ) }>danger 全局消息</Button>
            },
        ],
        code: `
        import { Message } from "../components/Message/Message";

        <Button type="plain" onClick={ () => Message.info( '你的假期余额已不足，请充值' ) }>info 全局消息</Button>

        <Button type="warn" onClick={ () => Message.warn( '请洗干净手再来' ) }>warn 全局消息</Button>

        <Button type="success" onClick={ () => Message.success( '哈哈哈' ) }>success 全局消息</Button>

        <Button type="danger" onClick={ () => Message.danger( '这次请求失败了' ) }>danger 全局消息</Button>
        `
    };

    return <IntroComponent { ...props } />;
}