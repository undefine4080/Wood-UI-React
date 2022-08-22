import { useEffect, useState } from 'react';
import commonProps from '../../base/types/commonInterface';
import './switch.less';

interface propsSwitch extends commonProps {
    label?: string;
    name?: string;
    value?: boolean;
}

const Switch: React.FC<propsSwitch> = props => {
    const { id, label, value = false, name, onChange } = props;
    const classMap = {
        base: 'wdu-switch-wrapper',
        active: 'wdu-switch-wrapper wdu-switch-active'
    };

    const [ on, setOn ] = useState( value );
    useEffect( () => {
        if ( onChange && Object.prototype.toString.call( onChange ) === '[object function]' ) {
            onChange( on );
        }
    }, [ on ] );

    return (
        <div className='wdu-switch-container'>
            <span className='wdu-switch-label'>{ label }</span>
            <div className="wdu-switch" id={ id }>
                <div className={ on ? classMap.active : classMap.base }>
                    <div className='wdu-switch-block'></div>
                    <div className='wdu-switch-block wdu-switch-trigger' onClick={ () => {
                        setOn( ( pre: boolean ) => !pre );
                    } }></div>
                    <div className='wdu-switch-block'></div>
                </div>
            </div>
        </div>
    );
};

export { Switch };