import { IntroComponent } from '@base/components/IntroComponent';
import { docItem } from '@base/types/commonInterface';
import { NavMenu, NavMenuItem, SubNavMenu } from '@component/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

// 基本用法
const basicUse: docItem = {
    title: '基本用法',
    info: '导航菜单常用于页面的跳转，将所有页面二级入口集中到一处',
    component: (
        <NavMenu>
            <NavMenuItem>菜单 1</NavMenuItem>
            <NavMenuItem>菜单 2</NavMenuItem>

            <SubNavMenu title='菜单 3'>
                <NavMenuItem>菜单 3-1</NavMenuItem>
                <NavMenuItem>菜单 3-2</NavMenuItem>
            </SubNavMenu>
        </NavMenu>
    ),
    code: `
import {NavMenu, NavMenuItem, SubNavMenu} from 'wood-ui';

<NavMenu>
    <NavMenuItem>菜单 1</NavMenuItem>
    <NavMenuItem>菜单 2</NavMenuItem>
    <SubNavMenu title='菜单 3'>
        <NavMenuItem>菜单 3-1</NavMenuItem>
        <NavMenuItem>菜单 3-2</NavMenuItem>
    </SubNavMenu>
</NavMenu>
`,
};

// 导航
const navigator: docItem = {
    title: '导航与跳转',
    info: '',
    component: (
        <NavMenu>
            <NavMenuItem>静态文本标题</NavMenuItem>
            <NavMenuItem to='https://www.apple.cn'>url 跳转</NavMenuItem>
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

// 无限嵌套
const infiniteNesting: docItem = {
    title: '无限嵌套',
    component: (
        <NavMenu single>
            <NavMenuItem>菜单 1</NavMenuItem>

            <NavMenuItem>菜单 2</NavMenuItem>

            <SubNavMenu title='菜单 3'>
                <NavMenuItem>菜单 3-1</NavMenuItem>

                <NavMenuItem>菜单 3-2</NavMenuItem>

                <SubNavMenu title='菜单 3-3'>
                    <NavMenuItem>菜单 3-3-1</NavMenuItem>

                    <SubNavMenu title='菜单 3-3-2'>
                        <NavMenuItem>菜单 3-3-2-1</NavMenuItem>

                        <SubNavMenu title='菜单 3-3-2-2'>
                            <NavMenuItem>菜单 3-3-2-2-1</NavMenuItem>
                        </SubNavMenu>
                    </SubNavMenu>
                </SubNavMenu>
            </SubNavMenu>
        </NavMenu>
    ),
    info: 'NavMenu 支持无限嵌套，但考虑到性能以及用户操作的复杂度，建议不要嵌套超过 2 层',
    code: `
    <NavMenu>
            <NavMenuItem>菜单 1</NavMenuItem>

            <NavMenuItem>菜单 2</NavMenuItem>

            <SubNavMenu title='菜单 3'>
                <NavMenuItem>菜单 3-1</NavMenuItem>

                <NavMenuItem>菜单 3-2</NavMenuItem>

                <SubNavMenu title='菜单 3-3'>
                    <NavMenuItem>菜单 3-3-1</NavMenuItem>

                    <SubNavMenu title='菜单 3-3-2'>
                        <NavMenuItem>菜单 3-3-2-1</NavMenuItem>

                        <SubNavMenu title='菜单 3-3-2-2'>
                            <NavMenuItem>菜单 3-3-2-2-1</NavMenuItem>
                        </SubNavMenu>
                    </SubNavMenu>
                </SubNavMenu>
            </SubNavMenu>
    </NavMenu>`,
};

// 单开关模式
const singleMode: docItem = {
    title: '单开关模式',
    component: (
        <NavMenu single>
            <SubNavMenu title='菜单 1'>
                <NavMenuItem>菜单 1-1</NavMenuItem>
            </SubNavMenu>

            <SubNavMenu title='菜单 2'>
                <NavMenuItem>菜单 2-1</NavMenuItem>
            </SubNavMenu>

            <SubNavMenu title='菜单 3'>
                <NavMenuItem>菜单 3-1</NavMenuItem>
            </SubNavMenu>

            <SubNavMenu title='菜单 4'>
                <NavMenuItem>菜单 4-1</NavMenuItem>
            </SubNavMenu>
        </NavMenu>
    ),
    info: '当项目过多时，为了方便快捷的浏览，可以启用单开关模式，展开当前二级菜单以后，其余同级菜单将自动收起，以节省竖向空间',
    code: `
<NavMenu single>
    <SubNavMenu title='菜单 1'>
        <NavMenuItem>菜单 1-1</NavMenuItem>
    </SubNavMenu>
    <SubNavMenu title='菜单 2'>
        <NavMenuItem>菜单 2-1</NavMenuItem>
    </SubNavMenu>
    <SubNavMenu title='菜单 3'>
        <NavMenuItem>菜单 3-1</NavMenuItem>
    </SubNavMenu>
    <SubNavMenu title='菜单 4'>
        <NavMenuItem>菜单 4-1</NavMenuItem>
    </SubNavMenu>
</NavMenu>`,
};

export default function () {
    const props = {
        title: 'NavMenu 导航菜单',
        position: 'navMenu',
        components: [basicUse, navigator, infiniteNesting, singleMode],
    };

    return <IntroComponent {...props} />;
}
