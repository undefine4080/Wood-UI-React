import React, { useRef, useImperativeHandle, useState } from "react";
import { getNamedChild } from "@util";
import { propsForm } from "./type";
import FormItem from "./FormItem";

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
    const [ isVerify, setVerify ] = useState( false );

    const formItems = getNamedChild( 'FormItem', props.children );

    useImperativeHandle( ref, () => ( {
        submit: ( callback: Function ) => {
            isVerify && callback( formData );
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
                    validateRule,
                    setVerify
                } }>
                { formItems }
            </Provider>
        </form>
    );
} );



export { Form, FormItem, FormContext };
