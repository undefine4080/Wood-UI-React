import { getNamedChild } from "@util";
import React, { useContext, useImperativeHandle, useState } from "react";
import { useRef } from "react";
import { propsForm, propsFormItem } from "./type";
import { bindFormData } from "./hooks";

import './form.less';

const FormContext = React.createContext( {} );
const Provider = FormContext.Provider;

const Form = React.forwardRef( ( props: propsForm, ref: any ) => {
    const { data = {},
        labelAlign = 'left',
        itemLayout = 'horizon' } = props;

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
                value={ { labelAlign, itemLayout, formData, setFormData } }>
                { formItems }
            </Provider>
        </form>
    );
} );

function FormItem ( props: propsFormItem ) {
    const { label, children, refer = '' } = props;
    const { labelAlign, itemLayout, setFormData } = useContext<any>( FormContext );

    const layoutStyle = `wdu-form__item-${ itemLayout }`;
    const labelStyle = `wdu-form__item-label--${ labelAlign }`;

    const formItems = bindFormData( refer, React.Children.toArray( children ), setFormData );

    return (
        <div className={ `wdu-form__item ${ layoutStyle }` }>
            { label && (
                <label
                    className={ `wdu-form__item-label ${ labelStyle }` }>
                    { label }</label> ) }

            <div className="wdu-form__item-body">
                { formItems }
            </div>
        </div>
    );
}
FormItem.displayName = 'FormItem';

export { Form, FormItem };

