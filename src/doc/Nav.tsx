import { IntroComponent } from '@doc/IntroComponent';
import { Nav, NavItem, NavMenu } from '@component/Nav/Nav';
import Switch from '@component/Switch/Switch';
import Image from '@component/Image/Image';
import { useState } from 'react';
import { Row } from '@component/Layout/Layout';

const img =
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ff4%2F6c%2F1c%2Ff46c1c4d5dbee45fade6a85de81edba9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666346207&t=8557dd679f965da6b6dcb24b589d8aef';

export default function () {
    const [fixed, setFixed] = useState(false);

    const props = {
        title: 'Nav 导航',
        position: 'nav',
        components: [
            {
                title: '',
                component: (
                    <Nav>
                        <NavMenu title='电商'>
                            <NavItem url='https://www.apple.com' label='苹果' />
                            <NavItem url='https://www.jd.com' label='京东' />
                        </NavMenu>
                        <NavMenu title='图片'>
                            <Image src={img} />
                        </NavMenu>
                        <NavMenu
                            title='微软'
                            url='https://www.microsoft.com'></NavMenu>
                        <NavMenu title='选项四'>
                            <NavItem url={''} label={'项目一'} />
                            <NavItem url={''} label={'项目二'} />
                            <NavItem url={''} label={'项目三'} />
                            <NavItem url={''} label={'项目四'} />
                            <NavItem url={''} label={'项目五'} />
                            <NavItem url={''} label={'项目六'} />
                            <NavItem url={''} label={'项目七'} />
                        </NavMenu>
                        <NavMenu title='选项五'></NavMenu>
                    </Nav>
                ),
                info: '',
                code: `
<Nav>
    <NavMenu title="电商">
        <NavItem url="https://www.apple.com" label="苹果" />
        <NavItem url="https://www.jd.com" label="京东" />
    </NavMenu>

    <NavMenu title="图片">
        <Image src={ img } />
    </NavMenu>

    <NavMenu title="微软" url="https://www.microsoft.com"></NavMenu>

    <NavMenu title="选项四">
        <NavItem url="" label="项目一" />
        <NavItem url="" label="项目二" />
        <NavItem url="" label="项目三" />
        <NavItem url="" label="项目四" />
        <NavItem url="" label="项目五" />
        <NavItem url="" label="项目六" />
        <NavItem url="" label="项目七" />
    </NavMenu>

    <NavMenu title="选项五"></NavMenu>
</Nav>`,
            },
            {
                title: '固定定位的 Nav',
                component: (
                    <>
                        <Nav fixed={fixed}>
                            <NavMenu title='选项一' />
                            <NavMenu title='选项二' />
                            <NavMenu title='选项三' />
                            <NavMenu title='选项四' />
                            <NavMenu title='选项五' />
                        </Nav>

                        <Row justify='end' align='middle'>
                            <span>切换固定定位</span>
                            <Switch
                                onChange={(value: boolean) => setFixed(value)}
                            />
                        </Row>
                    </>
                ),
                code: `
<Nav fixed={ fixed }>
    <NavMenu title="选项一" />
    <NavMenu title="选项二" />
    <NavMenu title="选项三" />
    <NavMenu title="选项四" />
    <NavMenu title="选项五" />
</Nav>`,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
