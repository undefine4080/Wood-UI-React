import { propsProgress } from './type';
import './progress.less';
import { getColorStage } from './hooks';

function Progress(props: propsProgress) {
    const { size = 'normal', value, showProgress = true, max } = props;
    const percent = (value / max) * 100;

    const color = getColorStage(percent);

    return (
        <div className={`wdu-progress wdu-progress__${size}`}>
            <div
                className={`wdu-progress__bar ${color}`}
                style={{ width: `${percent}%` }}></div>
            {showProgress && (
                <span className='wdu-progress__percent'>{`${percent}%`}</span>
            )}
        </div>
    );
}

export { Progress };
