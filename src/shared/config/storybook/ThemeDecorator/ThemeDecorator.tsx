import type { Story as StoryType } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryType) => (

  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`} style={{ height: '100vh' }}>
      <div />
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    </div>
  </ThemeProvider>
);
