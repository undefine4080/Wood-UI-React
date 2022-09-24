import commonProps from "@base/types/commonInterface";

interface propsCollapse extends commonProps {
    sticky?: boolean; // 是否 fixed 布局
}

interface propsCollapseItem extends commonProps {
    label?: string;
    expand?: boolean;
    height?: string;
    autoHeight?: boolean;
}

interface propsCollapseNav extends commonProps {
    url?: string, // 导航目标 url
    label?: string, // 标签文字
    newTab?: boolean, // 是否在新标签页打开链接
}


export type {
    propsCollapse,
    propsCollapseItem,
    propsCollapseNav
};