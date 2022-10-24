import React, { useEffect, useState } from "react";
import { bindFormData, validateFormItem, validator } from "./hooks";
import { propsFormItem, ruleItem, ruleItems } from "./type";

const FormItem: React.FC<propsFormItem> = React.memo( ( props, ref ) => {
    const { label, children, refer = '', } = props;

    // implicit props
    const { labelAlign,
        itemLayout,
        validateRule,
        setFormData, setVerify } = props;

    const layoutStyle = `wdu-form__item-${ itemLayout }`;
    const labelStyle = `wdu-form__item-label--${ labelAlign }`;

    // submit the verify state to the Form 
    const [ isValidate, setValidate ] = useState<Boolean>( true );
    useEffect( () => {
        setVerify( isValidate );
    }, [ isValidate ] );

    // the value of input widget in the form-item
    const [ input, setInput ] = useState<string | number | boolean | undefined>();

    // combine the rules of current form-item
    const formItemRule: ruleItems = validateRule[ refer ] ? [ ...validateRule[ refer ] ] : [];
    const combineRules: ruleItem = ( () => {
        const result: ruleItem = {
            trigger: 'onChange'
        };
        if ( formItemRule?.length ) {
            formItemRule.forEach( rule => {
                Object.assign( result, rule );
            } );
        }
        return result;
    } )();

    // validation of current form-item
    const [ verifyMessage, setVerifyMessage ] = useState<string | null>();
    const doVerify = ( ruleItem: ruleItem | undefined ) => {
        if ( !ruleItem ) return;
        const validationInfo = validator( refer, ruleItem, input );
        let result = validationInfo ? false : true;
        setVerifyMessage( validationInfo );
        setValidate( result );
        if ( result ) {
            doVerify( formItemRule.shift() );
        }
    };

    // if it is the first input of user, do not verify
    const [ firstInputFlag, setFirstInputFlag ] = useState( true );
    useEffect( () => {
        if ( firstInputFlag ) {
            setFirstInputFlag( false );
        }

        if ( !firstInputFlag ) {
            doVerify( formItemRule.shift() );
        }
    }, [ input ] );

    // make sure that formItem is legal component
    const [ bindFormItem, setBindFormItem ] = useState<any>();
    useEffect( () => {
        const legalFormItem = refer ? validateFormItem( children ) : children;
        let bindFormItem = bindFormData( refer, legalFormItem, setFormData, setInput );
        setBindFormItem( bindFormItem );
    }, [] );

    return (
        <div className={ `wdu-form__item ${ layoutStyle }` }>
            { label && (
                <label
                    className={ `wdu-form__item-label ${ labelStyle }` }>
                    { ( combineRules && combineRules.required ) && <i className="wdu-form__item-required"></i> }
                    { label }
                </label> ) }

            { combineRules?.info && ( <div className={ `wdu-form__item-info ${ isValidate ? '' : 'wdu-form__item-noVerified' }` }>
                { verifyMessage }
            </div> ) }

            <div className="wdu-form__item-body">
                { bindFormItem }
            </div>
        </div>
    );
} );
FormItem.displayName = 'FormItem';

export default FormItem;
