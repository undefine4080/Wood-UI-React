import { Outlet } from 'react-router-dom';
import { Container, Main, Aside } from '@component/Layout/Layout';
import { NavMenu, SubNavMenu } from '@component/NavMenu/NavMenu';
import { navList, renderLinks } from './router';

import './App.less';

function App() {
    return (
        <div className='app'>
            <Container style={{ width: '1280px' }}>
                <Aside side='left' className='app__aside'>
                    <div id='navMenu-aside'>
                        <NavMenu>
                            <SubNavMenu title='快速上手'>
                                {renderLinks(navList.tutorial)}
                            </SubNavMenu>

                            <SubNavMenu title='通用'>
                                {renderLinks(navList.common)}
                            </SubNavMenu>

                            <SubNavMenu title='内容'>
                                {renderLinks(navList.content)}
                            </SubNavMenu>

                            <SubNavMenu title='表单'>
                                {renderLinks(navList.form)}
                            </SubNavMenu>

                            <SubNavMenu title='弹窗'>
                                {renderLinks(navList.modal)}
                            </SubNavMenu>

                            <SubNavMenu title='实用'>
                                {renderLinks(navList.tool)}
                            </SubNavMenu>
                        </NavMenu>
                    </div>
                </Aside>

                <Main className='app__main'>
                    <Outlet />
                </Main>
            </Container>
        </div>
    );
}

export default App;
