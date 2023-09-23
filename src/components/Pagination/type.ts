interface propsPagination {
    onPageChange?: (page: number) => void;
    onLimitChange?: (limit: number) => void;
    onPrev?: (page: number) => void;
    onNext?: (page: number) => void;
    onJump?: (page: number) => void;
    pageButtonCount?: number;
    total?: number;
    limit?: number;
    page?: number;
    limitChange?: boolean;
    jump?: boolean;
    simple?: boolean;
}

interface switchAvailable {
    prev?: boolean;
    next?: boolean;
    prevSpan?: boolean;
    nextSpan?: boolean;
}

export type { propsPagination, switchAvailable };
