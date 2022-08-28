import { IntroComponent } from "../base/introComponent";
import { Container, Aside, Main, Header, Footer, Row, Col } from "../components/Layout/Layout";

export default function () {
    const props = {
        title: 'Layout 布局',
        position: 'layout',
        components: [
            {
                component: (
                    <Container width="400px">
                        <Header height={ 60 }>
                            <div className="wdu-row-both-center" style={ { backgroundColor: '#e6e6e6', height: '100%' } }>Header</div>
                        </Header>

                        <Aside side="left" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-important"> Main</Main>

                        <Footer style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Footer
                        </Footer>
                    </Container >
                ),
                code: `
<Container width="400px">
    <Header height={ 60 }>
        <div className="wdu-row-both-center" style={ { backgroundColor: '#e6e6e6', height: '100%' } }>Header</div>
    </Header>

    <Aside side="left" width="100px" 
        height="200px" 
        className="wdu-row-both-center" style={ { 
        backgroundColor: 'rgb(209, 208, 208)' } }
    >Aside</Aside>

    <Main className="wdu-row-both-center 
        wdu-bg-important"> Main</Main>

    <Footer style={ { height: '60px', 
        backgroundColor: 'rgb(230, 230, 230)' } } 
        className="wdu-row-both-center">
        Footer
    </Footer>
</Container >`
            },
            {
                component: (
                    <Container width="400px">
                        <Header height={ 60 }>
                            <div className="wdu-row-both-center"
                                style={ {
                                    backgroundColor: '#e6e6e6',
                                    height: '100%'
                                } }>Header</div>
                        </Header>

                        <Aside side="left" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Aside side="right" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-important"> Main</Main>

                        <Footer style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Footer
                        </Footer>
                    </Container >
                ),
                code: `
<Container width="400px">
    <Header height={ 60 }>
        <div className="wdu-row-both-center" style={ { backgroundColor: '#e6e6e6', height: '100%' } }>Header</div>
    </Header>

    <Aside side="left" width="100px" 
        height="200px" 
        className="wdu-row-both-center" style={ { 
        backgroundColor: 'rgb(209, 208, 208)' } }
        >Aside</Aside>
            <Aside side="right" width="100px" 
        height="200px" 
        className="wdu-row-both-center" style={ { 
        backgroundColor: 'rgb(209, 208, 208)' } }
        >Aside</Aside>
            
    <Main className="wdu-row-both-center 
        wdu-bg-important"> Main</Main>

    <Footer style={ { height: '60px', 
        backgroundColor: 'rgb(230, 230, 230)' } } 
        className="wdu-row-both-center">
        Footer
    </Footer>
</Container >`
            },
            {
                component: (
                    <Container width="400px">
                        <Header height={ 60 }>
                            <div className="wdu-row-both-center" style={ { backgroundColor: '#e6e6e6', height: '100%' } }>Header</div>
                        </Header>

                        <Aside side="right" width="100px" height="200px" className="wdu-row-both-center" style={ { backgroundColor: 'rgb(209, 208, 208)' } }>Aside</Aside>

                        <Main className="wdu-row-both-center wdu-bg-important"> Main</Main>

                        <Footer style={ { height: '60px', backgroundColor: 'rgb(230, 230, 230)' } } className="wdu-row-both-center">
                            Footer
                        </Footer>
                    </Container >
                ),
                code: `
 <Container width="400px">
    <Header height={ 60 }>
        <div className="wdu-row-both-center" style={ { backgroundColor: '#e6e6e6', height: '100%' } }>Header</div>
    </Header>
    
    <Aside side="right" width="100px" 
        height="200px" 
    className="wdu-row-both-center" style={ { 
    backgroundColor: 'rgb(209, 208, 208)' } }
        >Aside</Aside>

    <Main className="wdu-row-both-center 
        wdu-bg-important"> Main</Main>
    
    <Footer style={ { height: '60px', 
        backgroundColor: 'rgb(230, 230, 230)' } } 
        className="wdu-row-both-center">
        Footer
    </Footer>
</Container >`
            }
        ]
    };

    return <IntroComponent { ...props } />;
}