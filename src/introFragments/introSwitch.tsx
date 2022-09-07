import { IntroComponent } from "../base/introComponent";
import { Switch } from '../components/Switch/Switch';

export default function () {
    const props = {
        title: 'Switch 开关',
        position: 'switch',
        components: [
            {
                component: <Switch id='r1' label="夜间模式" name="academic" value={ true } />,
                code: `
<Switch id='r1' label="夜间模式" name="academic" value={ true } />`
            }
        ],
    };

    return <IntroComponent { ...props } />;
};