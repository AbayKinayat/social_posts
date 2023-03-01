import { useState, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher, LangSwitcher } from 'shared/ui';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <button data-testid="sidebar-toggle" onClick={handleToggle}>
        Toggle Hot module
      </button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
