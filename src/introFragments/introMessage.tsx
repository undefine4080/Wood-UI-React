import { IntroComponent } from "../base/introComponent";
import { Button } from "../components/Button/Button";
import Message from "../components/Message/Message";
export default function ()
{
    const props = {
        title: 'Message 消息提示',
        position: 'message',
        components: [
            {
                component: <Button type="plain" onClick={ () => Message.info( '哈哈哈' ) }>info 全局消息</Button>
            },
            {
                component: <Button type="warn" onClick={ () => Message.warn( '哈哈哈' ) }>warn 全局消息</Button>
            },
            {
                component: <Button type="success" onClick={ () => Message.success( '哈哈哈' ) }>success 全局消息</Button>
            },
            {
                component: <Button type="danger" onClick={ () => Message.danger( '哈哈哈' ) }>danger 全局消息</Button>
            },
        ],
        code: ''
    };

    return <IntroComponent { ...props } />;
}