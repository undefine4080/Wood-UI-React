import { IntroComponent } from "@base/introComponent";
import { Button } from "@component/Button/Button";
import { Form, FormItem } from '@component/Form/Form';
import Input from "@component/Input/Input";
import { Row } from "@component/Layout/Layout";
import { Select, Option } from "@component/Select/Select";
import { rqData } from "@util";
import { useRef } from "react";

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

    const props = {
        title: 'Form 表单',
        position: 'form',
        components: [
            {
                title: '',
                component: (
                    <>
                        <Form
                            ref={ myForm }
                            data={ formData }
                            labelAlign="right"
                            itemLayout="horizon">
                            <FormItem refer="name" label="名称">
                                <Input />
                            </FormItem>

                            <FormItem refer="address" label="籍贯">
                                <Input />
                            </FormItem>

                            <FormItem refer="number" label="订单编号">
                                <Input type="number" />
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

                                    <Button type={ "danger" }>重置</Button>
                                </Row>
                            </FormItem>
                        </Form>
                    </>
                ),
                info: '',
                code: ``
            },
        ]
    };

    return <IntroComponent { ...props } />;
};