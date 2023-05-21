import { IntroComponent } from "../base/components/IntroComponent";
import { Select, Option } from "../components/Select/Select";
export default function () {
    const props = {
        title: 'Select 下拉选择',
        position: 'select',
        components: [
            {
                component: (
                    <>
                        <Select name="survey" value="city" placeholder="请选择一个城市">
                            <Option label="北京" value="beijing" />
                            <Option label="上海" value="shanghai" />
                            <Option label="南宁" value="nanning" />
                            <Option label="兰州" value="lanzhou" />
                            <Option label="海口" value="haikou" />
                        </Select>

                        <Select name="survey" label="国家" value="China">
                            <Option label="中国" value="China" />
                            <Option label="俄罗斯" value="Russia" />
                            <Option label="巴西" value="Brazil" />
                            <Option label="印度" value="Indian" />
                            <Option label="美国" value="American" />
                        </Select>

                        <Select name="survey" label="颜色" >
                            <Option label="红色" value="red" />
                            <Option label="绿色" value="green" />
                            <Option label="黑色" value="black" />
                            <Option label="蓝色" value="blue" />
                        </Select>
                    </>
                ),
                code: `
<Select name="survey" label="城市" placeholder="请选择一个城市">
    <Option label="北京" value="beijing" />
    <Option label="上海" value="shanghai" />
    <Option label="南宁" value="nanning" />
    <Option label="兰州" value="lanzhou" />
    <Option label="海口" value="haikou" />
</Select>

<Select name="survey" label="国家" value="China">
    <Option label="中国" value="China" />
    <Option label="俄罗斯" value="Russia" />
    <Option label="巴西" value="Brazil" />
    <Option label="印度" value="Indian" />
    <Option label="美国" value="American" />
</Select>

<Select name="survey" label="颜色" >
    <Option label="红色" value="red" />
    <Option label="绿色" value="green" />
    <Option label="黑色" value="black" />
    <Option label="蓝色" value="blue" />
</Select>`
            },
        ],
    };

    return <IntroComponent { ...props } />;
}