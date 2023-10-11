import type {
    propsContainer,
    propsAside,
    propsRow,
    propsCol,
    propsFooterOrHeader,
    propsMain
} from './type';
import { addUnitPx } from 'common/utils';

import './layout.less';

function Container(props: propsContainer) {
    const { className = '', style, children } = props;

    let header: any,
        main: any,
        footer: any,
        aside: any[] = [];

    const distributeChild = (child: any) => {
        const childName = child.type.displayName;
        switch (childName) {
            case 'Header':
                header = child;
                break;
            case 'Main':
                main = child;
                break;
            case 'Footer':
                footer = child;
                break;
            case 'Aside':
                aside.push(child);
                break;
            default:
                return null;
        }
    };

    if (Array.isArray(children)) {
        children.forEach(distributeChild);
    } else {
        distributeChild(children);
    }

    return (
        <div
            style={style}
            className={`wdu-container ${className}`}>
            <div className="wdu-header">{header}</div>

            <div className="wdu-main-container">
                {[...aside]}
                {main}
            </div>

            <div className="wdu-footer">{footer}</div>
        </div>
    );
};

function Aside(props: propsAside) {
    const { className = '', side = 'left', children } = props;

    return (
        <div
            className={`wdu-aside-${side} ${className}`}>
            {children}
        </div>
    );
};
Aside.displayName = 'Aside';

function Header(props: propsFooterOrHeader) {
    const { className = '', children } = props;

    return (
        <div
            className={`wdu-header ${className}`}>
            {children}
        </div>
    );
};
Header.displayName = 'Header';

function Footer(props: propsFooterOrHeader) {
    const { className = '', children } = props;

    return (
        <div
            className={`wdu-footer ${className}`}>{children}</div>
    );
};
Footer.displayName = 'Footer';

function Main(props: propsMain) {
    const { className = '', children, style } = props;

    return (
        <div
            style={style}
            className={`wdu-main ${className}`}>
            {children}
        </div>
    );
};
Main.displayName = 'Main';

function Row(props: propsRow) {
    const { justify = 'start', align = 'top', children, className = '' } = props;

    const baseStyle = 'wdu-the-row';
    const styleMap = {
        base: baseStyle,
        start: `${baseStyle}-start`,
        center: `${baseStyle}-center`,
        end: `${baseStyle}-end`,
        around: `${baseStyle}-around`,
        between: `${baseStyle}-between`,
        top: `${baseStyle}-top`,
        bottom: `${baseStyle}-bottom`,
        middle: `${baseStyle}-middle`,
    };

    return (
        <div
            className={`${baseStyle} ${justify && styleMap[justify]} ${align && styleMap[align]} ${className}`}>
            {children}
        </div>
    );
};
Row.displayName = 'Row';

function Col(props: propsCol) {
    const baseStyle = 'wdu-col';
    const { span = 12, children, className = '' } = props;

    let colSpan = span;
    if (span < 1 || span > 12) {
        colSpan = 12;
        console.warn('number of span of Col is wrong: ', span);
    }

    return (
        <div className={`${baseStyle} ${colSpan && `${baseStyle}-${colSpan} ${className}`}`}>
            {children}
        </div>
    );
};
Col.displayName = 'Col';

export { Container, Aside, Header, Footer, Main, Row, Col };