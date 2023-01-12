import { IntroComponent } from '../base/components/IntroComponent';
import { Table, TableColumn } from '../components/Table/Table';

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
    {
        fruit: '蓝莓',
        color: '蓝色',
        weight: 7358,
        productArea: '江西',
        date: '2020-04-07',
    },
    {
        fruit: '西瓜',
        color: '绿色',
        weight: 1244,
        productArea: '河南',
        date: '2020-09-11',
    },
];

const testDataLong = [
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
    {
        name: 'VG^&*H',
        info: 'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuayerukwehfbvhb',
        long: 623747,
        address: 'hyfhhfiherfreojiufjciusgjishreu',
        person: 'sdhafh',
        age: 34,
        level: 'A',
        class: 43543,
        park: 'sadfai',
        book: '7843r',
        chess: 'iwe6429',
        ime: 'dsywof583',
    },
];

const MyCell = (props: any) => {
    return (
        <span style={{ backgroundColor: '#89982e', color: 'black' }}>
            {props.data} /吨
        </span>
    );
};

export default function () {
    const props = {
        title: 'Table 表格',
        position: 'table',
        components: [
            {
                title: '基本用法',
                info: '',
                component: (
                    <Table data={testData} title='去年购买水果情况一览表'>
                        <TableColumn prop='fruit' label='水果' />
                        <TableColumn prop='color' label='颜色' />
                        <TableColumn prop='weight' label='重量' />
                        <TableColumn prop='productArea' label='产地' />
                        <TableColumn prop='date' label='日期' />
                    </Table>
                ),
                code: `
import {Table, TableColumn} from 'wood-ui-react';

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
    {
        fruit: '蓝莓',
        color: '蓝色',
        weight: 7358,
        productArea: '江西',
        date: '2020-04-07',
    },
    {
        fruit: '西瓜',
        color: '绿色',
        weight: 1244,
        productArea: '河南',
        date: '2020-09-11',
    },
];

<Table data={ testData }
    title="去年购买水果情况一览表">
    <TableColumn prop="fruit" label="水果" />
    <TableColumn prop="color" label="颜色" />
    <TableColumn prop="weight" label="重量" />
    <TableColumn prop="productArea" label="产地" />
    <TableColumn prop="date" label="日期" />
</Table>`,
            },
            {
                title: '自定义单元格',
                info: '',
                component: (
                    <Table data={testData}>
                        <TableColumn prop='fruit' label='水果' />
                        <TableColumn prop='color' label='颜色' />
                        <TableColumn
                            prop='weight'
                            label='重量'
                            template={<MyCell />}
                        />
                    </Table>
                ),
                code: `
<Table data={ testData }>
    <TableColumn prop="fruit" label="水果" />
    <TableColumn prop="color" label="颜色" />
    <TableColumn prop="weight" label="重量" template={ <MyCell /> } />
</Table>`,
            },
            {
                title: '自定义表格的最大高度',
                info: '',
                component: (
                    <Table data={testData} maxHeight={200}>
                        <TableColumn prop='fruit' label='水果' />
                        <TableColumn prop='color' label='颜色' />
                        <TableColumn prop='weight' label='重量' />
                    </Table>
                ),
                code: `
<Table data={ testData } maxHeight={ 200 }>
    <TableColumn prop="fruit" label="水果" />
    <TableColumn prop="color" label="颜色" />
    <TableColumn prop="weight" label="重量" />
</Table>`,
            },
            {
                title: '自定义列的宽度',
                component: (
                    <Table data={testDataLong}>
                        <TableColumn prop='name' label='name' width={80} />
                        <TableColumn prop='info' label='info' width={300} />
                        <TableColumn prop='long' label='long' width={80} />
                        <TableColumn
                            prop='address'
                            label='address'
                            width={250}
                        />
                        <TableColumn prop='person' label='person' width={80} />
                        <TableColumn prop='age' label='age' width={80} />
                        <TableColumn prop='level' label='level' width={80} />
                        <TableColumn prop='class' label='class' width={80} />
                        <TableColumn prop='park' label='park' width={80} />
                        <TableColumn prop='book' label='book' width={80} />
                        <TableColumn prop='chess' label='chess' width={100} />
                        <TableColumn prop='ime' label='ime' width={100} />
                    </Table>
                ),
                info: '',
                code: `
<Table data={ testData2 }>
    <TableColumn prop="name" label="name" width={ 80 } />
    <TableColumn prop="info" label="info" width={ 300 } />
    <TableColumn prop="long" label="long" width={ 80 } />
    <TableColumn prop="address" label="address" width={ 250 } />
    <TableColumn prop="person" label="person" width={ 80 } />
    <TableColumn prop="age" label="age" width={ 80 } />
    <TableColumn prop="level" label="level" width={ 80 } />
    <TableColumn prop="class" label="class" width={ 80 } />
    <TableColumn prop="park" label="park" width={ 80 } />
    <TableColumn prop="book" label="book" width={ 80 } />
    <TableColumn prop="chess" label="chess" width={ 100 } />
    <TableColumn prop="ime" label="ime" width={ 100 } />
</Table>`,
            },
            {
                title: '文字对齐',
                component: (
                    <Table data={testData}>
                        <TableColumn prop='fruit' label='水果' align='left' />
                        <TableColumn prop='color' label='颜色' />
                        <TableColumn
                            prop='weight'
                            label='重量'
                            align='right'
                        />
                    </Table>
                ),
                info: '自定义表格列的文字水平对齐方向',
                code: `
<Table data={ testData } >
    <TableColumn prop="fruit" label="水果" align="left" />
    <TableColumn prop="color" label="颜色" />
    <TableColumn prop="weight" label="重量" align="right" />
</Table>`,
            },
            {
                title: '行序号',
                component: (
                    <Table data={testData} showNum>
                        <TableColumn prop='fruit' label='水果' />
                        <TableColumn prop='color' label='颜色' />
                        <TableColumn prop='weight' label='重量' />
                    </Table>
                ),
                info: '显示列的序号',
                code: `
<Table data={ testData } countable>
    <TableColumn prop="fruit" label="水果" />
    <TableColumn prop="color" label="颜色" />
    <TableColumn prop="weight" label="重量" />
</Table>`,
            },
            {
                title: '',
                component: (
                    <Table data={testData} showNum>
                        <TableColumn prop='fruit' label='水果' />
                        <TableColumn prop='color' label='颜色' />
                        <TableColumn prop='weight' label='重量' />
                    </Table>
                ),
                info: '',
                code: `
                `,
            },
        ],
        api: [
            {
                title: 'Table 属性',
                api: [
                    {
                        attribute: 'data',
                        description: '',
                        value: '',
                        default: '',
                    },
                    {
                        attribute: 'title',
                        description: '',
                        value: '',
                        default: '',
                    },
                    {
                        attribute: 'maxHeight',
                        description: '',
                        value: '',
                        default: '',
                    },
                    {
                        attribute: 'align',
                        description: '',
                        value: '',
                        default: '',
                    },
                    {
                        attribute: 'showNum',
                        description: '',
                        value: '',
                        default: '',
                    },
                ],
            },
            {
                title: 'Table 事件',
                api: [
                    {
                        attribute: 'onRowClick',
                        description: '',
                        value: '',
                        default: '',
                    },
                    {
                        attribute: 'onCellClick',
                        description: '',
                        value: '',
                        default: '',
                    },
                ],
            },
            {
                title: 'TableColumn 属性',
                api: [
                    {
                        attribute: 'prop',
                        description: '',
                        value: '',
                        default: '',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
