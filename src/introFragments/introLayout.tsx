import { IntroComponent } from "@base/components/IntroComponent";
import { Container, Aside, Main, Header, Footer, Row, Col } from "@component/Layout/Layout";
import { Table, TableColumn } from "@component/Table/Table";

export default function () {
    const props = {
        title: 'Layout 布局',
        position: 'layout',
        components: [
            {
                title: '两栏布局',
                info: '布局组件需用 Container 包裹，Aside 表示侧栏，Main 表示主体',
                component: (
                    <Container >
                        <Aside side="left" width={ 100 } >
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>Aside</div>
                        </Aside>

                        <Main height={ 200 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#5d75b8' } }>Main</div>
                        </Main>
                    </Container >
                ),
                code: `
<Container width={ 400 }>
    <Aside side="left" width={ 100 } >
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>Aside</div>
    </Aside>

    <Main height={ 200 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#5d75b8' } }>Main</div>
    </Main>
</Container >`
            },
            {
                title: '页脚和页眉',
                info: 'Header 表示页眉，Footer 表示页脚',
                component: (
                    <Container>
                        <Header height={ 60 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>Header</div>
                        </Header>

                        <Aside side="left" width={ 100 } >
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>Aside</div>
                        </Aside>

                        <Main height={ 200 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#5d75b8' } }>Main</div>
                        </Main>

                        <Footer height={ 60 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>Footer</div>
                        </Footer>
                    </Container >
                ),
                code: `
<Container width={ 400 }>
    <Header height={ 60 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>
            Header
        </div>
    </Header>

    <Aside side="left" width={ 100 } >
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>
            Aside
        </div>
    </Aside>

    <Main height={ 200 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#5d75b8' } }>
            Main
        </div>
    </Main>

    <Footer height={ 60 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>
            Footer
        </div>
    </Footer>
</Container >`
            },
            {
                title: '三栏布局',
                info: '通过添加两个 Aside 实现三栏布局，Main 无需设置宽度，自动撑开',
                component: (
                    <Container>
                        <Header height={ 60 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>Header</div>
                        </Header>

                        <Aside side="left" width={ 100 } >
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>Aside</div>
                        </Aside>

                        <Main height={ 200 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#5d75b8' } }>Main</div>
                        </Main>

                        <Aside side="right" width={ 100 } >
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>Aside</div>
                        </Aside>


                        <Footer height={ 60 }>
                            <div className="wdu-row-both-center"
                                style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>Footer</div>
                        </Footer>
                    </Container >
                ),
                code: `
<Container width={ 400 }>
    <Header height={ 60 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>
            Header
        </div>
    </Header>
    
    <Aside side="left" width={ 100 } >
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>
            Aside
        </div>
    </Aside>
    
    <Main height={ 200 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#5d75b8' } }>
            Main
        </div>
    </Main>
    
    <Aside side="right" width={ 100 } >
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '200px', backgroundColor: '#a0a0a0' } }>
            Aside
        </div>
    </Aside>
    
    <Footer height={ 60 }>
        <div className="wdu-row-both-center"
            style={ { width: '100%', height: '100%', backgroundColor: '#cfcfcf' } }>
            Footer
        </div>
    </Footer>
</Container >`
            },
            {
                title: '行（Row）和列（Col）',
                info: 'Row 基于 Flex ，可以实现快速的行内布局；Col 基于 12 等分布局，可以通过 span 属性快速分配宽度',
                component: (
                    <div style={ { flexGrow: 1, textAlign: 'center', lineHeight: '50px' } }>
                        <Row >
                            <Col span={ 6 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=6</div>
                            </Col>

                            <Col span={ 6 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=6</div>
                            </Col>
                        </Row>

                        <Row >
                            <Col span={ 4 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=4</div>
                            </Col>

                            <Col span={ 4 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=4</div>
                            </Col>

                            <Col span={ 4 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=4</div>
                            </Col>
                        </Row>

                        <Row >
                            <Col span={ 3 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=3</div>
                            </Col>

                            <Col span={ 3 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=3</div>
                            </Col>

                            <Col span={ 3 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=3</div>
                            </Col>

                            <Col span={ 3 }>
                                <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>span=3</div>
                            </Col>
                        </Row>
                    </div>
                ),
                code: `
<div style={ { flexGrow: 1, textAlign: 'center', lineHeight: '50px' } }>
    <Row >
        <Col span={ 6 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=6
            </div>
        </Col>
        <Col span={ 6 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=6
            </div>
        </Col>
    </Row>
    <Row >
        <Col span={ 4 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=4
            </div>
        </Col>
        <Col span={ 4 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=4
            </div>
        </Col>
        <Col span={ 4 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=4
            </div>
        </Col>
    </Row>
    <Row >
        <Col span={ 3 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=3
            </div>
        </Col>
        <Col span={ 3 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=3
            </div>
        </Col>
        <Col span={ 3 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=3
            </div>
        </Col>
        <Col span={ 3 }>
            <div style={ { margin: '8px', height: '50px', backgroundColor: '#c7c7c7' } }>
                span=3
            </div>
        </Col>
    </Row>
</div>`
            }
        ],
        // api: [ {
        //     title: 'Container 属性',
        //     api: [ {
        //         attribute: 'width',
        //         description: '设置 Container 的宽度，可以是数字（表示 css 像素），或者字符串，例如“100%”',
        //         value: 'px',
        //         default: '/',
        //     } ]
        // } ]
    };

    return <IntroComponent { ...props } />;
}