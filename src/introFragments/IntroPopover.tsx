import { IntroComponent } from '../base/components/IntroComponent';
import Popover from '@component/Popover/Popover';
import { propsIntroComponent } from '@base/types/commonInterface';
import Input from '@component/Input/Input';

const ex = 'this is a popover';

export default function () {
    const props: propsIntroComponent = {
        title: 'Popover 弹出框',
        position: 'popover',
        components: [
            {
                title: '触发方式',
                component: (
                    <div>
                        <Popover trigger='click' content={ex}>
                            <Input placeholder='点击触发'></Input>
                        </Popover>
                        <Popover trigger='hover' content={ex}>
                            <Input placeholder='悬浮触发'></Input>
                        </Popover>
                    </div>
                ),
                info: '',
                code: '',
            },
            {
                title: '触发位置',
                component: (
                    <Popover content={ex}>
                        <Input></Input>
                    </Popover>
                ),
                info: '',
                code: '',
            },
            {
                title: '自定义内容',
                component: (
                    <Popover content={ex}>
                        <Input></Input>
                    </Popover>
                ),
                info: '',
                code: '',
            },
        ],
    };

    return <IntroComponent {...props} />;
}
