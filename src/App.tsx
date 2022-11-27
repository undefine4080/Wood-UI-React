import {
  Collapse,
  CollapseItem,
  CollapseNav,
} from "@component/Collapse/Collapse";
import { Container, Main, Aside } from "@component/Layout/Layout";

import IntroButton from "@intro/introButton";
import IntroLayout from "@intro/introLayout";
import IntroCollapse from "@intro/introCollapse";
import IntroMark from "@intro/introMark";
import IntroMessage from "@intro/introMessage";
import IntroDivider from "@intro/introDivider";
import IntroCheckbox from "@intro/introCheckbox";
import IntroTab from "@intro/introTab";
import IntroSelect from "@intro/introSelect";
import IntroSwitch from "@intro/introSwitch";
import IntroTree from "@intro/introTree";
import IntroPagination from "@intro/introPagination";
import IntroImage from "@intro/introImage";
import IntroModal from "@intro/introModal";
import IntroTable from "@intro/IntroTable";
import IntroCarousel from "@intro/IntroCarousel";
import IntroForm from "@intro/IntroForm";
import IntroInput from "@intro/introInput";
import IntroRadio from "@intro/introRadio";
import IntroNav from "@intro/IntroNav";
import IntroProgress from "@intro/IntroProgress";
import IntroTag from "@intro/IntroTag";
import IntroTooltip from "@intro/IntroTooltip";
import IntroList from "@intro/IntroList";
import IntroNavMenu from "@intro/IntroNavMenu";

import "./App.less";

function App() {
  return (
    <div className="app">
      <Container width="1280px">
        <Aside id="app__aside" side="left" width="200px">
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
              <CollapseNav label="Pagination 分页" url="#pagination" />
              <CollapseNav label="Image 图片" url="#image" />
              <CollapseNav label="Progress 进度条" url="#progress" />
              <CollapseNav label="Tag 标签" url="#tag" />
            </CollapseItem>

            <CollapseItem label="内容">
              <CollapseNav label="Collapse 抽屉" url="#collapse" />
              <CollapseNav label="NavMenu 导航菜单" url="#navMenu" />
              <CollapseNav label="Tree 树" url="#tree" />
              <CollapseNav label="Table 表格" url="#table" />
              <CollapseNav label="Tab 动态面板" url="#tab" />
              <CollapseNav label="Carousel 轮播" url="#carousel" />
              <CollapseNav label="List 列表" url="#list" />
              <CollapseNav label="Card 卡片" disabled />
            </CollapseItem>

            <CollapseItem label="表单">
              <CollapseNav label="Input 输入" url="#input" />
              <CollapseNav label="Radio 单选" url="#radio" />
              <CollapseNav label="Checkbox 多选" url="#checkbox" />
              <CollapseNav label="Select 选择" url="#select" />
              <CollapseNav label="Form 表单" url="#form" />
              <CollapseNav label="Textarea 文本域" url="#textarea" disabled />
              <CollapseNav label="Cascade 级联选择" url="#cascade" disabled />
              <CollapseNav
                label="DatePicker 日期选择"
                url="#datepicker"
                disabled
              />
            </CollapseItem>

            <CollapseItem label="弹窗">
              <CollapseNav label="Modal 模态框" url="#modal" />
              <CollapseNav label="Message 消息" url="#message" />
              <CollapseNav label="Tooltips 文字提示" url="#tooltip" />
              <CollapseNav label="Nav 导航菜单" url="#nav" />
            </CollapseItem>

            <CollapseItem label="实用">
              <CollapseNav label="Bullet 弹幕" disabled />
              <CollapseNav label="Marker 水印" disabled />
              <CollapseNav label="Occupation 占位" disabled />
              <CollapseNav label="Scroll 瀑布流" disabled />
              <CollapseNav label="BackTop 返回顶部" disabled />
            </CollapseItem>
          </Collapse>
        </Aside>

        <Main id="app__main">
          {/* 通用 */}
          <IntroLayout />
          <IntroButton />
          <IntroMark />
          <IntroSwitch />
          <IntroDivider />
          <IntroPagination />
          <IntroImage />
          <IntroProgress />
          <IntroTag />

          {/* 内容 */}
          <IntroCollapse />
          <IntroNavMenu />
          <IntroTree />
          <IntroTable />
          <IntroTab />
          <IntroCarousel />
          <IntroList />

          {/* 表单 */}
          <IntroInput />
          <IntroRadio />
          <IntroCheckbox />
          <IntroSelect />
          <IntroForm />

          {/* 弹窗 */}
          <IntroModal />
          <IntroMessage />
          <IntroTooltip />
          <IntroNav />
        </Main>
      </Container>
    </div>
  );
}

export default App;
