import { IntroComponent } from '../base/components/IntroComponent';
import { Table, TableColumn } from '../components/Table/Table';
import Tag from '@component/Tag/Tag';

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
];

const MyCell = (props: any) => {
    return (
        <span style={{ backgroundColor: '#89982e', color: 'black' }}>
            <Tag value={`${props.data} /吨`}></Tag>
        </span>
    );
};

// 基本用法
const basicUsing = {
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
];

<Table data={ testData }
title="去年购买水果情况一览表">
<TableColumn prop="fruit" label="水果" />
<TableColumn prop="color" label="颜色" />
<TableColumn prop="weight" label="重量" />
<TableColumn prop="productArea" label="产地" />
<TableColumn prop="date" label="日期" />
</Table>`,
};

// 自定义单元格
const defineCell = {
    title: '自定义单元格',
    info: '',
    component: (
        <Table data={testData}>
            <TableColumn prop='fruit' label='水果' />
            <TableColumn prop='color' label='颜色' />
            <TableColumn prop='weight' label='重量' template={<MyCell />} />
        </Table>
    ),
    code: `
const MyCell = (props: any) => {
    return (
        <span style={{ backgroundColor: '#89982e', color: 'black' }}>
            <Tag value={props.data + '/吨'}></Tag>
        </span>
    )
}

<Table data={ testData }>
    <TableColumn prop="fruit" label="水果" />
    <TableColumn prop="color" label="颜色" />
    <TableColumn prop="weight" label="重量" template={ <MyCell /> } />
</Table>`,
};

// 表格的最大高度
const maxHeight = {
    title: '自定义表格的最大高度',
    info: '',
    component: (
        <Table data={[...testData, ...testData]} maxHeight={200}>
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
};

// 自定义列的宽度
const columnWidth = {
    title: '自定义列的宽度',
    component: (
        <Table data={testDataLong}>
            <TableColumn prop='name' label='name' width={80} />
            <TableColumn prop='info' label='info' width={300} />
            <TableColumn prop='long' label='long' width={80} />
            <TableColumn prop='address' label='address' width={250} />
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
const testDataLong = [
    {
        name: 'VG^&*H',
        info:'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuyerukwehfbvhb',
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
        info:'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuyerukwehfbvhb',
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
        info:'hksajdhfiasfihhaujsdkhjfaiewufhuayhkwjksdfuaywheksdhfyawukhfyeuuhuyerukwehfbvhb',
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

<Table data={ testDataLong }>
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
};

// 行序号
const rowNum = {
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
};

export default function () {
    const props = {
        title: 'Table 表格',
        position: 'table',
        components: [basicUsing, defineCell, maxHeight, columnWidth, rowNum],
        api: [
            {
                title: 'Table 属性',
                api: [
                    {
                        attribute: 'data',
                        description: '表格的数据来源',
                        value: 'Object',
                        default: '/',
                    },
                    {
                        attribute: 'title',
                        description: '表格的标题',
                        value: 'String',
                        default: '/',
                    },
                    {
                        attribute: 'maxHeight',
                        description:
                            '表格的最大高度，当数据量大时，设置 maxHeight 可以使表格溢出滚动',
                        value: 'String | Number',
                        default: '/',
                    },
                    {
                        attribute: 'align',
                        description: '统一设置表格中单元格的文字对齐方式',
                        value: 'left | center | right',
                        default: 'left',
                    },
                    {
                        attribute: 'showNum',
                        description: '是否显示行序号',
                        value: 'Boolean',
                        default: 'false',
                    },
                ],
            },
            {
                title: 'Table 事件',
                api: [
                    {
                        attribute: 'onRowClick',
                        description:
                            '行单击事件回调，rowData 为行数据， event 为事件对象',
                        value: 'function(rowData, event){}',
                        default: '/',
                    },
                    {
                        attribute: 'onCellClick',
                        description:
                            '单元格单击事件回调，cellData 为单元格数据， event 为事件对象',
                        value: 'function(cellData, event){}',
                        default: '/',
                    },
                ],
            },
            {
                title: 'TableColumn 属性',
                api: [
                    {
                        attribute: 'width',
                        description:
                            '表格列的宽度，如不设置，则列的宽度为自适应',
                        value: 'String | Number',
                        default: '/',
                    },
                    {
                        attribute: 'prop',
                        description: '表格列渲染的数据的键名',
                        value: 'String',
                        default: '/',
                    },
                    {
                        attribute: 'align',
                        description:
                            '定义表格列的单元格文字的对齐方式，会覆盖在 Table 上定义的 align 值',
                        value: 'left | center | right',
                        default: '/',
                    },
                    {
                        attribute: 'label',
                        description: '当前的表格列的表头单元格内容',
                        value: 'String',
                        default: '/',
                    },
                    {
                        attribute: 'template',
                        description: '自定义当前列的单元格模板',
                        value: 'JSX | String | Number',
                        default: '/',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
