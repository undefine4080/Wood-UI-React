import commonProps from "@base/types/commonInterface";
import type {
    propsContainer,
    propsAside,
    propsRow,
    propsCol,
    propsFooter
} from './type';
import { addUnitPx } from '@util';

import './layout.less';

function Container ( props: propsContainer ) {
    const { className = '', width, height, style, children } = props;

    let header: any,
        main: any,
        footer: any,
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
        <div
            style={ {
                ...style,
                width: addUnitPx( width ),
                height: addUnitPx( height ),
            } }
            className={ `wdu-container ${ className }` }>
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
    const { className = '', children, height } = props;

    return (
        <div
            style={ { height: height ? addUnitPx( height ) : 'auto' } }
            className={ `wdu-header ${ className }` }>
            { children }
        </div>
    );
};
Header.displayName = 'header';


function Aside ( props: propsAside ) {
    const { className = '', width, side = 'left', children } = props;

    return (
        <div style={ { width: addUnitPx( width ) } }
            className={ `wdu-aside-${ side } ${ className }` }>
            { children }
        </div>
    );
};
Aside.displayName = 'aside';

function Footer ( props: propsFooter ) {
    const { className = '', children, height } = props;

    return (
        <div className={ `wdu-footer ${ className }` }
            style={ { height: addUnitPx( height ) } }>{ children }</div>
    );
};
Footer.displayName = 'footer';

function Main ( props: commonProps ) {
    const { className = '', children, height } = props;

    return (
        <div
            style={ { height: addUnitPx( height ) } } className={ `wdu-main ${ className }` }>
            { children }
        </div>
    );
};
Main.displayName = 'main';

function Row ( props: propsRow ) {
    const { justify = 'start', align = 'top', children, className = '' } = props;

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
        <div
            className={ `${ baseStyle } ${ justify && styleMap[ justify ] } ${ align && styleMap[ align ] } ${ className }` }>
            { children }
        </div>
    );
};

function Col ( props: propsCol ) {
    const baseStyle = 'wdu-col';
    const { span = 12, children, className = '' } = props;

    let colSpan = span;
    if ( span < 1 || span > 12 ) {
        colSpan = 12;
        console.warn( 'number of span of Col is wrong: ', span );
    }

    return (
        <div className={ `${ baseStyle } ${ colSpan && `${ baseStyle }-${ colSpan } ${ className }` }` }>
            { children }
        </div>
    );
};

export { Container, Aside, Header, Footer, Main, Row, Col };