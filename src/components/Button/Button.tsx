import React, { Component } from 'react';
import './button.less';
interface ButtonOptions
{
    type?: string;
    size?: string;
    children?: any;
}

const PREFIX = 'wdu-button';

export default function Button ( props: ButtonOptions )
{
    const defaultOptions: ButtonOptions = {
        type: 'primary',
        size: 'normal',
    };
    const options: ButtonOptions = Object.assign( defaultOptions, props );
    const { type, size, children } = options;
    let classList = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;
    if ( type === 'disabled' ) classList += ` ${ PREFIX }-disabled`;

    return (
        <button className={ classList }>{ children }</button>
    );
}