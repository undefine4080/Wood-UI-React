import { useEffect, useRef, useState } from 'react';
import './loading.less';
import { propsLoading } from './type';
import { LoadingState } from '@common/types';

function WDLoading(props: propsLoading) {
    const { loading, pendingContent, errorContent } = props;
    const refLoading = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refLoading.current) {
            const parentElement = refLoading.current.parentNode as HTMLElement;
            const P = parentElement.style.position;
            if (!P || P === 'static') {
                parentElement.style.position = 'relative';
            }
        }
    }, []);

    const defaultPendingContent = 'Loading';
    const defaultErrorContent = 'loading failed';
    const showLoadingContent = (loading: LoadingState) => {
        if (loading === LoadingState.PENDING) {
            return pendingContent ? pendingContent : defaultPendingContent;
        } else if (loading === LoadingState.ERROR) {
            return errorContent ? errorContent : defaultErrorContent;
        }
    };

    return (
        <div
            ref={refLoading}
            className='wdu-loading'
            style={{
                display: loading === LoadingState.SUCCESS ? 'none' : 'flex',
            }}>
            <i className='wdu-loading__icon'></i>
            <p className='wdu-loading__text'>{showLoadingContent(loading)}</p>
        </div>
    );
}

export { WDLoading };
