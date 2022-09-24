import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import {
    propsCollapse,
    propsCollapseItem,
    propsCollapseNav
} from './type';
import './collapse.less';

function Collapse ( props: propsCollapse ) {
    const PREFIX = 'wdu-collapse';
    const { sticky, width, children } = props;

    return (
        <div className={ `wdu-collapse-container ${ sticky ? `wdu-collapse-sticky` : '' }` }>
            <div className={ PREFIX } style={ { width } }>{ children }</div>
        </div>
    );
};

function CollapseItem ( props: propsCollapseItem ) {
    const PREFIX = 'wdu-collapse-item';
    const { expand = false, label, height, children, disabled = false, autoHeight } = props;
    const itemNode: MutableRefObject<any> = useRef( {} );
    const [ itemHeight, setItemHeight ] = useState( '' );
    const [ isExpand, setExpand ] = useState( expand );

    useEffect( () => {
        if ( height && height !== '0px' ) {
            setItemHeight( height );
        } else {
            setItemHeight( `${ itemNode.current.scrollHeight }px` );
        }
    }, [ itemNode ] );

    let expandStyle = isExpand ? { height: itemHeight } : { height: '0px' };
    let itemIndicator = isExpand ? `${ PREFIX }-expand` : '';

    const classMap = {
        base: PREFIX,
        autoHeight: `${ PREFIX } ${ PREFIX }-autoHeight`
    };

    const classList = autoHeight ? classMap.autoHeight : classMap.base;

    return (
        <div className={ classList }>
            <div className={ `${ PREFIX }-label` } onClick={ () => setExpand( !isExpand ) }>
                <i className={ `${ PREFIX }-indicator ${ itemIndicator }` }></i> { label }
            </div>

            <div ref={ itemNode } className={ `${ PREFIX }-body` } style={ expandStyle }>{ children }</div>
        </div >
    );
};

function CollapseNav ( props: propsCollapseNav ) {
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