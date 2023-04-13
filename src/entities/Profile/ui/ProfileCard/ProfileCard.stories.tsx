import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    age: 22,
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.USD,
    first: 'Abay',
    lastname: 'Kinayat',
    username: 'abay',
  },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Error = Template.bind({});
Error.args = {
  error: 'Some Error',
};
Error.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.LIGHT)];
