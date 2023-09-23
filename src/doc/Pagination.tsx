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
                component: <Pagination total={400} turnPage />,
                code: `
<Pagination total={ 1300 } turnPage/>`,
            },
            {
                title: '简洁分页',
                component: <Pagination total={400} simple />,
                code: `
<Pagination total={ 1300 } simple/>`,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
