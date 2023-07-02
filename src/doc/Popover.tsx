import { IntroComponent } from './IntroComponent';
import Popover from '@component/Popover/Popover';
import { propsIntroComponent } from '@common/types';
import Button from '@component/Button/Button';
import { Table, TableColumn } from '@component/Table/Table';

const ex = 'this is a popover';

const testData = [
    {
        fruit: '苹果',
        color: '红色',
        weight: 3478,
        productArea: '陕西',
        date: '2020-04-07',
    },
    {
        fruit: '香蕉',
        color: '黄色',
        weight: 1267,
        productArea: '海南',
        date: '2021-05-27',
    },
    {
        fruit: '荔枝',
        color: '红色',
        weight: 8087,
        productArea: '广东',
        date: '2022-01-23',
    },
];

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
                        <Popover content={ex} position='top'>
                            <Button>顶部</Button>
                        </Popover>

                        <Popover content={ex} position='bottom'>
                            <Button>底部</Button>
                        </Popover>

                        <Popover content={ex} position='left'>
                            <Button>左侧</Button>
                        </Popover>

                        <Popover content={ex} position='right'>
                            <Button>右侧</Button>
                        </Popover>
                    </>
                ),
                info: '',
                code: '',
            },
            {
                title: '自定义内容',
                component: (
                    <>
                        <Popover
                            content={
                                <Table
                                    data={testData}
                                    title='去年购买水果情况一览表'>
                                    <TableColumn prop='fruit' label='水果' />
                                    <TableColumn prop='color' label='颜色' />
                                    <TableColumn prop='weight' label='重量' />
                                    <TableColumn
                                        prop='productArea'
                                        label='产地'
                                    />
                                    <TableColumn prop='date' label='日期' />
                                </Table>
                            }>
                            <Button>自定义内容</Button>
                        </Popover>
                    </>
                ),
                info: '',
                code: '',
            },
        ],
    };

    return <IntroComponent {...props} />;
}
