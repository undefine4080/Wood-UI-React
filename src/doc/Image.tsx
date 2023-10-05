import { IntroComponent } from './IntroComponent';
import { WDImage } from '../components/Image/Image';

const w =
    'https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg';
const h =
    'https://images.unsplash.com/photo-1692367764006-f940d670a235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2509&q=80';
const link =
    'https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/';

export default function () {
    const props = {
        title: 'Image 图片',
        position: 'image',
        components: [
            {
                title: '普通图片',
                component: <WDImage src={w} />,
                code: '<Image src={ src } lazy/>',
            },
            {
                title: '启用图片预览',
                component: (
                    <>
                        <WDImage title='长图' src={h} preview />
                        <WDImage title='宽图' src={w} preview lazy />
                        <WDImage title='宽图' src="https://developer.mozilla.org/zh-CN/docs/Web" preview lazy />
                    </>
                ),
                code: '<Image src={ src } link={ link } />',
            },
        ],
    };

    return <IntroComponent {...props} />;
}
