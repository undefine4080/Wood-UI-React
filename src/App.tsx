import { Collapse, CollapseItem, CollapseNav } from '@component/Collapse/Collapse';
import { Container, Main, Aside } from '@component/Layout/Layout';

import IntroButton from '@intro/introButton';
import IntroLayout from '@intro/introLayout';
import IntroCollapse from '@intro/introCollapse';
import IntroMark from '@intro/introMark';
import IntroMessage from '@intro/introMessage';
import IntroDivider from '@intro/introDivider';
import IntroCheckbox from '@intro/introCheckbox';
import IntroTab from '@intro/introTab';
import IntroSelect from '@intro/introSelect';
import IntroSwitch from '@intro/introSwitch';
import IntroTree from '@intro/introTree';
import IntroPagination from '@intro/introPagination';
import IntroImage from '@intro/introImage';
import IntroModal from '@intro/introModal';
import IntroTable from '@intro/IntroTable';
import IntroCarousel from '@intro/IntroCarousel';
import IntroForm from '@intro/IntroForm';
import IntroInput from '@intro/introInput';
import IntroRadio from '@intro/introRadio';

import './App.less';

function App () {
  return (
    <div className="app">
      <Container width="1280px">
        <Aside side="left" width="200px" style={ { position: 'fixed', top: '0px' } }>
          <Collapse sticky>
            {/* <CollapseItem label="快速上手">
              <CollapseNav label="介绍" />
              <CollapseNav label="安装" />
              <CollapseNav label="使用" />
            </CollapseItem> */}

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
              <CollapseNav label="Form 表单" url='#form' />
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
              <CollapseNav label="Tab 动态面板" url="#tab" />
              <CollapseNav label="Carousel 轮播" url="#carousel" />
            </CollapseItem>
          </Collapse>
        </Aside>

        <Main style={ { marginLeft: '200px' } }>
          {/* 通用 */ }
          <IntroLayout />
          <IntroButton />
          <IntroMark />
          <IntroSwitch />
          <IntroDivider />
          <IntroPagination />
          <IntroImage />

          {/* 表单 */ }
          <IntroInput />
          <IntroRadio />
          <IntroCheckbox />
          <IntroSelect />
          <IntroForm />

          {/* 弹窗 */ }
          <IntroModal />
          <IntroMessage />

          {/* 内容 */ }
          <IntroCollapse />
          <IntroTree />
          <IntroTable />
          <IntroTab />
          <IntroCarousel />
        </Main>
      </Container>
    </div>
  );
}

export default App;
