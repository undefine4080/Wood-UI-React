import React, { useEffect, useState } from "react";
import commonProps from "../../base/types/commonInterface";
import './select.less';

interface propsOption extends commonProps {
    label: string,
    value: number | string,
};

const Option: React.FC<propsOption> = props => <></>;

interface propsSelect extends commonProps {
    label?: string,
    name: string,
    form?: string,
    value: number | string,
    onChange?: any,
    trigger?: 'hover' | 'click';
}
interface selectedValue {
    value: number | string;
    label: number | string;
}

const optionHeight = '36px';
const Select: React.FC<propsSelect> = ( props ) => {
    const { label, children, onChange, trigger = 'click' } = props;

    const [ curValue, setCurValue ] = useState<selectedValue>( { value: '', label: '' } );
    const [ expand, setExpand ] = useState( false );

    const options = children.map( ( item: any, index: number ) => {
        const { value, label } = item.props;

        return <li className="wdu-select-option" key={ index }
            onClick={ () => {
                setCurValue( { value, label } );
                setExpand( pre => !pre );
            } }>{ label }</li>;
    } );

    useEffect( () => {
        const { value, label } = children[ 0 ].props;
        setCurValue( { value, label } );
    }, [] );

    let [ optionListHeight, setOptListHeight ] = useState( optionHeight );
    useEffect( () => {
        if ( expand ) {
            setOptListHeight( `${ options.length * 36 }px` );
        } else {
            setOptListHeight( optionHeight );
        }
    }, [ expand ] );

    useEffect( () => {
        if ( onChange ) {
            onChange( {
                value: curValue.value,
                label: curValue.label
            } );
        }
    }, [ curValue ] );

    return (
        <div className="wdu-select-container">
            { label && <div className="wdu-select-label">{ label.toString() }</div> }
            <ul className="wdu-select"
                tabIndex={ 1 }
                style={ { height: optionListHeight } }
                onBlur={ () => setExpand( false ) }>
                <li className="wdu-select-option"
                    onClick={ () => setExpand( pre => !pre ) }
                >{ curValue.label }</li>
                { options }
            </ul>
        </div>
    );
};

export { Select, Option };
export type { selectedValue };