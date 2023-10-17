import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const trottleRef = useRef(false);
    const timeoutRef = useRef<any>(null);

    const trottledCallback = useCallback((...args) => {
        if (!trottleRef.current) {
            callback(...args);
            trottleRef.current = true;

            timeoutRef.current = setTimeout(() => {
                trottleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);

    useEffect(() => () => {
        clearTimeout(timeoutRef.current);
    }, []);

    return trottledCallback;
}
