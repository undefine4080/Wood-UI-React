import './divider.less';
import commonProps from '../../base/types/commonInterface';
import { useEffect, useRef, useState } from 'react';

// enum DividerType {
//     DASH = 'dash',
//     LINE = 'line',
//     DOT = 'dot',
//     WAVE = 'wave'
// }

// enum DividerDirection {
//     HORIZONTAL = 'horizontal',
//     VERTICAL = 'vertical'
// }

interface propsDivider extends commonProps {
    color?: 'dash' | 'line' | 'dot' | 'wave';
    direction?: 'horizontal' | 'vertical';
}

const Divider: React.FC<propsDivider> = ( props: any ) => {
    const PREFIX = 'wdu-divider';
    const { type = 'line', color: styleColor = 'gray', direction = 'horizontal' } = props;
    const styleType = `${ PREFIX }-${ type }`;
    const styleDirection = `${ PREFIX }-${ direction }`;
    const classList = `${ PREFIX } ${ styleDirection } ${ styleType } `;

    // 垂直模式下，必须手动计算父元素高度
    const diviNode = useRef<HTMLSpanElement>( null );
    const [ verticalDividerHeight, setVDHeight ] = useState( 0 );

    useEffect( () => {
        if ( direction === 'vertical' ) {
            const diviParentNode = diviNode.current?.parentNode as Element;
            const { height } = diviParentNode.getBoundingClientRect();
            setVDHeight( height );
        }
    }, [ diviNode ] );

    return <span
        ref={ diviNode }
        className={ classList }
        style={ { color: styleColor, height: `${ verticalDividerHeight }px` } }>
    </span>;
};

export { Divider };