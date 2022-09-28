import { ruleItem } from '@component/Form/type';
import React from "react";

function validateFormItem ( children: any ): any {
    if ( React.Children.toArray( children ).length > 1 ) {
        throw new Error( 'FormItem can only have one child React node' );
        return null;
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

function bindFormData ( refer: string, formItem: any, setFormData: any ) {
    const changeFormData = ( value: any ) => {
        setFormData( ( data: any ) => ( { ...data, [ refer ]: value } ) );
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
    const bindEvent = { [ event ]: changeFormData };
    return React.cloneElement( formItem, { ...bindEvent } );
}

function validator ( refer: string, rule: ruleItem, input: any ): Boolean {
    const { type,
        required,
        minLength,
        maxLength } = rule;

    if ( required && !input ) {
        console.warn( `the value of ${ refer } is required` );
        return false;
    }

    if ( typeof input !== type ) {
        console.warn( `type of the "${ refer }" is not correct, it should be ${ type }` );
        return false;
    }

    if ( minLength && input.toString().length < minLength ) {
        console.warn( `length of the ${ refer } should more the the minimum length ${ minLength }` );
        return false;
    }

    if ( maxLength && input.toString().length > maxLength ) {
        console.warn( `the max length of the ${ refer } should be ${ maxLength }` );
        return false;
    }

    return true;
}

export { bindFormData, validator, validateFormItem };