import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string,
  width?: string,
  height?: string,
  border?: string
}

export const Skeleton = memo<SkeletonProps>(({
  className,
  border,
  height,
  width,
}) => {
  const styles: CSSProperties = {
    borderRadius: border,
    height,
    width,
  };

  return (
    <div style={styles} className={classNames(classes.Skeleton, className)} />
  );
});
