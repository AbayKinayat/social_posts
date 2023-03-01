import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryC: Story) => (
  <div className={`app ${theme}`} style={{ height: '100vh' }}>
    <div />
    <div style={{ height: '100vh' }}>
      <StoryC />
    </div>
  </div>
);
