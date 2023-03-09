import NavMenuItem from '@component/NavMenu/NavMenuItem';
import { Link, createHashRouter } from 'react-router-dom';
import App from './App';

import IntroButton from '@intro/introButton';
import IntroLayout from '@intro/introLayout';
import IntroCollapse from '@intro/introCollapse';
import IntroMark from '@intro/introMark';
import IntroMessage from '@intro/introMessage';
import IntroDivider from '@intro/introDivider';
import IntroCheckbox from '@intro/introCheckbox';
import IntroTab from '@intro/introTab';
import IntroSelect from '@intro/introSelect';
import IntroSwitch from '@intro/introSwitch';
import IntroTree from '@intro/introTree';
import IntroPagination from '@intro/introPagination';
import IntroImage from '@intro/introImage';
import IntroModal from '@intro/introModal';
import IntroTable from '@intro/IntroTable';
import IntroCarousel from '@intro/IntroCarousel';
import IntroForm from '@intro/IntroForm';
import IntroInput from '@intro/introInput';
import IntroRadio from '@intro/introRadio';
import IntroNav from '@intro/IntroNav';
import IntroProgress from '@intro/IntroProgress';
import IntroTag from '@intro/IntroTag';
import IntroTooltip from '@intro/IntroTooltip';
import IntroList from '@intro/IntroList';
import IntroNavMenu from '@intro/IntroNavMenu';
import Introducing from '@intro/Introducing';

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
            element: <IntroLayout />,
        },
        {
            path: 'layout',
            label: 'Layout 布局',
            element: <IntroLayout />,
        },
        { path: 'button', label: 'Button 按钮', element: <IntroButton /> },
        { path: 'mark', label: 'Mark 标记', element: <IntroMark /> },
        { path: 'switch', label: 'Switch 开关', element: <IntroSwitch /> },
        { path: 'divider', label: 'Divider 分割线', element: <IntroDivider /> },
        {
            path: 'pagination',
            label: 'Pagination 分页',
            element: <IntroPagination />,
        },
        { path: 'image', label: 'Image 图片', element: <IntroImage /> },
        {
            path: 'progress',
            label: 'Progress 进度条',
            element: <IntroProgress />,
        },
        { path: 'tag', label: 'Tag 标签', element: <IntroTag /> },
    ],
    content: [
        {
            path: 'collapse',
            label: 'Collapse 抽屉',
            element: <IntroCollapse />,
        },
        {
            path: 'navMenu',
            label: 'NavMenu 导航菜单',
            element: <IntroNavMenu />,
        },
        { path: 'tree', label: 'Tree 树', element: <IntroTree /> },
        { path: 'table', label: 'Table 表格', element: <IntroTable /> },
        { path: 'tab', label: 'Tab 动态面板', element: <IntroTab /> },
        {
            path: 'carousel',
            label: 'Carousel 轮播',
            element: <IntroCarousel />,
        },
        { path: 'list', label: 'List 列表', element: <IntroList /> },
        { path: 'card', label: 'Card 卡片', element: undefined },
    ],
    form: [
        { path: 'input', label: 'Input 输入', element: <IntroInput /> },
        { path: 'radio', label: 'Radio 单选', element: <IntroRadio /> },
        {
            path: 'checkbox',
            label: 'Checkbox 多选',
            element: <IntroCheckbox />,
        },
        { path: 'select', label: 'Select 选择', element: <IntroSelect /> },
        { path: 'form', label: 'Form 表单', element: <IntroForm /> },
        { path: 'textarea', label: 'Textarea 文本域', element: undefined },
        { path: 'cascade', label: 'Cascade 级联选择', element: undefined },
        {
            path: 'datepicker',
            label: 'DatePicker 日期选择器',
            element: undefined,
        },
    ],
    modal: [
        { path: 'modal', label: 'Modal 模态框', element: <IntroModal /> },
        { path: 'message', label: 'Message 消息', element: <IntroMessage /> },
        {
            path: 'tooltip',
            label: 'Tooltips 文字提示',
            element: <IntroTooltip />,
        },
        { path: 'nav', label: 'Nav 导航菜单', element: <IntroNav /> },
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
