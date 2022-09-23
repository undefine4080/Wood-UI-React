import React, { useEffect, useState, MouseEvent } from "react";
import { propsTree, propsTreeNode, treeEvents } from "./type";

import './tree.less';

const dfs = ( node: any, events: treeEvents ) => {
    if ( !node ) return null;

    return (
        <TreeNode key={ node.id } { ...node } { ...events }>
            { node.children && node.children.map( ( child: any ) => dfs( child, events ) ) }
        </TreeNode>
    );
};

function Tree ( props: propsTree ) {
    const { data, onExpand, onCollapse } = props;

    const events: treeEvents = {};
    onExpand && ( events.onExpand = onExpand );
    onCollapse && ( events.onCollapse = onCollapse );

    return (
        <div className="wdu-tree">
            { data && data.map( item => dfs( item, events ) ) }
        </div>
    );
};

const nodeBase = 'wdu-tree__node';
const labelBase = 'wdu-tree__node-label';
const nodeStyleMap = {
    base: nodeBase,
    expand: `${ nodeBase } ${ nodeBase }-children--expand`
};
const labelStyleMap = {
    base: labelBase,
    leaf: `${ labelBase } ${ labelBase }--leaf`,
    open: `${ labelBase } ${ labelBase }--open`,
};

function TreeNode ( props: propsTreeNode ) {
    const { id, label, children, open = false, onExpand, onCollapse } = props;
    const [ nodeExpand, setNodeExpand ] = useState( open );

    const [ nodeStyle, setNodeStyle ] = useState( nodeStyleMap.base );
    let [ labelStyle, setLabelStyle ] = useState( labelStyleMap.base );

    const currentNode = { id, label };

    useEffect( () => {
        if ( nodeExpand ) {
            setLabelStyle( labelStyleMap.open );
            setNodeStyle( nodeStyleMap.expand );
        } else {
            setNodeStyle( nodeStyleMap.base );
            setLabelStyle( labelStyleMap.base );
        }
    }, [ nodeExpand ] );

    let childrenNodes: any = null;
    if ( !children || !children.length ) {
        labelStyle = labelStyleMap.leaf;
    } else {
        childrenNodes = (
            <div className="wdu-tree__node-children">
                { children }
            </div>
        );
    }

    const toggleNode = ( e: MouseEvent ) => {
        e.stopPropagation();
        if ( !childrenNodes ) return;
        setNodeExpand( !nodeExpand );
        !nodeExpand ? ( onExpand && onExpand( currentNode ) ) : ( onCollapse && onCollapse( currentNode ) );
    };

    return (
        <div className={ nodeStyle }>
            <div className={ labelStyle } onClick={ toggleNode }>{ label }</div>
            { childrenNodes }
        </div>
    );
};

export default Tree;