import React, { useEffect, useState, MouseEvent } from "react";
import commonProps from "../../base/types/commonInterface";

import './tree.less';

interface treeNodeData {
    id: string,
    label: string,
    children?: Array<treeNodeData>;
};

interface propsTree extends commonProps {
    data: Array<treeNodeData>,
    onChange?: () => void;
}

const dfs = ( node: any, onChange?: any ) => {
    if ( !node ) return null;

    return (
        <TreeNode key={ node.id } { ...node } onChange={ onChange }>
            { node.children && node.children.map( dfs ) }
        </TreeNode>
    );
};

const Tree: React.FC<propsTree> = ( props ) => {
    const { data, onChange } = props;

    return (
        <div className="wdu-tree">
            { data && data.map( ( item ) => {
                if ( onChange && typeof onChange === 'function' ) {
                    return dfs( item, onChange );
                } else {
                    return dfs( item );
                }
            } ) }
        </div>
    );
};

const nodeBaseStyle = 'wdu-tree__node';
const labelBaseStyle = 'wdu-tree__node-label';
const nodeStyleMap = {
    nodeBaseStyle,
    expand: `${ nodeBaseStyle } ${ nodeBaseStyle }-children--expand`
};
const labelStyleMap = {
    labelBaseStyle,
    leaf: `${ labelBaseStyle } ${ labelBaseStyle }--leaf`,
    open: `${ labelBaseStyle } ${ labelBaseStyle }--open`,
};

interface propsTreeNode extends treeNodeData {
    open?: boolean;
}
const TreeNode: React.FC<propsTreeNode> = ( props ) => {
    const { label, children, open = false } = props;
    let [ nodeExpand, setNodeExpand ] = useState( open );
    let [ labelStyle, setLabelStyle ] = useState( labelStyleMap.labelBaseStyle );
    let [ nodeStyle, setNodeStyle ] = useState( nodeStyleMap.nodeBaseStyle );

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

    useEffect( () => {
        if ( nodeExpand ) {
            setLabelStyle( labelStyleMap.open );
            setNodeStyle( nodeStyleMap.expand );
        } else {
            setNodeStyle( nodeStyleMap.nodeBaseStyle );
            setLabelStyle( labelStyleMap.labelBaseStyle );
        }
    }, [ nodeExpand ] );

    const toggleNode = ( e: MouseEvent ) => {
        e.stopPropagation();
        if ( !childrenNodes ) return;
        setNodeExpand( !nodeExpand );
    };

    return (
        <div className={ nodeStyle }>
            <div className={ labelStyle } onClick={ ( e: MouseEvent ) => toggleNode( e ) }>{ label }</div>
            { childrenNodes }
        </div>
    );
};

export { Tree };