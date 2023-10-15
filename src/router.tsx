import NavMenuItem from '@component/NavMenu/NavMenuItem';
import { Link, createHashRouter } from 'react-router-dom';
import App from './doc/App';

import DocButton from '@doc/Button';
import DocCarousel from '@doc/Carousel';
import DocCheckbox from '@doc/Checkbox';
import DocCollapse from '@doc/Collapse';
import DocDialog from '@doc/Dialog';
import DocDivider from '@doc/Divider';
import DocForm from '@doc/Form';
import DocImage from '@doc/Image';
import DocInput from '@doc/Input';
import DocLayout from '@doc/Layout';
import DocMessage from '@doc/Message';
import DocNavMenu from '@doc/NavMenu';
import DocPagination from '@doc/Pagination';
import DocPopover from '@doc/Popover';
import DocProgress from '@doc/Progress';
import DocRadio from '@doc/Radio';
import DocSelect from '@doc/Select';
import DocSwitch from '@doc/Switch';
import DocTab from '@doc/Tab';
import DocTable from '@doc/Table';
import DocTooltip from '@doc/Tooltip';
import DocTree from '@doc/Tree';

type navListItem = Array<{
    path?: string;
    element: JSX.Element | undefined;
    label?: string;
    index?: boolean;
}>;

interface navList {
    [key: string]: navListItem;
}

const navList: navList = {
    tutorial: [
        { path: 'introduce', label: '介绍', element: undefined },
        { path: 'install', label: '安装', element: undefined },
        { path: 'use', label: '使用', element: undefined },
    ],
    common: [
        {
            path: '/',
            element: <DocLayout />,
        },
        {
            path: 'layout',
            label: 'Layout 布局',
            element: <DocLayout />,
        },
        { path: 'button', label: 'Button 按钮', element: <DocButton /> },

        { path: 'switch', label: 'Switch 开关', element: <DocSwitch /> },
        { path: 'divider', label: 'Divider 分割线', element: <DocDivider /> },
        {
            path: 'pagination',
            label: 'Pagination 分页',
            element: <DocPagination />,
        },
        { path: 'image', label: 'Image 图片', element: <DocImage /> },
        {
            path: 'progress',
            label: 'Progress 进度条',
            element: <DocProgress />,
        },
    ],
    content: [
        {
            path: 'collapse',
            label: 'Collapse 抽屉',
            element: <DocCollapse />,
        },
        {
            path: 'navMenu',
            label: 'NavMenu 导航菜单',
            element: <DocNavMenu />,
        },
        { path: 'tree', label: 'Tree 树', element: <DocTree /> },
        { path: 'table', label: 'Table 表格', element: <DocTable /> },
        { path: 'tab', label: 'Tab 动态面板', element: <DocTab /> },
        {
            path: 'carousel',
            label: 'Carousel 轮播',
            element: <DocCarousel />,
        },
    ],
    form: [
        { path: 'input', label: 'Input 输入', element: <DocInput /> },
        { path: 'radio', label: 'Radio 单选', element: <DocRadio /> },
        {
            path: 'checkbox',
            label: 'Checkbox 多选',
            element: <DocCheckbox />,
        },
        { path: 'select', label: 'Select 选择', element: <DocSelect /> },
        { path: 'form', label: 'Form 表单', element: <DocForm /> },
        { path: 'textarea', label: 'Textarea 文本域', element: undefined },
        { path: 'cascade', label: 'Cascade 级联选择', element: undefined },
        {
            path: 'datepicker',
            label: 'DatePicker 日期选择器',
            element: undefined,
        },
    ],
    modal: [
        { path: 'dialog', label: 'Dialog 对话框', element: <DocDialog /> },
        { path: 'message', label: 'Message 消息', element: <DocMessage /> },
        {
            path: 'popover',
            label: 'Popover 弹出框',
            element: <DocPopover />,
        },
        {
            path: 'tooltip',
            label: 'Tooltips 文字提示',
            element: <DocTooltip />,
        },
    ],
    tool: [
        { path: 'bullet', label: 'Bullet 弹幕', element: undefined },
        { path: 'marker', label: 'Marker 水印', element: undefined },
        { path: 'occupation', label: 'Occupation 占位', element: undefined },
        { path: 'scroll', label: 'Scroll 瀑布流', element: undefined },
        { path: 'backtop', label: 'BackTop 返回顶部', element: undefined },
    ],
};

const renderLinks = (targets: navListItem) => {
    const result: JSX.Element[] = [];
    targets.forEach((target) => {
        if (target.path !== '/') {
            result.push(
                <NavMenuItem
                    key={target.path}
                    disabled={target.element ? false : true}>
                    <Link to={`/${target.path}`}>{target.label}</Link>
                </NavMenuItem>,
            );
        }
    });
    return result;
};

const renderSubRoutes = () => {
    const list = Object.values(navList).flat();
    const route = list.map((item) => {
        const copy = { ...item };
        copy.path = copy.element ? `/${copy.path}` : '/root';
        delete copy.label;
        if (copy.index) delete copy.path;
        return copy;
    });
    return route;
};
const subRoutes = renderSubRoutes();

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: subRoutes,
    },
]);

export { navList, renderLinks, router };
