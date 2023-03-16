import { useState, type FC } from 'react';
import { RoutePath } from 'shared/config/route';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher, LangSwitcher, AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={
        classNames(
          classes.Sidebar,
          className,
          { [classes.collapsed]: collapsed },
        )
      }
    >

      <div className={classes.menu}>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={classes.menu__item}
        >
          <AboutIcon className={classes.menu__icon} />
          <span className={classes.menu__text}>{ t('about_us') }</span>
        </AppLink>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={classes.menu__item}
        >
          <MainIcon className={classes.menu__icon} />
          <span className={classes.menu__text}>{t('main_page')}</span>

        </AppLink>
      </div>

      <Button
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={handleToggle}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
