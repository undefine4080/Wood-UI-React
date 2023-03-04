import { Children, cloneElement, useState } from 'React';
import { propsNavMenu } from './type';
import NavMenuItem from './NavMenuItem';
import SubNavMenu from './SubNavMenu';

import './navMenu.less';

function NavMenu(props: propsNavMenu) {
    const { children, className = '', single = false } = props;

    const [lastExpandItemIndex, setLastExpandItemIndex] = useState<
        number | undefined
    >();

    const childNodes = Children.toArray(children).map(
        (node: any, index: number) => {
            if (node.type === 'div') {
                return node;
            } else {
                return cloneElement(node, {
                    single,
                    menuId: index,
                    lastExpandItem: lastExpandItemIndex,
                    submitExpandId: setLastExpandItemIndex,
                });
            }
        },
    );

    return <ul className={`wdu-navMenu ${className}`}>{childNodes}</ul>;
}

export { NavMenu, NavMenuItem, SubNavMenu };
