import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo<PageLoaderProps>(({ className }) => (
  <div className={classNames(classes.PageLoader, className)}>
    <Loader />
  </div>
));
