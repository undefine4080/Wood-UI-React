import { propsButton } from './type';
import './button.less';
import Loading from '@base/icon/Loading/Loading';

function Button ( props: propsButton ) {
    const PREFIX = 'wdu-button';

    const { type = 'plain',
        size = 'normal',
        children,
        onClick,
        disabled = false,
        loading = false } = props;

    let classList = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;

    disabled && ( classList += ` ${ PREFIX }-disabled` );

    const handleClick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        e.stopPropagation();
        onClick && onClick( e );
    };

    return (
        <button className={ classList }
            onClick={ handleClick }>
            { loading && <Loading /> }
            { children }
        </button>
    );
};

export default Button;
