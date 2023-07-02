import { IntroComponent } from './IntroComponent';
import Divider from '../components/Divider/Divider';

function IntroDivider() {
    const props = {
        title: 'Divider 分割线',
        position: 'divider',
        components: [
            {
                title: '默认分割线',
                component: (
                    <div>
                        <p>
                            Anim tempor enim laboris est minim id. Dolor ut
                            deserunt voluptate amet duis non non anim aliqua
                            exercitation labore dolor ex ea. Labore id anim
                            deserunt fugiat dolore proident ipsum.
                        </p>

                        <Divider />

                        <p>
                            Anim tempor enim laboris est minim id. Dolor ut
                            deserunt voluptate amet duis non non anim aliqua
                            exercitation labore dolor ex ea. Labore id anim
                            deserunt fugiat dolore proident ipsum.
                        </p>
                    </div>
                ),
                code: `
<div>
  <p>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate 
    amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id 
    anim deserunt fugiat dolore proident ipsum.</p>

  <Divider />

  <p>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate 
    amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id 
    anim deserunt fugiat dolore proident ipsum.</p>
</div>`,
            },
            {
                title: '带文字说明的分割线',
                component: (
                    <div style={{ flexGrow: 1 }}>
                        <Divider text='this is a divider' />

                        <Divider text='this is a xxxxxxxxxxxxxxxxxxx divider' />
                    </div>
                ),
                info: '',
                code: `
<div style={{ flexGrow: 1 }}>
    <Divider text='this is a divider' />
    <Divider text='this is a xxxxxxxxxxxxxxxxxxx divider' />
</div>`,
            },
            {
                title: '不同样式的分割线',
                component: (
                    <div style={{ flexGrow: 1 }}>
                        <Divider text='dot' type='dot' />
                        <Divider text='dash' type='dash' />
                        <Divider text='double' type='double' />
                    </div>
                ),
                info: '',
                code: `
<div style={{ flexGrow: 1 }}>
    <Divider text='dot' type='dot' />
    <Divider text='dash' type='dash' />
    <Divider text='double' type='double' />
</div>`,
            },
        ],
        api: [
            {
                title: 'Divider 属性',
                api: [
                    {
                        attribute: 'text',
                        description: '分割线文字',
                        value: 'string',
                    },
                    {
                        attribute: 'type',
                        description: '分割线类型',
                        value: 'dot (圆点) | dash (横线) | double (双线)',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}

export default IntroDivider;
