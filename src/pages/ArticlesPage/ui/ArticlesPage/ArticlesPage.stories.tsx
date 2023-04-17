import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
];
