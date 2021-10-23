import React, { Component } from 'react';
import './button.less';
interface ButtonOptions
{
    type?: string;
    size?: string;
    disabled?: boolean;
    children?: any;
}

export default function Button ( props: ButtonOptions )
{
    const PREFIX = 'wdu-button';
    const defaultOptions: ButtonOptions = {
        type: 'primary',
        size: 'normal',
        disabled: false
    };
    const options: ButtonOptions = Object.assign( defaultOptions, props );
    const { type, size, disabled, children } = options;
    let classList = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;
    if ( disabled ) classList += ` ${ PREFIX }-disabled`;
    return (
        <button className={ classList }>{ children }</button>
    );
}