import { useCssClassManager } from "@base/hooks";
import React, { ReactNode } from "react";
import { useEffect, useState } from "react";

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

function useTimer ( callback: any, interval: number ) {
    const [ pause, setPause ] = useState( false );
    const [ timer, setTimer ] = useState<any>();

    const start = () => {
        const timer = setTimeout( () => {
            console.log( 'run' );
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
    const TRANSITION_TIME = 1000;
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
                clearTimeout( timer );
                timer = setTimeout( () => {
                    addClassName( 'noTransition' );
                    setCurrent( total );
                }, TRANSITION_TIME );
                break;
            case 1:
            case total:
                removeClassName( 'noTransition' );
                break;
            case total + 1:
                clearTimeout( timer );
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

export { useController, useTimer, useLoopPlay };