interface propsCarousel {
    width?: number;
    height?: number;
    autoPlay?: boolean;
    interval?: number;
    indicatorVisible?: 'hover' | 'never' | 'always';
    children?: any;
    showIndex?: boolean; // show the number of indicator
}

export type { propsCarousel };