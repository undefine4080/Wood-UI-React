import React, { useState, useRef, useEffect, LegacyRef, MutableRefObject } from 'react';
import commonOptions, { commonStyle } from '../../base/commonInterface';
import { getComponentByName } from '../../utils';
import './collapse.less';

// Collapse 容器
interface CollapseOptions extends commonOptions
{
    sticky?: boolean;
}

function Collapse ( props: any )
{
    const PREFIX = 'wdu-collapse';

    const { sticky, width, children } = props;

    const componentStyle: commonStyle = {};

    componentStyle.width = width ?? '';

    let isSticky: string = sticky ? `${ PREFIX }-sticky` : '';

    const collapseItem: Array<Object> = getComponentByName( children, 'CollapseItem' );

    return (
        <div className={ `${ PREFIX }-container ${ isSticky }` }>
            <div className={ PREFIX } style={ componentStyle }>
                { collapseItem }
            </div>
        </div>
    );
}


// Collapse 选项
interface CollapseItemOptions extends commonOptions
{
    label?: string;
    expand?: boolean;
}
function CollapseItem ( props: any )
{
    const PREFIX = 'wdu-collapse-item';

    const defaultOptions: CollapseItemOptions = {
        label: '选项一',
        expand: false
    };

    const options = Object.assign( defaultOptions, props );

    const { expand, label, children } = options;

    const bodyNode: MutableRefObject<any> = useRef( {} );
    const [ realHeight, setRealHeight ] = useState( '' );
    const [ isExpand, setExpand ] = useState( expand );
    useEffect( () =>
    {
        setRealHeight( `${ bodyNode.current.scrollHeight }px` );
    }, [ bodyNode ] );

    let expandStyle = isExpand ? { height: realHeight } : { height: '0px' };
    let itemIndicator = isExpand ? `${ PREFIX }-expand` : '';

    const handleExpand = () =>
    {
        setExpand( !isExpand );
    };

    return (
        <div className={ `${ PREFIX }` }>
            <div className={ `${ PREFIX }-label` } onClick={ handleExpand }> <i className={ `${ PREFIX }-indicator ${ itemIndicator }` }></i> { label }</div>
            { children ? ( <div ref={ bodyNode } className={ `${ PREFIX }-body` } style={ expandStyle }>{ children }</div> ) : null }
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
function CollapseNav ( props: CollapseNavOptions )
{
    const PREFIX = 'wdu-collapse-item';
    const defaultOptions: CollapseNavOptions = {
        newTab: true
    };
    const options = Object.assign( defaultOptions, props );

    const { label, url, newTab } = options;

    return (
        <div className={ `${ PREFIX }-nav` }>
            <a href={ `#${ url ? url : '' }` } target={ newTab ? '_self' : '_blank' }>{ label }</a>
        </div >
    );
}

export { Collapse, CollapseItem, CollapseNav };