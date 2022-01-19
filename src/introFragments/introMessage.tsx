import { IntroComponent } from "../base/introComponent";
import Button from "../components/Button/Button";
import Message from "../components/Message/Message";
export default function ()
{
    const props = {
        title: 'Message 消息提示',
        position: 'message',
        components: [
            {
                component: <Button onClick={ () => Message.info( '哈哈哈' ) }>info 全局消息</Button>,
                info: '弹窗'
            },
            {
                component: <Button onClick={ () => Message.warn( '哈哈哈' ) }>warn 全局消息</Button>,
                info: '弹窗'
            },
            {
                component: <Button onClick={ () => Message.success( '哈哈哈' ) }>success 全局消息</Button>,
                info: '弹窗'
            },
            {
                component: <Button onClick={ () => Message.danger( '哈哈哈' ) }>danger 全局消息</Button>,
                info: '弹窗'
            },
        ],
        code: ''
    };

    return <IntroComponent { ...props } />;
}