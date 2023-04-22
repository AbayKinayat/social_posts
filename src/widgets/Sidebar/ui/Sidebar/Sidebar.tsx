import {
  memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher, LangSwitcher } from 'shared/ui';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo<SidebarProps>(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [test, setTest] = useState(0);
  const sidebarItems = useSelector(getSidebarItems);

  const handleToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const sidebarItemsList = useMemo(() => sidebarItems.map((sidebarItem) => (
    <SidebarItem
      key={sidebarItem.path}
      item={sidebarItem}
      collapsed={collapsed}
    />
  )), [collapsed, sidebarItems]);

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
      <button onClick={() => setTest(test + 1)}>
        Click
      </button>
      <div className={classes.menu}>
        {
          sidebarItemsList
        }
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
});
