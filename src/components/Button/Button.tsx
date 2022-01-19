import React from 'react';
import './button.less';
import commonOptions from '../../base/commonInterface';
interface ButtonOptions extends commonOptions
{
    type?: string;
    size?: string;
}

const PREFIX = 'wdu-button';

export function Button ( props: any )
{
    const defaultOptions: ButtonOptions = {
        type: 'plain',
        size: 'normal',
    };
    const options: ButtonOptions = Object.assign( defaultOptions, props );
    const { type, size, children } = options;
    let theClass = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;
    if ( type === 'disabled' ) theClass += ` ${ PREFIX }-disabled`;

    return (
        <button { ...props } className={ theClass }>{ children }</button>
    );
}