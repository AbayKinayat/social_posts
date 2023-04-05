import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImage from './storybook.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
  src: AvatarImage,
  alt: 'Аватар пользователя',
};
DefaultSize.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Size = Template.bind({});
Size.args = {
  src: AvatarImage,
  alt: 'Аватар',
  size: 200,
};
