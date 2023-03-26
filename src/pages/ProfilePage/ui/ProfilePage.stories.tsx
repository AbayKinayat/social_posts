import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country, Currency } from 'shared/const/common';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      first: 'Абай',
      lastname: 'Кинаят',
      age: 22,
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Astana',
      username: 'abay',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
  }),
];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      first: 'Абай',
      lastname: 'Кинаят',
      age: 22,
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Astana',
      username: 'abay',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
  }),
];
