import { useEffect, useState } from 'react';
import { Select, Option } from '../Select/Select';
import Input from '../Input/Input';
import { Row } from '../Layout/Layout';
import { propsPagination, switchAvailable } from './type';
import './pagination.less';

const T = 'wdu-pagination';

function Pagination(props: propsPagination) {
    const {
        limit = 20,
        total = 0,
        page = 1,
        pageButtonCount = 5,
        limitChange = false,
        turnPage = false,
        simple = false,
        onPageChange,
        onLimitChange,
        onPrev,
        onNext,
        onJump,
        onSelect,
    } = props;

    const [selectedPage, setSelectedPage] = useState(page);
    const [selectedLimit, setSelectedLimit] = useState(limit);
    const [pageCount, setPageCount] = useState(
        Math.ceil(total / selectedLimit),
    );
    const [pageCountStart, setPageCountStart] = useState(1);

    useEffect(() => {
        const pageCount = Math.ceil(total / selectedLimit);
        setPageCount(pageCount);
        setPageCountStart(1);
        setSelectedPage(1);
    }, [selectedLimit]);

    // handle the pagination button
    const [pageButtons, setPageButtons] = useState<Array<JSX.Element>>();
    useEffect(() => {
        const items = [];
        let pageCountLength;

        if (pageCount > pageButtonCount) {
            pageCountLength = pageButtonCount;
        } else {
            pageCountLength = pageCount;
        }

        let start = pageCountStart;
        for (let i = 1; i <= pageCountLength; i++) {
            const item = (
                <li
                    key={i}
                    className={`${T}__list-item ${
                        selectedPage === start ? `${T}__list-selected` : ''
                    }`}
                    data-page={start}>
                    {start}
                </li>
            );

            items.push(item);
            start++;
        }

        setPageButtons(items);
    }, [selectedPage, selectedLimit, pageCount, pageCountStart]);

    // handle the available of all the buttons
    const [switchAvailable, setSwitchAvailable] = useState<switchAvailable>({
        prev: false,
        next: true,
        prevSpan: false,
        nextSpan: true,
    });
    useEffect(() => {
        const prev = selectedPage > 1;

        const next = selectedPage < pageCount;

        const prevSpan =
            pageCountStart - pageButtonCount >= 0 || pageCountStart > 1;

        const nextSpan =
            pageCountStart + pageButtonCount * 2 <= pageCount ||
            pageCountStart + pageButtonCount <= pageCount;

        setSwitchAvailable({ prev, next, prevSpan, nextSpan });
    }, [selectedPage, pageCountStart]);

    // callback of the page change
    useEffect(() => {
        onPageChange && onPageChange(selectedPage);
    }, [selectedPage]);

    const selectPage = (event: any) => {
        event.stopPropagation();
        const pageNum = parseInt(event.target.dataset.page);
        setSelectedPage(pageNum);
        onSelect && onSelect(pageNum);
    };

    const switchPage = (event: any, flag: string) => {
        event.stopPropagation();
        let newCountStart = pageCountStart;

        if (flag === '-' && switchAvailable.prev) {
            setSelectedPage((prev) => prev - 1);
            pageCountStart > 1 && (newCountStart -= 1);
            onPrev && onPrev();
        } else if (flag === '+' && switchAvailable.next) {
            setSelectedPage((prev) => prev + 1);
            if (
                selectedPage + 1 > pageButtonCount &&
                pageCountStart + pageButtonCount <= pageCount
            ) {
                newCountStart += 1;
            }
            onNext && onNext();
        }
        setPageCountStart(newCountStart);
    };

    const switchPageSpan = (event: any, flag: string) => {
        event.stopPropagation();
        const leftCountToMax =
            pageCount - (pageCountStart + pageButtonCount) + 1;

        let newCountStart = pageCountStart;

        if (flag === '-' && switchAvailable.prevSpan) {
            newCountStart =
                pageCountStart > pageButtonCount
                    ? newCountStart - pageButtonCount
                    : 1;
        } else if (flag === '+' && switchAvailable.nextSpan) {
            newCountStart =
                leftCountToMax > pageButtonCount
                    ? newCountStart + pageButtonCount
                    : newCountStart + leftCountToMax;
        }

        setPageCountStart(newCountStart);
        setSelectedPage(newCountStart);
    };

    const turnToPage = (event: any) => {
        const value = parseInt(event.target.value);
        if (value >= 1 && value <= pageCount) {
            setSelectedPage(value);
            if (value + pageButtonCount < pageCount) {
                setPageCountStart(value);
            } else {
                setPageCountStart(pageCount - pageButtonCount + 1);
            }
        }
        onJump && onJump(value);
    };

    const handleSizeChange = (selected: any) => {
        setSelectedLimit(selected.value);
        onLimitChange && onLimitChange(selected.value);
    };

    const buttonDisable = `${T}__option-disabled`;
    const classMap = {
        prev: `${T}__prev ${switchAvailable.prev ? '' : buttonDisable}`,
        next: `${T}__next ${switchAvailable.next ? '' : buttonDisable}`,
        prevSpan: `${T}__prevSpan ${
            switchAvailable.prevSpan ? '' : buttonDisable
        }`,
        nextSpan: `${T}__nextSpan ${
            switchAvailable.nextSpan ? '' : buttonDisable
        }`,
    };

    return (
        <div className='wdu-pagination'>
            <span className={`${T}__total`}>共 {total} 条</span>

            <div className={`${T}__listContainer`}>
                {!simple && (
                    <div
                        className={classMap.prevSpan}
                        onClick={(event) => switchPageSpan(event, '-')}></div>
                )}

                <div
                    className={classMap.prev}
                    onClick={(event) => switchPage(event, '-')}></div>

                <ul className={`${T}__list`} onClick={selectPage}>
                    {pageButtons}
                </ul>

                <div
                    className={classMap.next}
                    onClick={(event) => switchPage(event, '+')}></div>

                {!simple && (
                    <div
                        className={classMap.nextSpan}
                        onClick={(event) => switchPageSpan(event, '+')}></div>
                )}
            </div>

            <div className={`${T}__option`}>
                {limitChange && (
                    <Select
                        name={'pagesize'}
                        value={limit}
                        size='small'
                        onSelect={handleSizeChange}>
                        <Option label='20条/页' value={20}></Option>
                        <Option label='50条/页' value={50}></Option>
                        <Option label='100条/页' value={100}></Option>
                        <Option label='200条/页' value={200}></Option>
                    </Select>
                )}

                {turnPage && (
                    <Row align='middle'>
                        <Input
                            type={'number'}
                            min={1}
                            max={pageCount}
                            style={{ width: '60px' }}
                            onBlur={turnToPage}
                            size='small'
                        />
                        页
                    </Row>
                )}
            </div>
        </div>
    );
}

export default Pagination;
