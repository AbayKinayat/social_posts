import { useContext } from 'react';
import { Theme, ThemeContext, THEME_CONTEXT_STORAGE_KEY } from './ThemeContext';

interface UseThemeResult {
  theme: Theme,
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_CONTEXT_STORAGE_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
