import './button.less';
import commonProps from '../../base/types/commonInterface';
import { MouseEventHandler } from 'react';

interface propsButton extends commonProps {
    type?: any;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<propsButton> = props => {
    const PREFIX = 'wdu-button';
    const { type = 'plain', size = 'normal', children, onClick } = props;
    let classList = `${ PREFIX } ${ PREFIX }-${ type } ${ PREFIX }-${ size }`;
    if ( type === 'disabled' ) classList += ` ${ PREFIX }-disabled`;

    return (
        <button { ...props } className={ classList } onClick={ onClick }>{ children }</button>
    );
};

export { Button };