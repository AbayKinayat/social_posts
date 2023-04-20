import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './ComentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: {
    id: 1,
    text: 'Comment text',
    user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
  },
};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.LIGHT)];
