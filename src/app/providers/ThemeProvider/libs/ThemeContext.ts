import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  GREEN = 'app_green_theme',
}

interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const THEME_CONTEXT_STORAGE_KEY = 'theme';
