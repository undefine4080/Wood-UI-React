import React from 'react';
import './button.less';
interface ButtonOptions
{
    type?: string;
    size?: string;
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
    let theClass = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;
    if ( type === 'disabled' ) theClass += ` ${ PREFIX }-disabled`;

    return (
        <button className={ theClass }>{ children }</button>
    );
}