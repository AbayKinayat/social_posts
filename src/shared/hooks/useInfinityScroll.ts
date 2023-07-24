import { MutableRefObject, useEffect } from 'react';

interface UseInfinityScrollProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>,
  wrapperRef: MutableRefObject<HTMLElement>,
}

export const useInfinityScroll = ({
  callback, triggerRef, wrapperRef,
}: UseInfinityScrollProps) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    const options: IntersectionObserverInit = {
      root: wrapperElement,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback?.();
    }, options);

    observer.observe(triggerElement);

    return () => {
      observer.unobserve(triggerElement);
    };
  }, [callback]);
};
