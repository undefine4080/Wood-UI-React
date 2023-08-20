import { IntroComponent } from './IntroComponent';
import Image from '../components/Image/Image';
import h from '@component/Image/h.jpg';
import w from '@component/Image/w.jpg';

const src =
    'https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg';
const link =
    'https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/';

export default function () {
    const props = {
        title: 'Image 图片',
        position: 'image',
        components: [
            {
                component: <Image src={src} lazy/>,
                title: '普通图片',
                code: '<Image src={ src } lazy/>',
            },
            {
                component: <Image src={src} title='高山野寺' />,
                title: '图片描述信息',
                code: '<Image src={ src } title="高山野寺" />',
            },
            {
                component: <Image src={src} link={link} />,
                title: '带链接的图片',
                code: '<Image src={ src } link={ link } />',
            },
            {
                component: (
                    <>
                        <Image title='长图' src={"https://images.unsplash.com/photo-1692367764006-f940d670a235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2509&q=80"} preview />

                        <Image title='宽图' src={src} preview />
                    </>
                ),
                title: '启用全屏图片预览',
                code: '<Image src={ src } link={ link } />',
            },
        ],
    };

    return <IntroComponent {...props} />;
}
