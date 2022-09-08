interface carouselEvents {

}

interface propsCarousel {
    width?: number;
    height?: number | string;
    auto?: boolean;
    orientation?: 'vertical' | 'horizon';
    time?: number;
    indicatorVisible?: boolean;
    outerIndicator?: boolean; // if the indicator is outside the carousel container
    hoverPause?: boolean;
    children?: any;
}

export type { propsCarousel };