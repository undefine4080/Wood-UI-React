import { useEffect, MouseEvent } from 'react';
import { propsButton } from './type';
import Loading from '@base/icon/Loading/Loading';
import { useCssClassManager } from '@base/hooks';

import './button.less';

const CLS = 'wdu-button';
function Button(props: propsButton) {
    const {
        type = 'plain',
        size = 'normal',
        children,
        onClick,
        disabled = false,
        loading = false } = props;

    const classMap = {
        base: CLS,
        type: `${CLS}__${type}`,
        size: `${CLS}__${size}`,
        disabled: `${CLS}__disabled`,
        loading: `${CLS}__loading`
    };

    const { addClassName, removeClassName, classList } = useCssClassManager(classMap);

    useEffect(() => {
        addClassName('type');
        addClassName('size');
        disabled && (addClassName('disabled'));
    }, []);

    useEffect(() => {
        loading ? addClassName('loading') : removeClassName('loading');
    }, [loading]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (disabled || loading) return;
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };

    return (
        <button
            type="button"
            className={classList}
            onClick={handleClick}>
            {loading && <Loading />}
            {children}
        </button>
    );
};

export default Button;
