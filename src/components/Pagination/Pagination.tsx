import { useEffect, useState } from "react";
import { Select, Option } from "../Select/Select";
import Input from '../Input/Input';
import { Row } from '../Layout/Layout';
import { propsPagination, switchAvailable } from "./type";
import './pagination.less';

const PREFIX = 'wdu-pagination';

function Pagination ( props: propsPagination ) {
    const { size = 20, total = 0, page = 1, maxPageCount = 7,
        onPageChange,
        onSizeChange,
        onPrev, onNext, onJump,
        onSelect } = props;

    const [ selectedPage, setSelectedPage ] = useState( page );
    const [ selectedSize, setSelectedSize ] = useState( size );
    const [ pageCount, setPageCount ] = useState( Math.ceil( total / selectedSize ) );
    const [ pageCountStart, setPageCountStart ] = useState( 1 );

    useEffect( () => {
        const pageCount = Math.ceil( total / selectedSize );
        setPageCount( pageCount );
        setPageCountStart( 1 );
        setSelectedPage( 1 );
    }, [ selectedSize ] );

    // handle the page item button
    const [ pageItems, setPageItems ] = useState<any>();
    useEffect( () => {
        const items = [];
        let pageCountLength;

        if ( pageCount > maxPageCount ) {
            pageCountLength = maxPageCount;
        } else {
            pageCountLength = pageCount;
        }

        let start = pageCountStart;
        for ( let i = 1; i <= pageCountLength; i++ ) {
            const item = (
                <div
                    key={ i }
                    className={ `${ PREFIX }__list-item ${ selectedPage === start ? `${ PREFIX }__list-selected` : '' }` }
                    data-page={ start } >
                    { start }
                </div> );

            items.push( item );
            start++;
        }

        setPageItems( items );
    }, [ selectedPage, selectedSize, pageCount, pageCountStart ] );

    // handle the available of all the buttons
    const [ switchAvailable, setSwitchAvailable ] = useState<switchAvailable>( {
        prev: false,
        next: true,
        prevSpan: false,
        nextSpan: true,
    } );
    useEffect( () => {
        const prev = selectedPage > 1 ? true : false,
            next = selectedPage < pageCount ? true : false,
            prevSpan = pageCountStart - maxPageCount >= 0 || pageCountStart > 1 ? true : false,
            nextSpan = pageCountStart + maxPageCount * 2 <= pageCount || pageCountStart + maxPageCount <= pageCount ? true : false;
        setSwitchAvailable( { prev, next, prevSpan, nextSpan } );
    }, [ selectedPage, pageCountStart ] );

    // execute call while selected page had changed
    useEffect( () => {
        onPageChange && onPageChange( selectedPage );
    }, [ selectedPage ] );

    const selectPage = ( event: any ) => {
        event.stopPropagation();
        const pageNum = parseInt( event.target.dataset.page );
        setSelectedPage( pageNum );
        onSelect && onSelect( pageNum );
    };

    const switchPage = ( event: any, flag: string ) => {
        event.stopPropagation();
        let newCountStart = pageCountStart;

        if ( flag === '-' && switchAvailable.prev ) {
            setSelectedPage( prev => prev - 1 );
            pageCountStart > 1 && ( newCountStart -= 1 );
            onPrev && onPrev();
        } else if ( flag === '+' && switchAvailable.next ) {
            setSelectedPage( prev => prev + 1 );
            if ( selectedPage + 1 > maxPageCount && pageCountStart + maxPageCount <= pageCount ) {
                newCountStart += 1;
            }
            onNext && onNext();
        }
        setPageCountStart( newCountStart );
    };

    const switchPageSpan = ( event: any, flag: string ) => {
        event.stopPropagation();
        const leftCountToMax = pageCount - ( pageCountStart + maxPageCount ) + 1;
        let newCountStart = pageCountStart;
        if ( flag === '-' && switchAvailable.prevSpan ) {
            newCountStart = pageCountStart > maxPageCount ? newCountStart - maxPageCount : 1;
        } else if ( flag === '+' && switchAvailable.nextSpan ) {
            newCountStart = leftCountToMax > maxPageCount ? newCountStart + maxPageCount : newCountStart + leftCountToMax;
        };

        setPageCountStart( newCountStart );
        setSelectedPage( newCountStart );
    };

    const turnPage = ( event: any ) => {
        const value = parseInt( event.target.value );
        if ( value >= 1 && value <= pageCount ) {
            setSelectedPage( value );
            if ( value + maxPageCount < pageCount ) {
                setPageCountStart( value );
            } else {
                setPageCountStart( pageCount - maxPageCount + 1 );
            }
        }
        onJump && onJump( value );
    };

    const handleSizeChange = ( selected: any ) => {
        setSelectedSize( selected.value );
        onSizeChange && onSizeChange( selected.value );
    };

    const disableStyle = `${ PREFIX }__option-disabled`;
    const classMap = {
        prev: `${ PREFIX }__prev ${ switchAvailable.prev ? '' : disableStyle }`,
        next: `${ PREFIX }__next ${ switchAvailable.next ? '' : disableStyle }`,
        prevSpan: `${ PREFIX }__prevSpan ${ switchAvailable.prevSpan ? '' : disableStyle }`,
        nextSpan: `${ PREFIX }__nextSpan ${ switchAvailable.nextSpan ? '' : disableStyle }`,
    };

    return (
        <div className="wdu-pagination">
            <div className={ `${ PREFIX }__total` }>
                共 { total } 条
            </div>

            <div className={ `${ PREFIX }__listContainer` }>
                <div className={ classMap.prevSpan }
                    onClick={ ( event ) => switchPageSpan( event, '-' ) }></div>

                <div className={ classMap.prev }
                    onClick={ ( event ) => switchPage( event, '-' ) }></div>

                <div className={ `${ PREFIX }__list` } onClick={ selectPage }>
                    { pageItems }
                </div>

                <div className={ classMap.next }
                    onClick={ ( event ) => switchPage( event, '+' ) }></div>

                <div className={ classMap.nextSpan }
                    onClick={ ( event ) => switchPageSpan( event, '+' ) }></div>
            </div>

            <div className={ `${ PREFIX }__option` }>
                <Select name={ "pagesize" } value={ size }
                    onChange={ handleSizeChange }>
                    <Option label="20条/页" value={ 20 }></Option>
                    <Option label="50条/页" value={ 50 }></Option>
                    <Option label="100条/页" value={ 100 }></Option>
                    <Option label="200条/页" value={ 200 }></Option>
                </Select>

                <Row align="middle">
                    <Input type={ 'number' } min={ 1 } max={ pageCount } style={ { width: '60px' } } label="跳转到" onBlur={ turnPage } />
                    页
                </Row>
            </div>
        </div>
    );
};

export default Pagination; 