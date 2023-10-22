import { IntroComponent } from './IntroComponent';
import { WDImage } from '../components/Image/Image';

const w =
    'https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg';
const h =
    'https://images.unsplash.com/photo-1692367764006-f940d670a235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2509&q=80';
const link =
    'https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/';

const lazyDemo = (
    <div style={{ flexGrow: 1, height: '200px', overflow: 'auto' }}>
        {new Array(10).fill(w).map((src, index) => (
            <WDImage width={300} height={200} src={src} lazy key={index} />
        ))}
    </div>
);

export default function () {
    const props = {
        title: 'Image 图片',
        position: 'image',
        components: [
            {
                title: '普通图片',
                component: <WDImage src={w} />,
                code: '<Image src={ src }/>',
            },
            {
                title: '启用图片预览',
                info: '通过 preview 属性可以开启图片预览，单击图片将显示一个全屏图片预览弹窗',
                component: (
                    <WDImage
                        src='https://images.unsplash.com/photo-1692367764006-f940d670a235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2509&q=80'
                        preview
                    />
                ),
                code: `
<WDImage
    src='https://images.unsplash.com/photo-1692367764006-f940d670a235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2509&q=80'
    preview
    />`,
            },
            {
                title: '设置图片的宽高',
                info: '通过 width、height 来指定图片的尺寸，这与原生 img 元素一致',
                component: <WDImage src={w} width={200} height={200} />,
                code: '<WDImage src={w} width={200} height={200} />',
            },
            {
                title: '图片懒加载',
                info: '通过 lazy 属性来指定图片是否懒加载，开启后，只有当 WDImage 出现在页面可视范围中才会开始请求图片资源',
                component: lazyDemo,
                code: `
<div style={{ flexGrow: 1, height: '200px', overflow: 'auto' }}>
    {new Array(10).fill(w).map((src) => (
        <WDImage width={300} height={200} src={src} lazy />
    ))}
</div>`,
            },
            {
                title: '给图像添加标题或者链接',
                info: '通过 link 属性可以给图片添加一个超链接，通过 title 属性则可以在图片下方显示自定义标题',
                component: (
                    <WDImage src={w} link={w} title='这是一张演示图片' />
                ),
                code: '<WDImage src={w} lazy />',
            },
        ],
    };

    return <IntroComponent {...props} />;
}
