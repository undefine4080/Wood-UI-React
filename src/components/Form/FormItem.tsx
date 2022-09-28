import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { FormContext } from "./Form";
import { bindFormData, validateFormItem, validator } from "./hooks";
import { propsFormItem } from "./type";

function FormItem ( props: propsFormItem ) {
    const { label, children, refer = '' } = props;
    const { labelAlign,
        itemLayout,
        validateRule,
        setFormData, setVerify } = useContext<any>( FormContext );

    const [ isValidate, setValidate ] = useState<Boolean>( true );

    const layoutStyle = `wdu-form__item-${ itemLayout }`;
    const labelStyle = `wdu-form__item-label--${ labelAlign }`;

    // make sure that formItem is legal component
    const legalFormItem = refer ? validateFormItem( children ) : children;
    let formItem = bindFormData( refer, legalFormItem, setFormData );

    // handle form validation
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

    // submit the verify state to the Form 
    useEffect( () => {
        setVerify( isValidate );
    }, [ isValidate ] );

    return (
        <div className={ `wdu-form__item ${ layoutStyle }` }>
            { label && (
                <label
                    className={ `wdu-form__item-label ${ labelStyle }` }>
                    { ( rule && rule.required ) && <i className="wdu-form__item-required"></i> }
                    { label }
                </label> ) }

            { rule?.info && ( <div className={ `wdu-form__item-info ${ isValidate ? '' : 'wdu-form__item-noVerified' }` }>
                { rule.info }
            </div> ) }

            <div className="wdu-form__item-body">
                { formItem }
            </div>
        </div>
    );
}
FormItem.displayName = 'FormItem';

export default FormItem;