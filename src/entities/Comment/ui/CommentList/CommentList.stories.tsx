import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: [
    {
      id: 1,
      text: 'Comment text',
      user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
    },
    {
      id: 2,
      text: 'Comment text',
      user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
    },
    {
      id: 3,
      text: 'Comment text',
      user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
    },
  ],
};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Loading = Template.bind({});
Loading.args = {
  comments: [
    {
      id: 1,
      text: 'Comment text',
      user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
    },
    {
      id: 2,
      text: 'Comment text',
      user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
    },
    {
      id: 3,
      text: 'Comment text',
      user: { id: 1, username: 'abay', avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj' },
    },
  ],
  isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.LIGHT)];
