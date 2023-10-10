import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
    callback?: () => void,
    triggerRef: MutableRefObject<HTMLElement>,
    wrapperRef: MutableRefObject<HTMLElement>

}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
