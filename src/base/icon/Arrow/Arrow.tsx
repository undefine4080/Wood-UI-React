import './arrow.less';

function Arrow ( props: any ) {
    const { style = 'top' } = props;

    return <i className={ `wdu-icon-arrow wdu-icon-arrow__${ style }` }></i>;
}

export default Arrow;