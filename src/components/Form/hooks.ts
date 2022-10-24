import { ruleItem, userValidator } from '@component/Form/type';
import React, { useState } from "react";

/**
 * 
 * @param children child node of FormItem
 * @returns the legal child node of FormItem
 */
function validateFormItem ( children: any ): any {
    if ( React.Children.toArray( children ).length > 1 ) {
        throw new Error( 'FormItem can only have one child React node' );
    }

    const name = children.type.displayName;
    if ( name === 'Input'
        || name === 'Radio'
        || name === 'Select'
        || name === 'Textarea'
        || name === 'Checkbox'
        || name === 'Switch'
    ) { } else {
        console.warn( `the type of the component is not a legal form item` );
        return null;
    }

    return children;
}

/**
 * @param refer the data name of form-item
 * @param formItem 
 * @param setFormData callback for set data in Form
 * @returns clone node to which the event has been bound
 */
function bindFormData ( refer: string, formItem: any, setFormData: any, setFormItemData: any ) {
    const changeData = ( value: any ) => {
        setFormData( ( data: any ) => ( { ...data, [ refer ]: value } ) );
        setFormItemData( value );
    };

    let event = '';
    switch ( formItem.type.name ) {
        case 'Input':
            event = 'onChange';
            break;
        case 'Select':
            event = 'onSelect';
            break;
    }

    const bindEvent = { [ event ]: changeData };
    return React.cloneElement( formItem, { ...bindEvent } );
}

function validator ( refer: string, rule: ruleItem, input: any ): string | null {
    const { type,
        required,
        minLength,
        maxLength,
        validator,
        info = '' } = rule;

    // if ( validator ) {
    //     return validator( input );
    // }

    if ( required && !input ) {
        console.warn( `the value of ${ refer } is required` );
        return info;
    }

    if ( input ) {
        if ( type && ( typeof input !== type ) ) {
            console.warn( `type of the "${ refer }" is not correct, it should be ${ type }` );
            return info;
        }

        if ( minLength && input.toString().length < minLength ) {
            console.warn( `length of the ${ refer } should more the the minimum length ${ minLength }` );
            return info;
        }

        if ( maxLength && input.toString().length > maxLength ) {
            console.warn( `the max length of the ${ refer } should be ${ maxLength }` );
            return info;
        }
    }

    return null;
}

export { bindFormData, validator, validateFormItem };