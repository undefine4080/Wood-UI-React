import { IntroComponent } from '@doc/IntroComponent';
import { docItem, propsIntroComponent } from '@common/types';
import { NavMenu, NavMenuItem, SubNavMenu } from '@component/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

const basicUse: docItem = {
    title: '基本用法',
    info: '导航菜单常用于页面的跳转，将所有页面二级入口集中到一处。NavMenuItem 表示单个菜单项，作用类似于 a 标签；SubNavMenu 用于包裹需要嵌套的菜单项',
    component: (
        <NavMenu>
            <NavMenuItem label='菜单 1' />
            <NavMenuItem label='菜单 2' />

            <SubNavMenu label='菜单 3'>
                <NavMenuItem label='菜单 3-1' />
                <NavMenuItem label='菜单 3-2' />
            </SubNavMenu>
        </NavMenu>
    ),
    code: `
import {NavMenu, NavMenuItem, SubNavMenu} from 'wood-ui';

<NavMenu>
    <NavMenuItem label='菜单 1' />
    <NavMenuItem label='菜单 2' />
    <SubNavMenu label='菜单 3'>
        <NavMenuItem label='菜单 3-1' />
        <NavMenuItem label='菜单 3-2' />
    </SubNavMenu>
</NavMenu>
`,
};

const navigator: docItem = {
    title: '导航与跳转',
    info: '有 3 种用法：1.仅用作静态的菜单项标题 2.指定 to 属性实现 url 跳转 3.填入子组件自定义 NavMenuItem 的内容',
    component: (
        <NavMenu>
            <NavMenuItem label='静态文本标题' />

            <NavMenuItem to='https://www.apple.cn' label='url 跳转' />

            <NavMenuItem>
                <Link to='/button'>路由跳转</Link>
            </NavMenuItem>
        </NavMenu>
    ),
    code: `
import { Link } from 'react-router-dom';

<NavMenu>
    <NavMenuItem>静态文本标题</NavMenuItem>
    <NavMenuItem to='apple.cn'>url 跳转</NavMenuItem>
    <NavMenuItem>
        <Link to='/button'>路由跳转</Link>
    </NavMenuItem>
</NavMenu>`,
};

const infiniteNesting: docItem = {
    title: '无限嵌套',
    component: (
        <NavMenu single>
            <NavMenuItem label='菜单 1' />

            <NavMenuItem label='菜单 2' />

            <SubNavMenu label='菜单 3'>
                <NavMenuItem label='菜单 3-1' />

                <NavMenuItem label='菜单 3-2' />

                <SubNavMenu label='菜单 3-3'>
                    <NavMenuItem label='菜单 3-3-1' />

                    <SubNavMenu label='菜单 3-3-2'>
                        <NavMenuItem label='菜单 3-3-2-1' />

                        <SubNavMenu label='菜单 3-3-2-2'>
                            <NavMenuItem label='菜单 3-3-2-2-1' />
                        </SubNavMenu>
                    </SubNavMenu>
                </SubNavMenu>
            </SubNavMenu>
        </NavMenu>
    ),
    info: 'NavMenu 支持无限嵌套，但考虑到性能以及用户操作的复杂度，建议不要嵌套超过 2 层',
    code: `
<NavMenu single>
    <NavMenuItem label='菜单 1' />
    <NavMenuItem label='菜单 2' />
    <SubNavMenu label='菜单 3'>
        <NavMenuItem label='菜单 3-1' />
        <NavMenuItem label='菜单 3-2' />
        <SubNavMenu label='菜单 3-3'>
            <NavMenuItem label='菜单 3-3-1' />
            <SubNavMenu label='菜单 3-3-2'>
                <NavMenuItem label='菜单 3-3-2-1' />
                <SubNavMenu label='菜单 3-3-2-2'>
                    <NavMenuItem label='菜单 3-3-2-2-1' />
                </SubNavMenu>
            </SubNavMenu>
        </SubNavMenu>
    </SubNavMenu>
</NavMenu>`,
};

const singleMode: docItem = {
    title: '单开关模式',
    component: (
        <NavMenu single>
            <SubNavMenu label='菜单 1'>
                <NavMenuItem label='菜单 1-1' />
            </SubNavMenu>

            <SubNavMenu label='菜单 2'>
                <NavMenuItem label='菜单 2-1' />
            </SubNavMenu>

            <SubNavMenu label='菜单 3'>
                <NavMenuItem label='菜单 3-1' />
            </SubNavMenu>

            <SubNavMenu label='菜单 4'>
                <NavMenuItem label='菜单 4-1' />
            </SubNavMenu>
        </NavMenu>
    ),
    info: '当项目过多时，为了方便快捷的浏览，可以启用单开关模式，展开当前菜单以后，其余同级菜单将自动收起，以节省竖向空间',
    code: `
<NavMenu single>
    <SubNavMenu label='菜单 1'>
        <NavMenuItem label='菜单 1-1' />
    </SubNavMenu>
    <SubNavMenu label='菜单 2'>
        <NavMenuItem label='菜单 2-1' />
    </SubNavMenu>
    <SubNavMenu label='菜单 3'>
        <NavMenuItem label='菜单 3-1' />
    </SubNavMenu>
    <SubNavMenu label='菜单 4'>
        <NavMenuItem label='菜单 4-1' />
    </SubNavMenu>
</NavMenu>`,
};

export default function () {
    const props: propsIntroComponent = {
        title: 'NavMenu 导航菜单',
        position: 'navMenu',
        components: [basicUse, navigator, infiniteNesting, singleMode],
        api: [
            {
                title: 'NavMenu 属性',
                api: [
                    {
                        attribute: 'className',
                        description: 'NavMenu 的自定义类名',
                        value: 'String',
                        default: '',
                    },
                    {
                        attribute: 'single',
                        description:
                            '是否启用单开关模式，同一级导航菜单下，同时只能展开一个菜单，其余自动收起',
                        value: 'Boolean',
                        default: 'false',
                    },
                ],
            },
            {
                title: 'NavMenuItem 属性',
                api: [
                    {
                        attribute: 'to',
                        description: '要跳转的链接，等同于 a 标签 ',
                        value: 'String',
                        default: '',
                    },
                    {
                        attribute: 'label',
                        description: '菜单项标题',
                        value: 'String',
                        default: '',
                    },
                    {
                        attribute: 'children',
                        description:
                            '若需要自定义 NavMenuItem 的内容（例如使用 react-router 的 <Link> 组件），可以填入子节点',
                        value: 'ReactNode',
                        default: '',
                    },
                    {
                        attribute: 'icon',
                        description: '菜单项的图标',
                        value: 'ReactNode',
                        default: '',
                    },
                    {
                        attribute: 'disabled',
                        description: '是否禁用',
                        value: 'Boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'onClick',
                        description:
                            '菜单项的鼠标单击事件回调，第一个参数是 MouseEvent，第二个参数是菜单项的数据',
                        value: '(event, NavItemData) => any',
                        default: '',
                    },
                ],
            },
            {
                title: 'SubNavMenu 属性',
                api: [
                    {
                        attribute: 'expand',
                        description: '是否展开当前子菜单',
                        value: 'Boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'label',
                        description: '菜单项标题',
                        value: 'String',
                        default: '',
                    },
                    {
                        attribute: 'children',
                        description: '用作嵌套的 NavMenuItem',
                        value: '',
                        default: '',
                    },
                    {
                        attribute: 'icon',
                        description: '菜单项的图标',
                        value: 'ReactNode',
                        default: '',
                    },
                    {
                        attribute: 'disabled',
                        description: '是否禁用',
                        value: 'Boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'onClick',
                        description:
                            '菜单项的鼠标单击事件回调，第一个参数是 MouseEvent，第二个参数是菜单项的数据',
                        value: '(event, NavItemData) => any',
                        default: '',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
