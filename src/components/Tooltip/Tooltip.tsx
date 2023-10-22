import { useEffect, useState } from 'react';
import { propsTooltip } from './type';
import './tooltip.less';

function Tooltip(props: propsTooltip) {
    const { text, position = 'top' } = props;
    const [visible, setVisible] = useState<boolean | undefined>(undefined);

    const styleMap = {
        left: 'wdu-tooltip__left',
        right: 'wdu-tooltip__right',
        top: 'wdu-tooltip__top',
        bottom: 'wdu-tooltip__bottom',
        visible: 'wdu-tooltip__visible',
        hidden: 'wdu-tooltip__hidden',
    };

    const [visibilityStyle, setVisibilityStyle] = useState('');

    useEffect(() => {
        if (visible) {
            setVisibilityStyle(styleMap.visible);
        } else if (visible === false) {
            setVisibilityStyle(styleMap.hidden);
            setTimeout(() => {
                setVisibilityStyle('');
                setVisible(undefined);
            }, 1000);
        }
    }, [visible]);

    return (
        <div className='wdu-tooltip'>
            <div
                className={`wdu-tooltip__text ${styleMap[position]} ${visibilityStyle}`}>
                {text}
            </div>
            <div
                className='wdu-tooltip__content'
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}>
                {props.children}
            </div>
        </div>
    );
}

export { Tooltip };
