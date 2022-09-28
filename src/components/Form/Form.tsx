import React, { useRef, useContext, useImperativeHandle, useState } from "react";
import { getNamedChild } from "@util";
import { propsForm, propsFormItem } from "./type";
import { bindFormData, validator, validateFormItem } from "./hooks";

import './form.less';

const FormContext = React.createContext( {} );
const Provider = FormContext.Provider;

const Form = React.forwardRef( ( props: propsForm, ref: any ) => {
    const { data = {},
        labelAlign = 'left',
        itemLayout = 'horizon',
        validateRule } = props;

    const refForm = useRef<any>();
    const [ formData, setFormData ] = useState<any>( data );

    const formItems = getNamedChild( 'FormItem', props.children );

    useImperativeHandle( ref, () => ( {
        submit: ( callback: Function ) => {
            callback( formData );
        },
        reset: () => {
            refForm.current.reset();
        }
    } ) );

    return (
        <form ref={ refForm } className="wdu-form__form">
            <Provider
                value={ {
                    labelAlign,
                    itemLayout,
                    formData,
                    setFormData,
                    validateRule
                } }>
                { formItems }
            </Provider>
        </form>
    );
} );

function FormItem ( props: propsFormItem ) {
    const { label, children, refer = '' } = props;
    const { labelAlign,
        itemLayout,
        validateRule,
        setFormData } = useContext<any>( FormContext );

    const [ isValidate, setValidate ] = useState<Boolean>( true );

    const layoutStyle = `wdu-form__item-${ itemLayout }`;
    const labelStyle = `wdu-form__item-label--${ labelAlign }`;

    // make sure that formItem is legal component
    const legalFormItem = refer ? validateFormItem( children ) : children;
    let formItem = bindFormData( refer, legalFormItem, setFormData );

    // handle form validate
    const rule = validateRule[ refer ];
    if ( rule ) {
        const { trigger } = rule;
        formItem = React.cloneElement( formItem, {
            [ trigger ]: ( value: any ) => {
                const validation = validator( refer, rule, value );
                setValidate( validation );
            }
        } );
    }

    return (
        <div className="wdu-form__itemContainer">
            <div className={ `wdu-form__item ${ layoutStyle }` }>
                { label && (
                    <label
                        className={ `wdu-form__item-label ${ labelStyle }` }>
                        { label }</label> ) }

                <div className="wdu-form__item-body">
                    { formItem }
                </div>
            </div>

            { rule?.info && ( <div className={ `wdu-form__item-info ${ isValidate ? '' : 'wdu-form__item-noVerified' }` }>
                { rule.info }
            </div> ) }
        </div>
    );
}
FormItem.displayName = 'FormItem';

export { Form, FormItem };


