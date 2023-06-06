import { IntroComponent } from "./IntroComponent";
import Message from "../components/Message/Message";
import Button from "@component/Button/Button";

export default function () {
    const props = {
        title: 'Message 消息提示',
        position: 'message',
        components: [
            {
                title: '不同类型的 Message',
                component: (
                    <>
                        <Button type="plain"
                            onClick={ () => Message.info( '这是一条普通消息' ) }>
                            info 消息</Button>

                        <Button type="warn"
                            onClick={ () => Message.warn( '这是一条警告消息' ) }>
                            warn 消息</Button>

                        <Button type="success"
                            onClick={ () => Message.success( '这是一条成功消息' ) }>
                            success 消息</Button>

                        <Button type="danger"
                            onClick={ () => Message.error( '这是一条危险消息' ) }>
                            danger 消息</Button>
                    </>
                ),
                info: '一般消息（info）、警告消息（warn）、成功消息（success）、危险消息（danger）',
                code: `
<Button type="plain"
    onClick={ () => Message.info( '这是一条普通消息' ) }>
    info 消息</Button>

<Button type="warn"
    onClick={ () => Message.warn( '这是一条警告消息' ) }>
    warn 消息</Button>

<Button type="success"
    onClick={ () => Message.success( '这是一条成功消息' ) }>
    success 消息</Button>
    
<Button type="danger"
    onClick={ () => Message.danger( '这是一条危险消息' ) }>
    danger 消息</Button>`
            },
        ],
    };

    return <IntroComponent { ...props } />;
}