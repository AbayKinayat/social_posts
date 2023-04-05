import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Avatar.module.scss';

interface AvatarProps {
  src: string,
  alt: string,
  size?: number,
  className?: string
}

export const Avatar = memo<AvatarProps>(({
  src, alt, size, className,
}) => {
  const style = useMemo(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(classes.Avatar, className)}
    />
  );
});
