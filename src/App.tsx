import { Container, Main, Aside } from "@component/Layout/Layout";
import { NavMenu, NavMenuItem, SubNavMenu } from "@component/NavMenu/NavMenu";

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
        <Aside id="app__aside" side="left">
          <div id="navMenu-aside">
            <NavMenu>
              <SubNavMenu label="快速上手">
                <NavMenuItem label="介绍" />
                <NavMenuItem label="安装" />
                <NavMenuItem label="使用" />
              </SubNavMenu>

              <SubNavMenu label="通用">
                <NavMenuItem label="Layout 布局" to="#layout" />
                <NavMenuItem label="Button 按钮" to="#button" />
                <NavMenuItem label="Mark 标记" to="#mark" />
                <NavMenuItem label="Switch 开关" to="#switch" />
                <NavMenuItem label="Divider 分割线" to="#divider" />
                <NavMenuItem label="Pagination 分页" to="#pagination" />
                <NavMenuItem label="Image 图片" to="#image" />
                <NavMenuItem label="Progress 进度条" to="#progress" />
                <NavMenuItem label="Tag 标签" to="#tag" />
              </SubNavMenu>

              <SubNavMenu label="内容">
                <NavMenuItem label="Collapse 抽屉" to="#collapse" />
                <NavMenuItem label="NavMenu 导航菜单" to="#navMenu" />
                <NavMenuItem label="Tree 树" to="#tree" />
                <NavMenuItem label="Table 表格" to="#table" />
                <NavMenuItem label="Tab 动态面板" to="#tab" />
                <NavMenuItem label="Carousel 轮播" to="#carousel" />
                <NavMenuItem label="List 列表" to="#list" />
                <NavMenuItem label="Card 卡片" disabled />
              </SubNavMenu>

              <SubNavMenu label="表单">
                <NavMenuItem label="Input 输入" to="#input" />
                <NavMenuItem label="Radio 单选" to="#radio" />
                <NavMenuItem label="Checkbox 多选" to="#checkbox" />
                <NavMenuItem label="Select 选择" to="#select" />
                <NavMenuItem label="Form 表单" to="#form" />
                <NavMenuItem label="Textarea 文本域" to="#textarea" disabled />
                <NavMenuItem label="Cascade 级联选择" to="#cascade" disabled />
                <NavMenuItem
                  label="DatePicker 日期选择"
                  to="#datepicker"
                  disabled
                />
              </SubNavMenu>

              <SubNavMenu label="弹窗">
                <NavMenuItem label="Modal 模态框" to="#modal" />
                <NavMenuItem label="Message 消息" to="#message" />
                <NavMenuItem label="Tooltips 文字提示" to="#tooltip" />
                <NavMenuItem label="Nav 导航菜单" to="#nav" />
              </SubNavMenu>

              <SubNavMenu label="实用">
                <NavMenuItem label="Bullet 弹幕" disabled />
                <NavMenuItem label="Marker 水印" disabled />
                <NavMenuItem label="Occupation 占位" disabled />
                <NavMenuItem label="Scroll 瀑布流" disabled />
                <NavMenuItem label="BackTop 返回顶部" disabled />
              </SubNavMenu>
            </NavMenu>
          </div>
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
          {/* <IntroNav /> */}
        </Main>
      </Container>
    </div>
  );
}

export default App;
