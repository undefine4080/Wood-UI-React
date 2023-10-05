import { IntroComponent } from './IntroComponent';
import {
    Collapse,
    CollapseItem,
    CollapseNav,
} from '../components/Collapse/Collapse';
import { WDImage } from '../components/Image/Image';

const imgSrc =
    'https://images.unsplash.com/photo-1662574428878-6969eba0b86c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80';

export default function () {
    const props = {
        title: 'Collapse 抽屉',
        position: 'collapse',
        components: [
            {
                title: '自由内容项',
                component: (
                    <Collapse>
                        <CollapseItem label='选项1'>
                            <p style={{ margin: '8px' }}>这是一段文字</p>
                        </CollapseItem>

                        <CollapseItem label='选项1'>
                            <WDImage src={imgSrc} />
                        </CollapseItem>
                    </Collapse>
                ),
                info: 'CollapseItem 中可以放入任意内容，作为抽屉的一个子项',
                code: `
】<Collapse >
    <CollapseItem label="选项1" key="1">
        <p style={ { margin: '8px' } }>
            这是一段文字
        </p>
    </CollapseItem>

    <CollapseItem label="选项1" key="1">
        <Image src={ imgSrc } info="这是一张图片" />
    </CollapseItem>
</Collapse >`,
            },
            //             {
            //                 title: '仅作为导航链接',
            //                 component: (
            //                     <Collapse >
            //                         <CollapseNav label="微软"
            //                             url="microsoft.com"
            //                             newTab></CollapseNav>

            //                         <CollapseNav label="苹果"
            //                             url="apple.cn"
            //                             newTab></CollapseNav>

            //                         <CollapseNav label="京东"
            //                             url="jd.com"
            //                             newTab></CollapseNav>
            //                     </Collapse >
            //                 ),
            //                 info: 'CollapseNav 仅用作导航链接按钮',
            //                 code: `
            // <Collapse >
            //     <CollapseNav label="微软"
            //         url="microsoft.com"
            //         newTab></CollapseNav>

            //     <CollapseNav label="苹果"
            //         url="apple.cn"
            //         newTab></CollapseNav>

            //     <CollapseNav label="京东"
            //         url="jd.com"
            //         newTab></CollapseNav>
            // </Collapse >`
            //             }
        ],
    };

    return <IntroComponent {...props} />;
}
