import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  title: 'Lorem ipsum title',
  text: 'Lorem impum description Lorem impum description Lorem impum description',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = {
  title: 'Lorem ipsum title',
};
OnlyTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = {
  text: 'Lorem impum description Lorem impum description Lorem impum description',
};
OnlyTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem ipsum title',
  text: 'Lorem impum description Lorem impum description Lorem impum description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Lorem ipsum title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem impum description Lorem impum description Lorem impum description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum title',
  text: 'Lorem impum description Lorem impum description Lorem impum description',
  theme: TextTheme.ERROR,
};
Error.decorators = [ThemeDecorator(Theme.LIGHT)];
