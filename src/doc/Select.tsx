import Button from '@component/Button/Button';
import { IntroComponent } from './IntroComponent';
import { Select, Option } from '../components/Select/Select';
import Tag from '@component/Tag/Tag';

const options = [
    {
        label: 'option-1',
        value: 'option-1',
    },
    {
        label: 'option-2',
        value: 'option-2',
    },
    {
        label: 'option-3',
        value: 'option-3',
    },
    {
        label: 'option-4',
        value: 'option-4',
    },
    {
        label: 'option-5',
        value: 'option-5',
    },
];

export default function () {
    const props = {
        title: 'Select 下拉选择',
        position: 'select',
        components: [
            {
                title: '基础用法',
                component: (
                    <Select placeholder='请选择一项'>
                        {options.map(({ label, value }) => (
                            <Option label={label} value={value} key={value} />
                        ))}
                    </Select>
                ),
                code: `
const options = [
    {
        label: 'option-1',
        value: 'option-1',
    },
    {
        label: 'option-2',
        value: 'option-2',
    },
    {
        label: 'option-3',
        value: 'option-3',
    },
    {
        label: 'option-4',
        value: 'option-4',
    },
    {
        label: 'option-5',
        value: 'option-5',
    },
];

<Select placeholder='请选择一项'>
    {options.map(({ label, value }) => (
        <Option label={label} value={value} key={value} />
    ))}
</Select>`,
            },
            {
                title: '不同尺寸',
                info: '通过 size 来制定不同尺寸的 Select',
                component: (
                    <div className='wdu-row'>
                        <Select placeholder='请选择一项' size='large'>
                            {options.map(({ label, value }) => (
                                <Option
                                    label={label}
                                    value={value}
                                    key={value}
                                />
                            ))}
                        </Select>

                        <Select placeholder='请选择一项' size='normal'>
                            {options.map(({ label, value }) => (
                                <Option
                                    label={label}
                                    value={value}
                                    key={value}
                                />
                            ))}
                        </Select>

                        <Select placeholder='请选择一项' size='small'>
                            {options.map(({ label, value }) => (
                                <Option
                                    label={label}
                                    value={value}
                                    key={value}
                                />
                            ))}
                        </Select>
                    </div>
                ),
                code: `
<Select placeholder='请选择一项' size='large'>
    {options.map(({ label, value }) => (
        <Option
            label={label}
            value={value}
            key={value}
        />
    ))}
</Select>
<Select placeholder='请选择一项' size='normal'>
    {options.map(({ label, value }) => (
        <Option
            label={label}
            value={value}
            key={value}
        />
    ))}
</Select>
<Select placeholder='请选择一项' size='small'>
    {options.map(({ label, value }) => (
        <Option
            label={label}
            value={value}
            key={value}
        />
    ))}
</Select>
`,
            },
            {
                title: '前缀与后缀内容',
                component: [
                    {
                        title: '如果只需要设置标签文字则可以使用 label ，否则可以使用 prepend ，后者会覆盖前者',
                        item: (
                            <Select label='选项' placeholder='请选择一项'>
                                {options.map(({ label, value }) => (
                                    <Option
                                        label={label}
                                        value={value}
                                        key={value}
                                    />
                                ))}
                            </Select>
                        ),
                    },
                    {
                        title: '通过 append 设置后置内容',
                        item: (
                            <Select
                                append={<Button type='important'>搜索</Button>}
                                placeholder='请选择一项'>
                                {options.map(({ label, value }) => (
                                    <Option
                                        label={label}
                                        value={value}
                                        key={value}
                                    />
                                ))}
                            </Select>
                        ),
                    },
                    {
                        title: '前后同时设置内容',
                        item: (
                            <Select
                                prepend={<Button>HTTPS://</Button>}
                                append={<Button type='important'>搜索</Button>}
                                placeholder='请选择一项'>
                                {options.map(({ label, value }) => (
                                    <Option
                                        label={label}
                                        value={value}
                                        key={value}
                                    />
                                ))}
                            </Select>
                        ),
                    },
                ],
                code: `
<Select label='选项' placeholder='请选择一项'>
    {options.map(({ label, value }) => (
        <Option
            label={label}
            value={value}
            key={value}
        />
    ))}
</Select>

<Select
    append={<Button type='important'>搜索</Button>}
    placeholder='请选择一项'>
    {options.map(({ label, value }) => (
        <Option
            label={label}
            value={value}
            key={value}
        />
    ))}
</Select>

<Select
    prepend={<Button>HTTPS://</Button>}
    append={<Button type='important'>搜索</Button>}
    placeholder='请选择一项'>
    {options.map(({ label, value }) => (
        <Option
            label={label}
            value={value}
            key={value}
        />
    ))}
</Select>
`,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
