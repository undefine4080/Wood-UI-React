import { IntroComponent } from "../base/introComponent";
import { Carousel, CarouselItem } from "../components/Carousel/Carousel";
import Image from "../components/Image/Image";

const imgList = [
  "https://images.unsplash.com/photo-1662638920575-1ce9d88a0607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1660924197770-e5b562a76179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1662574428878-6969eba0b86c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
];

export default function () {
  const props = {
    title: 'Carousel 轮播',
    position: 'carousel',
    components: [
      {
        component: (
          <Carousel>
            <CarouselItem>
              <Image src={ imgList[ 0 ] } />
            </CarouselItem>

            <CarouselItem>
              <Image src={ imgList[ 1 ] } />
            </CarouselItem>

            <CarouselItem>
              <Image src={ imgList[ 2 ] } />
            </CarouselItem>
          </Carousel>
        ),
        info: '默认 autoplay, 切换间隔 3000ms ',
        code: `
<Carousel>
  <CarouselItem>
    <Image src={ imgList[ 0 ] } />
  </CarouselItem>
  <CarouselItem>
    <Image src={ imgList[ 1 ] } />
  </CarouselItem>
  <CarouselItem>
    <Image src={ imgList[ 2 ] } />
  </CarouselItem>
</Carousel>`
      },
    ]
  };

  return <IntroComponent { ...props } />;
};