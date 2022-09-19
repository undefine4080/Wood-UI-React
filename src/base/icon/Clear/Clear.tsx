import './clear.less';

function Clear ( props: any ) {
    const { size = 15, color, onClick } = props;

    const style = {
        width: size + 'px',
        height: size + 'px',
        color,
    };

    return <i className="wdu-icon-clear" style={ style } onClick={ onClick }></i>;
}

export default Clear;