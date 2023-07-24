import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay = 500) {
  const timeoutRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!timeoutRef.current) {
      callback(...args);
      timeoutRef.current = true;

      setTimeout(() => {
        timeoutRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
