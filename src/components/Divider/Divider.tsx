import { propsDivider } from './type';

import './divider.less';

function Divider(props: propsDivider) {
    const { text, type } = props;

    const classList = `wdu-divider wdu-divider__${type} ${
        Boolean(text) === false
            ? 'wdu-divider__noText'
            : 'wdu-divider__withText'
    }`;

    return (
        <div className={classList}>
            {text && <span className='wdu-divider__text'>{text}</span>}
        </div>
    );
}

export default Divider;
