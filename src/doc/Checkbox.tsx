import { IntroComponent } from './IntroComponent';
import { Checkbox } from '../components/Checkbox/Checkbox';

export default function () {
    const props = {
        title: 'Checkbox 复选按钮',
        position: 'checkbox',
        components: [
            {
                title: '基础用法',
                component: (
                    <div className='wdu-row'>
                        <Checkbox
                            label='选项一'
                            name='checkbox-option'
                            id='c1'
                        />

                        <Checkbox
                            label='选项二'
                            name='checkbox-option'
                            id='c2'
                        />

                        <Checkbox
                            label='选项三'
                            name='checkbox-option'
                            id='c3'
                        />

                        <Checkbox
                            label='选项四'
                            name='checkbox-option'
                            id='c4'
                        />
                    </div>
                ),
                code: `
<Checkbox label="选项一" name="checkbox-option" id='c1'/>

<Checkbox label="选项二" name="checkbox-option" id='c2'/>

<Checkbox label="选项三" name="checkbox-option" id='c3'/>
 
<Checkbox label="选项四" name="checkbox-option" id='c4'/>`,
            },
            {
                title: '不同尺寸',
                component: (
                    <div className='wdu-row'>
                        <Checkbox
                            label='小'
                            name='checkbox-option'
                            id='c1'
                            checkboxSize='small'
                        />

                        <Checkbox
                            label='中'
                            name='checkbox-option'
                            id='c2'
                            checkboxSize='normal'
                        />

                        <Checkbox
                            label='大'
                            name='checkbox-option'
                            id='c3'
                            checkboxSize='large'
                        />
                    </div>
                ),
                code: `
<div className='wdu-row'>
    <Checkbox
        label='小'
        name='checkbox-option'
        id='c1'
        checkboxSize='small'
    />
    <Checkbox
        label='中'
        name='checkbox-option'
        id='c2'
        checkboxSize='normal'
    />
    <Checkbox
        label='大'
        name='checkbox-option'
        id='c3'
        checkboxSize='large'
    />
</div>`,
            },
        ],
        api: [
            {
                title: 'Checkbox 属性',
                api: [
                    {
                        attribute: 'label',
                        description: '复选框的标签文字',
                        value: 'String',
                    },
                    {
                        attribute: 'id',
                        description: '复选框的 id 属性',
                        value: 'String',
                    },
                    {
                        attribute: 'checkboxSize',
                        description: '复选框的尺寸',
                        default: 'normal',
                        value: 'small (小) | normal (普通) | large (大)',
                    },
                    {
                        attribute: 'disabled',
                        description: '是否禁用复选框',
                        value: 'Boolean',
                    },
                    {
                        attribute: 'checked',
                        description: '是否选中复选框',
                        value: 'Boolean',
                    },
                    {
                        attribute: 'refCheckbox',
                        description: '复选框的 dom 引用',
                    },
                    {
                        attribute: 'setValue',
                        description: '手动设置复选框选中状态',
                        value: '(checked: boolean) => void',
                    },
                ],
            },
            {
                title: 'Checkbox 事件',
                api: [
                    {
                        attribute: 'onChange',
                        description: '复选框状态发生变化时触发',
                        value: 'Function',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
