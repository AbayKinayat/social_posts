import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/libs/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import classes from './ThemeSwitcher.module.scss';
import { Button } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo<ThemeSwitcherProps>(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(classes.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
      }
    </Button>
  );
});
