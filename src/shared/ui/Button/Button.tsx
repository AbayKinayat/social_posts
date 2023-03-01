import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme,
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    type = 'button',
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      className={classNames(classes.Button, classes[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
