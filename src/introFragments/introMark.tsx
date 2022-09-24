import { IntroComponent } from "../base/introComponent";
import Mark from "../components/Mark/Mark";

export default function () {
    const props = {
        title: 'Mark 标记',
        position: 'mark',
        components: [
            {
                title: '标记类型',
                component: (
                    <>
                        <div><Mark>革命不是请客吃饭</Mark>，不是绘画绣花，不能那样雅致，那样从容不迫，文质彬彬，那样温良恭俭让，革命是暴动，是一个阶级推翻另外一个阶级的运动。</div>

                        <br />

                        <div><Mark type="light">我们是为人民服务的</Mark>，所以，我们只要有缺点，就不怕别人批评指出。不管是什么人，谁向我们指出都行。只要你说得对，我们就改正。你说的办法对人民有好处，我们就照你的办</div>

                        <br />

                        <div><Mark type='remind'>要学习，不要骄傲，不能看不起人</Mark>，鹅蛋看不起鸡蛋，黑色金属看不起有色金属，这种看不起人的态度是不科学的。中国是大国，要有国际主义精神。</div>
                    </>
                ),
                info: '标记类型通过 type 定义',
                code: `
<div><Mark>革命不是请客吃饭</Mark>，不是绘画绣花，不能那样雅致，那样从容不迫，文质彬彬，那样温良恭俭让，革命是暴动，是一个阶级推翻另外一个阶级的运动。</div>

<div><Mark type="light">我们是为人民服务的</Mark>，所以，我们只要有缺点，就不怕别人批评指出。不管是什么人，谁向我们指出都行。只要你说得对，我们就改正。你说的办法对人民有好处，我们就照你的办</div>

<div><Mark type='remind'>要学习，不要骄傲，不能看不起人</Mark>，鹅蛋看不起鸡蛋，黑色金属看不起有色金属，这种看不起人的态度是不科学的。中国是大国，要有国际主义精神。</div>`
            }
        ]
    };

    return <IntroComponent { ...props } />;
}