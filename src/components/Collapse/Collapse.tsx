import React, { Component, useState, useRef, useEffect } from 'react';
import commonOptions from '../../base/commonInterface';
import { getComponentByName } from '../../utils.ts';
import './collapse.less';

// Collapse 容器
interface CollapseOptions extends commonOptions { }
export function Collapse ( props: CollapseOptions )
{
    const PREFIX = 'wdu-collapse';

    const { width, children } = props;

    const componentStyle: object = {};

    componentStyle.width = width ?? null;

    const collapseItem: Array<Object> = getComponentByName( children, 'CollapseItem' );

    return (
        <div className={ PREFIX } style={ componentStyle }>
            { collapseItem }
        </div>
    );
}


// Collapse 选项
interface CollapseItemOptions extends commonOptions
{
    label?: string;
}
export function CollapseItem ( props: CollapseItemOptions )
{
    const PREFIX = 'wdu-collapse-item';

    const defaultOptions: CollapseItemOptions = {
        label: '选项一',
    };

    const options: CollapseItemOptions = Object.assign( defaultOptions, props );

    const { label, children } = options;

    const bodyNode: object = useRef( {} );
    const [ realHeight, setRealHeight ] = useState( '' );
    const [ isExpand, setExpand ] = useState( false );
    useEffect( () =>
    {
        setRealHeight( `${ bodyNode.current.scrollHeight }px` );
    }, [ bodyNode ] );

    let expand = isExpand ? { height: realHeight } : { height: '0px' };
    let itemIndicator = isExpand ? `${ PREFIX }-expand` : '';

    const handleExpand = () =>
    {
        setExpand( !isExpand );
    };

    return (
        <div className={ `${ PREFIX }` }>
            <div className={ `${ PREFIX }-label` } onClick={ handleExpand }> <i className={ `${ PREFIX }-indicator ${ itemIndicator }` }></i> { label }</div>
            { children ? ( <div ref={ bodyNode } className={ `${ PREFIX }-body` } style={ expand }>{ children }</div> ) : null }
        </div >
    );
}

// Collapse 导航面板模式
interface CollapseNavOptions extends commonOptions
{
    url?: string,
    label?: string,
    newTab?: boolean;
}
export function CollapseNav ( props: CollapseNavOptions )
{
    const PREFIX = 'wdu-collapse-item';
    const defaultOptions: CollapseNavOptions = {
        newTab: true
    };
    const options: CollapseNavOptions = Object.assign( defaultOptions, props );

    const { label, url, newTab } = options;

    return (
        <div className={ `${ PREFIX }-nav` }>
            <a href={ url } target={ newTab ? '_blank' : '_self' }>{ label }</a>
        </div >
    );
}