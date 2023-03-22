import {
  type FC, useMemo, useState, useEffect,
} from 'react';
import {
  Theme,
  ThemeContext,
  THEME_CONTEXT_STORAGE_KEY,
} from '../libs/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme
}

// eslint-disable-next-line max-len
const defaultTheme: Theme = localStorage.getItem(THEME_CONTEXT_STORAGE_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme = defaultTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.className = initialTheme;
  }, []);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
