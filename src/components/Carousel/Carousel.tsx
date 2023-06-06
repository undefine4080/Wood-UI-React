import React, { useContext, useEffect, useRef, useState } from "react";
import { propsCarousel } from "./type";
import { getNamedChild } from "@common/utils";
import { useController, useTimer, useLoopPlay, useSwitchVisible, paginationView } from "./hooks";

import './style.less';
import { useElementDisplay } from "@common/hooks";

const carouselContext = React.createContext<any>( {} );
const Provider = carouselContext.Provider;

function Carousel ( props: propsCarousel ) {
    const { width, interval: rawInterval = 3000,
        autoPlay = true,
        indicatorVisible: visible = 'always',
        showIndex = false } = props;
    const interval = rawInterval < 3000 ? 3000 : rawInterval;

    const carouselItems = getNamedChild( 'CarouselItem', props.children );
    const length = carouselItems.length;

    // the page controller
    const { setPage, nextPage, prevPage,
        current, setCurrent } = useController( length );

    // the timer of autoplay
    const { start, stop } = useTimer( () => {
        setCurrent( current => current + 1 );
    }, interval );

    // set full width of the film to the width of carousel-item, make sure the that only one carousel-item is visible
    const refCarousel = useRef<any>();
    const [ viewWidth, setViewWidth ] = useState( width || 0 );
    const setWidthOfItem = () => {
        if ( !refCarousel.current ) return;
        const itemWidth = refCarousel.current.clientWidth;
        setViewWidth( itemWidth );
    };

    // make loop after switch the end or start of page
    const { items, classList, currentView } = useLoopPlay(
        carouselItems,
        current,
        viewWidth,
        setCurrent );

    // control the visible of indicator
    const switchView = useSwitchVisible( visible, refCarousel );

    // init the carousel core logic
    useEffect( () => {
        setWidthOfItem();
        autoPlay && start();
    }, [] );

    // toggle autoplay if the carousel is out of viewport
    useElementDisplay( refCarousel, start, stop );

    return (
        <div className="wdu-carousel"
            ref={ refCarousel }
            style={ { width: `${ viewWidth }px` } }
            onMouseOver={ stop }
            onMouseLeave={ () => ( autoPlay ? start() : stop() ) }>
            <div className={ classList }
                style={ currentView }
            >
                <Provider value={ { width: viewWidth } }>
                    {
                        items.map( ( item: any, index ) => {
                            return React.cloneElement( item, { key: index } );
                        } )
                    }
                </Provider>
            </div>

            <div className="wdu-carousel__switch"
                onClick={ prevPage }
                style={ switchView }></div>

            <div className="wdu-carousel__switch"
                onClick={ nextPage }
                style={ switchView }></div>

            <div className="wdu-carousel__pagination">
                { carouselItems.map( ( item, index ) => {
                    return (
                        <span
                            key={ index }
                            className={ paginationView( current, index ) }
                            onClick={ () => { setPage( index + 1 ); } }>
                            { showIndex && index + 1 }</span>
                    );
                } ) }
            </div>
        </div>
    );
}

function CarouselItem ( props: any ) {
    const { width } = useContext( carouselContext );

    return (
        <div className="wdu-carousel__item" style={ { width: `${ width }px` } }>{ props.children }</div>
    );
}
CarouselItem.displayName = 'CarouselItem';

export { Carousel, CarouselItem };