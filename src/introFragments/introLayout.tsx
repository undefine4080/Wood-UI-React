import { IntroComponent } from "../base/introComponent";
import { Container, Aside, Main, Header, Footer } from "../components/Layout/Layout";

export default function ()
{
    const props = {
        title: 'Layout 布局',
        position: 'layout',
        components: [
            {
                component: (
                    <Container width="400px">
                        <Header style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Header
                        </Header>

                        <Aside side="left" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-important"> Main</Main>

                        <Footer style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Footer
                        </Footer>
                    </Container>
                )
            },
            {
                component: (
                    <Container width="400px">
                        <Header style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Header
                        </Header>

                        <Aside side="left" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-important"> Main </Main>

                        <Aside side="right" width="100px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Footer style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Footer
                        </Footer>
                    </Container>
                )
            },
            {
                component: (
                    <Container width="400px">
                        <Aside side="right" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Header style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Header
                        </Header>

                        <Main className="wdu-row-both-center wdu-bg-important"> Main</Main>

                        <Footer style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Footer
                        </Footer>
                    </Container>
                )
            } ]
    };

    return <IntroComponent { ...props } />;
}