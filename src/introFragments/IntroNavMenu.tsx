import { IntroComponent } from '@base/components/IntroComponent';
import { NavMenu, NavMenuItem, SubNavMenu } from '@component/NavMenu/NavMenu';

export default function () {
    const props = {
        title: 'NavMenu 导航菜单',
        position: 'navMenu',
        components: [
            {
                title: '',
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

                                    <SubNavMenu title='菜单 3-3-2'>
                                        <NavMenuItem>菜单 3-3-2-1</NavMenuItem>
                                        <SubNavMenu title='菜单 3-3-2'>
                                            <NavMenuItem>
                                                菜单 3-3-2-1
                                            </NavMenuItem>
                                            <SubNavMenu title='菜单 3-3-2'>
                                                <NavMenuItem>
                                                    菜单 3-3-2-1
                                                </NavMenuItem>
                                                <SubNavMenu title='菜单 3-3-2'>
                                                    <NavMenuItem>
                                                        菜单 3-3-2-1
                                                    </NavMenuItem>
                                                    <SubNavMenu title='菜单 3-3-2'>
                                                        <NavMenuItem>
                                                            菜单 3-3-2-1
                                                        </NavMenuItem>
                                                    </SubNavMenu>
                                                </SubNavMenu>
                                            </SubNavMenu>
                                        </SubNavMenu>
                                    </SubNavMenu>
                                </SubNavMenu>
                            </SubNavMenu>
                        </SubNavMenu>

                        <SubNavMenu title='菜单 4'>
                            <NavMenuItem>菜单 4-1</NavMenuItem>
                            <NavMenuItem>菜单 4-2</NavMenuItem>
                            <SubNavMenu title='菜单 4-3'>
                                <NavMenuItem>菜单 4-1</NavMenuItem>
                                <NavMenuItem>菜单 4-2</NavMenuItem>
                            </SubNavMenu>
                            <SubNavMenu title='菜单 4-4'>
                                <NavMenuItem>菜单 4-1</NavMenuItem>
                                <NavMenuItem>菜单 4-2</NavMenuItem>
                            </SubNavMenu>
                            <SubNavMenu title='菜单 4-5'>
                                <NavMenuItem>菜单 4-1</NavMenuItem>
                                <NavMenuItem>菜单 4-2</NavMenuItem>
                            </SubNavMenu>
                        </SubNavMenu>
                    </NavMenu>
                ),
                info: '',
                code: ``,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
