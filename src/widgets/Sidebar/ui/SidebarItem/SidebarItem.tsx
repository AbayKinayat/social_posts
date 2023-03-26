import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SiderbarItemType } from '../../model/index';
import classes from './SidebarItem.module.scss';

interface SiderbarItemProps {
  item: SiderbarItemType,
  collapsed: boolean
}

export const SidebarItem = memo<SiderbarItemProps>(({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(classes.SidebarItem, { [classes.collapsed]: collapsed })}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.text}>{t(item.text)}</span>
    </AppLink>
  );
});
