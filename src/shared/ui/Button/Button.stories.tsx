import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
  children: 'Text',
};
Primery.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED,
};
Outlined.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedL = Template.bind({});
OutlinedL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED,
  size: ButtonSize.L,
};

export const OutlinedXL = Template.bind({});
OutlinedXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED,
  size: ButtonSize.XL,
};

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundLight.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
