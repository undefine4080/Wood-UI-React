import { getNamedChild } from "@util";
import { useRef } from "react";
import { propsForm, propsFormItem } from "./type";

function Form ( props: propsForm ) {
    const { data, onSubmit } = props;

    const refForm = useRef<any>();
    // const [formData, setFormData] = useState
    const formItems = getNamedChild( 'FormItem', props.children );

    return (
        <form ref={ refForm } className="wdu-form__form">
            { formItems }
        </form>
    );
}

function FormItem ( props: propsFormItem ) {
    const { label, children } = props;

    return (
        <div className="wdu-form__item">
            { label && <label className="wdu-form__item-label">
                { label }</label> }

            <div className="wdu-form__item-body">
                { children }
            </div>
        </div>
    );
}
FormItem.displayName = 'FormItem';

export { Form, FormItem };