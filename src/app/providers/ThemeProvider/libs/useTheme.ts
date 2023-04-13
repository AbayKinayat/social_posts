import { useContext } from 'react';
import { Theme, ThemeContext, THEME_CONTEXT_STORAGE_KEY } from './ThemeContext';

interface UseThemeResult {
  theme: Theme,
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme | undefined;

    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.GREEN;
        break;
      case Theme.GREEN:
        newTheme = Theme.LIGHT;
        break;
      default:
        throw new Error();
    }

    if (setTheme) setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_CONTEXT_STORAGE_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
