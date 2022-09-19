import React from "react";

function bindFormData ( refer: string, formItem: Array<any>, setFormData: any ) {
    const changeFormData = ( value: any ) => {
        setFormData( ( data: any ) => ( { ...data, [ refer ]: value } ) );
    };

    const result = formItem.map( ( item: any, index: number ) => {
        let event = '';
        switch ( item.type.name ) {
            case 'Input':
                event = 'onChange';
                break;
            case 'Select':
                event = 'onSelect';
                break;
        }
        const bindEvent = { [ event ]: changeFormData };
        return React.cloneElement( item, { ...bindEvent, key: index } );
    } );

    return result;
}

export { bindFormData };