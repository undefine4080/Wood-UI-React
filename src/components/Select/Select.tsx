import React, { useEffect, useState } from "react";
import commonProps from "../../base/types/commonInterface";
import './select.less';

interface propsOption extends commonProps {
    label: string,
    value: string,
};

const Option: React.FC<propsOption> = props => <></>;

interface propsSelect extends commonProps {
    label?: string,
    name: string,
    form?: string,
    value: string,
    onChange?: any,
    trigger?: 'hover' | 'click';
}

const Select: React.FC<propsSelect> = ( props ) => {
    const { label, children, onChange, trigger = 'click' } = props;

    const [ curValue, setCurValue ] = useState( { value: '', label: '' } );
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

    let [ optionListHeight, setOptListHeight ] = useState( "36px" );
    useEffect( () => {
        if ( expand ) {
            setOptListHeight( `${ options.length * 36 }px` );
        } else {
            setOptListHeight( "36px" );
        }
    }, [ expand ] );

    useEffect( () => {
        if ( onChange ) {
            onChange( {
                target: {
                    value: curValue.value,
                    label: curValue.label
                }
            } );
        }
    }, [ curValue ] );

    return (
        <div className="wdu-select-container">
            <div className="wdu-select-label">{ label }</div>
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