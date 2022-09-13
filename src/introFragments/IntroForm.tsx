import { IntroComponent } from "../base/introComponent";
import { Form, FormItem } from '../components/Form/Form';
import Input from "@component/Input/Input";
import { Select, Option } from "@component/Select/Select";

const formData = {};

export default function () {
    const props = {
        title: 'Form 表单',
        position: 'form',
        components: [
            {
                title: '',
                component: (
                    <>
                        <Form onSubmit={ data => {
                            console.log( data );
                        } }>
                            <FormItem label="名称">
                                <Input />
                            </FormItem>

                            <FormItem label="籍贯">
                                <Input />
                            </FormItem>

                            <FormItem label="订单编号">
                                <Input type="number" />
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