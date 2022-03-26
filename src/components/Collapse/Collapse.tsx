import React, { useState, useRef, useEffect, LegacyRef, MutableRefObject } from 'react';
import commonOptions, { commonStyle } from '../../base/commonInterface';
import './collapse.less';

// Collapse 容器
function Collapse ( props: any ) {
    const PREFIX = 'wdu-collapse';
    const { sticky, width, collapseItem } = props;
    const componentStyle: commonStyle = {};
    componentStyle.width = width ?? '';
    let isSticky: string = sticky ? `${ PREFIX }-sticky` : '';

    return (
        <div className={ `${ PREFIX }-container ${ isSticky }` }>
            <div className={ PREFIX } style={ componentStyle }>
                { collapseItem }
            </div>
        </div>
    );
}


// Collapse 选项
interface CollapseItemOptions extends commonOptions {
    label?: string;
    expand?: boolean;
    disabled?: boolean;
}

function CollapseItem ( props: any ) {
    const PREFIX = 'wdu-collapse-item';
    const defaultOptions: CollapseItemOptions = {
        label: '选项一',
        expand: false,
    };
    const options = Object.assign( defaultOptions, props );
    const { expand, label, children, disabled } = options;
    const bodyNode: MutableRefObject<any> = useRef( {} );
    const [ realHeight, setRealHeight ] = useState( '' );
    const [ isExpand, setExpand ] = useState( expand );

    useEffect( () => {
        setRealHeight( `${ bodyNode.current.scrollHeight }px` );
    }, [ bodyNode ] );

    let expandStyle = isExpand ? { height: realHeight } : { height: '0px' };
    let itemIndicator = isExpand ? `${ PREFIX }-expand` : '';

    const handleExpand = () => {
        setExpand( !isExpand );
    };

    return (
        <div className={ `${ PREFIX }` }>
            <div className={ `${ PREFIX }-label` } onClick={ handleExpand }>
                <i className={ `${ PREFIX }-indicator ${ itemIndicator }` }></i> { label }
            </div>
            { children ? ( <div ref={ bodyNode } className={ `${ PREFIX }-body` } style={ expandStyle }>{ children }</div> ) : null }
        </div >
    );
}

// Collapse 导航面板模式 
interface CollapseNavOptions extends commonOptions {
    url?: string,
    label?: string,
    newTab?: boolean,
    disabled?: boolean;
}
function CollapseNav ( props: CollapseNavOptions ) {
    const PREFIX = 'wdu-collapse-item';
    const defaultOptions: CollapseNavOptions = {
        disabled: false,
        newTab: true
    };
    const options = Object.assign( defaultOptions, props );
    const { label, url, newTab, disabled } = options;
    let disableStyle = disabled ? { cursor: 'not-allowed', color: 'grey' } : { cursor: 'pointer' };

    // 这里 disabled 以后点击仍然能跳转，待解决
    return (
        <div className={ `${ PREFIX }-nav` }>
            <a href={ `${ url ? url : '' }` } style={ disableStyle } target={ newTab ? '_self' : '_blank' }>{ label }</a>
        </div >
    );
}

export { Collapse, CollapseItem, CollapseNav };