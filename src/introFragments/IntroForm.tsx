import { useRef } from "react";
import { IntroComponent } from "@base/components/IntroComponent";
import Button from "@component/Button/Button";
import { Form, FormItem } from '@component/Form/Form';
import Input from "@component/Input/Input";
import { Row } from "@component/Layout/Layout";
import { Select, Option } from "@component/Select/Select";
import { rqData } from "@util";
import { validatorRules } from "@component/Form/type";
import Switch from "@component/Switch/Switch";

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
        number: [
            {
                trigger: 'onBlur',
                required: true,
                info: '编号不能为空'
            }, {
                trigger: 'onBlur',
                type: 'number',
                info: '编号只能为数字'
            } ],
        address: [
            {
                trigger: 'onBlur',
                required: true,
                info: '地址不能为空'
            },
            {
                type: 'string',
                trigger: 'onBlur',
                info: '地址不能是数字'
            },
            {
                trigger: 'onBlur',
                info: '长度不可以超过 12',
                maxLength: 12
            },
            {
                trigger: 'onBlur',
                info: '长度最低为 6',
                minLength: 6
            },
        ]
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

                        <FormItem refer="name" label="订单名称">
                            <Input />
                        </FormItem>

                        <FormItem refer="date" label="创建日期">
                            <Input type="date" />
                        </FormItem>

                        <FormItem refer="address" label="收货地址">
                            <Input type="text" />
                        </FormItem>

                        <FormItem refer="number" label="订单编号">
                            <Input />
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