import React, { Children, cloneElement, ReactElement } from 'react';
import { useState } from 'react';

function useSingleMenu(single: boolean, children: Array<any>, indent?: number) {
    const [lastExpandItemIndex, setLastExpandItemIndex] = useState<
        number | undefined
    >();

    const [navMenuChildren, setNavMenuChildren] = useState<any>();

    const childNodes: any = [];
    Children.toArray(children).forEach((node: any, index: number) => {
        if (node) {
            let newNode;
            if (node.type.name === 'SubNavMenu') {
                newNode = cloneElement(node, {
                    single,
                    menuId: index,
                    indent,
                    lastExpandItem: lastExpandItemIndex,
                    submitExpandId: setLastExpandItemIndex,
                });
            } else {
                newNode = node;
            }
            childNodes.push(newNode);
        }
    });
    setNavMenuChildren(childNodes);

    console.log(children);

    return {
        navMenuChildren,
    };
}

export { useSingleMenu };
