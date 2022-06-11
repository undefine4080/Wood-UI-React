import { ReactFragment } from 'react';

import commonProps from '../../base/types/commonInterface';

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

export { Container, Aside, Header, Footer, Main };