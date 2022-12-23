import { IntroComponent } from "../base/components/IntroComponent";
import Image from "../components/Image/Image";

const src = 'https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg';
const link = 'https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/';

export default function () {
    const props = {
        title: 'Image 图片',
        position: 'image',
        components: [
            {
                component: <Image src={ src } lazy />
                ,
                info: '普通图片',
                code: '<Image src={ src } lazy/>'
            },
            {
                component: <Image src={ src } info="高山野寺" lazy />,
                info: '图片描述信息',
                code: '<Image src={ src } info="高山野寺" lazy/>'
            },
            {
                component: <Image src={ src } link={ link } lazy />,
                info: '带链接的图片',
                code: '<Image src={ src } link={ link } lazy/>'
            },
        ]
    };

    return <IntroComponent { ...props } />;
};