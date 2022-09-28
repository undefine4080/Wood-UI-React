import { useState } from 'react';
import { propsSwitch } from './type';
import './switch.less';

function Switch ( props: propsSwitch ) {
    const { id, label, value = false, onChange, disabled = false } = props;

    const [ on, setOn ] = useState( value );
    const handleClick = () => {
        if ( disabled ) return;

        setOn( ( pre: boolean ) => !pre );
        onChange && onChange( !on );
    };

    const triggerClass = `wdu-switch__wrapper ${ on ? 'wdu-switch__active' : '' }`;
    const switchClass = `wdu-switch ${ disabled ? 'wdu-switch__disabled' : '' }`;

    return (
        <div className={ switchClass }>
            { label && <span className='wdu-switch__label'>{ label }</span> }

            <div className="wdu-switch__main" id={ id }>
                <div className={ triggerClass }>
                    <div className='wdu-switch__block'></div>

                    <div className='wdu-switch__block-trigger'
                        onClick={ handleClick }></div>

                    <div className='wdu-switch__block'></div>
                </div>
            </div>
        </div >
    );
};
Switch.displayName = 'Switch';

export default Switch;