import commonProps from '../../base/types/commonInterface';
import type {
    propsContainer,
    propsAside,
    propsRow,
    propsCol
} from './type';
import { getCssSizeValue } from '../../utils';

import './layout.less';

function Container ( props: propsContainer ) {
    const { className, width, height, style, children } = props;

    let header: any = null,
        main: any = null,
        footer: any = null,
        aside: any[] = [];

    const distributeChild = ( child: any ) => {
        const childName = child.type.displayName;
        switch ( childName ) {
            case 'header':
                header = child;
                break;
            case 'main':
                main = child;
                break;
            case 'footer':
                footer = child;
                break;
            case 'aside':
                aside.push( child );
                break;
            default:
                return null;
        }
    };

    if ( Array.isArray( children ) ) {
        children.forEach( distributeChild );
    } else {
        distributeChild( children );
    }

    return (
        <div style={ { ...style, width, height } } className={ `wdu-container ${ className }` }>
            <div className="wdu-header">{ header }</div>
            <div className="wdu-main-container">
                { [ ...aside ] }
                { main }
            </div>
            <div className="wdu-footer">{ footer }</div>
        </div>
    );
};

function Header ( props: commonProps ) {
    const { children, height } = props;

    return (
        <div
            style={ { height: height ? getCssSizeValue( height ) : 'auto' } } className="wdu-header">
            { children }
        </div>
    );
};
Header.displayName = 'header';


function Aside ( props: propsAside ) {
    const { className, width, height, side = 'left', children, style } = props;

    return (
        <div style={ { ...style, width, height } } className={ `wdu-aside-${ side } ${ className }` }>{ children }</div>
    );
};
Aside.displayName = 'aside';

function Footer ( props: commonProps ) {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-footer ${ className }` }>{ children }</div>
    );
};
Footer.displayName = 'footer';

function Main ( props: commonProps ) {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-main ${ className }` }>{ children }</div>
    );
};
Main.displayName = 'main';

function Row ( props: propsRow ) {
    const { justify = 'start', align = 'top', children, style, className } = props;

    const baseStyle = 'wdu-row';
    const styleMap = {
        base: baseStyle,
        start: `${ baseStyle }-start`,
        center: `${ baseStyle }-center`,
        end: `${ baseStyle }-end`,
        around: `${ baseStyle }-around`,
        between: `${ baseStyle }-between`,
        top: `${ baseStyle }-top`,
        bottom: `${ baseStyle }-bottom`,
        middle: `${ baseStyle }-middle`,
    };

    return (
        <div className={ `${ baseStyle } ${ justify && styleMap[ justify ] } ${ align && styleMap[ align ] } ${ className }` } style={ style }>{ children }</div>
    );
};

function Col ( props: propsCol ) {
    const baseStyle = 'wdu-col';
    const { span = 12, children } = props;

    return (
        <div className={ `${ baseStyle } ${ span && `${ baseStyle }-${ span }` }` }>{ children }</div>
    );
};

export { Container, Aside, Header, Footer, Main, Row, Col };