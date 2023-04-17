import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: '200px',
  height: '20px',
};
Normal.decorators = [
  ThemeDecorator(Theme.LIGHT),
];

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: '200px',
  height: '20px',
};
Circle.decorators = [
  ThemeDecorator(
    Theme.LIGHT,
  ),
];

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: '200px',
  height: '20px',
};
NormalDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: '200px',
  height: '20px',
};
CircleDark.decorators = [
  ThemeDecorator(
    Theme.DARK,
  ),
];
