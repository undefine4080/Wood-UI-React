import React, { ElementRef, useContext, useEffect, useRef, useState } from "react";
import { propsCarousel } from "./type";
import { getNamedChild } from "../../utils";

import './style.less';

const carouselContext = React.createContext<any>( {} );
const Provider = carouselContext.Provider;

function Carousel ( props: propsCarousel ) {
    const { width } = props;

    const carouselItems = getNamedChild( 'CarouselItem', props.children );

    const refCarousel = useRef<any>();

    const [ state, setState ] = useState( {
        current: 1,
        total: carouselItems.length,
        itemWidth: width || 0
    } );

    const setWidthOfItem = () => {
        if ( !refCarousel.current ) return;
        const itemWidth = refCarousel.current.clientWidth;
        setState( state => ( { ...state, itemWidth } ) );
    };

    useEffect( () => {
        setWidthOfItem();
    }, [] );

    // manually switch to the number of page
    const setPage = ( current: number ) => {
        setState( state => ( { ...state, current } ) );
    };

    // manually switch to the next page
    const nextPage = () => {
        if ( state.current === state.total ) return;
        setState( state => ( { ...state, current: state.current + 1 } ) );
    };

    // manually switch to the previous page
    const prevPage = () => {
        if ( state.current === 1 ) return;
        setState( state => ( { ...state, current: state.current - 1 } ) );
    };

    const currentView = {
        transform: `translate(-${ ( state.current - 1 ) * state.itemWidth }px, 0)`
    };

    return (
        <div className="wdu-carousel"
            ref={ refCarousel }
            style={ { width: `${ state.itemWidth }px` } }>
            <div className="wdu-carousel__film"
                style={ currentView }
            >
                <Provider value={ { width: state.itemWidth } }>
                    { carouselItems }
                </Provider>
            </div>

            <div className="wdu-carousel__pagination"
                onClick={ prevPage }></div>

            <div className="wdu-carousel__pagination"
                onClick={ nextPage }></div>

            <div className="wdu-carousel__indicator">
                { carouselItems.map( ( item, index ) => {
                    return (
                        <span
                            key={ index }
                            className="wdu-carousel__indicator-item"
                            onClick={ () => { setPage( index + 1 ); } }></span>
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