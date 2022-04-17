import { ReactFragment } from 'react';
import commonProps, { commonStyle } from '../../base/types/commonInterface';

// Container 容器
interface propsContainer extends commonProps {
    header?: ReactFragment,
    main?: ReactFragment,
    footer?: ReactFragment,
    aside?: ReactFragment;
}

const Container: React.FC<propsContainer> = ( props ) => {
    const PREFIX = 'wdu-container';
    const { className, width, height, header, main, footer, aside, style } = props;

    const componentStyle: commonStyle = {};
    componentStyle.width = width ?? '';
    componentStyle.height = height ?? '';

    style && Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>
            <div className="wdu-header">{ header ?? null }</div>
            <div className="wdu-main-container">
                { aside ?? null }
                { main ?? null }
            </div>
            <div className="wdu-footer">{ footer ?? null }</div>
        </div>
    );
};

interface propsHeader extends commonProps { }
// Header 顶部
const Header: React.FC<propsHeader> = ( props ) => {
    const PREFIX = 'wdu-header';
    const { className, children, style } = props;
    const componentStyle: object = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
};

// Aside 侧边
interface propsAside extends commonProps {
    side?: string,
}

const Aside: React.FC<propsAside> = ( props ) => {
    const PREFIX = 'wdu-aside';
    const { className, width, height, side = 'left', children, style } = props;

    const componentStyle: commonStyle = {};
    componentStyle.width = width ?? '';
    componentStyle.height = height ?? '';

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX }-${ side } ${ className || '' }` }>{ children }</div>
    );
};

//  Footer 底部
interface propsFooter extends commonProps { }
const Footer: React.FC<propsFooter> = ( props ) => {
    const PREFIX = 'wdu-footer';
    const { className, children, style } = props;
    const componentStyle: commonStyle = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
};

//  Main 主体
interface propsMain extends commonProps { }
const Main: React.FC<propsMain> = ( props ) => {
    const PREFIX = 'wdu-main';
    const { className, children, style } = props;

    const componentStyle: commonStyle = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ ` ${ PREFIX } ${ className || '' }` }>{ children }</div>
    );
};

export { Container, Aside, Header, Footer, Main };