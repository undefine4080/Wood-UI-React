import { ReactFragment } from 'react';
import commonProps from '../../base/types/commonInterface';

// Container 容器
interface propsContainer extends commonProps {
    header?: ReactFragment,
    main?: ReactFragment,
    footer?: ReactFragment,
    aside?: ReactFragment;
}

const Container: React.FC<propsContainer> = ( props ) => {
    const { className, width, height, header, main, footer, aside, style } = props;

    return (
        <div style={ { ...style, width, height } } className={ `wdu-container ${ className }` }>
            <div className="wdu-header">{ header }</div>
            <div className="wdu-main-container">
                { aside }
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

interface propsAside extends commonProps {
    side?: string,
}
const Aside: React.FC<propsAside> = ( props ) => {
    const { className, width, height, side = 'left', children, style } = props;

    return (
        <div style={ { ...style, width, height } } className={ `wdu-aside-${ side } ${ className }` }>{ children }</div>
    );
};

const Footer: React.FC<commonProps> = ( props ) => {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-footer ${ className }` }>{ children }</div>
    );
};

const Main: React.FC<commonProps> = ( props ) => {
    const { className, children, style } = props;

    return (
        <div style={ style } className={ `wdu-main ${ className }` }>{ children }</div>
    );
};

export { Container, Aside, Header, Footer, Main };