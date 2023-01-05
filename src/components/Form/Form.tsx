import React, { useRef, useImperativeHandle, useState } from "react";
import { bindImplicitProps, getNamedChild } from "@base/utils";
import { propsForm } from "./type";
import FormItem from "./FormItem";

import './form.less';

const Form = React.forwardRef( ( props: propsForm, ref: any ) => {
    const { data = {},
        labelAlign = 'left',
        itemLayout = 'horizon',
        validateRule } = props;

    const refForm = useRef<any>();
    const [ formData, setFormData ] = useState<any>( data );
    const [ isVerify, setVerify ] = useState( false );

    const legalFormItems: Array<any> = getNamedChild( 'FormItem', props.children );
    const formItems = bindImplicitProps( legalFormItems, {
        labelAlign,
        itemLayout,
        formData,
        setFormData,
        validateRule,
        setVerify
    } );

    useImperativeHandle( ref, () => ( {
        submit ( callback: Function ) {
            isVerify && callback( formData );
            console.log( formItems );
        },
        reset () {
            setFormData( {} );
            refForm.current.reset();
        }
    } ) );

    return (
        <form ref={ refForm } className="wdu-form__form">
            { formItems }
        </form>
    );
} );

export { Form, FormItem };
