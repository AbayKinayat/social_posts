import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme,
  className?: string
}

export const AppLink = memo<AppLinkProps>((props) => {
  const {
    className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, className, classes[theme])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
