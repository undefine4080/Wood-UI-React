import { IntroComponent } from "../base/components/IntroComponent";
import Switch from '../components/Switch/Switch';

export default function () {
    const props = {
        title: 'Switch 开关',
        position: 'switch',
        components: [
            {
                component: (
                    <>
                        <Switch id='r1' label="选项一" name="item" value={ true } />

                        <Switch id='r2' label="事件绑定" name="item"
                            onChange={ ( value: boolean ) => alert( 'switch is ' + value ) }
                        />

                        <Switch id='r3' label="选项三" name="item" value={ true } />

                        <Switch id='r4' label="禁用" name="item" value={ true } disabled />
                    </>
                ),
                code: `
<Switch id='r1' label="选项一" name="item" value={ true } />

<Switch id='r2' label="事件绑定" name="item" onChange={ ( value: boolean ) => alert( 'switch is ' + value ) } />

<Switch id='r3' label="选项三" name="item" value={ true } />

<Switch id='r4' label="禁用" name="item" value={ true } disabled />`
            }
        ],
    };

    return <IntroComponent { ...props } />;
};