import React, { useState, useRef, useEffect, MutableRefObject, ReactFragment } from 'react';
import commonProps from '../../base/types/commonInterface';
import './collapse.less';

interface propsCollapse extends commonProps {
    sticky?: boolean; // 是否 fixed 布局
    collapseItem?: ReactFragment;
}

// Collapse 容器
const Collapse: React.FC<propsCollapse> = ( props ) => {
    const PREFIX = 'wdu-collapse';
    const { sticky, width, collapseItem } = props;

    return (
        <div className={ `wdu-collapse-container ${ sticky ? `wdu-collapse-sticky` : '' }` }>
            <div className={ PREFIX } style={ { width } }>
                { collapseItem }
            </div>
        </div>
    );
};


// Collapse 选项
interface propsCollapseItem extends commonProps {
    label?: string;
    expand?: boolean;
}

const CollapseItem: React.FC<propsCollapseItem> = ( props ) => {
    const PREFIX = 'wdu-collapse-item';
    const { expand = false, label, children, disabled = false } = props;
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
};

// Collapse 导航面板模式 
interface propsCollapseNav extends commonProps {
    url?: string, // 导航目标 url
    label?: string, // 标签文字
    newTab?: boolean, // 是否在新标签页打开链接
}

const CollapseNav: React.FC<propsCollapseNav> = ( props ) => {
    const PREFIX = 'wdu-collapse-item';
    const { label, url, newTab = true, disabled = false } = props;
    let disableStyle = disabled ? { cursor: 'not-allowed', color: 'grey' } : { cursor: 'pointer' };
    const aRef: MutableRefObject<any> = useRef( null );

    useEffect( () => {
        if ( disabled ) {
            aRef.current.removeAttribute( 'href' );
        } else {
            if ( url && url.length > 0 )
                aRef.current.setAttribute( 'href', url );
        }
    }, [ aRef ] );

    return (
        <div className={ `${ PREFIX }-nav` }>
            <a ref={ aRef } style={ disableStyle } target={ newTab ? '_self' : '_blank' }>{ label }</a>
        </div >
    );
};

export { Collapse, CollapseItem, CollapseNav };