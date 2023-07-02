import { IntroComponent } from './IntroComponent';
import Switch from '../components/Switch/Switch';

export default function () {
    const props = {
        title: 'Switch 开关',
        position: 'switch',
        components: [
            {
                component: (
                    <>
                        <Switch label='小尺寸' size="small" defaultValue={true} />

                        <Switch label='默认尺寸' size="normal" defaultValue={false} />

                        <Switch label='大尺寸' size="large" defaultValue={false}/>
                    </>
                ),
                code: `
<Switch id='r1' label="选项一" name="item" value={ true } />

<Switch id='r2' label="事件绑定" name="item" onChange={ ( value: boolean ) => alert( 'switch is ' + value ) } />

<Switch id='r3' label="选项三" name="item" value={ true } />

<Switch id='r4' label="禁用" name="item" value={ true } disabled />`,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
