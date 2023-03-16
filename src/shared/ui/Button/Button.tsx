import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme,
  square?: boolean,
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    type = 'button',
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const buttonClasses = classNames(classes.Button, classes[theme], classes[size], className, {
    [classes.square]: square,
  });

  return (
    <button
      type={type}
      className={buttonClasses}
      {...otherProps}
    >
      {children}
    </button>
  );
};
