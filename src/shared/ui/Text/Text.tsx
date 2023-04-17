import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize
  className?: string
}

export const Text = memo<TextProps>(({
  title,
  text,
  theme = TextTheme.PRIMARY,
  size = TextSize.M,
  className,
}) => (
  <div className={
    classNames(
      classes.Text,
      classes[theme],
      classes[size],
      className,
    )
  }
  >
    { title && <p className={classes.title}>{title}</p>}
    { text && <p className={classes.text}>{text}</p>}
  </div>
));
