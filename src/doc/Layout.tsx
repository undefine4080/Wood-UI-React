import { IntroComponent } from "@base/components/IntroComponent";
import { Container, Aside, Main, Header, Footer, Row, Col } from "@component/Layout/Layout";

export default function () {
    const props = {
        title: 'Layout 布局',
        position: 'layout',
        components: [
            {
                title: '两栏布局',
                info: '布局组件需用 Container 包裹，Aside 表示侧栏，Main 表示主体，Aside 和 Main 的尺寸取决于包含的子元素',
                component: (
                    <Container >
                        <Aside side="left" >
                            <div className="wdu-center"
                                style={{ width: '100px', height: '200px', backgroundColor: '#a0a0a0' }}>Aside</div>
                        </Aside>

                        <Main>
                            <div className="wdu-center"
                                style={{ width: '100%', height: '100%', backgroundColor: '#5d75b8' }}>Main</div>
                        </Main>
                    </Container >
                ),
                code: `
<Container >
    <Aside side="left" >
        <div className="wdu-center"
            style={{ width: '100px', height: '200px', 
            backgroundColor: '#a0a0a0' }}>Aside</div>
    </Aside>
    <Main>
        <div className="wdu-center"
            style={{ width: '100%', height: '100%', 
            backgroundColor: '#5d75b8' }}>Main</div>
    </Main>
</Container >`
            },
            {
                title: '三栏布局',
                info: '通过添加两个 Aside 实现三栏布局，Main 自动撑开',
                component: (
                    <Container>
                        <Header>
                            <div className="wdu-center"
                                style={{ width: '100%', height: '60px', backgroundColor: '#cfcfcf' }}>Header</div>
                        </Header>

                        <Aside side="left">
                            <div className="wdu-center"
                                style={{ width: '100px', height: '200px', backgroundColor: '#a0a0a0' }}>Aside Left</div>
                        </Aside>

                        <Aside side="right">
                            <div className="wdu-center"
                                style={{ width: '100px', height: '200px', backgroundColor: '#a0a0a0' }}>Aside Right</div>
                        </Aside>

                        <Main>
                            <div className="wdu-center"
                                style={{ width: '100%', height: '100%', backgroundColor: '#5d75b8' }}>Main</div>
                        </Main>

                        <Footer>
                            <div className="wdu-center"
                                style={{ width: '100%', height: '60px', backgroundColor: '#cfcfcf' }}>Footer</div>
                        </Footer>
                    </Container >
                ),
                code: `
<Container>
    <Header>
        <div className="wdu-center"
            style={{ width: '100%', height: '60px', 
            backgroundColor: '#cfcfcf' }}>Header</div>
    </Header>
    <Aside side="left">
        <div className="wdu-center"
            style={{ width: '100px', height: '200px', 
            backgroundColor: '#a0a0a0' }}>Aside Left</div>
    </Aside>
    <Aside side="right">
        <div className="wdu-center"
            style={{ width: '100px', height: '200px', 
            backgroundColor: '#a0a0a0' }}>Aside Right</div>
    </Aside>
    <Main>
        <div className="wdu-center"
            style={{ width: '100%', height: '100%', 
            backgroundColor: '#5d75b8' }}>Main</div>
    </Main>
    <Footer>
        <div className="wdu-center"
            style={{ width: '100%', height: '60px', 
            backgroundColor: '#cfcfcf' }}>Footer</div>
    </Footer>
</Container >`
            },
            {
                title: '行（Row）和列（Col）',
                info: 'Row 基于 Flex ，可以实现快速的行内布局；Col 基于 12 等分布局，可以通过 span 属性快速分配宽度',
                component: (
                    <div style={{ flexGrow: 1, textAlign: 'center', lineHeight: '50px' }}>
                        <Row >
                            <Col span={6}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=6</div>
                            </Col>

                            <Col span={6}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=6</div>
                            </Col>
                        </Row>

                        <Row >
                            <Col span={4}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=4</div>
                            </Col>

                            <Col span={4}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=4</div>
                            </Col>

                            <Col span={4}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=4</div>
                            </Col>
                        </Row>

                        <Row >
                            <Col span={3}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=3</div>
                            </Col>

                            <Col span={3}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=3</div>
                            </Col>

                            <Col span={3}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=3</div>
                            </Col>

                            <Col span={3}>
                                <div style={{ margin: '8px', height: '50px', backgroundColor: '#c7c7c7' }}>span=3</div>
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
        api: [
            {
                title: 'Container 属性',
                api: [{
                    attribute: 'style',
                    description: '内联样式',
                    value: '/',
                    default: '/',
                }]
            },
            {
                title: 'Header / Footer 属性',
                api: [{
                    attribute: 'className',
                    description: '自定义类名',
                    value: '/',
                    default: '/',
                }]
            },
            {
                title: 'Main 属性',
                api: [
                    {
                        attribute: 'style',
                        description: '内联样式',
                        value: '/',
                        default: '/',
                    },
                    {
                        attribute: 'className',
                        description: '自定义类名',
                        value: '/',
                        default: '/',
                    }]
            },
            {
                title: 'Aside 属性',
                api: [
                    {
                        attribute: 'side',
                        description: '指定 Aside 的位置',
                        value: "left | right",
                        default: 'left',
                    },
                    {
                        attribute: 'style',
                        description: '内联样式',
                        value: '/',
                        default: '/',
                    },
                    {
                        attribute: 'className',
                        description: '自定义类名',
                        value: '/',
                        default: '/',
                    }]
            },
            {
                title: 'Row 属性',
                api: [
                    {
                        attribute: 'justify',
                        description: '指定 Row 内部项目的水平排列方式',
                        value: "'start' | 'center' | 'end' | 'around' | 'between'",
                        default: 'start',
                    },
                    {
                        attribute: 'align',
                        description: '指定 Row 内部项目的垂直排列方式',
                        value: "'top' | 'middle' | 'bottom'",
                        default: 'top',
                    },
                    {
                        attribute: 'style',
                        description: '内联样式',
                        value: '/',
                        default: '/',
                    },
                    {
                        attribute: 'className',
                        description: '自定义类名',
                        value: '/',
                        default: '/',
                    }]
            },
            {
                title: 'Col 属性',
                api: [
                    {
                        attribute: 'span',
                        description: '列宽度的系数，正整数',
                        value: '1 ~ 12',
                        default: '/',
                    },
                    {
                        attribute: 'style',
                        description: '内联样式',
                        value: '/',
                        default: '/',
                    },
                    {
                        attribute: 'className',
                        description: '自定义类名',
                        value: '/',
                        default: '/',
                    }]
            }]
    };

    return <IntroComponent {...props} />;
}