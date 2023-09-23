interface propsPagination {
    onPageChange?: (page: Number) => void;
    onLimitChange?: (size: Number) => void;
    onPrev?: () => void;
    onNext?: () => void;
    onJump?: (num: Number) => void;
    onSelect?: (selectPage: Number) => void;
    pageButtonCount?: number;
    total?: number;
    limit?: number;
    page?: number;
    limitChange?: boolean;
    turnPage?: boolean;
    simple?: boolean;
}

interface switchAvailable {
    prev?: Boolean;
    next?: Boolean;
    prevSpan?: Boolean;
    nextSpan?: Boolean;
}

export type { propsPagination, switchAvailable };
