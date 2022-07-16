import { ReactFragment } from 'react';

import commonProps from '../../base/types/commonInterface';
import './layout.less';

interface propsContainer extends commonProps {
    header?: ReactFragment,
    main?: ReactFragment,
    footer?: ReactFragment,
    aside?: ReactFragment;
}

const Container: React.FC<propsContainer> = ( props ) => {
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

const Header: React.FC<commonProps> = ( props ) => {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-header ${ className }` }>{ children }</div>
    );
};

Header.displayName = 'header';

interface propsAside extends commonProps {
    side?: string,
}
const Aside: React.FC<propsAside> = ( props ) => {
    const { className, width, height, side = 'left', children, style } = props;

    return (
        <div style={ { ...style, width, height } } className={ `wdu-aside-${ side } ${ className }` }>{ children }</div>
    );
};
Aside.displayName = 'aside';

const Footer: React.FC<commonProps> = ( props ) => {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-footer ${ className }` }>{ children }</div>
    );
};
Footer.displayName = 'footer';

const Main: React.FC<commonProps> = ( props ) => {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-main ${ className }` }>{ children }</div>
    );
};
Main.displayName = 'main';

interface propsRow {
    justify?: 'start' | 'center' | 'end' | 'around' | 'between';
    align?: 'top' | 'middle' | 'bottom';
    style?: object;
    className?: string;
}

const Row: React.FC<propsRow> = ( props ) => {
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

interface propsCol {
    span?: number;
}

const Col: React.FC<propsCol> = ( props ) => {
    const baseStyle = 'wdu-col';
    const { span = 12, children } = props;

    return (
        <div className={ `${ baseStyle } ${ span && `${ baseStyle }-${ span }` }` }>{ children }</div>
    );
};

export { Container, Aside, Header, Footer, Main, Row, Col };