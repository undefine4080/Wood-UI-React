import { propsImage } from "./type";

import './image.less';

function Image ( props: propsImage ) {
    const { width = 500, src, info, shadow = false, border = false, link } = props;

    const imageStyle = {
        width: `${ typeof width === 'number' ? `${ width }px` : width }`,
    };

    shadow && Object.assign( imageStyle, { boxShadow: '#c0c0c0 0px 0px 16px 4px' } );

    border && Object.assign( imageStyle, { border: '4px solid black' } );

    link && Object.assign( imageStyle, { cursor: 'pointer' } );

    const linkTo = () => {
        if ( !link ) return;

        window.open( link.toString() );
    };

    return (
        <div className="wdu-image" >
            <img className="wdu-image__img"
                src={ src }
                alt={ info }
                style={ imageStyle }
                onClick={ linkTo } />

            { info && <p className="wdu-image__info">{ info }</p> }
        </ div>
    );
}

export default Image;;