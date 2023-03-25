import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args: any) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  loginForm: {
    password: '',
    username: '',
    error: '',
    isLoading: false,
  },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  loginForm: {
    username: '',
    password: '',
    error: 'Error message',
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  loginForm: {
    error: '',
    isLoading: true,
    password: '',
    username: '',
  },
})];
