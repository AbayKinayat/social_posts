import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string,
  children: ReactNode
}

export const Card = memo<CardProps>(({ className, children, ...otherProps }) => (
  <div className={classNames(className, classes.Card)} {...otherProps}>
    {children}
  </div>
));
