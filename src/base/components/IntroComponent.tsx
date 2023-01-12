import { useEffect, useState } from 'react';
import { Table } from '@component/Table/Table';
import { TableColumn } from '@component/Table/TableColumn';
import Button from '@component/Button/Button';
import SourceCode from './SourceCode';

function IntroComponentItem(props: any) {
    const { title, info = '', component, code = '', style } = props;

    const [codeShow, setCodeShow] = useState(false);

    const switchCodePanel = () => setCodeShow(!codeShow);

    return (
        <article className='wdu-box intro__block'>
            <header>
                <h2>{title}</h2>
            </header>

            <p
                className='wdu-text-paragraph'
                style={{ textIndent: '20px', padding: '10px' }}>
                {info}
            </p>

            <section className='intro__main' style={style}>
                {component}
            </section>

            <section className='intro__code'>
                <SourceCode code={code} show={codeShow}></SourceCode>
                <p className='intro__code--title'>
                    <Button type='plain' size='small' onClick={switchCodePanel}>
                        查看代码
                    </Button>
                </p>
            </section>
        </article>
    );
}

function IntroApiItem(props: any) {
    return (
        <Table data={props.data} align='left'>
            <TableColumn prop={'attribute'} label={'属性'}></TableColumn>
            <TableColumn prop={'description'} label={'描述'}></TableColumn>
            <TableColumn prop={'value'} label={'取值'}></TableColumn>
            <TableColumn prop={'default'} label={'默认值'}></TableColumn>
        </Table>
    );
}

export function IntroComponent(props: any) {
    const { title, components, position, api, style } = props;

    return (
        <article className='intro__container' id={position}>
            <header>
                <h1>{title}</h1>
            </header>

            <section className='intro__main'>
                {components.map((item: any, index: number) => {
                    return (
                        <IntroComponentItem
                            key={index}
                            style={style}
                            {...item}></IntroComponentItem>
                    );
                })}
            </section>

            {api &&
                api.map((item: any, index: number) => {
                    return (
                        <section
                            className='intro__main'
                            key={index}
                            style={{
                                display: 'block',
                                padding: '0 20px',
                                margin: '50px 0',
                            }}>
                            <h4>{item.title}</h4>
                            <IntroApiItem
                                data={item.api}
                                key={index}></IntroApiItem>
                        </section>
                    );
                })}
        </article>
    );
}
