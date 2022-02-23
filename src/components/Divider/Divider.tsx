import './divider.less';
import commonOptions from '../../base/commonInterface';
import { ReactElement } from 'react';

enum DividerType
{
    DASH = 'dash',
    LINE = 'line',
    DOT = 'dot',
    WAVE = 'wave'
}

enum DividerDirection
{
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

const PREFIX = 'wdu-divider';

interface DividerOptions extends commonOptions
{
    type?: string;
    color?: DividerType;
    direction?: DividerDirection;
}

function Divider ( props: any ): ReactElement
{
    const { type = 'line', color: styleColor = 'gray', direction = 'horizontal' } = props;
    const styleType = `${ PREFIX }-${ type }`;
    const styleDirection = `${ PREFIX }-${ direction }`;
    const classList = `${ PREFIX } ${ styleDirection } ${ styleType } `;

    return <span className={ classList } style={ { color: styleColor } }></span>;
};

export { Divider };