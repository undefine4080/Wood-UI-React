interface propsPagination {
    onPageChange?: ( page: Number ) => void; // 页码改变的回调
    onSizeChange?: ( size: Number ) => void; // 分页大小改变的回调
    onPrev?: () => void; // 点击上一页回调
    onNext?: () => void; // 点击下一页回调
    onJump?: ( num: Number ) => void; // 点击跳转回调
    onSelect?: ( selectPage: Number ) => void; // 点击选择页码回调
    maxPageCount?: number; // 最大页码按钮数
    total?: number; // 总条数
    size?: number; // 分页大小
    page?: number; // 当前页码
}

interface switchAvailable {
    prev?: Boolean,
    next?: Boolean,
    prevSpan?: Boolean,
    nextSpan?: Boolean,
}

export type {
    propsPagination,
    switchAvailable
};