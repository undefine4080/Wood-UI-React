import React, { ReactNode, Ref, useEffect, useState } from "react";
import { useCssClassManager } from "@base/hooks";
import { propsCarousel } from "./type";

function useController ( total: number ) {
    const [ current, setCurrent ] = useState( 1 );

    const setPage = ( current: number ) => {
        setCurrent( current );
    };

    const nextPage = () => {
        if ( current === total + 1 ) {
            setCurrent( 1 );
        } else {
            setCurrent( current => current + 1 );
        }
    };

    const prevPage = () => {
        if ( current === 0 ) {
            setCurrent( total );
        } else {
            setCurrent( current => current - 1 );
        }
    };

    return {
        setPage, nextPage, prevPage, current, setCurrent
    };
}

function useTimer ( callback: () => void, interval: number ) {
    const [ pause, setPause ] = useState( false );
    const [ timer, setTimer ] = useState<any>();

    const start = () => {
        const timer = setTimeout( () => {
            callback();
            start();
        }, interval );

        setTimer( timer );
    };

    useEffect( () => {
        if ( pause ) {
            clearTimeout( timer );
        }
    }, [ pause ] );

    return {
        pause: () => setPause( true ),
        resume: () => {
            setPause( false );
            start();
        },
        start,
    };
}

/**
 * 
 * @param carouselItems real carousel items
 * @param current number of current page 
 * @param viewWidth 
 * @param setCurrent 
 * @returns 
 */
function useLoopPlay (
    carouselItems: Array<ReactNode>,
    current: number,
    viewWidth: number,
    setCurrent: any,
) {
    const TRANSITION_TIME = 800;
    const total = carouselItems.length;

    // copy nodes
    const items = carouselItems.map( item => item );

    // make 1.2.3 to 3.1.2.3.1
    const firstItem = items[ 0 ];
    const lastItem = items[ items.length - 1 ];
    items.unshift( lastItem );
    items.push( firstItem );

    // disable the animation while loop
    const classMap = {
        base: 'wdu-carousel__film',
        noTransition: 'wdu-carousel__film-noTransition',
    };
    const { addClassName, removeClassName, classList } = useCssClassManager( classMap );

    const currentView = {
        transform: `translate(-${ current * viewWidth }px, 0)`
    };

    useEffect( () => {
        let timer: any;

        switch ( current ) {
            case 0:
                timer = setTimeout( () => {
                    addClassName( 'noTransition' );
                    setCurrent( total );
                }, TRANSITION_TIME );
                break;
            case 1:
            case total:
                timer = setTimeout( () => {
                    removeClassName( 'noTransition' );
                }, TRANSITION_TIME );
                break;
            case total + 1:
                timer = setTimeout( () => {
                    addClassName( 'noTransition' );
                    setCurrent( 1 );
                }, TRANSITION_TIME );
        }

        return () => clearTimeout( timer );
    }, [ current ] );

    return {
        items,
        classList, currentView
    };
}

function useSwitchVisible ( switchVisible: propsCarousel[ 'indicatorVisible' ], refCarousel: any ) {
    const [ visible, setVisible ] = useState<'hidden' | 'visible'>( 'hidden' );

    useEffect( () => {
        if ( switchVisible === 'always' ) {
            setVisible( 'visible' );
        } else if ( switchVisible === 'never' ) {
            setVisible( 'hidden' );
        } else if ( switchVisible === 'hover' ) {
            if ( refCarousel.current ) {
                refCarousel.current.addEventListener( 'mouseenter', () => {
                    setVisible( 'visible' );
                } );

                refCarousel.current.addEventListener( 'mouseleave', () => {
                    setVisible( 'hidden' );
                } );
            }
        }
    }, [] );

    return {
        visibility: visible
    };
}

export { useController, useTimer, useLoopPlay, useSwitchVisible };