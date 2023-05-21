import { IntroComponent } from "../base/components/IntroComponent";
import Mark from "../components/Mark/Mark";

export default function () {
    const props = {
        title: 'Mark 标记',
        position: 'mark',
        components: [
            {
                title: '标记类型',
                component: (
                    <div >
                        <p><Mark>革命不是请客吃饭</Mark>，不是绘画绣花，不能那样雅致，那样从容不迫，文质彬彬，那样温良恭俭让，革命是暴动，是一个阶级推翻另外一个阶级的运动。</p>

                        <p><Mark type="light">我们是为人民服务的</Mark>，所以，我们只要有缺点，就不怕别人批评指出。不管是什么人，谁向我们指出都行。只要你说得对，我们就改正。你说的办法对人民有好处，我们就照你的办</p>

                        <p><Mark type='remind'>要学习，不要骄傲，不能看不起人</Mark>，鹅蛋看不起鸡蛋，黑色金属看不起有色金属，这种看不起人的态度是不科学的。中国是大国，要有国际主义精神。</p>
                    </div >
                ),
                info: '标记类型通过 type 定义',
                code: `
<div >
    <p><Mark>革命不是请客吃饭</Mark>，不是绘画绣花，不能那
        样雅致，那样从容不迫，文质彬彬，那样温良恭俭让，革命是
        暴动，是一个阶级推翻另外一个阶级的运动。</p>

    <p><Mark type="light">我们是为人民服务的</Mark>，所以，
        我们只要有缺点，就不怕别人批评指出。不管是什么人，谁向
        我们指出都行。只要你说得对，我们就改正。你说的办法对人
        民有好处，我们就照你的办</p>

    <p><Mark type='remind'>要学习，不要骄傲，不能看不起人</
        Mark>，鹅蛋看不起鸡蛋，黑色金属看不起有色金属，这种看
    不起人的态度是不科学的。中国是大国，要有国际主义精神。
    </p>
</div >`
            },
            {
                title: '带跳转链接的标记',
                component: (
                    <p>青年者，人生之王，人生之春，人生之华也。—— <Mark link="https://zh.wikipedia.org/wiki/%E6%9D%8E%E5%A4%A7%E9%92%8A">李大钊</Mark></p>
                ),
                info: '',
                code: `
<p>
    青年者，人生之王，人生之春，人生之华也。—— 
    <Mark 
        link="https://zh.wikipedia.org/wiki/%E6%9D%8E%E5%A4%A7%E9%92%8A">
        李大钊</Mark>
</p>`
            }
        ],
        api: [
            {
                title: 'Mark 属性',
                api: [
                    {
                        attribute: 'type',
                        description: '标记类型',
                        value: 'important (重要) | light (高亮) | remind (提醒)',
                        default: 'important',
                    },
                    {
                        attribute: 'link',
                        description: '标记的链接',
                        value: 'string',
                        default: '/',
                    }
                ]
            }
        ]
    };

    return <IntroComponent {...props} />;
}