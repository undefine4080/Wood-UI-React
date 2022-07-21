import React, { ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './message.less';

const PREFIX = 'wdu-message';
const ID = 'wdu-message-container';

// 消息队列
let messages: Array<ReactElement> = [];

const genId = () => {
    const timestamp: number = Date.now();
    timestamp.toString().slice( 0, 8 );
    return timestamp;
};

function MessageContainer ( props?: any ) {
    // 一个 message 容器 dom
    let messageContainerDom: HTMLElement | null = document.getElementById( ID );

    if ( !messageContainerDom ) {
        messageContainerDom = document.createElement( 'div' );
        messageContainerDom.id = ID;
        document.body.appendChild( messageContainerDom );
    }

    return messageContainerDom;
}

type messageType = 'success' | 'error' | 'warning' | 'info';
interface propsBaseMessage {
    type: messageType;
    remove?: boolean;
    children?: string;
}
function BaseMessage ( props: propsBaseMessage ) {
    const { type, remove } = props;
    const classList = [ `${ PREFIX }`, `${ PREFIX }-${ type }` ];
    if ( remove ) {
        classList.push( `${ PREFIX }-remove` );
    }

    return (
        <div { ...props } className={ classList.join( ' ' ) }>
            { props.children }
        </div>
    );
}

function renderMessage ( type: messageType, message: string ) {
    messages.push( <BaseMessage type={ type } key={ genId() }>{ message }</BaseMessage> );

    const messageContainer = MessageContainer();
    const revQueue = [ ...messages ].reverse();
    ReactDOM.render(
        revQueue,
        messageContainer );

    removeMessage( messages, messageContainer );
}

function removeMessage ( messages: React.ReactElement<any, string | React.JSXElementConstructor<any>>[], messageContainer: HTMLElement ) {
    setTimeout( () => {
        messages.pop();
        ReactDOM.render(
            [ ...messages ],
            messageContainer );
    }, 3000 );
}

const Message = {
    info: ( message: string ) => renderMessage( 'info', message ),
    warn: ( message: string ) => renderMessage( 'warning', message ),
    danger: ( message: string ) => renderMessage( 'error', message ),
    success: ( message: string ) => renderMessage( 'success', message ),
};

export { Message };