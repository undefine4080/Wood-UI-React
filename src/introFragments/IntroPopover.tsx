import { IntroComponent } from '../base/components/IntroComponent';
import Popover from '@component/Popover/Popover';
import { propsIntroComponent } from '@base/types/commonInterface';
import Button from '@component/Button/Button';

const ex = 'this is a popover';

export default function () {
    const props: propsIntroComponent = {
        title: 'Popover 弹出框',
        position: 'popover',
        components: [
            {
                title: '触发方式',
                component: (
                    <>
                        <Popover trigger='click' content={ex}>
                            <Button>点击触发</Button>
                        </Popover>
                        <Popover trigger='hover' content={ex}>
                            <Button>悬浮触发</Button>
                        </Popover>
                    </>
                ),
                info: '',
                code: '',
            },
            {
                title: '触发位置',
                component: (
                    <>
                        {/* <Popover content={ex} position='top'>
                            <Button>顶部</Button>
                        </Popover> */}

                        <Popover content={ex} position='bottom'>
                            <Button>底部</Button>
                        </Popover>

                        {/* <Popover content={ex} position='left'>
                            <Button>左侧</Button>
                        </Popover>

                        <Popover content={ex} position='right'>
                            <Button>右侧</Button>
                        </Popover> */}
                    </>
                ),
                info: '',
                code: '',
            },
            // {
            //     title: '自定义内容',
            //     component: <Popover content={ex}></Popover>,
            //     info: '',
            //     code: '',
            // },
        ],
    };

    return <IntroComponent {...props} />;
}
