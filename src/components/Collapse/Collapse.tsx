import { createContext } from 'react';
import { propsCollapse } from './type';
import CollapseItem from './CollapseItem';

import './collapse.less';

const CollapseContext = createContext<Array<string | number> | undefined>([]);
const T = 'wdu-collapse';
function Collapse(props: propsCollapse) {
    const { expandItems, children, size = 'normal' } = props;

    return (
        <div className={`${T} ${T}__${size}`}>
            <CollapseContext.Provider value={expandItems}>
                {children}
            </CollapseContext.Provider>
        </div>
    );
}

export { Collapse, CollapseItem, CollapseContext };
