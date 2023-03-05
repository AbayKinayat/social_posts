import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(classes.Navbar, className)}>
    <div className={classes.links}>
      Text
      <AppLink
        to="/about"
        theme={AppLinkTheme.SECONDARY}
        className={classes.mainLink}
      >
        About
      </AppLink>
      <AppLink
        to="/"
        theme={AppLinkTheme.SECONDARY}
      >
        Main

      </AppLink>
    </div>
  </div>
);
