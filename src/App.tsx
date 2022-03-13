import IntroButton from './introFragments/introButton';
import IntroLayout from './introFragments/introLayout';
import IntroCollapse from './introFragments/introCollapse';
import IntroMark from './introFragments/introMark';
import IntroMessage from './introFragments/introMessage';
import { IntroDivider } from './introFragments/introDivider';
import { Collapse, CollapseItem, CollapseNav } from './components/Collapse/Collapse';
import { Container, Main, Aside } from './components/Layout/Layout';
import './App.less';

function App () {
  return (
    <div className="app">
      <Container width="1000px"
        aside={
          <Aside side="left" width="200px" style={ { position: 'fixed', top: '0px' } }>
            <Collapse sticky={ true } collapseItem={
              [ <CollapseItem label="快速上手" expand={ true }>
                <CollapseNav label="介绍" />
                <CollapseNav label="安装" />
                <CollapseNav label="使用" />
              </CollapseItem>,

              <CollapseItem label="通用">
                <CollapseNav label="Layout 布局" url="#layout" />
                <CollapseNav label="Button 按钮" url="#button" />
                <CollapseNav label="Mark 标记" url="#mark" />
                <CollapseNav label="Divider 分割线" url="#divider" />
                <CollapseNav label="Pagination 分页器" disabled />
              </CollapseItem>,

              <CollapseItem label="输入">
                <CollapseNav label="Input 输入" disabled />
                <CollapseNav label="Radio 单选" disabled />
                <CollapseNav label="Checkbox 多选" disabled />
                <CollapseNav label="Select 选择" disabled />
                <CollapseNav label="Form 表单" disabled />
                <CollapseNav label="Cascade 级联选择" disabled />
                <CollapseNav label="DatePicker 日期选择" disabled />
              </CollapseItem>,

              <CollapseItem label="导航">
                <CollapseNav label="Nav 导航栏" disabled />
                <CollapseNav label="Collapse 伸缩面板" url="#collapse" disabled />
              </CollapseItem>,

              <CollapseItem label="弹窗">
                <CollapseNav label="Dialog 对话框" disabled />
                <CollapseNav label="Popover 弹出层" disabled />
                <CollapseNav label="Message 消息提示" url="#message" disabled />
              </CollapseItem>,

              <CollapseItem label="内容">
                <CollapseNav label="List 列表" disabled />
                <CollapseNav label="Tree 树" disabled />
                <CollapseNav label="Table 表格" disabled />
                <CollapseNav label="Carousel 轮播" disabled />
                <CollapseNav label="Progress 进度条" disabled />
                <CollapseNav label="Tab 页签" disabled />
              </CollapseItem> ]
            }>
            </Collapse>
          </Aside>
        }

        main={
          <Main style={ { marginLeft: '200px' } }>
            <IntroLayout />
            <IntroButton />
            <IntroMark />
            <IntroCollapse />
            <IntroMessage />
            <IntroDivider />
          </Main>
        }
      >
      </Container>
    </div>
  );
}

export default App;
