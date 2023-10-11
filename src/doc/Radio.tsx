import { IntroComponent } from "@doc/IntroComponent";
import Radio from "@component/Radio/Radio";

export default function () {
    const props = {
        title: 'Radio 单选按钮',
        position: 'radio',
        components: [
            {
                component: (
                    <div className='wdu-row'>
                        <Radio label="选项一" name="academic" id='r1' value="1" />
                        <Radio label="选项二" name="academic" id="r2" value="2" />
                        <Radio label="选项三" name="academic" id="r3" value="3" />
                        <Radio label="选项四" name="academic" id="r4" value="4" />
                    </div>
                ),
                code: `
<Radio label="选项一" name="academic" id='r1' value="1" />

<Radio label="选项二" name="academic" id="r2" value="2" />

<Radio label="选项三" name="academic" id="r3" value="3" />

<Radio label="选项四" name="academic" id="r4" value="4" />`
            },
        ],
    };

    return <IntroComponent { ...props } />;
};