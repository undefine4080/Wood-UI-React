import { useRef, useEffect, MutableRefObject, createContext } from 'react';
import { propsCollapse } from './type';
import CollapseItem from './CollapseItem';

import './collapse.less';
import React from 'react';

const CollapseContext = createContext<Array<string | number> | undefined>([]);

function Collapse(props: propsCollapse) {
    const { expandItems, children } = props;

    useEffect(() => {
        const collapseItemsNode = React.Children.toArray(children);
        console.log(collapseItemsNode);
    }, []);

    return (
        <div className='wdu-collapse'>
            <CollapseContext.Provider value={expandItems}>
                {children}
            </CollapseContext.Provider>
        </div>
    );
}

export { Collapse, CollapseItem, CollapseContext };
