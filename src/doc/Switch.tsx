import { IntroComponent } from './IntroComponent';
import { Switch } from '../components/Switch/Switch';

export default function () {
    const props = {
        title: 'Switch 开关',
        position: 'switch',
        components: [
            {
                title: '不同尺寸的 Switch ',
                component: (
                    <div className='wdu-row'>
                        <p>
                            小尺寸
                            <Switch size='small' defaultValue={true} />
                        </p>

                        <p>
                            默认尺寸
                            <Switch size='normal' defaultValue={false} />
                        </p>

                        <p>
                            大尺寸
                            <Switch size='large' defaultValue={false} />
                        </p>
                    </div>
                ),
                code: `
<p>
    小尺寸
    <Switch size='small' defaultValue={true} />
</p>
<p>
    默认尺寸
    <Switch size='normal' defaultValue={false} />
</p>
<p>
    大尺寸
    <Switch size='large' defaultValue={false} />
</p>`,
            },
            {
                title: '自定义标签文字和值',
                component: (
                    <div className='wdu-row'>
                        <Switch
                            size='normal'
                            defaultValue={'male'}
                            activeValue={'male'}
                            inactiveValue={'female'}
                            activeLabel={'男'}
                            inactiveLabel={'女'}
                        />
                    </div>
                ),
                code: `
    <Switch
        size='normal'
        defaultValue={'male'}
        activeValue={'male'}
        inactiveValue={'female'}
        activeLabel={'男'}
        inactiveLabel={'女'}
    />
`,
            },
            {
                title: '开关的切换事件',
                component: (
                    <div className='wdu-row'>
                        <Switch
                            size='normal'
                            onChange={(value) => {
                                console.log('switch change', value);
                            }}
                        />

                        <span>打开控制台查看打印信息</span>
                    </div>
                ),
                code: `
<p>
    <Switch
        size='normal'
        onChange={(value) => {
            console.log('switch change', value);
        }}
    />
    <span>打开控制台查看打印信息</span>
</p>`,
            },
        ],
        api: [
            {
                title: 'Switch 属性',
                api: [
                    {
                        attribute: 'defaultValue',
                        description: '默认值',
                        value: 'boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'size',
                        description: '尺寸',
                        value: 'small | normal | large',
                        default: 'normal',
                    },
                    {
                        attribute: 'activeValue',
                        description: '开启状态的值',
                        value: 'string | number | boolean',
                        default: 'true',
                    },
                    {
                        attribute: 'inactiveValue',
                        description: '关闭状态的值',
                        value: 'string | number | boolean',
                        default: 'false',
                    },
                    {
                        attribute: 'activeLabel',
                        description: '开启状态的标签文字',
                        value: 'string',
                        default: '/',
                    },
                    {
                        attribute: 'inactiveLabel',
                        description: '关闭状态的标签文字',
                        value: 'string',
                        default: '/',
                    },
                ],
            },
            {
                title: 'Switch 事件',
                api: [
                    {
                        attribute: 'onChange',
                        description: '开关切换事件',
                        value: 'function(value: boolean): any',
                        default: '/',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
