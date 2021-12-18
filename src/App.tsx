import IntroButton from './introFragments/introButton';
import IntroLayout from './introFragments/introLayout';
import IntroCollapse from './introFragments/introCollapse';
import IntroMark from './introFragments/introMark';
import { Collapse, CollapseItem, CollapseNav } from './components/Collapse/Collapse';
import { Container, Main, Aside } from './components/Layout/Layout';
import './App.less';

function App ()
{
  return (
    <div className="app">
      <Container width="1000px">
        <Aside side="left" width="200px" style={ { position: 'fixed', top: '0px' } }>
          <Collapse sticky={ true }>
            <CollapseItem label="快速上手" expand={ true }>
              <CollapseNav label="介绍" />
              <CollapseNav label="安装" />
              <CollapseNav label="使用" />
            </CollapseItem>

            <CollapseItem label="通用">
              <CollapseNav label="Layout 布局" url="layout" />
              <CollapseNav label="Button 按钮" url="button" />
              <CollapseNav label="Mark 标记" url="mark" />
              <CollapseNav label="Divider 分割线" />
              <CollapseNav label="Pagination 分页器" />
            </CollapseItem>

            <CollapseItem label="输入">
              <CollapseNav label="Input 输入" />
              <CollapseNav label="Radio 单选" />
              <CollapseNav label="Checkbox 多选" />
              <CollapseNav label="Select 选择" />
              <CollapseNav label="Form 表单" />
              <CollapseNav label="Cascade 级联选择" />
              <CollapseNav label="DatePicker 日期选择" />
            </CollapseItem>

            <CollapseItem label="导航">
              <CollapseNav label="Nav 导航栏" />
              <CollapseNav label="Collapse 伸缩面板" url="collapse" />
            </CollapseItem>

            <CollapseItem label="弹窗">
              <CollapseNav label="Dialog 对话框" />
              <CollapseNav label="Popover 弹出层" />
              <CollapseNav label="Message 消息提示" />
            </CollapseItem>

            <CollapseItem label="内容">
              <CollapseNav label="List 列表" />
              <CollapseNav label="Tree 树" />
              <CollapseNav label="Table 表格" />
              <CollapseNav label="Carousel 轮播" />
              <CollapseNav label="Progress 进度条" />
              <CollapseNav label="Tab 页签" />
            </CollapseItem>
          </Collapse>
        </Aside>

        <Main style={ { marginLeft: '200px' } }>
          <IntroLayout></IntroLayout>
          <IntroButton></IntroButton>
          <IntroMark></IntroMark>
          <IntroCollapse></IntroCollapse>
        </Main>
      </Container>
    </div>
  );
}

export default App;
