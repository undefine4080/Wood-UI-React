import { IntroComponent } from "./IntroComponent";
import { Tab, TabPane } from "../components/Tab/Tab";
export default function () {
    const props = {
        title: 'Tab 动态面板',
        position: 'tab',
        components: [
            {
                component: (
                    <Tab>
                        <TabPane name="选项卡一">11111111</TabPane>
                        <TabPane name="选项卡二">22222222</TabPane>
                        <TabPane name="选项卡三">33333333</TabPane>
                    </Tab>
                ),
                code: `
<Tab>
    <TabPane name="选项卡一">11111111</TabPane>
    <TabPane name="选项卡二">22222222</TabPane>
    <TabPane name="选项卡三">33333333</TabPane>
</Tab>`
            }
        ],
    };

    return <IntroComponent { ...props } />;
}