import { IntroComponent } from "../base/components/IntroComponent";
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

const testData2 = [
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
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
        ime: 'dsywof583'
    }, {
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
        ime: 'dsywof583'
    }, {
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
        ime: 'dsywof583'
    }, {
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
        ime: 'dsywof583'
    }, {
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
        ime: 'dsywof583'
    }
];

const MyCell = (props: any) => {
    return <span style={{ backgroundColor: '#89982e', color: 'black' }}>{props.data} /吨</span>;
};

export default function () {
    const props = {
        title: 'Table 表格',
        position: 'table',
        components: [
            {
                title: '带标题的表格',
                info: '',
                component: (
                    <Table data={testData}
                        title="去年购买水果情况一览表">
                        <TableColumn index="fruit" label="水果" />
                        <TableColumn index="color" label="颜色" />
                        <TableColumn index="weight" label="重量" />
                        <TableColumn index="productArea" label="产地" />
                        <TableColumn index="date" label="日期" />
                    </Table>
                ),
                code: `
<Table data={ testData }
    title="去年购买水果情况一览表">
    <TableColumn index="fruit" label="水果" />
    <TableColumn index="color" label="颜色" />
    <TableColumn index="weight" label="重量" />
    <TableColumn index="productArea" label="产地" />
    <TableColumn index="date" label="日期" />
</Table>`
            },
            {
                title: '自定义单元格',
                info: '',
                component: (
                    <Table data={testData}>
                        <TableColumn index="fruit" label="水果" />
                        <TableColumn index="color" label="颜色"
                        />
                        <TableColumn index="weight" label="重量" template={<MyCell />} />
                    </Table>
                ),
                code: `
<Table data={ testData }>
    <TableColumn index="fruit" label="水果" />
    <TableColumn index="color" label="颜色" />
    <TableColumn index="weight" label="重量" template={ <MyCell /> } />
</Table>`
            },
            {
                title: '自定义表格的最大高度',
                info: '',
                component: (
                    <Table data={testData} maxHeight={200}>
                        <TableColumn index="fruit" label="水果" />
                        <TableColumn index="color" label="颜色"
                        />
                        <TableColumn index="weight" label="重量" />
                    </Table>
                ),
                code: `
<Table data={ testData } maxHeight={ 200 }>
    <TableColumn index="fruit" label="水果" />
    <TableColumn index="color" label="颜色" />
    <TableColumn index="weight" label="重量" />
</Table>`,
            },
            {
                title: '自定义列的宽度',
                component: (
                    <Table data={testData2}>
                        <TableColumn index="name" label="name" width={80} />
                        <TableColumn index="info" label="info" width={300} />
                        <TableColumn index="long" label="long" width={80} />
                        <TableColumn index="address" label="address" width={250} />
                        <TableColumn index="person" label="person" width={80} />
                        <TableColumn index="age" label="age" width={80} />
                        <TableColumn index="level" label="level" width={80} />
                        <TableColumn index="class" label="class" width={80} />
                        <TableColumn index="park" label="park" width={80} />
                        <TableColumn index="book" label="book" width={80} />
                        <TableColumn index="chess" label="chess" width={100} />
                        <TableColumn index="ime" label="ime" width={100} />
                    </Table>
                ),
                info: '',
                code: `
<Table data={ testData2 }>
    <TableColumn index="name" label="name" width={ 80 } />
    <TableColumn index="info" label="info" width={ 300 } />
    <TableColumn index="long" label="long" width={ 80 } />
    <TableColumn index="address" label="address" width={ 250 } />
    <TableColumn index="person" label="person" width={ 80 } />
    <TableColumn index="age" label="age" width={ 80 } />
    <TableColumn index="level" label="level" width={ 80 } />
    <TableColumn index="class" label="class" width={ 80 } />
    <TableColumn index="park" label="park" width={ 80 } />
    <TableColumn index="book" label="book" width={ 80 } />
    <TableColumn index="chess" label="chess" width={ 100 } />
    <TableColumn index="ime" label="ime" width={ 100 } />
</Table>`
            },
            {
                title: '文字对齐',
                component: (
                    <Table data={testData} >
                        <TableColumn index="fruit" label="水果" align="left" />
                        <TableColumn index="color" label="颜色"
                        />
                        <TableColumn index="weight" label="重量" align="right" />
                    </Table>
                ),
                info: '自定义表格列的文字水平对齐方向',
                code: `
<Table data={ testData } >
    <TableColumn index="fruit" label="水果" align="left" />
    <TableColumn index="color" label="颜色" />
    <TableColumn index="weight" label="重量" align="right" />
</Table>`
            },
            {
                title: '行序号',
                component: (
                    <Table data={testData} showNum>
                        <TableColumn index="fruit" label="水果" />
                        <TableColumn index="color" label="颜色" />
                        <TableColumn index="weight" label="重量" />
                    </Table>
                ),
                info: '显示列的序号',
                code: `
<Table data={ testData } countable>
    <TableColumn index="fruit" label="水果" />
    <TableColumn index="color" label="颜色" />
    <TableColumn index="weight" label="重量" />
</Table>`
            },
        ],
    };

    return <IntroComponent {...props} />;
};