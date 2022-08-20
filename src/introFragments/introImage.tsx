import { IntroComponent } from "../base/introComponent";
import Image from "../components/Image/Image";

const src = 'https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg';

const link = 'https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/';

export default function () {
    const props = {
        title: 'Image 图片',
        position: 'image',
        components: [
            {
                component: (
                    <Image src={ src } />
                ),
                info: '普通图片'
            },
            {
                component: (
                    <Image src={ src }
                        info="高山野寺" />
                ),
                info: '图片描述信息'
            },
            {
                component: (
                    <Image
                        src={ src }
                        link={ link } />
                ),
                info: '带链接的图片'
            },
        ],
        code: `
        
        `
    };

    return <IntroComponent { ...props } />;
};