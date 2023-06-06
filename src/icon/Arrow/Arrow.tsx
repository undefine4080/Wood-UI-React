import './arrow.less';

interface propsArrow {
    style?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}

function Arrow(props: propsArrow) {
    const { style = 'top', className } = props;

    return (
        <i
            className={`wdu-icon-arrow wdu-icon-arrow__${style} ${className}`}></i>
    );
}

export default Arrow;
