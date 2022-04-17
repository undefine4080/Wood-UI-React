import './button.less';
import commonProps from '../../base/types/commonInterface';
interface ButtonOptions extends commonProps {
    onClick?: MouseEvent;
}

const PREFIX = 'wdu-button';

export function Button ( props: any ) {
    const defaultOptions: ButtonOptions = {
        type: 'plain',
        size: 'normal',
    };
    const options: ButtonOptions = Object.assign( defaultOptions, props );
    const { type, size, children, onClick } = options;
    let theClass = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;
    if ( type === 'disabled' ) theClass += ` ${ PREFIX }-disabled`;

    return (
        <button { ...props } className={ theClass } onClick={ onClick }>{ children }</button>
    );
}