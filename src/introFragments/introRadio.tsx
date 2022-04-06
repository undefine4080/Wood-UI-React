import { IntroComponent } from "../base/introComponent";
import { Radio } from "../components/Radio/Radio";

export default function () {
    const props = {
        title: 'Radio 单选按钮',
        position: 'radio',
        components: [
            {
                component: <Radio label="快乐" name="academic" id='r1' value="1" />,
            },
            {
                component: <Radio label="激动" name="academic" id="r2" value="2" />,
            },
            {
                component: <Radio label="愧疚" name="academic" id="r3" value="3" />,
            },
            {
                component: <Radio label="痛快" name="academic" id="r4" value="4" />,
            }
        ],
        code: `
        import { Radio } from "../components/Radio/Radio";
        
        <Radio label="快乐" name="academic" id='r1' value="1" />
        <Radio label="激动" name="academic" id="r2" value="2" />
        <Radio label="愧疚" name="academic" id="r3" value="3" />
        <Radio label="痛快" name="academic" id="r4" value="4" />
        `
    };

    return <IntroComponent { ...props } />;
};