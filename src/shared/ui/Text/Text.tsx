import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
  title,
  text,
  theme = TextTheme.PRIMARY,
}) => (
  <div className={
    classNames(
      classes.Text,
      classes[theme],
    )
  }
  >
    { title && <p className={classes.title}>{title}</p>}
    { text && <p className={classes.text}>{text}</p>}
  </div>
);
