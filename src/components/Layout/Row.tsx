interface RowOptions
{
    flex?: boolean,
    justify?: string,
    align?: string,
    children?: any;
}

const PREFIX = 'wdu-row';

export function Row ( props: object )
{
    const defaultOptions: RowOptions = {
        flex: false
    };
    const options: RowOptions = Object.assign( defaultOptions, props );
    const { flex, justify, align, children } = options;
    let classList = `${ PREFIX }${ flex ? '-flex' : '' } ${ PREFIX }${ flex && justify ? '-'+justify : '' } ${ flex && align ? '-'+align : '' }`;
    return (
        <div className={ classList }>{ children }</div>
    );
}