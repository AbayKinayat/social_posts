import { type FC, useMemo, useState } from 'react';
import {
  Theme,
  ThemeContext,
  THEME_CONTEXT_STORAGE_KEY,
} from '../libs/ThemeContext';

// eslint-disable-next-line max-len
const defaultTheme: Theme = localStorage.getItem(THEME_CONTEXT_STORAGE_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
