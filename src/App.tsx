import { Collapse, CollapseItem, CollapseNav } from './components/Collapse/Collapse';
import { Container, Main, Aside } from './components/Layout/Layout';

import IntroButton from './introFragments/introButton';
import IntroLayout from './introFragments/introLayout';
import IntroCollapse from './introFragments/introCollapse';
import IntroMark from './introFragments/introMark';
import IntroMessage from './introFragments/introMessage';
import IntroDivider from './introFragments/introDivider';
import IntroInput from './introFragments/introInput';
import IntroRadio from './introFragments/introRadio';
import IntroCheckbox from './introFragments/introCheckbox';
import IntroTab from './introFragments/introTab';
import IntroSelect from './introFragments/introSelect';
import IntroSwitch from './introFragments/introSwitch';
import IntroTree from './introFragments/introTree';
import IntroPagination from './introFragments/introPagination';
import IntroImage from './introFragments/introImage';
import IntroModal from './introFragments/introModal';
import IntroTable from './introFragments/IntroTable';

import './App.less';

function App () {
  return (
    <div className="app">
      <Container width="1000px">
        <Aside side="left" width="200px" style={ { position: 'fixed', top: '0px' } }>
          <Collapse sticky>
            <CollapseItem label="快速上手">
              <CollapseNav label="介绍" />
              <CollapseNav label="安装" />
              <CollapseNav label="使用" />
            </CollapseItem>

            <CollapseItem label="通用">
              <CollapseNav label="Layout 布局" url="#layout" />
              <CollapseNav label="Button 按钮" url="#button" />
              <CollapseNav label="Mark 标记" url="#mark" />
              <CollapseNav label="Switch 开关" url="#switch" />
              <CollapseNav label="Divider 分割线" url="#divider" />
              <CollapseNav label="Pagination 分页器" url="#pagination" />
              <CollapseNav label="Nav 导航栏" disabled />
              <CollapseNav label="Progress 进度条" disabled />
              <CollapseNav label="Image 图片" url='#image' />
            </CollapseItem>

            <CollapseItem label="表单">
              <CollapseNav label="Input 输入" url="#input" />
              <CollapseNav label="Radio 单选" url="#radio" />
              <CollapseNav label="Checkbox 多选" url="#checkbox" />
              <CollapseNav label="Select 选择" url="#select" />
              <CollapseNav label="Form 表单" disabled />
              <CollapseNav label="Cascade 级联选择" disabled />
              <CollapseNav label="DatePicker 日期选择" disabled />
            </CollapseItem>

            <CollapseItem label="弹窗">
              <CollapseNav label="Modal 模态框" url="#modal" />
              <CollapseNav label="Message 消息" url="#message" />
              <CollapseNav label="Tooltips 提示" disabled />
            </CollapseItem>

            <CollapseItem label="内容">
              <CollapseNav label="List 列表" disabled />
              <CollapseNav label="Collapse 抽屉" url="#collapse" />
              <CollapseNav label="Tree 树" url="#tree" />
              <CollapseNav label="Table 表格" url="#table" />
              <CollapseNav label="Carousel 轮播" disabled />
              <CollapseNav label="Tab 动态面板" url="#tab" />
            </CollapseItem>
          </Collapse>
        </Aside>

        <Main style={ { marginLeft: '200px' } }>
          {/* 通用 */ }
          {/* <IntroLayout /> */ }
          <IntroButton />
          {/* <IntroMark /> */ }
          {/* <IntroSwitch /> */ }
          {/* <IntroDivider /> */ }
          {/* <IntroPagination /> */ }
          {/* <IntroImage /> */ }

          {/* 表单 */ }
          {/* <IntroInput />
          <IntroRadio />
          <IntroCheckbox />
          <IntroSelect /> */}

          {/* 弹窗 */ }
          {/* <IntroModal />
          <IntroMessage /> */}

          {/* 内容 */ }
          {/* <IntroCollapse />
          <IntroTree /> */}
          <IntroTable />
          {/* <IntroTab /> */ }
        </Main>
      </Container>
    </div>
  );
}

export default App;
