import { useRef, useState } from "react";
import { propsImage } from "./type";
import { useLazyLoad } from "@common/hooks";

import './image.less';

function Image ( props: propsImage ) {
    const { width = 500, src, info, shadow = false, border = false, link, lazy = false } = props;

    const refImg: any = useRef();
    const [ imgSrc, setSrc ] = useState( '' );

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

    useLazyLoad( refImg, () => setSrc( src ), lazy );

    return (
        <div className={ `wdu-image ${ imgSrc && 'wdu-image__loaded' }` }
            style={ imageStyle }
            ref={ refImg }>
            <div className="wdu-image__img"
                style={ { backgroundImage: `url(${ imgSrc })` } }
                onClick={ linkTo } />

            { info && <p className="wdu-image__info">{ info }</p> }
        </ div>
    );
}

export default Image;;