import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { propsTreeNode, selectNodes, treeNodeData } from "./type";
import Checkbox from "@component/Checkbox/Checkbox";
import { TreeContext } from './Tree';

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
    const { id, label, children,
        open = false, onExpand, onCollapse,
        onSelect, select = false } = props;

    const { selectable, setSelectNode } = useContext( TreeContext );

    const [ nodeSelect, setNodeSelect ] = useState( select );
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

    if ( !children ) {
        labelStyle = labelStyleMap.leaf;
    }

    const toggleNode = ( e: MouseEvent ) => {
        e.stopPropagation();
        if ( !children ) return;
        setNodeExpand( !nodeExpand );
        !nodeExpand ? ( onExpand && onExpand( currentNode ) ) : ( onCollapse && onCollapse( currentNode ) );
    };

    const handleSelect = ( checked: boolean, triggerByClick = true ) => {
        setSelectNode( ( prev: selectNodes ) => {
            let newState;
            if ( checked ) {
                newState = { ...prev, [ id ]: currentNode };
            } else {
                delete prev[ id ];
                newState = { ...prev };
            }

            // if it is not called by parent selection,then call the user callback
            if ( triggerByClick ) {
                const selectedNodes: Array<treeNodeData> = Object.values( newState );
                onSelect && onSelect( selectedNodes );
            }

            return newState;
        } );
        setNodeSelect( checked );
    };

    // handle child node selection when parent node is selected
    useEffect( () => {
        // todo
    }, [ select ] );

    return (
        <div className={ nodeStyle }>
            <div className={ labelStyle } onClick={ toggleNode }>
                { selectable &&
                    ( <Checkbox
                        onChange={ handleSelect }
                        checked={ nodeSelect } />
                    ) }

                { label }
            </div>

            { children?.length && (
                <div className="wdu-tree__node-children">
                    { children.map( child => {
                        return React.cloneElement( child, { select: nodeSelect } );
                    } ) }
                </div>
            ) }
        </div>
    );
};

export default TreeNode;