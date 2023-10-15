import { useRef, useEffect, MutableRefObject } from 'react';
import { propsCollapse } from './type';
import CollapseItem from './CollapseItem';

import './collapse.less';

function Collapse(props: propsCollapse) {
    const { expandItems, children } = props;
    return <div className='wdu-collapse'>{children}</div>;
}

const T = 'wdu-collapse-item';

export { Collapse, CollapseItem };
