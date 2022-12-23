import { useEffect } from 'react';
import { propsButton } from './type';
import './button.less';
import Loading from '@base/icon/Loading/Loading';
import { useCssClassManager } from '@base/hooks';

function Button(props: propsButton) {
    const {
        type = 'plain',
        size = 'normal',
        children,
        onClick,
        disabled = false,
        loading = false } = props;

    const classMap = {
        base: "wdu-button",
        type: `wdu-button__${type}`,
        size: `wdu-button__${size}`,
        disable: 'wdu-button__disabled'
    };

    const { addClassName, classList } = useCssClassManager(classMap);

    useEffect(() => {
        addClassName('type');
        addClassName('size');
        disabled && (addClassName('disable'));
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (disabled) return;
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
