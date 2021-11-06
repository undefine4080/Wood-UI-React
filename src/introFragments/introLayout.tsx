import { IntroComponent } from "../base/introComponent";
import Container from "../components/Layout/Container";
import Aside from "../components/Layout/Aside";
import Main from '../components/Layout/Main';
import Header from "../components/Layout/Header";
import Footer from '../components/Layout/Footer';

export default function ()
{
    const props = {
        title: 'Layout 布局',
        components: [
            {
                component: (
                    <Container width="400px">
                        <Header style={ { height: '60px' } } className="wdu-row-both-center wdu-bg-active1">
                            Header
                        </Header>

                        <Aside side="left" width="100px" height="200px" className="wdu-row-both-center wdu-bg-danger">Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-primary"> Main</Main>

                        <Footer style={ { height: '60px' } } className="wdu-row-both-center wdu-bg-active2">
                            Footer
                        </Footer>
                    </Container>
                )
            },
            {
                component: (
                    <Container width="400px">
                        <Header style={ { height: '60px' } } className="wdu-row-both-center wdu-bg-active1">
                            Header
                        </Header>

                        <Aside side="left" width="100px" height="200px" className="wdu-row-both-center wdu-bg-danger">Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-primary"> Main </Main>

                        <Aside side="right" width="100px" className="wdu-row-both-center wdu-bg-danger">Aside</Aside>

                        <Footer style={ { height: '60px' } } className="wdu-row-both-center wdu-bg-active2">
                            Footer
                        </Footer>
                    </Container>
                )
            },
            {
                component: (
                    <Container width="400px">
                        <Aside side="right" width="100px" height="200px" className="wdu-row-both-center wdu-bg-danger">Aside</Aside>

                        <Header style={ { height: '60px' } } className="wdu-row-both-center wdu-bg-active1">
                            Header
                        </Header>

                        <Main className="wdu-row-both-center wdu-bg-primary"> Main</Main>

                        <Footer style={ { height: '60px' } } className="wdu-row-both-center wdu-bg-active2">
                            Footer
                        </Footer>
                    </Container>
                )
            } ]
    };

    return <IntroComponent { ...props } />;
}