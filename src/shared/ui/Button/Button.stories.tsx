import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primery = Template.bind({});
Primery.args = {
  children: "Text"
};
Primery.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINED
} 
Outlined.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINED
} 
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]

