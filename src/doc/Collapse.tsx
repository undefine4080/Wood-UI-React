import { IntroComponent } from './IntroComponent';
import { Collapse, CollapseItem } from '../components/Collapse/Collapse';

const img1 =
    'https://images.unsplash.com/photo-1697222750299-602d54d004b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80';

const img2 =
    'https://plus.unsplash.com/premium_photo-1695558759261-8801ac5e2b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80';

export default function () {
    const props = {
        title: 'Collapse 抽屉',
        position: 'collapse',
        components: [
            {
                title: '基础用法',
                component: (
                    <Collapse>
                        <CollapseItem title='选项1'>
                            <p style={{ margin: '8px' }}>
                                Ut esse et eiusmod officia ex anim eiusmod
                                Lorem. Cupidatat non sunt velit aute sint minim
                                laboris occaecat commodo. Deserunt velit
                                exercitation sunt id officia.
                            </p>
                        </CollapseItem>

                        <CollapseItem title='选项2'>
                            <p style={{ margin: '8px' }}>
                                Cillum officia sint laboris culpa irure magna
                                sunt id commodo dolore irure. Commodo ea ut
                                exercitation labore. Cupidatat aliquip irure
                                officia reprehenderit proident laborum nostrud
                                commodo sunt irure labore laboris aute amet. Ad
                                commodo dolore sint ea ad aliquip. Dolor aliqua
                                laboris proident anim Lorem voluptate.
                            </p>
                        </CollapseItem>

                        <CollapseItem title='选项3'>
                            <p style={{ margin: '8px' }}>
                                Labore ad excepteur dolore id consequat ex
                                aliqua non amet exercitation ut. Irure
                                consectetur tempor anim ullamco adipisicing
                                laboris ea tempor proident occaecat anim fugiat
                                commodo non. Excepteur anim aliqua ipsum nostrud
                                tempor magna enim Lorem ipsum cillum nulla. Enim
                                laboris qui enim pariatur excepteur ullamco ut
                                anim velit ipsum laboris proident tempor eu.
                            </p>
                        </CollapseItem>
                    </Collapse>
                ),
                code: `
<Collapse>
    <CollapseItem title='选项1'>
        <p style={{ margin: '8px' }}>
            Ut esse et eiusmod officia ex anim eiusmod
            Lorem. Cupidatat non sunt velit aute sint minim
            laboris occaecat commodo. Deserunt velit
            exercitation sunt id officia.
        </p>
    </CollapseItem>
    <CollapseItem title='选项2'>
        <p style={{ margin: '8px' }}>
            Cillum officia sint laboris culpa irure magna
            sunt id commodo dolore irure. Commodo ea ut
            exercitation labore. Cupidatat aliquip irure
            officia reprehenderit proident laborum nostrud
            commodo sunt irure labore laboris aute amet. Ad
            commodo dolore sint ea ad aliquip. Dolor aliqua
            laboris proident anim Lorem voluptate.
        </p>
    </CollapseItem>
    <CollapseItem title='选项3'>
        <p style={{ margin: '8px' }}>
            Labore ad excepteur dolore id consequat ex
            aliqua non amet exercitation ut. Irure
            consectetur tempor anim ullamco adipisicing
            laboris ea tempor proident occaecat anim fugiat
            commodo non. Excepteur anim aliqua ipsum nostrud
            tempor magna enim Lorem ipsum cillum nulla. Enim
            laboris qui enim pariatur excepteur ullamco ut
            anim velit ipsum laboris proident tempor eu.
        </p>
    </CollapseItem>
</Collapse>`,
            },
            {
                title: '自定义标题项以及内容',
                component: (
                    <Collapse>
                        <CollapseItem
                            title={
                                <>
                                    <img src={img1} height={30}></img>
                                    <span>选项1</span>
                                </>
                            }>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                <img src={img1} height={200}></img>
                            </div>
                        </CollapseItem>

                        <CollapseItem
                            title={
                                <>
                                    <img src={img2} height={30}></img>
                                    <span>选项2</span>
                                </>
                            }>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                <img src={img2} height={200}></img>
                            </div>
                        </CollapseItem>
                    </Collapse>
                ),
                info: '通过 title 属性可以自定义 Collapse 的标题，可以是文本、图像、图标等任何内容',
                code: `
<Collapse>
    <CollapseItem
        title={
            <>
                <img src={img1} height={30}></img>
                <span>选项1</span>
            </>
        }>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <img src={img1} height={200}></img>
        </div>
    </CollapseItem>
    <CollapseItem
        title={
            <>
                <img src={img2} height={30}></img>
                <span>选项2</span>
            </>
        }>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <img src={img2} height={200}></img>
        </div>
    </CollapseItem>
</Collapse>`,
            },
            {
                title: '不同尺寸',
                component: (
                    <div>
                        <Collapse size='small'>
                            <CollapseItem title='小尺寸 Collapse'>
                                <p>
                                    Sit incididunt ullamco sunt consequat do. In
                                    ea est duis proident qui. Cupidatat dolore
                                    laboris exercitation magna minim sunt
                                    exercitation reprehenderit Lorem esse mollit
                                    do dolor. Aliqua cupidatat sit dolore
                                    officia commodo ea do eiusmod cillum
                                    incididunt eiusmod sit sint. Magna occaecat
                                    sit ipsum nostrud cupidatat dolor duis
                                    eiusmod dolor ex est veniam velit. Nisi
                                    cupidatat nostrud dolor cupidatat duis.
                                </p>
                            </CollapseItem>
                        </Collapse>

                        <p style={{ height: '20px' }}></p>

                        <Collapse>
                            <CollapseItem title='正常尺寸 Collapse'>
                                <p>
                                    Lorem sunt duis sunt Lorem deserunt sint do
                                    ipsum commodo esse tempor irure. Et minim
                                    occaecat adipisicing enim ea sint sit sint
                                    reprehenderit. Cillum enim labore voluptate
                                    cillum. Reprehenderit in veniam id laborum
                                    aliquip labore ea eiusmod eiusmod elit
                                    occaecat sit cupidatat id. Cillum aliqua
                                    irure esse laboris labore. Dolore labore est
                                    id pariatur laborum. Fugiat labore enim
                                    veniam dolore nulla cupidatat tempor eu
                                    minim elit amet cupidatat anim ex.
                                </p>
                            </CollapseItem>
                        </Collapse>

                        <p style={{ height: '20px' }}></p>

                        <Collapse size='large'>
                            <CollapseItem title='大尺寸 Collapse'>
                                <p>
                                    Qui aliquip commodo ipsum excepteur officia
                                    sit. Ex sunt fugiat non voluptate. Officia
                                    Lorem culpa pariatur esse dolore non elit
                                    dolore deserunt occaecat Lorem.
                                </p>
                            </CollapseItem>
                        </Collapse>
                    </div>
                ),
                code: `
<Collapse size='small'>
    <CollapseItem title='小尺寸 Collapse'>
        <p>
            Sit incididunt ullamco sunt consequat do. In
            ea est duis proident qui. Cupidatat dolore
            laboris exercitation magna minim sunt
            exercitation reprehenderit Lorem esse mollit
            do dolor. Aliqua cupidatat sit dolore
            officia commodo ea do eiusmod cillum
            incididunt eiusmod sit sint. Magna occaecat
            sit ipsum nostrud cupidatat dolor duis
            eiusmod dolor ex est veniam velit. Nisi
            cupidatat nostrud dolor cupidatat duis.
        </p>
    </CollapseItem>
</Collapse>
<p style={{ height: '20px' }}></p>
<Collapse>
    <CollapseItem title='正常尺寸 Collapse'>
        <p>
            Lorem sunt duis sunt Lorem deserunt sint do
            ipsum commodo esse tempor irure. Et minim
            occaecat adipisicing enim ea sint sit sint
            reprehenderit. Cillum enim labore voluptate
            cillum. Reprehenderit in veniam id laborum
            aliquip labore ea eiusmod eiusmod elit
            occaecat sit cupidatat id. Cillum aliqua
            irure esse laboris labore. Dolore labore est
            id pariatur laborum. Fugiat labore enim
            veniam dolore nulla cupidatat tempor eu
            minim elit amet cupidatat anim ex.
        </p>
    </CollapseItem>
</Collapse>
<p style={{ height: '20px' }}></p>
<Collapse size='large'>
    <CollapseItem title='大尺寸 Collapse'>
        <p>
            Qui aliquip commodo ipsum excepteur officia
            sit. Ex sunt fugiat non voluptate. Officia
            Lorem culpa pariatur esse dolore non elit
            dolore deserunt occaecat Lorem.
        </p>
    </CollapseItem>
</Collapse>`,
            },
            {
                title: '指定 Collapse 项目的展开状态',
                info: '在特定情况下，可以通过 expandItems 数组来自定义 CollapseItem 的展开状态，其值为 CollpaseItem 的 index 属性',
                component: (
                    <Collapse expandItems={[1, 2, 3]}>
                        <CollapseItem title='选项1' index={1}>
                            <p>
                                Tempor duis tempor tempor ut amet excepteur quis
                                exercitation. Eiusmod incididunt labore esse
                                cupidatat enim aliqua ullamco. Et eiusmod in
                                commodo dolor commodo proident aliquip eiusmod
                                sunt sunt.
                            </p>
                        </CollapseItem>

                        <CollapseItem title='选项2' index={2}>
                            <p>
                                Esse pariatur exercitation commodo duis qui
                                ullamco. Ex sint occaecat esse pariatur nisi
                                consectetur. Eu aute cillum pariatur occaecat ea
                                Lorem proident elit consequat mollit magna.
                                Proident id fugiat velit incididunt et enim elit
                                tempor eiusmod. Minim officia aliquip dolor aute
                                tempor anim officia consectetur excepteur
                                aliquip ipsum excepteur sint.
                            </p>
                        </CollapseItem>

                        <CollapseItem title='选项3' index={3}>
                            <p>
                                Elit proident officia veniam culpa dolor in
                                laboris reprehenderit fugiat voluptate occaecat
                                irure non cillum. Exercitation reprehenderit ad
                                nostrud ex dolore esse esse aute. Qui laboris
                                officia Lorem deserunt adipisicing amet
                                consequat non excepteur.
                            </p>
                        </CollapseItem>
                    </Collapse>
                ),
                code: `
<Collapse expandItems={[1, 2, 3]}>
    <CollapseItem title='选项1' index={1}>
        <p>
            Tempor duis tempor tempor ut amet excepteur quis
            exercitation. Eiusmod incididunt labore esse
            cupidatat enim aliqua ullamco. Et eiusmod in
            commodo dolor commodo proident aliquip eiusmod
            sunt sunt.
        </p>
    </CollapseItem>
    <CollapseItem title='选项2' index={2}>
        <p>
            Esse pariatur exercitation commodo duis qui
            ullamco. Ex sint occaecat esse pariatur nisi
            consectetur. Eu aute cillum pariatur occaecat ea
            Lorem proident elit consequat mollit magna.
            Proident id fugiat velit incididunt et enim elit
            tempor eiusmod. Minim officia aliquip dolor aute
            tempor anim officia consectetur excepteur
            aliquip ipsum excepteur sint.
        </p>
    </CollapseItem>
    <CollapseItem title='选项3' index={3}>
        <p>
            Elit proident officia veniam culpa dolor in
            laboris reprehenderit fugiat voluptate occaecat
            irure non cillum. Exercitation reprehenderit ad
            nostrud ex dolore esse esse aute. Qui laboris
            officia Lorem deserunt adipisicing amet
            consequat non excepteur.
        </p>
    </CollapseItem>
</Collapse>`,
            },
        ],
        api: [
            {
                title: 'Collapse 属性',
                api: [
                    {
                        attribute: 'expandItems',
                        description: '保存展开的 CollapseItem 的 index',
                        value: '[]',
                    },
                    {
                        attribute: 'size',
                        description: 'Collapse 的尺寸',
                        value: 'small、normal、large',
                        default: 'normal',
                    },
                ],
            },
            {
                title: 'CollapseItem 属性',
                api: [
                    {
                        attribute: 'index',
                        description: 'CollapseItem 的标识，用于控制展开或收缩',
                        value: 'string | number',
                    },
                    {
                        attribute: 'title',
                        description: 'CollapseItem 的标题',
                        value: 'string | number | ReactElement',
                    },
                ],
            },
        ],
    };

    return <IntroComponent {...props} />;
}
