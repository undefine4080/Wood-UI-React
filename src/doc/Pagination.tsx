import { IntroComponent } from './IntroComponent';
import Pagination from '../components/Pagination/Pagination';
import { propsIntroComponent } from '@common/types';

export default function () {
    const props: propsIntroComponent = {
        title: 'Pagination 分页',
        position: 'pagination',
        components: [
            {
                title: '基础分页',
                component: <Pagination total={400} />,
                code: `
<Pagination total={ 1300 }  />`,
            },
            {
                title: '选择分页大小',
                info: '默认分页大小为每次 20 条数据，可以启用 limitChange 进行修改',
                component: <Pagination total={400} limitChange />,
                code: `
<Pagination total={ 1300 } limitChange/>`,
            },
            {
                title: '跳转到指定页码',
                component: <Pagination total={400} jump />,
                code: `
<Pagination total={ 1300 } turnPage/>`,
            },
            {
                title: '简洁分页',
                component: <Pagination total={400} simple />,
                code: `
<Pagination total={ 1300 } simple/>`,
            },
            {
                title: '分页器回调事件',
                component: (
                    <Pagination
                        total={400}
                        limitChange
                        jump
                        onJump={(value) => {
                            console.log('jump', value);
                        }}
                        onLimitChange={(value) => {
                            console.log('limitChange', value);
                        }}
                        onNext={(value) => {
                            console.log('next', value);
                        }}
                        onPrev={(value) => {
                            console.log('prev', value);
                        }}
                        onPageChange={(value) => {
                            console.log('pageChange', value);
                        }}
                    />
                ),
                code: `
<Pagination
    total={400}
    limitChange
    jump
    onJump={(value) => {
        console.log('jump', value);
    }}
    onLimitChange={(value) => {
        console.log('limitChange', value);
    }}
    onNext={(value) => {
        console.log('next', value);
    }}
    onPrev={(value) => {
        console.log('prev', value);
    }}
    onPageChange={(value) => {
        console.log('pageChange', value);
    }}
/>`,
            },
        ],
        api: [
            {
                title: 'Pagination 属性',
                api: [
                    {
                        attribute: 'pageButtonCount',
                        description: '分页按钮数量',
                        value: 'Number',
                        default: '5',
                    },
                    {
                        attribute: 'total',
                        description: '总数',
                        value: 'Number',
                        default: '0',
                    },
                    {
                        attribute: 'limit',
                        description: '分页大小',
                        value: 'Number',
                        default: '20',
                    },
                    {
                        attribute: 'page',
                        description: '当前页码',
                        value: 'Number',
                        default: '1',
                    },
                    {
                        attribute: 'limitChange',
                        description: '是否启用分页大小修改',
                        value: 'Boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'jump',
                        description: '是否启用指定页码跳转',
                        value: 'Boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'simple',
                        description: '是否启用简洁模式',
                        value: 'Boolean',
                        default: 'false',
                    },
                ],
            },
            {
                title: 'Pagination 事件',
                api: [
                    {
                        attribute: 'onPageChange',
                        description: '分页页码改变时触发',
                        value: '(page: number) => void',
                        default: '',
                    },
                    {
                        attribute: 'onLimitChange',
                        description: '分页大小改变时触发',
                        value: '(limit: number) => void',
                        default: '',
                    },
                    {
                        attribute: 'onPrev',
                        description: '上一页按钮点击时触发',
                        value: '(page: number) => void',
                        default: '',
                    },
                    {
                        attribute: 'onNext',
                        description: '下一页按钮点击时触发',
                        value: '(page: number) => void',
                        default: '',
                    },
                    {
                        attribute: 'onJump',
                        description: '跳转到指定页码时触发',
                        value: '(page: number) => void',
                        default: '',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
