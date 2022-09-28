import { useRef } from "react";
import { IntroComponent } from "@base/introComponent";
import Button from "@component/Button/Button";
import { Form, FormItem } from '@component/Form/Form';
import Input from "@component/Input/Input";
import { Row } from "@component/Layout/Layout";
import { Select, Option } from "@component/Select/Select";
import { rqData } from "@util";
import { validatorRules } from "@component/Form/type";

export default function () {
    const formData = {
        name: '',
        address: '',
        number: '',
        type: ''
    };

    const myForm = useRef<any>();

    const request = async ( data: any ) => {
        const result = await rqData( data );
        console.log( 'submit succeeded! result is: ', result );
    };

    const submit = ( e: any ) => {
        e.stopPropagation();
        myForm.current.submit( request );
    };

    const reset = ( e: any ) => {
        e.stopPropagation();
        myForm.current.reset( request );
    };

    const validateRules: validatorRules = {
        name: {
            required: true,
            info: '长度超出了 3 ',
            trigger: 'onChange',
            validator: ( inputValue: any ) => {
                console.log( inputValue );

                if ( inputValue.toString().length > 3 ) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        address: {
            required: true,
            type: 'string',
            trigger: 'onBlur',
            info: '地址不能是数字'
        },
        number: {
            required: true,
            type: 'number',
            trigger: 'onChange',
            minLength: 6,
            maxLength: 16,
            info: '数字长度在 6～16 之间'
        },
    };

    const props = {
        title: 'Form 表单',
        position: 'form',
        components: [
            {
                title: '',
                component: (
                    <Form
                        ref={ myForm }
                        data={ formData }
                        labelAlign="right"
                        itemLayout="horizon"
                        validateRule={ validateRules }>

                        <FormItem refer="name" label="名称">
                            <Input />
                        </FormItem>

                        <FormItem refer="address" label="籍贯">
                            <Input />
                        </FormItem>

                        <FormItem refer="number" label="订单编号">
                            <Input type="password" />
                        </FormItem>

                        <FormItem refer="type" label="订单类型">
                            <Select name={ "book" } value={ "" }>
                                <Option label={ "area1" } value={ "area1" }></Option>
                                <Option label={ "area2" } value={ "area2" }></Option>
                                <Option label={ "area3" } value={ "area3" }></Option>
                            </Select>
                        </FormItem>

                        <FormItem >
                            <Row justify="center">
                                <Button type={ "important" }
                                    onClick={ submit }>
                                    提交
                                </Button>

                                <Button type={ "danger" }
                                    onClick={ reset }>
                                    重置
                                </Button>
                            </Row>
                        </FormItem>
                    </Form>
                ),
                info: '',
                code: ``
            },
        ]
    };

    return <IntroComponent { ...props } />;
};