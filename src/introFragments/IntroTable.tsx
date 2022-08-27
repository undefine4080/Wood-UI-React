import { IntroComponent } from "../base/introComponent";
import { Table, TableColumn } from "../components/Table/Table";

const testData = [
    {
        fruit: '苹果',
        color: '红色',
        weight: 3478,
        productArea: '陕西',
        date: '2020-04-07'
    },
    {
        fruit: '香蕉',
        color: '黄色',
        weight: 1267,
        productArea: '海南',
        date: '2021-05-27'
    }, {
        fruit: '荔枝',
        color: '红色',
        weight: 8087,
        productArea: '广东',
        date: '2022-01-23'
    }, {
        fruit: '蓝莓',
        color: '蓝色',
        weight: 7358,
        productArea: '江西',
        date: '2020-04-07'
    }, {
        fruit: '西瓜',
        color: '绿色',
        weight: 1244,
        productArea: '河南',
        date: '2020-09-11'
    }, {
        fruit: '水蜜桃',
        color: '粉色',
        weight: 2368,
        productArea: '四川',
        date: '2020-08-07'
    },
];

const MyCell = ( props: any ) => {
    return <span style={ { backgroundColor: '#89982e', color: 'black' } }>{ props.data } /吨</span>;
};

export default function () {
    const props = {
        title: 'Table 表格',
        position: 'table',
        components: [
            {
                component: (
                    <Table data={ testData }
                        title="去年购买水果情况一览表">
                        <TableColumn key={ 1 } index="fruit" label="水果" />
                        <TableColumn key={ 2 } index="color" label="颜色" />
                        <TableColumn key={ 3 } index="weight" label="重量" />
                        <TableColumn key={ 3 } index="productArea" label="产地" />
                        <TableColumn key={ 3 } index="date" label="日期" />
                    </Table>
                ),
                info: '带标题的表格'
            },
            {
                component: (
                    <Table data={ testData }>
                        <TableColumn key={ 1 } index="fruit" label="水果" />
                        <TableColumn key={ 2 } index="color" label="颜色"
                        />
                        <TableColumn key={ 3 } index="weight" label="重量" template={ <MyCell /> } />
                    </Table>
                ),
                info: '自定义单元格'
            },
        ],
        code: `
        
        `
    };

    return <IntroComponent { ...props } />;
};