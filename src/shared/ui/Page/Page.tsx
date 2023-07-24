import {
  FC,
  MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/hooks/useInfinityScroll';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getUiScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/hooks/useThrottle';
import classes from './Page.module.scss';

interface PageProps {
  className?: string,
  children?: ReactNode,
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, location.pathname));

  const scrollHandler = useThrottle((event: UIEvent<HTMLElement>) => {
    dispatch(uiActions.setScroll({
      path: location.pathname,
      position: event.currentTarget.scrollTop,
    }));
  });

  useInfinityScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef,
  });

  useEffect(() => {
    if (wrapperRef.current) wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  return (
    <section ref={wrapperRef} className={classNames(classes.Page, className)} onScroll={scrollHandler}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
