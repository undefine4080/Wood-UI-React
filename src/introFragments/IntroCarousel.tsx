import { IntroComponent } from "../base/introComponent";
import { Carousel, CarouselItem } from "../components/Carousel/Carousel";

export default function () {
    const props = {
        title: 'Carousel 轮播',
        position: 'carousel',
        components: [
            {
                title: '',
                component: (
                    <Carousel>
                        <CarouselItem>111</CarouselItem>
                        <CarouselItem>222</CarouselItem>
                        <CarouselItem>333</CarouselItem>
                    </Carousel>
                ),
                info: '',
                code: `
                `
            }
        ]
    };

    return <IntroComponent { ...props } />;
};