import commonProps from '../../base/types/commonInterface';
import { useEffect, useRef, useState } from 'react';
import './divider.less';
interface propsDivider extends commonProps {
    color?: 'dash' | 'line' | 'dot' | 'wave';
    direction?: 'horizontal' | 'vertical';
}

function Divider ( props: propsDivider ) {
    const { type = 'line', color: styleColor = 'gray', direction = 'horizontal' } = props;

    const styleType = `wdu-divider-${ type }`;
    const styleDirection = `wdu-divider-${ direction }`;
    const classList = `wdu-divider ${ styleDirection } ${ styleType } `;

    // 垂直模式下，必须手动计算父元素高度
    const dividerNode = useRef<HTMLSpanElement>( null );
    const [ verticalDividerHeight, setVDHeight ] = useState( 0 );

    useEffect( () => {
        if ( direction === 'vertical' ) {
            const dividerParentNode = dividerNode.current?.parentNode as Element;
            const { height } = dividerParentNode.getBoundingClientRect();
            setVDHeight( height );
        }
    }, [ dividerNode ] );

    return <span
        ref={ dividerNode }
        className={ classList }
        style={ { color: styleColor, height: `${ verticalDividerHeight }px` } }>
    </span>;
};

export default Divider; 