import { getComponentByName } from '../../utils';
import commonOptions, { commonStyle } from '../../base/commonInterface';

// Container 容器
function Container ( props: any ) {
    const PREFIX = 'wdu-container';
    const { className, width, height, children, style } = props;

    const componentStyle: commonStyle = {};
    componentStyle.width = width ?? '';
    componentStyle.height = height ?? '';

    style && Object.assign( componentStyle, style );

    const aside = getComponentByName( children, 'Aside' );
    const main = getComponentByName( children, 'Main' );
    const header = getComponentByName( children, 'Header' );
    const footer = getComponentByName( children, 'Footer' );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>
            <div className="wdu-header">{ header.length ? header : null }</div>
            <div className="wdu-main-container">
                { aside.length ? aside : null }
                { main.length ? main : null }
            </div>
            <div className="wdu-footer">{ footer.length ? footer : null }</div>
        </div>
    );
}

// Header 顶部
function Header ( props: any ) {
    const PREFIX = 'wdu-header';
    const { className, children, style } = props;

    const componentStyle: object = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
}

// Aside 侧边
interface AsideOptions extends commonOptions {
    side?: string,
}
function Aside ( props: any ) {
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
function Footer ( props: any ) {

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
function Main ( props: any ) {
    const PREFIX = 'wdu-main';
    const { className, children, style } = props;

    const componentStyle: commonStyle = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ ` ${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
}

export { Container, Aside, Header, Footer, Main };