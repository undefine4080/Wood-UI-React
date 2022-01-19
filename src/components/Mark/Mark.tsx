import commonOptions from '../../base/commonInterface';
import './mark.less';

enum TYPE
{
    I = 'important', // 主要标记
    L = 'light', // 亮点标记
    R = 'remind' // 重点标记
}

interface MarkOptions extends commonOptions
{
    type?: TYPE;
    link?: string; // 跳转链接的目标 url 地址
}

const PREFIX = 'wdu-mark';

export default function Mark ( props: any )
{
    const defaultOptions: MarkOptions = {
        type: TYPE.I
    };

    const options: MarkOptions = Object.assign( defaultOptions, props );

    const { type, link, children } = options;

    const theClass = `${ PREFIX } ${ PREFIX }-${ type }`;

    return (
        <span className={ theClass } >
            { link && link.length > 0 ? <a href={ link } target='_blank'>{ children }</a> : children }
        </span >
    );
}