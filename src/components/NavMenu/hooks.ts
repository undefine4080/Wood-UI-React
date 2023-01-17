import React, { ReactElement } from "react";
import { useState } from "react";

function useSingleMenu(single: boolean, navItemChild: Array<ReactElement>) {
    const [navMenuItems, setNavMenuItems] = useState();

    let curExpandItemIndex: number;
    let lastExpandItemIndex: number;

    const collapsePrevExpandItem = () => {
        navItemChild.map((item, index) => {
            if (index === lastExpandItemIndex) {
                item = React.cloneElement(item, { expand: false });
            }
            return item;
        });
    };

    if (single) {
        navItemChild.map(item => {
            return React.cloneElement(item, { collapsePrevExpandItem });
        });
    }
}

export { useSingleMenu };
