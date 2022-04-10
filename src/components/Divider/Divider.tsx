import './divider.less';
import commonOptions from '../../base/types/commonInterface';
import { ReactElement, useEffect, useRef, useState } from 'react';

enum DividerType {
    DASH = 'dash',
    LINE = 'line',
    DOT = 'dot',
    WAVE = 'wave'
}

enum DividerDirection {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

const PREFIX = 'wdu-divider';

interface DividerOptions extends commonOptions {
    type?: string;
    color?: DividerType;
    direction?: DividerDirection;
}

function Divider ( props: any ): ReactElement {
    const { type = 'line', color: styleColor = 'gray', direction = 'horizontal' } = props;
    const styleType = `${ PREFIX }-${ type }`;
    const styleDirection = `${ PREFIX }-${ direction }`;
    const classList = `${ PREFIX } ${ styleDirection } ${ styleType } `;

    // 垂直模式下，必须手动计算父元素高度
    const diviNode = useRef<HTMLSpanElement>( null );

    const [ verticalDividerHeight, setVDHeight ] = useState( 0 );
    if ( direction === 'vertical' ) {
        useEffect( () => {
            const diviParentNode = diviNode.current?.parentNode as Element;
            const { height } = diviParentNode.getBoundingClientRect();
            setVDHeight( height );
        }, [ diviNode ] );
    }

    return <span ref={ diviNode } className={ classList } style={ { color: styleColor, height: `${ verticalDividerHeight }px` } }></span>;
};

export { Divider };