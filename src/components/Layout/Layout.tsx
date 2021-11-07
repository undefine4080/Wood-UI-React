import { getComponentByName } from '../../utils.ts';
import commonOptions, { commonStyle } from '../../base/commonInterface';

// Container 容器
interface ContainerOptions extends commonOptions { }
export function Container ( props: ContainerOptions )
{
    const PREFIX = 'wdu-container';
    const { className, width, height, children, style } = props;

    const componentStyle: commonStyle = {};
    componentStyle.width = width ?? '';
    componentStyle.height = height ?? '';

    if ( style ) Object.assign( componentStyle, style );

    const aside: Array<Object> = getComponentByName( children, 'Aside' );
    const main: Array<Object> = getComponentByName( children, 'Main' );
    const header: Array<Object> = getComponentByName( children, 'Header' );
    const footer: Array<Object> = getComponentByName( children, 'Footer' );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>
            <div className="wdu-header">{ header }</div>
            <div className="wdu-main-container">
                { aside }
                { main }
            </div>
            <div className="wdu-footer">{ footer }</div>
        </div>
    );
}

// Header 顶部
interface HeaderOptions extends commonOptions { }
export function Header ( props: HeaderOptions )
{
    const PREFIX = 'wdu-header';
    const { className, children, style } = props;

    const componentStyle: object = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
}

// Aside 侧边
interface AsideOptions extends commonOptions
{
    side?: string,
}
export function Aside ( props: AsideOptions )
{
    const PREFIX = 'wdu-aside';
    const defaultOptions: AsideOptions = {
        side: 'left',
    };

    const options: AsideOptions = Object.assign( defaultOptions, props );

    const { className, width, height, side, children, style } = options;

    const componentStyle: commonStyle = {};
    componentStyle.width = width ?? '';
    componentStyle.height = height ?? '';
    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX }-${ side } ${ className || '' }` }>{ children }</div>
    );
}

//  Footer 底部
interface FooterOptions extends commonOptions { }
export function Footer ( props: FooterOptions )
{

    const PREFIX = 'wdu-footer';
    const { className, children, style } = props;
    const componentStyle: commonStyle = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
}

//  Main 主体
interface MainOptions extends commonOptions { }
export function Main ( props: MainOptions )
{
    const PREFIX = 'wdu-main';
    const { className, children, style } = props;

    const componentStyle: commonStyle = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ ` ${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
}