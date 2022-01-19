import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './message.less';

const PREFIX = 'wdu-message';
const ID = 'wdu-message-container';
let messages: Array<ReactElement> = [];

function MessageContainer ( props?: any )
{
    // 一个 message 容器 dom
    let messageContainerDom: HTMLElement | null = document.getElementById( ID );

    if ( !messageContainerDom )
    {
        messageContainerDom = document.createElement( 'div' );
        messageContainerDom.id = ID;
        document.body.appendChild( messageContainerDom );
    }

    return messageContainerDom;
}

function BaseMessage ( props: any )
{
    const { type } = props;

    return (
        <div { ...props } className={ `${ PREFIX } ${ PREFIX }-${ type }` }>
            {/* <span className={ `${ PREFIX }-${ type }` }></span> */ }
            { props.children }
        </div>
    );
}

function renderMessage ( type: string, message: string )
{
    messages.unshift( <BaseMessage type={ type } key={ window.crypto.randomUUID().substr( 0, 8 ) }>{ message }</BaseMessage> );

    const messageContainer = MessageContainer();
    ReactDOM.render(
        [ ...messages ],
        messageContainer );

    removeMessage( messages, messageContainer );
}

function removeMessage ( messages: React.ReactElement<any, string | React.JSXElementConstructor<any>>[], messageContainer: HTMLElement )
{
    setTimeout( () =>
    {
        messages.unshift();
        ReactDOM.render(
            [ ...messages ],
            messageContainer );
    }, 3000 );
}

const Message = {
    info: ( message: string ) => renderMessage( 'info', message ),
    warn: ( message: string ) => renderMessage( 'warn', message ),
    danger: ( message: string ) => renderMessage( 'danger', message ),
    success: ( message: string ) => renderMessage( 'success', message ),
};

export default Message;