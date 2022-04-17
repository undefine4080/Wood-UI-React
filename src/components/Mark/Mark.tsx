import commonProps from '../../base/types/commonInterface';
import './mark.less';

enum TYPE {
    I = 'important', // 主要标记
    L = 'light', // 亮点标记
    R = 'remind' // 重点标记
}

interface propsMark extends commonProps {
    link?: string; // 跳转链接的目标 url 地址
}

const Mark: React.FC<propsMark> = ( props ) => {
    const PREFIX = 'wdu-mark';
    const { type = TYPE.I, link, children } = props;
    const componentStyle = `${ PREFIX } ${ PREFIX }-${ type }`;

    return (
        <span className={ componentStyle } >
            { link && link.length > 0 ? <a href={ link } target='_blank'>{ children }</a> : children }
        </span >
    );
};

export { Mark };